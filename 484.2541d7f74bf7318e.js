"use strict";(self.webpackChunkStudySystem=self.webpackChunkStudySystem||[]).push([[484],{2484:(P,m,r)=>{r.r(m),r.d(m,{TmemberModule:()=>N});var d=r(6814),c=r(4112),f=r(3519),v=r.n(f),t=r(5879),_=r(2416),l=r(2425),g=r(617);const s=function(){return{exact:!0}};let A=(()=>{class n{constructor(e,o,i){this.service=e,this.router=o,this.toastr=i,this.isLoggedIn=!1}doLogout(){v().fire({title:"B\u1ea1n mu\u1ed1n \u0111\u0103ng xu\u1ea5t?",icon:"question",showDenyButton:!0,confirmButtonText:"\u0110\u1ed3ng \xfd",denyButtonText:"Kh\xf4ng"}).then(e=>{if(e.isConfirmed)try{this.service.logout().subscribe(o=>{this.isLoggedIn=!1,sessionStorage.clear(),location.reload()},o=>{console.log(o),this.toastr.error("Must validate code before logout")})}catch(o){console.log(o),this.toastr.warning("Error")}})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(_.B),t.Y36(c.F0),t.Y36(l._W))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-home-member"]],decls:68,vars:16,consts:[[1,"d-flex","justify-content-between","m-5"],[1,"d-flex","mx-5"],[1,"list-group","list-group-flush"],["routerLinkActive","selected-item",1,"list-group-item",3,"routerLinkActiveOptions"],["routerLink","/tmember/home",1,"nav-link"],[1,"icon-and-text"],["routerLink","/tmember/history-order",1,"nav-link"],["routerLink","/tmember",1,"nav-link"],[1,"material-symbols-outlined"],["routerLink","/tmember/account/user-info",1,"nav-link"],["routerLink","/tmember/account/support",1,"nav-link"],["routerLink","/tmember/account/feedback",1,"nav-link"],[1,"list-group-item"],[1,"nav-link",3,"click"],[2,"flex","1"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"ul",2)(3,"li",3)(4,"a",4)(5,"div",5)(6,"mat-icon"),t._uU(7,"home"),t.qZA(),t.TgZ(8,"div"),t._uU(9,"Trang ch\u1ee7"),t.qZA()()()(),t.TgZ(10,"li",3)(11,"a",6)(12,"div",5)(13,"mat-icon"),t._uU(14,"history"),t.qZA(),t.TgZ(15,"div"),t._uU(16,"L\u1ecbch s\u1eed mua h\xe0ng"),t.qZA()()()(),t.TgZ(17,"li",3)(18,"a",7)(19,"div",5)(20,"span",8),t._uU(21," verified_user "),t.qZA(),t.TgZ(22,"div"),t._uU(23,"Tra c\u1ee9u b\u1ea3o h\xe0nh"),t.qZA()()()(),t.TgZ(24,"li",3)(25,"a",7)(26,"div",5)(27,"mat-icon"),t._uU(28,"card_giftcard"),t.qZA(),t.TgZ(29,"div"),t._uU(30,"\u01afu \u0111\xe3i c\u1ee7a b\u1ea1n"),t.qZA()()()(),t.TgZ(31,"li",3)(32,"a",7)(33,"div",5)(34,"span",8),t._uU(35," military_tech "),t.qZA(),t.TgZ(36,"div"),t._uU(37,"H\u1ea1ng th\xe0nh vi\xean"),t.qZA()()()(),t.TgZ(38,"li",3)(39,"a",9)(40,"div",5)(41,"span",8),t._uU(42," manage_accounts "),t.qZA(),t.TgZ(43,"div"),t._uU(44,"T\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n"),t.qZA()()()(),t.TgZ(45,"li",3)(46,"a",10)(47,"div",5)(48,"span",8),t._uU(49," support_agent "),t.qZA(),t.TgZ(50,"div"),t._uU(51,"H\u1ed7 tr\u1ee3"),t.qZA()()()(),t.TgZ(52,"li",3)(53,"a",11)(54,"div",5)(55,"span",8),t._uU(56," rate_review "),t.qZA(),t.TgZ(57,"div"),t._uU(58,"G\xf3p \xfd - Ph\u1ea3n h\u1ed3i"),t.qZA()()()(),t.TgZ(59,"li",12)(60,"a",13),t.NdJ("click",function(){return i.doLogout()}),t.TgZ(61,"div",5)(62,"mat-icon"),t._uU(63,"logout"),t.qZA(),t.TgZ(64,"div"),t._uU(65,"Tho\xe1t t\xe0i kho\u1ea3n"),t.qZA()()()()()(),t.TgZ(66,"div",14),t._UZ(67,"router-outlet"),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("routerLinkActiveOptions",t.DdM(8,s)),t.xp6(7),t.Q6J("routerLinkActiveOptions",t.DdM(9,s)),t.xp6(7),t.Q6J("routerLinkActiveOptions",t.DdM(10,s)),t.xp6(7),t.Q6J("routerLinkActiveOptions",t.DdM(11,s)),t.xp6(7),t.Q6J("routerLinkActiveOptions",t.DdM(12,s)),t.xp6(7),t.Q6J("routerLinkActiveOptions",t.DdM(13,s)),t.xp6(7),t.Q6J("routerLinkActiveOptions",t.DdM(14,s)),t.xp6(7),t.Q6J("routerLinkActiveOptions",t.DdM(15,s)))},dependencies:[c.lC,c.rH,c.Od,g.Hw],styles:[".icon-and-text[_ngcontent-%COMP%]{display:flex;align-items:center}.icon-and-text[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}a.nav-link[_ngcontent-%COMP%]:hover{color:red;cursor:pointer}.selected-item[_ngcontent-%COMP%]{background-color:#ffe6e6;border:2px solid #ff0000;color:red;border-radius:10px;width:15rem}"]})}return n})();var b=r(5861),h=r(9862),T=r(7398),x=r(553);let Z=(()=>{class n{constructor(e){this.http=e,this.apiUrl=x.N.apiUrl}getToken(){return sessionStorage.getItem("token")}getUserById(){const e={headers:(new h.WM).append("Authorization","Bearer "+this.getToken())};return this.http.get(this.apiUrl+"/api/get-user-by-id",e).pipe((0,T.U)(o=>o.response.data.user))}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(h.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var p=r(8672);function E(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1,"N\u1ed9i dung Null"),t.qZA())}function q(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1,"N\u1ed9i dung New"),t.qZA())}function C(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1,"N\u1ed9i dung Mem"),t.qZA())}function y(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1,"N\u1ed9i dung Vip"),t.qZA())}function M(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"form",4)(1,"div",5),t._UZ(2,"i",6),t.qZA(),t.TgZ(3,"div",7)(4,"h2"),t._uU(5),t.qZA()(),t.TgZ(6,"div",8),t._UZ(7,"input",9),t.TgZ(8,"span",10)(9,"mat-icon"),t._uU(10,"edit"),t.qZA()()(),t.TgZ(11,"div",8)(12,"select",11)(13,"option",12),t._uU(14),t.qZA(),t.TgZ(15,"option",13),t._uU(16,"Nam"),t.qZA(),t.TgZ(17,"option",14),t._uU(18,"N\u1eef"),t.qZA()(),t.TgZ(19,"span",10)(20,"mat-icon"),t._uU(21,"edit"),t.qZA()()(),t.TgZ(22,"div",15),t._UZ(23,"input",16),t.qZA(),t.TgZ(24,"div",15),t._UZ(25,"input",16),t.qZA(),t.TgZ(26,"div",15),t._UZ(27,"input",16),t.qZA(),t.TgZ(28,"div",15),t._UZ(29,"input",16),t.qZA(),t.TgZ(30,"div",15)(31,"button",17),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.showUpdateAddressForm())}),t.TgZ(32,"span",10),t._uU(33),t.qZA()()(),t.TgZ(34,"div",15)(35,"button",18),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.showChangePasswordForm())}),t.TgZ(36,"span",10),t._uU(37,"\u0110\u1ed5i m\u1eadt kh\u1ea9u"),t.qZA()()(),t.TgZ(38,"div",19)(39,"button",20),t._uU(40," C\u1eadp nh\u1eadt th\xf4ng tin "),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(5),t.Oqu(e.userInfor.userFullName),t.xp6(2),t.MGl("placeholder","H\u1ecd t\xean: ",e.userInfor.userFullName," "),t.xp6(7),t.hij("Gi\u1edbi t\xednh: ",e.userInfor.gender,""),t.xp6(9),t.MGl("placeholder","Email: ",e.userInfor.email,""),t.xp6(2),t.MGl("placeholder","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i: ",e.userInfor.phoneNumber,""),t.xp6(2),t.MGl("placeholder","Ng\xe0y tham gia TMember: ",e.userInfor.joinDateAt,""),t.xp6(2),t.MGl("placeholder","T\u1ed5ng ti\u1ec1n \u0111\xe3 mua s\u1eafm: ",e.userInfor.priceBought," vn\u0111"),t.xp6(4),t.HOy("\u0110\u1ecba ch\u1ec9: ",e.userInfor.addressUserDes,", ",e.userInfor.addressUserWard,", ",e.userInfor.addressUserDistrict,", ",e.userInfor.addressUserProvince,"")}}function w(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"form",4)(1,"div",21)(2,"button",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.showInitialForm())}),t._UZ(3,"i",23),t._uU(4," Quay l\u1ea1i "),t.qZA()(),t.TgZ(5,"div",24),t._UZ(6,"input",25)(7,"input",26)(8,"input",27),t.qZA(),t.TgZ(9,"div",19)(10,"button",20),t._uU(11," X\xe1c nh\u1eadn "),t.qZA()()()}}function O(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"form",4)(1,"div",21)(2,"button",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.showInitialForm())}),t._UZ(3,"i",23),t._uU(4," Quay l\u1ea1i "),t.qZA()(),t.TgZ(5,"div",24)(6,"select",11)(7,"option",12),t._uU(8),t.qZA(),t.TgZ(9,"option",13),t._uU(10,"Nam"),t.qZA(),t.TgZ(11,"option",14),t._uU(12,"N\u1eef"),t.qZA()(),t.TgZ(13,"select",11)(14,"option",12),t._uU(15),t.qZA(),t.TgZ(16,"option",13),t._uU(17,"Nam"),t.qZA(),t.TgZ(18,"option",14),t._uU(19,"N\u1eef"),t.qZA()(),t.TgZ(20,"select",11)(21,"option",12),t._uU(22),t.qZA(),t.TgZ(23,"option",13),t._uU(24,"Nam"),t.qZA(),t.TgZ(25,"option",14),t._uU(26,"N\u1eef"),t.qZA()(),t._UZ(27,"input",28),t.qZA(),t.TgZ(28,"div",19)(29,"button",20),t._uU(30," X\xe1c nh\u1eadn "),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(8),t.Oqu(e.userInfor.addressUserProvince),t.xp6(7),t.Oqu(e.userInfor.addressUserDistrict),t.xp6(7),t.Oqu(e.userInfor.addressUserWard),t.xp6(5),t.MGl("placeholder","\u0110\u1ecba ch\u1ec9 nh\xe0: ",e.userInfor.addressUserDes,"")}}const F=[{path:"",component:A,data:{breadcrumb:"T\xe0i kho\u1ea3n"},children:[{path:"home",component:(()=>{class n{constructor(e,o,i){this.service=e,this.spinner=o,this.toastr=i,this.loadingTitle="Loading..."}ngOnInit(){this.getInforUser()}getInforUser(){var e=this;return(0,b.Z)(function*(){try{e.spinner.show(),yield e.service.getUserById().subscribe(o=>{e.userData=o,e.spinner.hide()},o=>{console.error(o),e.toastr.error(o),e.spinner.hide()})}catch(o){console.log(o),e.toastr.error("fail to load: "+JSON.stringify(o),"Error")}})()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(Z),t.Y36(p.t2),t.Y36(l._W))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-default"]],decls:91,vars:7,consts:[[1,"container"],[1,"row"],[1,"col-md-6"],[1,"container","card"],[1,"row","card-body"],[1,"col-12","text-center"],["src","/assets/img/logo-TDT-PhotoRoom.png-PhotoRoom.png","alt","Image",1,"img-fluid",2,"height","60px"],[1,"text-danger"],[1,"col-12","text-center","mt-4"],[1,"col-4",2,"height","150px"],["src","/assets/icon/calender.png","alt","",2,"height","50px"],["color","red"],[1,"col-4",2,"height","50px"],["src","/assets/icon/dollars.png","alt","",2,"height","50px"],["src","/assets/icon/rank.png","alt","",2,"height","50px"],[1,"col-md-4"],[1,"card","custom-card",2,"background-color","#fef5f0"],[1,"card-body"],[1,"d-flex","flex-column","align-items-center","justify-content-center",2,"height","260px"],[1,"custom-icon"],["src","https://cellphones.com.vn/smember/_nuxt/img/gift-box(1)1.ad696df.png","alt",""],[1,"mt-2","custom-text"],[1,"text-muted"],["routerLink","/tmenber/gift",1,"btn","custom-button"],[1,"card","custom-card",2,"background-color","#f1f8fe"],["src","https://cdn2.cellphones.com.vn/x,webp,q100/media/wysiwyg/Shipper2.png","alt","",2,"width","65px","height","65px"],["routerLink","/tmember/history-order",1,"btn","custom-button"],[1,"card","custom-card",2,"background-color","#edf1fd"],["src","https://cellphones.com.vn/smember/_nuxt/img/crown.d2de999.png","alt",""],["bdColor","rgba(51,51,51,0.8)","size","medium","color","#fff","type","ball-scale-multiple"],[2,"font-size","20px","color","white"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",5)(8,"h1"),t._uU(9,"Xin ch\xe0o"),t.qZA(),t.TgZ(10,"h2",7),t._uU(11),t.qZA()(),t.TgZ(12,"div",8)(13,"div",1)(14,"div",9)(15,"div",5)(16,"h3"),t._uU(17,"Ng\xe0y tham gia"),t.qZA()(),t.TgZ(18,"div",5),t._UZ(19,"img",10),t.qZA(),t.TgZ(20,"div",5)(21,"h2",11),t._uU(22),t.qZA()()(),t.TgZ(23,"div",12)(24,"div",5)(25,"h3"),t._uU(26,"\u0110i\u1ec3m t\xedch l\u0169y"),t.qZA()(),t.TgZ(27,"div",5),t._UZ(28,"img",13),t.qZA(),t.TgZ(29,"div",5)(30,"h2",11),t._uU(31),t.qZA()()(),t.TgZ(32,"div",12)(33,"div",5)(34,"h3"),t._uU(35,"H\u1ea1ng th\xe0nh vi\xean"),t.qZA()(),t.TgZ(36,"div",5),t._UZ(37,"img",14),t.qZA(),t.TgZ(38,"div",5)(39,"h2",11),t._uU(40),t.qZA()()()()()()()()()(),t.TgZ(41,"div",0)(42,"div",1)(43,"div",15)(44,"div",16)(45,"div",17)(46,"div",18)(47,"div",19),t._UZ(48,"img",20),t.qZA(),t.TgZ(49,"div")(50,"h4",21),t._uU(51,"\u01afu \u0111\xe3i c\u1ee7a b\u1ea1n"),t.qZA()(),t.TgZ(52,"div")(53,"p",22),t._uU(54,"0 \u01b0u \u0111\xe3i"),t.qZA()(),t.TgZ(55,"div")(56,"a",23),t._uU(57,"Xem chi ti\u1ebft"),t.qZA()()()()()(),t.TgZ(58,"div",15)(59,"div",24)(60,"div",17)(61,"div",18)(62,"div",19),t._UZ(63,"img",25),t.qZA(),t.TgZ(64,"div")(65,"h4",21),t._uU(66,"\u0110\u01a1n h\xe0ng c\u1ee7a b\u1ea1n"),t.qZA()(),t.TgZ(67,"div")(68,"p",22),t._uU(69),t.qZA()(),t.TgZ(70,"div")(71,"a",26),t._uU(72,"Xem chi ti\u1ebft"),t.qZA()()()()()(),t.TgZ(73,"div",15)(74,"div",27)(75,"div",17)(76,"div",18)(77,"div",19),t._UZ(78,"img",28),t.qZA(),t.TgZ(79,"div")(80,"h4",21),t._uU(81,"H\u1ea1ng th\xe0nh vi\xean"),t.qZA()(),t.TgZ(82,"div")(83,"p",22),t._uU(84),t.qZA()(),t.TgZ(85,"div")(86,"a",23),t._uU(87,"Xem chi ti\u1ebft"),t.qZA()()()()()()()(),t.TgZ(88,"ngx-spinner",29)(89,"p",30),t._uU(90),t.qZA()()),2&o){let u;t.xp6(11),t.Oqu(null!==(u=i.userData.userFullName)&&void 0!==u?u:""),t.xp6(11),t.Oqu(i.userData.joinDateAt),t.xp6(9),t.hij("",i.userData.priceBought," VND"),t.xp6(9),t.Oqu(i.userData.rankUser),t.xp6(29),t.hij("",i.userData.countOrderItem," \u0111\u01a1n h\xe0ng"),t.xp6(15),t.hij("B\u1ea1n l\xe0 ",i.userData.rankUser,""),t.xp6(6),t.Oqu(i.loadingTitle)}},dependencies:[c.rH,p.Ro],styles:[".container[_ngcontent-%COMP%]{width:950px;margin:0 auto;text-align:center}.image[_ngcontent-%COMP%]{height:60px}h1[_ngcontent-%COMP%]{margin-top:10px}h2[_ngcontent-%COMP%]{color:red}.square[_ngcontent-%COMP%]{width:50px;height:50px;margin:0 10px;display:inline-block}.custom-button[_ngcontent-%COMP%]{background-color:#fff;color:red;border-radius:10px;padding:15px;margin-bottom:15px}.custom-button[_ngcontent-%COMP%]:hover{background-color:#f08080}.custom-text[_ngcontent-%COMP%]{color:red;font-size:22px}.custom-card[_ngcontent-%COMP%]{border:none;border-radius:20px;width:300px;margin:10px}.custom-icon[_ngcontent-%COMP%]{background-color:#fff7ca;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center}"]})}return n})()},{path:"history-order",component:(()=>{class n{constructor(){this.selectedButton="null"}showContent(e){this.selectedButton=e}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-history-oder"]],decls:14,vars:4,consts:[[3,"click"],[4,"ngIf"]],template:function(o,i){1&o&&(t.TgZ(0,"div")(1,"button",0),t.NdJ("click",function(){return i.showContent("null")}),t._uU(2,"Null"),t.qZA(),t.TgZ(3,"button",0),t.NdJ("click",function(){return i.showContent("new")}),t._uU(4,"New"),t.qZA(),t.TgZ(5,"button",0),t.NdJ("click",function(){return i.showContent("mem")}),t._uU(6,"Mem"),t.qZA(),t.TgZ(7,"button",0),t.NdJ("click",function(){return i.showContent("vip")}),t._uU(8,"Vip"),t.qZA()(),t.TgZ(9,"div"),t.YNc(10,E,2,0,"div",1),t.YNc(11,q,2,0,"div",1),t.YNc(12,C,2,0,"div",1),t.YNc(13,y,2,0,"div",1),t.qZA()),2&o&&(t.xp6(10),t.Q6J("ngIf","null"===i.selectedButton),t.xp6(1),t.Q6J("ngIf","new"===i.selectedButton),t.xp6(1),t.Q6J("ngIf","mem"===i.selectedButton),t.xp6(1),t.Q6J("ngIf","vip"===i.selectedButton))},dependencies:[d.O5]})}return n})(),data:{breadcrumb:"L\u1ecbch s\u1eed \u0111\u1eb7t h\xe0ng"}},{path:"account/user-info",component:(()=>{class n{constructor(e){this.service=e,this.isChangePasswordFormVisible=!1,this.isInitialFormVisible=!0,this.isUpdateAddressFormVisible=!1}showChangePasswordForm(){this.isChangePasswordFormVisible=!0,this.isInitialFormVisible=!1,this.isUpdateAddressFormVisible=!1}showInitialForm(){this.isChangePasswordFormVisible=!1,this.isInitialFormVisible=!0,this.isUpdateAddressFormVisible=!1}showUpdateAddressForm(){this.isChangePasswordFormVisible=!1,this.isInitialFormVisible=!1,this.isUpdateAddressFormVisible=!0}ngOnInit(){try{this.service.getUserById().subscribe(e=>{this.userInfor=e},e=>{console.error(e)})}catch(e){console.log(e)}}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(Z))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-acount-member"]],decls:6,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-12"],["class","custom-form",4,"ngIf"],[1,"custom-form"],[1,"form-group","custom-icon"],[1,"fas","fa-user"],[1,"form-group","custom-h2"],[1,"form-group","input-group","m-2"],["type","text",1,"form-control","custom-input",3,"placeholder"],[1,"input-group-text","bg-transparent","border-0"],["aria-label",".form-select-lg example",1,"form-select","form-select-lg","mb-2","custom-input"],["selected",""],["value","0"],["value","1"],[1,"form-group","m-2"],["type","text","disabled","disabled",1,"form-control","custom-input",3,"placeholder"],["type","button",1,"btn","btn-light","input-group","custom-button",2,"border-bottom","1px solid #e8e8e8",3,"click"],["type","button",1,"btn","btn-light","custom-button",2,"border-bottom","1px solid #e8e8e8",3,"click"],[1,"form-group","mt-3"],["type","submit",1,"btn","btn-danger","custom-button"],[1,"form-group"],["type","button",1,"btn","btn-light","custom-button-quay-lai",3,"click"],[1,"fas","fa-arrow-left"],[1,"form-group","change-password-form"],["type","password","placeholder","M\u1eadt kh\u1ea9u c\u0169",1,"form-control","custom-input"],["type","password","placeholder","M\u1eadt kh\u1ea9u m\u1edbi",1,"form-control","custom-input"],["type","password","placeholder","X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u m\u1edbi",1,"form-control","custom-input"],["type","password",1,"form-control","custom-input",3,"placeholder"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,M,41,11,"form",3),t.YNc(4,w,12,0,"form",3),t.YNc(5,O,31,4,"form",3),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("ngIf",i.isInitialFormVisible),t.xp6(1),t.Q6J("ngIf",i.isChangePasswordFormVisible),t.xp6(1),t.Q6J("ngIf",i.isUpdateAddressFormVisible))},dependencies:[d.O5,g.Hw],styles:[".custom-form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto;padding:15px;text-align:center}.custom-icon[_ngcontent-%COMP%]{margin-top:15px}.custom-h2[_ngcontent-%COMP%]{color:red}.custom-input[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #e8e8e8;padding:10px 20px;background:transparent;font-size:16px}.custom-button[_ngcontent-%COMP%]{width:100%}.custom-button-quay-lai[_ngcontent-%COMP%]{background-color:transparent;border:none;width:100px;display:flex;align-items:center;padding:0;margin:30px}.custom-button-quay-lai[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}"]})}return n})(),data:{breadcrumb:"Chi ti\u1ebft"}},{path:"account/support",component:(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-support"]],decls:35,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-4"],[1,"child","d-flex","align-items-center"],["src","https://cellphones.com.vn/smember/_nuxt/img/headphones%201.c7d474f.png","alt","Icon",1,"icon"],[1,"text"],[1,"price"],["src","https://cellphones.com.vn/smember/_nuxt/img/waranty%201.a9ef39d.png","alt","Icon",1,"icon"],["src","https://cellphones.com.vn/smember/_nuxt/img/bad-review.ac59f16.png","alt","Icon",1,"icon"],["src","https://cellphones.com.vn/smember/_nuxt/img/message%201.259c9d3.png","alt","Icon",1,"icon"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.TgZ(5,"div")(6,"p",5),t._uU(7,"T\u01b0 v\u1ea5n mua h\xe0ng (8h00 - 22h00)"),t.qZA(),t.TgZ(8,"p",6),t._uU(9,"0326.054.827"),t.qZA()()()(),t.TgZ(10,"div",2)(11,"div",3),t._UZ(12,"img",7),t.TgZ(13,"div")(14,"p",5),t._uU(15,"B\u1ea3o h\xe0nh (8h00 - 21h00)"),t.qZA(),t.TgZ(16,"p",6),t._uU(17,"0326.054.827"),t.qZA()()()()(),t.TgZ(18,"div",1)(19,"div",2)(20,"div",3),t._UZ(21,"img",8),t.TgZ(22,"div")(23,"p",5),t._uU(24,"Khi\u1ebfu n\u1ea1i (8h00 - 21h30)"),t.qZA(),t.TgZ(25,"p",6),t._uU(26,"0326.054.827"),t.qZA()()()(),t.TgZ(27,"div",2)(28,"div",3),t._UZ(29,"img",9),t.TgZ(30,"div")(31,"p",5),t._uU(32,"Email"),t.qZA(),t.TgZ(33,"p",6),t._uU(34,"xuantruong@devtdt.id.vn"),t.qZA()()()()()())},styles:[".child[_ngcontent-%COMP%]{border:1px solid #000;border-radius:10px;height:80px;margin:5px}.icon[_ngcontent-%COMP%]{width:62px;height:60px;margin-right:10px;margin-left:10px}.text[_ngcontent-%COMP%]{font-size:16px}.price[_ngcontent-%COMP%]{color:red}"]})}return n})(),data:{breadcrumb:"H\u1ed7 tr\u1ee3"}},{path:"account/feedback",component:(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-feedback"]],decls:3,vars:0,consts:[[1,"d-flex","justify-content-center"],["src","https://docs.google.com/forms/d/e/1FAIpQLSflDmniI8kLhJ94W0Aa2j6wssOg428XRfHRffsrRh52PTNzRQ/viewform?embedded=true","width","640","height","1000","frameborder","0","marginheight","0","marginwidth","0"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"iframe",1),t._uU(2,"\u0110ang t\u1ea3i\u2026"),t.qZA()())}})}return n})(),data:{breadcrumb:"Ph\u1ea3n h\u1ed3i"}}]}];let D=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(F),c.Bz]})}return n})();var I=r(384);let N=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[d.ez,D,I.q,p.ef,l.Rh.forRoot()]})}return n})()}}]);