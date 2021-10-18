(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{256:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(53),{name:"Home",mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://suzukidaishi.github.io/pd3-enquete/out/data.json");case 2:t.data=e.sent;case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{data:[],isAgree:!1}}}),c=n(44),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("section",{staticClass:"section"},[t._m(0),n("div",{staticClass:"columns box mb-6"},[n("div",{staticClass:"column"},[n("h2",{staticClass:"title"},[t._v("アンケートのやり方")]),n("p",{staticClass:"is-size-5"},[t._v("このアンケートでは、"),n("b",[t._v("変換目標の人の声")]),t._v("と"),n("b",[t._v("別の人の声をその人の声に変換した音声")]),t._v("を聞いてもらいます。"),n("br"),t._v("\nその上でいくつかの質問に答えていただきます。"),n("br"),t._v("\nこれを"+t._s(t.data.length)+"回行っていただきます。(所要時間は"+t._s(Math.floor(20*t.data.length/60)+Math.floor(20*t.data.length/60)%5)+"分程度です) "),n("br"),n("br"),n("strong",[t._v("流れとしては、以下の通りです。")]),t._m(1)])])]),t._m(2),n("label",{staticClass:"checkbox is-size-5",staticStyle:{"user-select":"none"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isAgree,expression:"isAgree"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAgree)?t._i(t.isAgree,null)>-1:t.isAgree},on:{change:function(e){var n=t.isAgree,r=e.target,l=!!r.checked;if(Array.isArray(n)){var c=t._i(n,null);r.checked?c<0&&(t.isAgree=n.concat([null])):c>-1&&(t.isAgree=n.slice(0,c).concat(n.slice(c+1)))}else t.isAgree=l}}}),t._v(" 注意事項に同意しますか？")]),n("br"),n("br"),n("nuxt-link",{staticClass:"button is-size-5 is-primary",attrs:{tag:"button",to:"/testEnquete/?domain="+(t.$route.query.domain||"test"),disabled:!t.isAgree}},[t._v("アンケートを開始する")])],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns box mb-6"},[n("div",{staticClass:"column"},[n("h2",{staticClass:"title"},[t._v("はじめに")]),n("p",{staticClass:"is-size-5"},[t._v("今回のアンケート調査にご協力いただきありがとうございます。"),n("br"),t._v("本アンケートは研究で作った"),n("b",[t._v("ボイスチェンジャーの精度検証")]),t._v("のための調査です。"),n("br"),t._v("\n少し長いとは思いますが何卒よろしくお願いいたします。")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"pl-5"},[n("li",[t._v("音声１(変換目標の人の声)を聞いていただきます。何度聞いていただいても構いません。")]),n("li",[t._v("音声２(別の人の声を音声１の声に変換した音声)を聞いていただきます。何度聞いていただいても構いません。")]),n("li",[t._v("質問１〜質問３に答えていただきます。質問１,２は必須回答で、質問３は任意回答です。")]),n("li",[t._v("ここまで完了したら"),n("b",[t._v("提出ボタン")]),t._v("を押下して、次のアンケートに進み、改めてこの手順を踏んでください。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns box mb-6"},[n("div",{staticClass:"column"},[n("h2",{staticClass:"title"},[t._v("注意事項")]),n("p",{staticClass:"is-size-5"},[n("ol",{staticClass:"pl-5"},[n("li",[t._v("このアンケートで取集したデータは、本研究及びその発表でのみ使用します。")]),n("li",[t._v("このアンケートで収集する情報は、以下のものです。また、以下に提示した情報以外は一切集めておりません。")]),n("ol",{staticClass:"pl-5"},[n("li",[t._v("どこで行ったアンケートか？")]),n("li",[t._v("アンケート回答日時")]),n("li",[t._v("アンケートの結果")])]),n("li",[t._v("原則一つのアンケート回答は一度きりです。")]),n("li",[t._v("何かありましたら鈴木までお申し付けください。")])])])])])}],!1,null,null,null);e.default=component.exports}}]);