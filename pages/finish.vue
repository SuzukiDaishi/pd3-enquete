<template lang="pug">
div
  .container
    section.section
      .box(style="height: 500px")
        h2.title(ref="title")
        div(v-if="isMesageWrited")
          .columns.mt-1.mb-1
              .column.is-one-third
                img.animate__animated.animate__backInLeft(src="/pd3-enquete/dogeza_businessman.png")
              .column.is-one-third
                img.animate__animated.animate__backInDown(src="/pd3-enquete/dogeza_businessman.png")
              .column.is-one-third
                img.animate__animated.animate__backInRight(src="/pd3-enquete/dogeza_businessman.png")
</template>

<script>
import 'animate.css'

export default {
  name: 'finish',
  data() {
    return {
      message: ['あ','り', 'が', 'と', 'う', 'ご', 'ざ', 'い', 'ま', 'す', '！', '<br />以', '上', 'で', 'ア', 'ン', 'ケ', 'ー', 'ト', 'を', '終', '了', 'し', 'ま', 'す', '。'],
      isMesageWrited: false,
    }
  },
  methods: {
    async writeTitle() {
      const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
      for(let t of this.message) {
        this.$refs.title.innerHTML += `<span class="animate__animated animate__backInRight">${t}</span>`
        await sleep(150)
      }
      this.isMesageWrited = true
    }
  },
  mounted() {
    this.writeTitle()
  }
}
</script>