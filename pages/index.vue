<template lang="pug">
div
  .container
    section.section
      .columns.box.mb-6
        .column
          h2.title はじめに
          p.is-size-5 今回のアンケート調査にご協力いただきありがとうございます。<br />
            | 本アンケートは研究で作った<b>ボイスチェンジャーの精度検証</b>のための調査です。<br />
            | 少し長いとは思いますが何卒よろしくお願いいたします。
      .columns.box.mb-6
        .column
          h2.title アンケートのやり方
          p.is-size-5
            | このアンケートでは、<b>変換目標の人の声</b>と<b>別の人の声をその人の声に変換した音声</b>を聞いてもらいます。<br/>
            | その上でいくつかの質問に答えていただきます。<br />
            | これを{{ data.length }}回行っていただきます。(所要時間は{{ Math.floor(data.length * 20 / 60) + ( Math.floor(data.length * 20 / 60 + 1) % 5 ) }}分程度です) <br />
            br 
            | <strong>流れとしては、以下の通りです。</strong>
            ol.pl-5
              li 音声１(変換目標の人の声)を聞いていただきます。何度聞いていただいても構いません。
              li 音声２(別の人の声を音声１の声に変換した音声)を聞いていただきます。何度聞いていただいても構いません。
              li 質問１〜質問３に答えていただきます。質問１,２は必須回答で、質問３は任意回答です。
              li ここまで完了したら<b>提出ボタン</b>を押下して、次のアンケートに進み、改めてこの手順を踏んでください。
      .columns.box.mb-6
        .column
          h2.title 注意事項
          p.is-size-5
            ol.pl-5
              li このアンケートで取集したデータは、本研究及びその発表でのみ使用します。
              li このアンケートで収集する情報は、以下のものです。また、以下に提示した情報以外は一切集めておりません。
              ol.pl-5
                li どこで行ったアンケートか？
                li アンケート回答日時
                li アンケートの結果
              li 原則一つのアンケート回答は一度きりです。
              li 何かありましたら鈴木までお申し付けください。

      label.checkbox.is-size-5(style="user-select:none;")
        input(type="checkbox" v-model="isAgree")
        |  注意事項に同意しますか？
      br
      br
      nuxt-link.button.is-size-5.is-primary(tag="button" :to="`/testEnquete/?domain=${$route.query.domain || 'test'}`" :disabled="!isAgree") アンケートを開始する
</template>

<script>
export default {
  name: 'Home',
  async mounted() {
    this.data = await this.$axios.$get('https://suzukidaishi.github.io/pd3-enquete/out/data.json')
  },
  data() {
    return {
      data: [],
      isAgree: false
    }
  }
}
</script>
