(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{248:function(t,e,n){var content=n(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("47479488",content,!0,{sourceMap:!1})},250:function(t,e,n){"use strict";n(248)},251:function(t,e,n){var r=n(70)(!1);r.push([t.i,"#modal[data-v-08b4185e]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2000;background:rgba(0,0,0,.8)}",""]),t.exports=r},254:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(72),n(53),{name:"Enquete",created:function(){this.$store.state.enquete.questionUser||this.$store.commit("enquete/setQuestionUser")},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://suzukidaishi.github.io/pd3-enquete/out/data.json");case 2:t.data=e.sent,t.current=t.data[t.$store.state.enquete.questionNumber],console.log(t.current);case 5:case"end":return e.stop()}}),e)})))()},methods:{send:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isSending=!0,e.next=3,t.$axios.$get("https://script.google.com/macros/s/AKfycbzO6KY_oDTF4HXfj34TQjm9hpEjHwTsFJbmhfbd9-ni5mSUiTNKUMxO_MinN3wK3WDG/exec?domain=".concat(t.$route.query.domain||"test","&id=").concat(t.$store.state.enquete.questionNumber+1,"&q1=").concat(t.ans1,"&q2=").concat(t.ans2,"&q3=").concat(t.ans3,"&user=").concat(t.$store.state.enquete.questionUser));case 3:e.sent,t.ans1=null,t.ans2=null,t.ans3="",t.$store.commit("enquete/setQuestionNumber",t.$store.state.enquete.questionNumber+1),window.location.reload();case 9:case"end":return e.stop()}}),e)})))()}},data:function(){return{data:[],current:null,ans1:null,ans2:null,ans3:"",isSending:!1}}}),o=(n(250),n(44)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isSending?n("div",{attrs:{id:"modal"}}):t._e(),n("div",{staticClass:"container"},[n("section",{staticClass:"section"},[n("div",{staticClass:"box"},[n("h2",{staticClass:"title"},[t._v("アンケート "+t._s(t.$store.state.enquete.questionNumber+1)+" / "+t._s(t.data.length))]),n("p",{staticClass:"subtitle"},[t._v("本番です。よろしくお願いいたします。")]),t.current?n("div",{staticClass:"field"},[t._m(0),n("vue-plyr",[n("audio",{attrs:{controls:"",crossorigin:"",playsinline:""}},[n("source",{attrs:{src:"https://suzukidaishi.github.io/pd3-enquete/"+t.current.source,type:"audio/wav"}})])])],1):t._e(),t.current?n("div",{staticClass:"field"},[t._m(1),n("vue-plyr",[n("audio",{attrs:{controls:"",crossorigin:"",playsinline:""}},[n("source",{attrs:{src:"https://suzukidaishi.github.io/pd3-enquete/"+t.current.output,type:"audio/wav"}})])])],1):t._e(),n("div",{staticClass:"mt-6"}),n("div",{staticClass:"field"},[t._m(2),n("div",{staticClass:"block"},[n("b-radio",{staticClass:"mr-3",attrs:{name:"q1","native-value":"5"},model:{value:t.ans1,callback:function(e){t.ans1=e},expression:"ans1"}},[t._v("わからない")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q1","native-value":"4"},model:{value:t.ans1,callback:function(e){t.ans1=e},expression:"ans1"}},[t._v("わかるが気にならない")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q1","native-value":"3"},model:{value:t.ans1,callback:function(e){t.ans1=e},expression:"ans1"}},[t._v("やや気になる")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q1","native-value":"2"},model:{value:t.ans1,callback:function(e){t.ans1=e},expression:"ans1"}},[t._v("気になる")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q1","native-value":"1"},model:{value:t.ans1,callback:function(e){t.ans1=e},expression:"ans1"}},[t._v("非常に気になる")])],1)]),n("div",{staticClass:"field"},[t._m(3),n("div",{staticClass:"block"},[n("b-radio",{staticClass:"mr-3",attrs:{name:"q2","native-value":"5"},model:{value:t.ans2,callback:function(e){t.ans2=e},expression:"ans2"}},[t._v("とても似ている")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q2","native-value":"4"},model:{value:t.ans2,callback:function(e){t.ans2=e},expression:"ans2"}},[t._v("似ている")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q2","native-value":"3"},model:{value:t.ans2,callback:function(e){t.ans2=e},expression:"ans2"}},[t._v("どちらとも言えない")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q2","native-value":"2"},model:{value:t.ans2,callback:function(e){t.ans2=e},expression:"ans2"}},[t._v("似ていない")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q2","native-value":"1"},model:{value:t.ans2,callback:function(e){t.ans2=e},expression:"ans2"}},[t._v("とても似ていない")])],1)]),n("div",{staticClass:"field"},[t._m(4),n("b-input",{attrs:{maxlength:"300",type:"textarea"},model:{value:t.ans3,callback:function(e){t.ans3=e},expression:"ans3"}})],1),n("button",{staticClass:"button is-size-5 is-primary mt-3",attrs:{disabled:!t.ans1||!t.ans2},on:{click:t.send}},[t._v("提出")])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"label is-size-5"},[t._v("音声１(目標話者の声)を聞いてください。"),n("br"),t._v("何度聞き直しても大丈夫です。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"label is-size-5"},[t._v("音声２(変換した音声)を聞いてください。"),n("br"),t._v("何度聞き直しても大丈夫です。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"label is-size-5"},[t._v("[質問１] 音声１に比べ、音声２はどの音声が劣化はわかりますか。(必須)"),n("br"),t._v("(似ているかではなく、ノイズの混入度合いの調査)")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"label is-size-5"},[t._v("[質問２] 音声１と音声２はどの程度似ていますか？(必須)"),n("br"),t._v("(声質間の類似度の調査)")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"label is-size-5"},[t._v("[質問３] その他気づいたことや思ったことを教えてください。(任意)"),n("br"),t._v("(今後の開発に役立てます)")])}],!1,null,"08b4185e",null);e.default=component.exports}}]);