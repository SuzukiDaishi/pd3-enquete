<template lang="pug">
div
  .container
    section.section
      .box
        h2.title アンケートの練習
        p.subtitle まずは一度練習してみましょう
        .field
          label.label.is-size-5 音声１(目標話者の声)を聞いてください。<br />何度聞き直しても大丈夫です。
          vue-plyr
            audio(controls crossorigin playsinline)
              source(src="https://suzukidaishi.github.io/pd3-enquete/demo_sound/demo1.wav" type="audio/wav")
        .field
          label.label.is-size-5 音声２(変換した音声)を聞いてください。<br />何度聞き直しても大丈夫です。
            small(style="font-size:5px") Voiced by <a href="https://CoeFont.CLOUD" target="_blank">https://CoeFont.CLOUD</a>
          vue-plyr
            audio(controls crossorigin playsinline)
              source(src="https://suzukidaishi.github.io/pd3-enquete/demo_sound/demo2.wav" type="audio/wav")
        .mt-6
        .field
          label.label.is-size-5 [質問１] 音声１に比べ、音声２はどの程度劣化していますか？(必須)<br />(似ているかではなく、ノイズの混入度合いの調査)
          .block
            b-radio.mr-3(v-model="ans1" name="q1" native-value="5") 劣化がわからない
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
        nuxt-link.button.is-size-5.is-primary.mt-3(tag="button" :to="`/enquete/?domain=${$route.query.domain || 'test'}&type=${$route.query.type || 'all'}`" :disabled="!ans1 || !ans2") 提出
</template>

<script>
export default {
  name: 'TestEnquete',
  data() {
    return {
      ans1: null,
      ans2: null,
      ans3: '',
    }
  }
}
</script>
