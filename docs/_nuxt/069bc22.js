(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{248:function(e,t,n){var content=n(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(71).default)("35b198fb",content,!0,{sourceMap:!1})},250:function(e,t,n){"use strict";n(248)},251:function(e,t,n){var r=n(70)(!1);r.push([e.i,"#modal[data-v-4097a249]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2000;background:rgba(0,0,0,.8)}",""]),e.exports=r},256:function(e,t,n){"use strict";n.r(t);var r=n(8),l=(n(72),n(53),{name:"Enquete",created:function(){this.$store.state.enquete.questionUser||this.$store.commit("enquete/setQuestionUser")},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("https://suzukidaishi.github.io/pd3-enquete/out/data.json");case 2:e.data=t.sent,console.log(e.data.length>=e.$store.state.enquete.questionNumber,e.data.length,e.$store.state.enquete.questionNumber),e.data.length<=e.$store.state.enquete.questionNumber&&e.$router.push("/finish"),e.current=e.data[e.$store.state.enquete.questionNumber],console.log(e.current);case 7:case"end":return t.stop()}}),t)})))()},methods:{send:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isSending=!0,t.next=3,e.$axios.$get("https://script.google.com/macros/s/AKfycbzO6KY_oDTF4HXfj34TQjm9hpEjHwTsFJbmhfbd9-ni5mSUiTNKUMxO_MinN3wK3WDG/exec?domain=".concat(e.$route.query.domain||"test","&id=").concat(e.$store.state.enquete.questionNumber+1,"&q1=").concat(e.ans1,"&q2=").concat(e.ans2,"&q3=").concat(e.ans3,"&user=").concat(e.$store.state.enquete.questionUser));case 3:t.sent,e.ans1=null,e.ans2=null,e.ans3="",e.$store.commit("enquete/setQuestionNumber",e.$store.state.enquete.questionNumber+1),window.location.reload();case 9:case"end":return t.stop()}}),t)})))()}},data:function(){return{data:[],current:null,ans1:null,ans2:null,ans3:"",isSending:!1}}}),o=(n(250),n(44)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isSending?n("div",{attrs:{id:"modal"}}):e._e(),n("div",{staticClass:"container"},[n("section",{staticClass:"section"},[n("div",{staticClass:"box"},[n("h2",{staticClass:"title"},[e._v("アンケート "+e._s(e.$store.state.enquete.questionNumber+1)+" / "+e._s(e.data.length))]),n("p",{staticClass:"subtitle"},[e._v("本番です。よろしくお願いいたします。")]),e.current?n("div",{staticClass:"field"},[e._m(0),n("vue-plyr",[n("audio",{attrs:{controls:"",crossorigin:"",playsinline:""}},[n("source",{attrs:{src:"https://suzukidaishi.github.io/pd3-enquete/"+e.current.source,type:"audio/wav"}})])])],1):e._e(),e.current?n("div",{staticClass:"field"},[e._m(1),n("vue-plyr",[n("audio",{attrs:{controls:"",crossorigin:"",playsinline:""}},[n("source",{attrs:{src:"https://suzukidaishi.github.io/pd3-enquete/"+e.current.output,type:"audio/wav"}})])])],1):e._e(),n("div",{staticClass:"mt-6"}),n("div",{staticClass:"field"},[e._m(2),n("div",{staticClass:"block"},[n("b-radio",{staticClass:"mr-3",attrs:{name:"q1","native-value":"5"},model:{value:e.ans1,callback:function(t){e.ans1=t},expression:"ans1"}},[e._v("わからない")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q1","native-value":"4"},model:{value:e.ans1,callback:function(t){e.ans1=t},expression:"ans1"}},[e._v("わかるが気にならない")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q1","native-value":"3"},model:{value:e.ans1,callback:function(t){e.ans1=t},expression:"ans1"}},[e._v("やや気になる")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q1","native-value":"2"},model:{value:e.ans1,callback:function(t){e.ans1=t},expression:"ans1"}},[e._v("気になる")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q1","native-value":"1"},model:{value:e.ans1,callback:function(t){e.ans1=t},expression:"ans1"}},[e._v("非常に気になる")])],1)]),n("div",{staticClass:"field"},[e._m(3),n("div",{staticClass:"block"},[n("b-radio",{staticClass:"mr-3",attrs:{name:"q2","native-value":"5"},model:{value:e.ans2,callback:function(t){e.ans2=t},expression:"ans2"}},[e._v("とても似ている")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q2","native-value":"4"},model:{value:e.ans2,callback:function(t){e.ans2=t},expression:"ans2"}},[e._v("似ている")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q2","native-value":"3"},model:{value:e.ans2,callback:function(t){e.ans2=t},expression:"ans2"}},[e._v("どちらとも言えない")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q2","native-value":"2"},model:{value:e.ans2,callback:function(t){e.ans2=t},expression:"ans2"}},[e._v("似ていない")]),n("b-radio",{staticClass:"mr-3",attrs:{name:"q2","native-value":"1"},model:{value:e.ans2,callback:function(t){e.ans2=t},expression:"ans2"}},[e._v("とても似ていない")])],1)]),n("div",{staticClass:"field"},[e._m(4),n("b-input",{attrs:{maxlength:"300",type:"textarea"},model:{value:e.ans3,callback:function(t){e.ans3=t},expression:"ans3"}})],1),n("button",{staticClass:"button is-size-5 is-primary mt-3",attrs:{disabled:!e.ans1||!e.ans2},on:{click:e.send}},[e._v("提出")])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"label is-size-5"},[e._v("音声１(目標話者の声)を聞いてください。"),n("br"),e._v("何度聞き直しても大丈夫です。")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"label is-size-5"},[e._v("音声２(変換した音声)を聞いてください。"),n("br"),e._v("何度聞き直しても大丈夫です。")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"label is-size-5"},[e._v("[質問１] 音声１に比べ、音声２はどの音声が劣化はわかりますか。(必須)"),n("br"),e._v("(似ているかではなく、ノイズの混入度合いの調査)")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"label is-size-5"},[e._v("[質問２] 音声１と音声２はどの程度似ていますか？(必須)"),n("br"),e._v("(声質間の類似度の調査)")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"label is-size-5"},[e._v("[質問３] その他気づいたことや思ったことを教えてください。(任意)"),n("br"),e._v("(今後の開発に役立てます)")])}],!1,null,"4097a249",null);t.default=component.exports}}]);