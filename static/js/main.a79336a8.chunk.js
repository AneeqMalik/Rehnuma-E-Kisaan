(this["webpackJsonpplant-ai"]=this["webpackJsonpplant-ai"]||[]).push([[0],{272:function(e,t,n){},289:function(e,t){},290:function(e,t){},298:function(e,t){},299:function(e,t){},300:function(e,t){},301:function(e,t,n){"use strict";n.r(t);var s=n(40),a=n.n(s),c=n(152),i=n.n(c),o=(n(272),n(6)),r=n(4),l=n.n(r),u=n(11),d=n(5),j=n(10),b=n(14),h=n(15),p=n(204),m=n(20),f=function(e){var t=e.onTryNowClick;return Object(m.jsxs)("div",{className:"navbar",children:[Object(m.jsx)("h3",{className:"logo",style:{fontSize:"30px"},children:"Rehnuma-E-Kisaan"}),Object(m.jsxs)("nav",{children:[Object(m.jsx)(p.Link,{to:"instructions",smooth:!0,duration:500,className:"navbar-link",children:"How it works?"}),Object(m.jsx)(p.Link,{to:"blog",smooth:!0,duration:500,className:"navbar-link",children:"Learn More"}),Object(m.jsx)("button",{href:"#",className:"navbar-link button",onClick:t,children:"Hasil Rehnumai"})]})]})},x=n(56),O=function(e){var t=e.icon,n=e.text,s=e.onClick;return Object(m.jsxs)("div",{className:"cta",onClick:s,children:[Object(m.jsx)(x.a,{icon:"".concat(t)}),Object(m.jsx)("p",{children:n})]})},g=function(e){var t=e.onTryNowClick;return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(f,{onTryNowClick:t}),Object(m.jsxs)("h1",{className:"header-text",children:["Try our AI Powered ",Object(m.jsx)("br",{})," Disease Detection"]}),Object(m.jsx)(O,{icon:"cloud-upload-alt",text:"Try Now",onClick:t})]})},w=function(e){var t=e.stepNum,n=e.icon,s=e.stepTitle,a=e.stepDes;return Object(m.jsxs)("div",{className:"step",children:[Object(m.jsx)(x.a,{icon:"".concat(n),className:"icon"}),Object(m.jsx)("div",{className:"stepnum",children:t}),Object(m.jsx)("h4",{className:"steptitle",children:s}),Object(m.jsx)("p",{className:"stepdes",children:a})]})},y=function(){return Object(m.jsxs)("div",{className:"instructions",children:[Object(m.jsx)("h2",{className:"instruction-heading",children:"How it works?"}),Object(m.jsxs)("div",{className:"step-container",children:[Object(m.jsx)(w,{icon:"mobile-alt",stepNum:"1",stepTitle:"Click a Pic",stepDes:"Take a Picture of your plant leaf"}),Object(m.jsx)(x.a,{icon:"chevron-right",className:"icon arrow-icon"}),Object(m.jsx)(w,{icon:"cloud-upload-alt",stepNum:"2",stepTitle:"Upload on Rehnuma-E-Kisaan",stepDes:"Visit Rehnuma-E-Kisaan on your device and click on Try Now to upload your picture"}),Object(m.jsx)(x.a,{icon:"chevron-right",className:"icon arrow-icon"}),Object(m.jsx)(w,{icon:"list",stepNum:"3",stepTitle:"Get final Report",stepDes:"Rehnuma-E-Kisaan will analyze your plant and will display a detailed report for you"})]})]})},N=function(e){var t=e.imgLink,n=e.blogTitle,s=e.blogBody;return Object(m.jsxs)("div",{className:"blogpost",children:[Object(m.jsx)("div",{className:"blog-img",children:Object(m.jsx)("img",{src:"".concat(t),alt:n})}),Object(m.jsxs)("div",{className:"blog-text",children:[Object(m.jsx)("h3",{className:"blog-title",children:n}),Object(m.jsx)("p",{className:"blog-body",children:s})]})]})},v=function(){return Object(m.jsxs)("div",{className:"blog",alt:"",children:[Object(m.jsx)(N,{imgLink:"https://images.unsplash.com/photo-1521334884684-d80222895322?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",blogTitle:"Your plants need you!",blogBody:"Human society needs to increase food production by an estimated 70% by 2050 to feed an expected population size that is predicted to be over 9 billion people. Currently, infectious diseases reduce the potential yield by an average of 40% with many farmers in the developing world experiencing yield losses as high as 100%!"}),Object(m.jsx)(N,{imgLink:"https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",blogTitle:"Act before it\u2019s too late",blogBody:"The widespread distribution of smartphones among crop growers around the world with an expected 5 billion smartphones by 2020 offers the potential of turning the smartphone into a valuable tool for diverse communities growing food. We allow you to diagnose plant disease with your smartphone."})]})},k=function(){return Object(m.jsx)("div",{className:"footer",children:Object(m.jsx)("p",{className:"copyright",children:"\xa9 2022 Rehnuma-E-Kisaan"})})},C=function(e){var t=e.onClose,n=e.onCapture,s=a.a.createRef(),c=a.a.createRef(),i=function(){var e=navigator.userAgent;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)?"tablet":/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e)?"mobile":"desktop"}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"popup",children:[Object(m.jsx)(x.a,{icon:"images"}),Object(m.jsx)(O,{icon:"folder-open",text:"Browse",onClick:function(){s.current.click()}}),"desktop"!==i?Object(m.jsx)(O,{icon:"camera",text:"Camera",onClick:function(){c.current.click()}}):null,Object(m.jsx)("input",{ref:s,type:"file",style:{display:"none"},accept:"image/*",onChange:function(e){n(e.target.files[0])}}),Object(m.jsx)("input",{ref:c,type:"file",style:{display:"none"},accept:"image/*",capture:"environment",onChange:function(e){n(e.target.files[0])}})]}),Object(m.jsx)(x.a,{className:"close-button",icon:"window-close",onClick:t})]})},T=function(e){var t=e.issueTitle,n=e.issueBody,s=e.cureURL;return Object(m.jsxs)("div",{className:"issue",children:[Object(m.jsxs)("div",{className:"issue-text",children:[Object(m.jsx)("h3",{children:t}),Object(m.jsx)("p",{children:n})]}),Object(m.jsxs)("a",{className:"cure-button",href:s,target:"_blank",rel:"noreferrer",children:[Object(m.jsx)(x.a,{icon:"plus-square",className:"cure-button-icon"}),Object(m.jsxs)("h4",{children:["CURE ",Object(m.jsx)("br",{})," NOW"]})]})]})},H=function(e){var t=e.diseases;return Object(m.jsxs)("div",{className:"issue-container",children:[Object(m.jsxs)("div",{className:"issue-counter",children:[Object(m.jsx)(x.a,{icon:"exclamation-triangle",className:"issue-counter-icon"}),Object(m.jsxs)("h2",{children:[t.length," Issue",t.length>1?"s":""," Found"]})]}),t.map((function(e){return Object(m.jsx)(T,{issueImage:e.image,issueTitle:e.disease,issueBody:e.name,cureURL:e.cureURL})}))]})},R=n.p+"static/media/loader.be2f955b.gif",S=function(e){var t=e.image,n=e.getDiseases,a=e.onTryAnotherClick,c=e.onClose,i=Object(s.useState)([]),r=Object(o.a)(i,2),d=r[0],j=r[1],b=Object(s.useState)(!0),h=Object(o.a)(b,2),p=h[0],f=h[1];return Object(s.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,n();case 3:e.t1=e.sent,(0,e.t0)(e.t1),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"resultpage",children:[Object(m.jsx)("img",{src:t,alt:"Plant",id:"plant-photo"}),p?Object(m.jsx)("img",{src:R,alt:"Loader"}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(H,{diseases:d}),Object(m.jsx)(O,{icon:"cloud-upload-alt",text:"Test Another",onClick:a}),Object(m.jsxs)("a",{href:"https://forms.gle/GN1ZnBWRN3MKuTn87",className:"cta",children:[Object(m.jsx)(x.a,{icon:"comments"}),Object(m.jsx)("p",{children:"Submit Feedback"})]})]})]}),Object(m.jsx)(x.a,{className:"close-button",icon:"window-close",onClick:c})]})},A=n(148),D=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={showTryNow:!1,showPrediction:!1,image:null,tfModel:null,labels:null},e.tryNowClickHandler=function(){e.setState({showTryNow:!0})},e.tryNowCloseHandler=function(){e.setState({showTryNow:!1})},e.resultPageCloseHandler=function(){e.setState({showPrediction:!1,image:null})},e.tryAnotherClickHandler=function(){e.setState({showPrediction:!1,image:null,showTryNow:!0})},e.imageSelectHandler=function(){var t=Object(u.a)(l.a.mark((function t(n){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e,t){var s=new FileReader;s.readAsDataURL(n),s.onload=function(){e(s.result)},s.onerror=function(e){t(e)}}));case 2:s=t.sent,e.setState({showTryNow:!1,showPrediction:!0,image:s});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.predictDisease=Object(u.a)(l.a.mark((function t(){var n,s,a,c,i,r,u,d,j,b,h,p,m,f,x,O;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state.tfModel){t.next=5;break}return t.next=3,new Promise((function(e,t){setTimeout((function(){e(!0)}),500)}));case 3:t.next=0;break;case 5:return n=document.getElementById("plant-photo"),s=A.d(255),a=A.b.fromPixels(n).resizeNearestNeighbor([224,224]).toFloat().expandDims(),c=a.div(s),t.next=11,e.state.tfModel.predict(c).data();case 11:for(i=t.sent,r=A.a(i),u=Array.from(r.dataSync()),d=[],j=0,b=u;j<b.length;j++)h=b[j],p=e.state.labels[h],m=p.split("___"),f=Object(o.a)(m,2),x=f[0],O=f[1],x=x.replaceAll("_"," "),O=O.replaceAll("_"," "),d.push({name:x,disease:O,cureURL:encodeURI("https://www.google.com/search?q=How to cure ".concat(O," in ").concat(x))});return t.abrupt("return",d);case 17:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coverimages.blob.core.windows.net/plantai-tfjs-model/class_indices.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,n=JSON.stringify(n),n=JSON.parse(n),e.next=10,A.c("https://coverimages.blob.core.windows.net/plantai-tfjs-model/model.json");case 10:s=e.sent,this.setState({labels:n,tfModel:s});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.showTryNow?Object(m.jsx)(C,{onClose:this.tryNowCloseHandler,onCapture:this.imageSelectHandler}):this.state.showPrediction?Object(m.jsx)(S,{image:this.state.image,getDiseases:this.predictDisease,onTryAnotherClick:this.tryAnotherClickHandler,onClose:this.resultPageCloseHandler}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{onTryNowClick:this.tryNowClickHandler}),Object(m.jsx)(y,{id:"instructions"}),Object(m.jsx)(v,{id:"blog"}),Object(m.jsx)(k,{})]})}}]),n}(s.Component),M=n(109),B=n(61);M.b.add(B.d,B.k,B.c,B.j,B.h,B.b,B.i,B.n,B.e,B.f,B.a,B.m,B.g,B.l);var P=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(D,{})})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}},[[301,1,2]]]);
//# sourceMappingURL=main.a79336a8.chunk.js.map