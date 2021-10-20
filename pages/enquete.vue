<template lang="pug">
div
  #modal(v-if="isSending")
  .container
    section.section
      .box
        h2.title アンケート {{ $store.state.enquete.questionNumber + 1 }} / {{ data.length }}
        p.subtitle 本番です。よろしくお願いいたします。
        .field(v-if="!!current")
          label.label.is-size-5 音声１(目標話者の声)を聞いてください。<br />何度聞き直しても大丈夫です。
          vue-plyr
            audio(controls crossorigin playsinline)
              source(:src="`https://suzukidaishi.github.io/pd3-enquete/${current['source']}`" type="audio/wav")
        .field(v-if="!!current")
          label.label.is-size-5 音声２(変換した音声)を聞いてください。<br />何度聞き直しても大丈夫です。
          vue-plyr
            audio(controls crossorigin playsinline)
              source(:src="`https://suzukidaishi.github.io/pd3-enquete/${current['output']}`" type="audio/wav")
        .mt-6
        .field
          label.label.is-size-5 [質問１] 音声１に比べ、音声２はどの音声が劣化はわかりますか。(必須)<br />(似ているかではなく、ノイズの混入度合いの調査)
          .block
            b-radio.mr-3(v-model="ans1" name="q1" native-value="5") わからない
            b-radio.mr-3(v-model="ans1" name="q1" native-value="4") わかるが気にならない
            b-radio.mr-3(v-model="ans1" name="q1" native-value="3") やや気になる
            b-radio.mr-3(v-model="ans1" name="q1" native-value="2") 気になる
            b-radio.mr-3(v-model="ans1" name="q1" native-value="1") 非常に気になる
        .field
          label.label.is-size-5 [質問２] 音声１と音声２はどの程度似ていますか？(必須)<br />(声質間の類似度の調査)
          .block
            b-radio.mr-3(v-model="ans2" name="q2" native-value="5") とても似ている
            b-radio.mr-3(v-model="ans2" name="q2" native-value="4") 似ている
            b-radio.mr-3(v-model="ans2" name="q2" native-value="3") どちらとも言えない
            b-radio.mr-3(v-model="ans2" name="q2" native-value="2") 似ていない
            b-radio.mr-3(v-model="ans2" name="q2" native-value="1") とても似ていない
        .field
          label.label.is-size-5 [質問３] その他気づいたことや思ったことを教えてください。(任意)<br />(今後の開発に役立てます)
          b-input(maxlength="300" type="textarea" v-model="ans3")
        button.button.is-size-5.is-primary.mt-3(:disabled="!ans1 || !ans2" @click="send") 提出
</template>

<style scoped>
#modal {
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.8);
}
</style>

<script>
export default {
  name: 'Enquete',
  created() {
    if (!this.$store.state.enquete.questionUser) {
      this.$store.commit('enquete/setQuestionUser')
    }
  },
  async mounted() {
    this.data = await this.$axios.$get('https://suzukidaishi.github.io/pd3-enquete/out/data.json')
    console.log(this.data.length >= this.$store.state.enquete.questionNumber, this.data.length, this.$store.state.enquete.questionNumber);
    if (this.data.length <= this.$store.state.enquete.questionNumber) {
      this.$router.push('/finish')
    }
    this.current = this.data[this.$store.state.enquete.questionNumber]
    console.log(this.current);
  },
  methods: {
    async send() {
      this.isSending = true
      const res = await this.$axios.$get(`https://script.google.com/macros/s/AKfycbzO6KY_oDTF4HXfj34TQjm9hpEjHwTsFJbmhfbd9-ni5mSUiTNKUMxO_MinN3wK3WDG/exec?domain=${ this.$route.query.domain || 'test' }&id=${ this.$store.state.enquete.questionNumber + 1 }&q1=${ this.ans1 }&q2=${ this.ans2 }&q3=${ this.ans3 }&user=${ this.$store.state.enquete.questionUser }`)
      this.ans1 = null
      this.ans2 = null
      this.ans3 = ''
      this.$store.commit('enquete/setQuestionNumber', this.$store.state.enquete.questionNumber + 1)
      window.location.reload()
    },
  },
  data() {
    return {
      data: [],
      current: null,
      ans1: null,
      ans2: null,
      ans3: '',
      isSending: false,
    }
  }
}
</script>
