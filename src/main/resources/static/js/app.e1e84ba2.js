(function(e){function t(t){for(var n,o,l=t[0],i=t[1],c=t[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r={app:0},s=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b2738be9","chunk-26bdb738":"cedb35b7"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-26bdb738":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-26bdb738":"1dcf3f50"}[e]+".css",r=i.p+n,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var c=s[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===n||u===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],m.parentNode.removeChild(m),a(s)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}r[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"20c0":function(e,t,a){},"2e24":function(e,t,a){"use strict";var n=a("20c0"),o=a.n(n);o.a},"42d3":function(e,t,a){},5282:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-aside",{staticStyle:{"min-height":"100%"},attrs:{width:"200px"}},[a("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{"min-height":"100%",overflow:"visible"},attrs:{router:"","default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[a("el-menu-item",{attrs:{index:"/home/management/case"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("案例管理")])]),a("el-menu-item",{attrs:{index:"/home/management/user"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("人员管理")])])],1)],1)},o=[]},"56d7":function(e,t,a){"use strict";a.r(t);a("b0c0"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=(a("d3b7"),a("8c4f")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"#home"},[a("el-container",[a("el-header",{staticClass:"no-padding"},[a("app-nav",{attrs:{user:e.user}})],1),a("router-view")],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal",router:""}},[a("el-menu-item",[e._v("大学疾病直报系统后台")]),a("el-menu-item",{attrs:{index:"/home/management"}},[e._v("部门管理")]),a("el-menu-item",{attrs:{index:"/home/analyse"}},[e._v("数据统计")]),a("el-menu-item",{staticClass:"rightmost",on:{click:e.logout}},[e._v("退出登录")]),a("el-menu-item",{staticClass:"rightmost",attrs:{index:"/home/user"}},[e._v(e._s(e.user.name))])],1)],1)},i=[],c={name:"AppNav",props:{user:Object,default:function(){return{name:"未登录"}}},data:function(){return{activeIndex:"dashboard"}},methods:{logout:function(){var e=this;this.$ajax({url:"/logout",method:"post"}).then((function(){e.$router.push("/")}))}}},u=c,d=(a("bc84"),a("2877")),m=Object(d["a"])(u,l,i,!1,null,null,null),p=m.exports,f={data:function(){return{user:{}}},name:"Home",components:{AppNav:p},mounted:function(){var e=this;this.checkLogin((function(t){e.user=t}))}},h=f,g=(a("cccb"),Object(d["a"])(h,r,s,!1,null,null,null)),b=g.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"60px"}},[a("schart",{attrs:{canvasId:e.canvasId,type:e.type,width:e.width,height:e.height,data:e.data,options:e.options}})],1)},y=[],w=a("f5ac"),D={name:"Analyse",data:function(){return{canvasId:"myChart",type:"pie",width:600,height:500,data:[{name:"新冠",value:1234},{name:"肺结核",value:2345},{name:"非典",value:2456},{name:"鼠疫",value:333}],options:{title:"病人数量占比仪表盘",bgColor:"#829dca",titleColor:"#ffffff",legendColor:"#ffffff"}}},components:{Schart:w["a"]}},x=D,_=Object(d["a"])(x,v,y,!1,null,null,null),I=_.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-main",[a("div",{staticClass:"chart",style:{width:"100%",height:"500px"},attrs:{id:"myChart"}})])],1)},k=[],j=(a("99af"),a("b85c")),C=a("313e"),O=a.n(C),S={name:"xwPassengerFlow",data:function(){return{selected:[],records:[],documents:[],legend:[],xAxis:[]}},mounted:function(){this.initDate(),this.loadLine(this.$root.$data.diseases,"diseaseName")},methods:{formatTime:function(e){var t=e.getYear(),a=e.getMonth(),n=e.getDay();return"".concat(t,"/").concat(a,"/").concat(n)},initDate:function(){var e=new Date;this.xAxis=[];for(var t=7;t>=1;--t)this.xAxis.push(new Date(e-24*t*60*60*1e3).toLocaleDateString())},zeros:function(e){for(var t=[],a=0;a<e;++a)t.push(0);return t},getChartData:function(e,t,a){console.log(e);var n,o=[],r={},s={},l=0,i=Object(j["a"])(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;r[c]=l++,o.push({name:c,type:"line",stack:"总量",data:this.zeros(this.xAxis.length)})}}catch(v){i.e(v)}finally{i.f()}console.log(o),console.log(r),console.log(s),l=0;var u,d=Object(j["a"])(this.xAxis);try{for(d.s();!(u=d.n()).done;){var m=u.value;s[m]=l++}}catch(v){d.e(v)}finally{d.f()}var p,f=Object(j["a"])(e);try{for(f.s();!(p=f.n()).done;){var h=p.value;console.log(h);var g=r[h[a]],b=s[new Date(h.modifyTime).toLocaleDateString()];console.log("id: ".concat(g," dPos: ").concat(b)),o[g].data[b]+=1}}catch(v){f.e(v)}finally{f.f()}return console.log(o),o},loadLine:function(e,t){var a=this;this.legend=this.$root.$data.diseases,this.$ajax({url:"/record",method:"get",params:{days:"7"}}).then((function(e){e.data.success&&(a.records=e.data.records,console.log(a.records))})),this.$ajax({url:"/document",method:"get",params:{days:"7"}}).then((function(n){if(n.data.success){a.documents=n.data.documents;var o=a.getChartData(a.documents,e,t),r={title:{text:"最近7天各类病人数量折线变化图"},tooltip:{trigger:"axis"},legend:{data:a.$root.$data.diseases},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:a.xAxis},yAxis:{type:"value"},series:o};a.myChartOne=O.a.init(document.getElementById("myChart")),a.myChartOne.setOption(r)}}))}},watch:{}},N=S,L=Object(d["a"])(N,$,k,!1,null,null,null),T=L.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticStyle:{"min-height":"100%"}},[a("sidebar"),a("el-main",[a("router-view")],1)],1)},A=[],E=a("6d80"),P={components:{Sidebar:E["default"]}},G=P,W=Object(d["a"])(G,R,A,!1,null,null,null),z=W.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{staticStyle:{float:"left","margin-left":"1rem"},attrs:{type:"primary",size:"mini"},on:{click:e.openDocumentDialog}},[e._v(" 创建案例 ")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.documents,stripe:""}},[a("el-table-column",{attrs:{prop:"documentId",label:"档案编号",sortable:""}}),a("el-table-column",{attrs:{prop:"deptId",label:"部门编号",sortable:""}}),a("el-table-column",{attrs:{prop:"userId",label:"登记者",sortable:""}}),a("el-table-column",{attrs:{prop:"patientId",label:"患者",sortable:""}}),a("el-table-column",{attrs:{prop:"diseaseName",label:"流行病",sortable:""}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",sortable:""}}),a("el-table-column",{attrs:{prop:"modifyTime",label:"最后修改时间",sortable:""}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){return e.getDocument(t.$index)}}},[e._v(" 查看 ")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.delDocument(t.$index)}}},[e._v(" 删除 ")])]}}])})],1),a("el-dialog",{attrs:{title:"新建案例",visible:e.documentDialog},on:{"update:visible":function(t){e.documentDialog=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"患者","label-width":"formLabelWidth"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.newDocument.patientId,callback:function(t){e.$set(e.newDocument,"patientId",t)},expression:"newDocument.patientId"}})],1),a("el-form-item",{attrs:{label:"疾病","label-width":"formLabelWidth"}},[a("el-select",{attrs:{placeholder:"请选择疾病"},model:{value:e.newDocument.diseaseName,callback:function(t){e.$set(e.newDocument,"diseaseName",t)},expression:"newDocument.diseaseName"}},e._l(e.$root.$data.diseases,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"部门","label-width":"formLabelWidth"}},[a("el-cascader",{attrs:{placeholder:"输入搜索内容",options:this.$root.$data.departmentOptions,props:{checkStrictly:!0},clearable:"",filterable:""},model:{value:e.newDocument.deptId,callback:function(t){e.$set(e.newDocument,"deptId",t)},expression:"newDocument.deptId"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.documentDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addDocument()}}},[e._v("确 定")])],1)],1)],1)},J=[],M={data:function(){return{documents:[],user:{},documentDialog:!1,newDocument:{patientId:"",disease:"",deptId:"",userId:""}}},methods:{openDocumentDialog:function(){this.documentDialog=!0,this.newDocument={patientId:"",disease:"",deptId:"",userId:""}},addDocument:function(){var e=this;this.newDocument.userId=this.user.userId,this.newDocument.deptId instanceof Array&&(this.newDocument.deptId=this.newDocument.deptId[this.newDocument.deptId.length-1]),console.log(this.newDocument),this.$ajax({url:"/document",method:"post",params:this.newDocument}).then((function(t){console.log(t),t.data.success?(e.documentDialog=!1,e.$message({message:"添加成功",type:"success"}),location.reload()):e.$message.error("添加失败，请检查输入信息")}))},getDocument:function(e){var t=this.documents[e].documentId;console.log("/document/"+t+"/record"),this.$router.push({path:"/home/management/document/".concat(t)})},delDocument:function(e){var t=this;this.$confirm("您确定要删除该档案吗？").then((function(){t.$ajax({url:"/document/"+t.documents[e].documentId,method:"delete"}).then((function(e){e.data.success?(t.$message({message:"删除成功",type:"success"}),location.reload()):t.$message.error("删除失败")}))}))}},mounted:function(){var e=this;this.checkLogin((function(t){e.user=t,console.log("/department/"+t.deptId+"/document"),e.$ajax({url:"/department/"+t.deptId+"/document",method:"get"}).then((function(t){e.documents=t.data.documents;for(var a=0;a<e.documents.length;++a)e.documents[a].createTime=new Date(e.documents[a].createTime).toLocaleDateString(),e.documents[a].modifyTime=new Date(e.documents[a].modifyTime).toLocaleDateString()}))}))}},B=M,q=Object(d["a"])(B,U,J,!1,null,null,null),F=q.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users,stripe:""}},[a("el-table-column",{attrs:{prop:"userId",label:"用户编号",sortable:""}}),a("el-table-column",{attrs:{prop:"deptId",label:"部门",sortable:""}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",sortable:""}}),a("el-table-column",{attrs:{prop:"gender",label:"性别",sortable:""}}),a("el-table-column",{attrs:{prop:"originName",label:"地区名",sortable:""}}),a("el-table-column",{attrs:{prop:"group",label:"权限",sortable:""}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.openGroupDialog(t.$index)}}},[e._v("权限管理")])]}}])})],1),a("el-dialog",{attrs:{title:"修改用户资料",visible:e.groupDialog},on:{"update:visible":function(t){e.groupDialog=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"权限等级","label-width":"formLabelWidth"}},[a("el-select",{model:{value:e.newGroup,callback:function(t){e.newGroup=t},expression:"newGroup"}},e._l(e.$root.$data.groups,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.groupDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.changeGroup()}}},[e._v("确 定")])],1)],1)],1)},K=[],Y={data:function(){return{user:{},users:[],newGroup:"user",groupDialog:!1,groupDialogUser:{}}},methods:{openGroupDialog:function(e){this.groupDialog=!0,this.groupDialogUser=this.users[e]},changeGroup:function(){var e=this;console.log(this.groupDialogUser),this.$ajax({url:"/user/".concat(this.groupDialogUser.userId),method:"put",params:{group:this.newGroup}}).then((function(t){t.data.success?(e.groupDialog=!1,e.newGroup="user",location.reload()):e.$message.error("修改权限失败，请检查您的权限等级是否足够")}))}},created:function(){var e=this;this.checkLogin((function(t){e.user=t,console.log(e.user),e.$ajax({url:"/user",method:"get",params:{deptId:e.user.deptId}}).then((function(t){console.log(t),t.data.success&&(e.users=t.data.users)}))}))}},Q=Y,V=Object(d["a"])(Q,H,K,!1,null,null,null),X=V.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"login-form"}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content"})])],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:24}},[a("el-card",{attrs:{shadow:"always"}},[a("h1",{staticStyle:{"text-align":"center"}},[e._v("欢迎登陆")]),a("el-divider"),e.isReg?a("el-form",[a("el-form-item",{attrs:{label:"用户名",prop:"userId"}},[a("el-input",{attrs:{placeholder:"请输入用户名",type:"text"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{placeholder:"请输入密码",type:"password","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{placeholder:"请再次输入密码",type:"repeat","show-password":""},model:{value:e.repeat,callback:function(t){e.repeat=t},expression:"repeat"}})],1),a("el-form-item",{attrs:{label:"部门","label-width":"formLabelWidth"}},[a("el-select",{attrs:{placeholder:"请选择部门"},model:{value:e.deptId,callback:function(t){e.deptId=t},expression:"deptId"}},e._l(e.$root.$data.departments,(function(e){return a("el-option",{key:e.deptId,attrs:{label:e.deptId,value:e.deptId}})})),1)],1),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名",type:"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("el-form-item",{attrs:{label:"性别",prop:"gender"}},[a("el-input",{attrs:{placeholder:"m(male) or f(female)",type:"gender"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}})],1),a("el-form-item",{attrs:{label:"地区","label-width":"formLabelWidth",prop:"originName"}},[a("el-select",{attrs:{placeholder:"请选择地区"},model:{value:e.originName,callback:function(t){e.originName=t},expression:"originName"}},e._l(e.$root.$data.origins,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addUser()}}},[e._v(" 确定 ")]),a("el-button",{attrs:{type:"button"},on:{click:function(t){return e.cancel()}}},[e._v(" 取消 ")])],1)],1):a("el-form",[a("el-form-item",{attrs:{label:"用户名",prop:"userId"}},[a("el-input",{attrs:{placeholder:"请输入用户名",type:"text"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{placeholder:"请输入密码",type:"password","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v(" 登录 ")]),a("el-button",{attrs:{type:"button"},on:{click:function(t){return e.reg()}}},[e._v(" 注册 ")])],1)],1)],1)],1)],1),a("div",{attrs:{id:"hint"}},[e._v(" "+e._s(e.hint)+" ")])],1)},ee=[],te=(a("38cf"),{name:"login",data:function(){return{isReg:!1,userId:"",password:"",repeat:"",deptId:"",name:"",gender:"",originName:"",group:"user",hint:""}},methods:{login:function(){var e=this;this.$ajax({url:"/login",method:"post",params:{userId:this.userId,password:this.password}}).then((function(t){console.log(t);var a=t.data;a.success?e.$router.push("/home"):e.hint="登录失败，请检测用户名和密码是否正确"}))},reg:function(){this.isReg=!0},cancel:function(){this.isReg=!1},addUser:function(){var e=this;this.password===this.repeat?(this.$ajax({url:"/user",method:"post",params:{userId:this.userId,password:this.password,deptId:this.deptId,name:this.name,gender:this.gender,originName:this.originName,group:this.group}}).then((function(t){t.data.success?e.$message({message:"注册成功",type:"success"}):e.$message.error("注册失败，请检查用户名是否被占用")})),this.name="",this.password="",this.repeat="",this.deptId="",this.name="",this.gender="",this.originName="",this.isReg=!1,this.$router.push("/login")):this.$message.warning("两次密码输入不一致")}}}),ae=te,ne=(a("d6db"),Object(d["a"])(ae,Z,ee,!1,null,null,null)),oe=ne.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("el-row",{staticClass:"text-left",staticStyle:{"margin-top":"1rem","margin-bottom":"1rem"}},[a("el-col",{staticClass:"color-info",attrs:{span:2}},[e._v("档案编号")]),a("el-col",{attrs:{span:4}},[e._v(" "+e._s(e.document.documentId))]),a("el-col",{staticClass:"color-info",attrs:{span:2}},[e._v("记录者")]),a("el-col",{attrs:{span:4}},[e._v(" "+e._s(e.document.userId))]),a("el-col",{staticClass:"color-info",attrs:{span:2}},[e._v("患者")]),a("el-col",{attrs:{span:4}},[e._v(" "+e._s(e.document.patientId))]),a("el-col",{staticClass:"color-info",attrs:{span:2}},[e._v("疾病")]),a("el-col",{attrs:{span:4}},[e._v(" "+e._s(e.document.diseaseName))])],1),a("el-row",{staticClass:"text-left",staticStyle:{"margin-top":"1rem","margin-bottom":"1rem"}},[a("el-col",{staticClass:"color-info",attrs:{span:2}},[e._v("部门")]),a("el-col",{attrs:{span:4}},[e._v(" "+e._s(this.$root.$data.departments[e.document.deptId].showName))]),a("el-col",{staticClass:"color-info",attrs:{span:2}},[e._v("创建时间")]),a("el-col",{attrs:{span:4}},[e._v(" "+e._s(this.utils.formatTimestamp(e.document.createTime)))]),a("el-col",{staticClass:"color-info",attrs:{span:2}},[e._v("最后修改")]),a("el-col",{attrs:{span:4}},[e._v(" "+e._s(this.utils.formatTimestamp(e.document.modifyTime)))]),a("el-col",{attrs:{span:3}},[a("el-button",{staticClass:"text-left",staticStyle:{padding:"0"},attrs:{type:"text"},on:{click:e.openDocumentDialog}},[e._v(" 修改档案信息 ")])],1)],1)],1),a("el-button",{staticStyle:{float:"right","margin-right":"2rem"},attrs:{type:"primary",size:"mini"},on:{click:e.openRecordDialog}},[e._v(" 新增记录 ")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.records,stripe:""}},[a("el-table-column",{attrs:{prop:"recordId",label:"记录编号"}}),a("el-table-column",{attrs:{prop:"createTime",label:"时间"}}),a("el-table-column",{attrs:{prop:"status",label:"状态"}}),a("el-table-column",{attrs:{prop:"desc",label:"描述"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.getDocument(t.$index)}}},[e._v(" 修改 ")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.delRecord(t.$index)}}},[e._v(" 删除 ")])]}}])})],1),a("el-dialog",{attrs:{title:"修改档案信息",visible:e.documentDialog},on:{"update:visible":function(t){e.documentDialog=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"患者","label-width":"formLabelWidth"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.tempDocument.patientId,callback:function(t){e.$set(e.tempDocument,"patientId",t)},expression:"tempDocument.patientId"}})],1),a("el-form-item",{attrs:{label:"疾病","label-width":"formLabelWidth"}},[a("el-select",{attrs:{placeholder:"请选择疾病"},model:{value:e.tempDocument.diseaseName,callback:function(t){e.$set(e.tempDocument,"diseaseName",t)},expression:"tempDocument.diseaseName"}},e._l(e.$root.$data.diseases,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"部门","label-width":"formLabelWidth"}},[a("el-cascader",{attrs:{placeholder:"输入搜索内容",options:this.$root.$data.departmentOptions,props:{checkStrictly:!0},clearable:"",filterable:""},model:{value:e.tempDocument.deptId,callback:function(t){e.$set(e.tempDocument,"deptId",t)},expression:"tempDocument.deptId"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.documentDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.changeDocument()}}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"新增记录",visible:e.recordDialog},on:{"update:visible":function(t){e.recordDialog=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"状态","label-width":"formLabelWidth"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.newRecord.status,callback:function(t){e.$set(e.newRecord,"status",t)},expression:"newRecord.status"}},e._l(this.$root.$data.status,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"详细描述","label-width":"formLabelWidth"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.newRecord.desc,callback:function(t){e.$set(e.newRecord,"desc",t)},expression:"newRecord.desc"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.recordDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addRecord()}}},[e._v("确 定")])],1)],1)],1)},se=[],le={data:function(){return{document:{},tempDocument:{},documentId:"",records:[],documentDialog:!1,recordDialog:!1,newRecord:{status:"",desc:""}}},mounted:function(){var e=this;this.documentId=this.$route.params.id,this.$ajax({url:"/document/".concat(this.documentId),method:"get"}).then((function(t){console.log(t.data),t.data.success&&(e.document=t.data.document),console.log(e.document)})),this.$ajax({url:"/document/"+this.documentId+"/record",method:"get"}).then((function(t){e.records=t.data.records;for(var a=0;a<e.records.length;++a)e.records[a].createTime=new Date(e.records[a].createTime).toLocaleDateString();console.log(e.records)}))},methods:{delRecord:function(e){var t=this;this.$confirm("您确定要删除该记录吗？").then((function(){t.$ajax({url:"/record/"+t.records[e].recordId,method:"delete"}).then((function(e){e.data.success?(t.$message({message:"删除成功",type:"success"}),location.reload()):t.$message.error("删除失败")}))}))},addRecord:function(){var e=this;this.recordDialog=!1,this.$ajax({url:"/record",method:"post",params:{status:this.newRecord.status,desc:this.newRecord.desc,documentId:this.documentId}}).then((function(t){t.data.success?(e.$message({message:"创建记录成功",type:"success"}),location.reload()):e.$message.error("创建记录失败")}))},openDocumentDialog:function(){this.tempDocument=JSON.parse(JSON.stringify(this.document)),this.documentDialog=!0},openRecordDialog:function(){this.recordDialog=!0,this.newRecord={status:"",desc:""}},changeDocument:function(){this.documentDialog=!1,this.tempDocument.deptId instanceof Array&&(this.tempDocument.deptId=this.tempDocument.deptId[this.tempDocument.deptId.length-1]),this.document=JSON.parse(JSON.stringify(this.tempDocument)),console.log(this.tempDocument)}}},ie=le,ce=(a("2e24"),Object(d["a"])(ie,re,se,!1,null,null,null)),ue=ce.exports;n["default"].use(o["a"]);var de=[{path:"/home",name:"home",component:b,children:[{path:"dashboard",name:"dashboard",component:I},{path:"management",name:"management",component:z,children:[{path:"case",component:F},{path:"user",component:X},{path:"document/:id",component:ue}]},{path:"analyse",name:"analyse",component:T},{path:"user",name:"user",component:function(){return a.e("chunk-26bdb738").then(a.bind(null,"1511"))}}]},{path:"/",name:"login",component:oe},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],me=new o["a"]({routes:de,mode:"history"}),pe=me,fe=a("5c96"),he=a.n(fe),ge=(a("0fae"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)}),be=[],ve={name:"App"},ye=ve,we=(a("034f"),Object(d["a"])(ye,ge,be,!1,null,null,null)),De=we.exports,xe=a("bc3a"),_e=a.n(xe),Ie={formatTimestamp:function(e){return new Date(e).toLocaleDateString()}},$e=a("9ca8"),ke=(a("94b1"),a("007d"),_e.a.create({baseURL:"http://wizeaz.top:8080/",headers:{"Content-Type":"application/json;charset=utf-8"},withCredentials:!0}));function je(e){var t={label:e.name,value:e.deptId};if(e.children.length>0){t.children=[];for(var a=0;a<e.children.length;++a)t.children.push(je(e.children[a]))}return t}function Ce(e){return e.showName?e.showName:e.parent?Ce(e.parent)+"/"+e.name:e.name}n["default"].prototype.utils=Ie,n["default"].prototype.$ajax=ke,n["default"].prototype.checkLogin=function(e){var t=this;ke({url:"/validate",method:"post"}).then((function(a){var n=a.data;n.success?e&&e(n.user):t.$confirm("登录超时,点击确定按钮重新登录").then((function(){t.$router.push("/"),console.debug(n)}))}))},n["default"].config.productionTip=!1,n["default"].use(he.a),n["default"].component("v-chart",$e["a"]),new n["default"]({router:pe,render:function(e){return e(De)},el:"#app",data:{origins:[],diseases:[],departments:{},departmentOptions:{},groups:["user","manageuser","superuser"],status:["疑似","确诊","死亡","康复"]},created:function(){var e=this;this.$ajax({url:"/origin",method:"get"}).then((function(t){e.origins=t.data,console.log(e.origins)})),this.$ajax({url:"/disease",method:"get"}).then((function(t){e.diseases=t.data,console.log(e.diseases)})),this.$ajax({url:"department",method:"get"}).then((function(t){if(console.log(t.data),t.data.success){for(var a,n=t.data.departments,o=0;o<n.length;++o)e.departments[n[o].deptId]=n[o],e.departments[n[o].deptId].children=[];for(var r in e.departments)e.departments[r].parentId?(e.departments[e.departments[r].parentId].children.push(e.departments[r]),e.departments[r].parent=e.departments[e.departments[r].parentId]):a=r,e.departments[r].showName=Ce(e.departments[r]);e.departmentOptions=[je(e.departments[a])],console.log(e.departments),console.log(e.departmentOptions)}}))}})},"5ced":function(e,t,a){},"685a":function(e,t){},"6d80":function(e,t,a){"use strict";var n=a("5282"),o=a("bdee"),r=a("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"85ec":function(e,t,a){},bc84:function(e,t,a){"use strict";var n=a("42d3"),o=a.n(n);o.a},bdee:function(e,t,a){"use strict";var n=a("685a"),o=a.n(n);t["default"]=o.a},cccb:function(e,t,a){"use strict";var n=a("5ced"),o=a.n(n);o.a},d6db:function(e,t,a){"use strict";var n=a("e67a"),o=a.n(n);o.a},e67a:function(e,t,a){}});
//# sourceMappingURL=app.e1e84ba2.js.map