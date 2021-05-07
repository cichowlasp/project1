(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{200:function(e,t,n){},315:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o,l,d,s,j,b,u,h,x,O,p,f,m,g,v,y=n(0),k=n.n(y),C=n(13),w=n.n(C),S=(n(200),n(14)),M=n(17),T=n(99),V=n(21),D=n(15),F=n(26),q=n(351),L=n(359),A=n(34),I=n(12),N=n(357),P=n(356),z=n(3),J=function(e){var t=e.register,n=e.control,r=e.getValues,c=e.watch,a=e.setValue,i=e.errors,o=e.validation;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(N.a,Object(I.a)(Object(I.a)({label:"Brand",error:i.brand,style:{color:"white"},helperText:i.brand?"This field is required(min 3 letters and max 20)":"",defaultValue:r("brand")},t("brand",{required:!0,minLength:3,maxLength:20})),{},{onChange:function(e){return a("brand",e.target.value,{shouldValidate:o})}}),"brand"),Object(z.jsx)(N.a,Object(I.a)(Object(I.a)({defaultValue:r("model"),error:i.model,label:"Model",helperText:i.model?"This field is required(min 3 letters and max 20)":""},t("model",{required:!0,minLength:3,maxLength:20})),{},{onChange:function(e){return a("model",e.target.value,{shouldValidate:o})}}),"model"),Object(z.jsx)(A.a,{name:"productionDate",control:n,render:function(e){var t=e.field;return Object(z.jsx)(P.a,Object(I.a)(Object(I.a)({},t),{},{autoOk:!0,variant:"inline",label:"Production Date",format:"DD/MM/yyyy",value:c("productionDate"),disableFuture:!0,InputAdornmentProps:{position:"start"},onChange:function(e){a("productionDate",e)}}))}})]})},B=n(363),E=function(e){var t=e.register,n=e.control,r=e.getValues,c=e.errors,a=e.setValue,i=e.validation;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(N.a,Object(I.a)(Object(I.a)({error:c.vehicleOperation,helperText:c.vehicleOperation?"This field is required(provide an number form 1 to 1000000)":"",defaultValue:r("vehicleOperation")},t("vehicleOperation",{required:!0,pattern:/^[0-9]*$/i,min:1,max:1e6})),{},{label:"Vehicle operation(km)",onChange:function(e){return a("vehicleOperation",e.target.value,{shouldValidate:i})}}),"vehicleOperation"),Object(z.jsx)(A.a,{name:"fuelType",control:n,rules:{required:!0},render:function(e){var t=e.field;return Object(z.jsxs)(N.a,Object(I.a)(Object(I.a)({label:"Type of fuel",defaultValue:r("fuelType"),error:c.fuelType,helperText:c.fuelType?"This field is required":"",select:!0},t),{},{inputProps:{name:"Fuel type"},children:[Object(z.jsx)(B.a,{value:"disel",children:"Disel"}),Object(z.jsx)(B.a,{value:"petrol",children:"Petrol"}),Object(z.jsx)(B.a,{value:"petrol+gas",children:"Petrol+gas"})]}))}}),Object(z.jsx)(A.a,{name:"gearbox",control:n,rules:{required:!0},render:function(e){var t=e.field;return Object(z.jsxs)(N.a,Object(I.a)(Object(I.a)({select:!0,error:c.gearbox,helperText:c.gearbox?"This field is required":"",defaultValue:r("gearbox")},t),{},{label:"Gearbox",inputProps:{name:"Fuel type"},children:[Object(z.jsx)(B.a,{value:"manual",children:"Manual"},"manual"),Object(z.jsx)(B.a,{value:"automat",children:"Automatic"},"automat")]}))}}),Object(z.jsx)(N.a,Object(I.a)(Object(I.a)({label:"Cubic capacity (cm3)",error:c.cubicCapacity,helperText:c.cubicCapacity?"This field is required(provide an number from 500 to 10000)":"",defaultValue:r("cubicCapacity")},t("cubicCapacity",{required:!0,pattern:/^[0-9]*$/i,min:500,max:1e4})),{},{onChange:function(e){return a("cubicCapacity",e.target.value,{shouldValidate:i})}}),"cubicCapacity")]})},Y=n(352),$=n(358),G=k.a.createContext({}),H=function(e){var t=e.children,n=Object(y.useState)({primary:localStorage.getItem("primary")||"#F47373",secondary:localStorage.getItem("secondary")||"#ba68c8"}),r=Object(M.a)(n,2),c=r[0],a=r[1];return Object(z.jsx)(G.Provider,{value:{colors:c,changeColors:function(e,t){"primary"===t?(localStorage.setItem("primary",e),a(Object(I.a)(Object(I.a)({},c),{},{primary:e}))):"secondary"===t&&(localStorage.setItem("secondary",e),a(Object(I.a)(Object(I.a)({},c),{},{secondary:e})))}},children:t})},U=k.a.createContext({}),K=function(e){var t=e.children,n=Object(y.useState)(JSON.parse(localStorage.getItem("darkMode")||"false")),r=Object(M.a)(n,2),c=r[0],a=r[1];return Object(z.jsx)(U.Provider,{value:{darkMode:c,toggleDarkMode:function(){localStorage.setItem("darkMode",JSON.stringify(!c)),a((function(e){return!e}))}},children:t})},Q=function(e){var t=e.register,n=e.control,r=e.getValues,c=e.errors,a=e.setValue,i=e.validation,o=Object(y.useContext)(U).darkMode;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(A.a,{name:"accidentFree",control:n,render:function(e){var t=e.field;return Object(z.jsx)(Y.a,{control:Object(z.jsx)($.a,Object(I.a)(Object(I.a)({checked:r("accidentFree")},t),{},{name:"Accident-free",color:"primary"})),label:Object(z.jsx)("div",{style:{color:o?"white":"black"},children:"Accident-free"})})}}),Object(z.jsx)(A.a,{name:"servicedASS",control:n,render:function(e){var t=e.field;return Object(z.jsx)(Y.a,{control:Object(z.jsx)($.a,Object(I.a)(Object(I.a)({checked:r("servicedASS")},t),{},{name:"Serviced at an authorized service station",color:"primary"})),label:Object(z.jsx)("div",{style:{color:o?"white":"black"},children:"Serviced at an ASS"})})}}),Object(z.jsx)(A.a,{name:"condition",control:n,rules:{required:!0},render:function(e){var t=e.field;return Object(z.jsxs)(N.a,Object(I.a)(Object(I.a)({select:!0,error:c.condition,defaultValue:r("condition"),helperText:c.condition?"This field is required(please select a option)":""},t),{},{label:"condition",inputProps:{name:"Fuel type"},children:[Object(z.jsx)(B.a,{value:"new",children:"New"},"new"),Object(z.jsx)(B.a,{value:"used",children:"Used"},"used")]}))}}),Object(z.jsx)(N.a,Object(I.a)(Object(I.a)({defaultValue:r("color"),error:c.color,label:"Color"},t("color",{required:!0,minLength:1,maxLength:20})),{},{helperText:c.color?"This field is required":"",onChange:function(e){return a("color",e.target.value,{shouldValidate:i})}}),"color")]})},R=D.b.form(r||(r=Object(S.a)(["\n\tdisplay: flex;\n\twidth: 50vw;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n"]))),W=D.b.div(c||(c=Object(S.a)(["\n\theight: 50vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"]))),X=D.b.div(a||(a=Object(S.a)(["\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n"]))),Z=D.b.div(i||(i=Object(S.a)(["\n\theight: 20px;\n\tcolor: red;\n"]))),_=function(){var e=Object(y.useState)(1),t=Object(M.a)(e,2),n=t[0],r=t[1],c=Object(y.useState)(!1),a=Object(M.a)(c,2),i=a[0],o=a[1],l=Object(y.useState)(""),d=Object(M.a)(l,2),s=d[0],j=d[1],b=Object(y.useState)(!1),u=Object(M.a)(b,2),h=u[0],x=u[1],O=Object(A.b)(),p=O.register,f=O.handleSubmit,m=O.control,g=O.getValues,v=O.watch,k=O.setValue,C=O.reset,w=O.formState.errors,S=function(e,t){e.preventDefault(),r((function(e){return"+"===t?++e:--e}))};return Object(z.jsxs)(R,{onSubmit:f((function(e){x(!1),j(""),function(e){var t=JSON.parse(localStorage.getItem("data")||"[]");localStorage.setItem("data",JSON.stringify([].concat(Object(F.a)(t),[e])))}(e),C(),r(1),o(!0)}),(function(){x(!0),j("Please check all the fields to correct errors")})),children:[Object(z.jsx)(W,{children:function(){switch(n){case 1:return Object(z.jsx)(J,{register:p,control:m,getValues:g,watch:v,setValue:k,errors:w,validation:h});case 2:return Object(z.jsx)(E,{register:p,control:m,getValues:g,setValue:k,errors:w,validation:h});case 3:return Object(z.jsx)(Q,{register:p,control:m,getValues:g,setValue:k,errors:w,validation:h})}}()}),Object(z.jsxs)(X,{children:[Object(z.jsx)(q.a,{onClick:function(e){return S(e)},disabled:1===n,variant:"contained",color:"secondary",children:"Back"}),3!==n?Object(z.jsx)(q.a,{type:"submit",onClick:function(e){return S(e,"+")},disabled:3===n,variant:"contained",color:"primary",children:"Next"}):Object(z.jsx)(q.a,{type:"submit",variant:"contained",color:"primary",children:"Add"})]}),Object(z.jsx)(Z,{children:s}),Object(z.jsx)(L.a,{open:i,autoHideDuration:6e3,onClose:function(e,t){"clickaway"!==t&&o(!1)},message:"Car added sucesfully"})]})},ee=function(e){var t=e.setTitle;return Object(y.useEffect)((function(){t("Add Car")}),[t]),Object(z.jsx)(_,{})},te=n(350),ne=n(361),re=n(360),ce=n(353),ae=n(354),ie=n(96),oe=n.n(ie),le=n(165),de=n.n(le),se=n(123),je=n.n(se),be=n(124),ue=n.n(be),he="black",xe="white",Oe="grey",pe=Object(te.a)((function(e){return Object(ne.a)({accordion:{marginBottom:"25px",width:"100%",background:"rgb(232, 232, 232)"}})})),fe=D.b.div(o||(o=Object(S.a)(["\n\tfont-weight: bold;\n\twidth: 100%;\n\tpadding: 10px;\n\tfont-size: 2rem;\n\t","\n\t@media (max-width: 630px) {\n\t\tfont-size: 1rem;\n\t}\n"])),(function(e){return e.darkMode?"color: ".concat(he,";"):""})),me=D.b.div(l||(l=Object(S.a)(["\n\twidth: 100%;\n\ttext-align: left;\n\tpadding-left: 20px;\n\tdiv {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\theight: 40px;\n\t\talign-content: center;\n\t\talign-items: center;\n\t\tspan {\n\t\t\tfont-weight: bold;\n\t\t\tmargin-left: 10px;\n\t\t\ttext-transform: lowercase;\n\t\t}\n\t}\n\t@media (max-width: 630px) {\n\t\tpadding-left: 0;\n\t\tdiv {\n\t\t\tfont-size: 0.65rem;\n\t\t\tdisplay: flex;\n\t\t\twidth: 100%;\n\t\t\theight: 45px;\n\t\t\talign-content: center;\n\t\t\talign-items: center;\n\t\t\tspan {\n\t\t\t\tfont-weight: bold;\n\t\t\t\ttext-transform: lowercase;\n\t\t\t}\n\t\t}\n\t}\n\t","\n"])),(function(e){return e.darkMode?"color: ".concat(he,";"):""})),ge=function(e){var t=e.car,n=Object(y.useContext)(U).darkMode,r=pe();return Object(z.jsxs)(re.a,{elevation:3,className:r.accordion,children:[Object(z.jsx)(ce.a,{expandIcon:Object(z.jsx)(de.a,{htmlColor:"black"}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(z.jsx)(fe,{darkMode:n,children:"".concat(t.brand," ").concat(t.model)})}),Object(z.jsx)(ae.a,{children:Object(z.jsxs)(me,{darkMode:n,children:[Object(z.jsxs)("div",{children:["Prduction Date:"," ",Object(z.jsx)("span",{children:oe()(t.productionDate).format("MMMM Do YYYY")})]}),Object(z.jsxs)("div",{children:["Vehicle operation: ",Object(z.jsxs)("span",{children:[t.vehicleOperation,"km"]})]}),Object(z.jsxs)("div",{children:["Fuel type: ",Object(z.jsx)("span",{children:t.fuelType})]}),Object(z.jsxs)("div",{children:["Gearbox: ",Object(z.jsx)("span",{children:t.gearbox})]}),Object(z.jsxs)("div",{children:["Cubic capacity: ",Object(z.jsxs)("span",{children:[t.cubicCapacity,"cm3"]})]}),Object(z.jsxs)("div",{children:["Accident free:"," ",Object(z.jsx)("span",{children:t.accidentFree?Object(z.jsx)(je.a,{}):Object(z.jsx)(ue.a,{})})]}),Object(z.jsxs)("div",{children:["Serviced at an authorized service station:"," ",Object(z.jsx)("span",{children:t.servicedASS?Object(z.jsx)(je.a,{}):Object(z.jsx)(ue.a,{})})]}),Object(z.jsxs)("div",{children:["Condition: ",Object(z.jsx)("span",{children:t.condition})]}),Object(z.jsxs)("div",{children:["Color: ",Object(z.jsx)("span",{children:t.color})]})]})})]})},ve=D.b.div(d||(d=Object(S.a)(["\n\tdisplay: flex;\n\tpadding: 5vh;\n\twidth: 40%;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\t@media (max-width: 630px) {\n\t\twidth: 60%;\n\t}\n"]))),ye=function(e){var t=e.setTitle,n=e.fetchedData,r=e.search,c=e.setSearch;Object(y.useEffect)((function(){t("Collection"),c("")}),[t,c]);return Object(z.jsx)(ve,{children:n.filter((function(e){return""===r||e.brand.toLowerCase().includes(r.toLowerCase())||e.model.toLowerCase().includes(r.toLowerCase())||(e.brand.replace(/\s/g,"")+e.model.replace(/\s/g,"")).toLowerCase().includes(r.toLowerCase())||(e.model.replace(/\s/g,"")+e.brand.replace(/\s/g,"")).toLowerCase().includes(r.toLowerCase().replace(/\s/g,""))?e:void 0})).map((function(e){return Object(z.jsx)(ge,{car:e})}))})},ke=n(349),Ce=n(317),we=n(176),Se=n(172),Me=n.n(Se),Te=n(173),Ve=n.n(Te),De=n(174),Fe=n.n(De),qe=n(171),Le=n.n(qe),Ae=n(170),Ie=n.n(Ae),Ne=Object(D.a)(s||(s=Object(S.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tpadding: 1rem;\n\ttext-decoration: none;\n\ttext-transform: uppercase;\n\tcolor: ",";\n\tfont-weight: 500;\n\tmargin: 0.5rem;\n\tborder-radius: 10px;\n\tborder: 2px solid ",";\n\theight: 20px;\n\n\t&:hover {\n\t\tbackground-color: ",";\n\t\tborder-radius: 10px;\n\t\tcursor: pointer;\n\t}\n\t.icon {\n\t\tdisplay: none;\n\t}\n\t","\n\t@media (max-width: 831px) {\n\t\t.icon {\n\t\t\tdisplay: block;\n\t\t}\n\t\t.text {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"])),he,he,"rgba(188, 188, 188, 0.3)",(function(e){return e.darkMode?"color: ".concat(xe,";\n\t\tborder-color: ").concat(xe,";"):""})),Pe=Object(D.b)(T.b)(j||(j=Object(S.a)(["\n\t","\n"])),Ne),ze=D.b.div(b||(b=Object(S.a)(["\n\t","\n"])),Ne),Je=Object(D.b)(Ce.a)(u||(u=Object(S.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n"]))),Be=D.b.div(h||(h=Object(S.a)(["\n\tdisplay: flex;\n\theight: 80px;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tpadding: 10px;\n"]))),Ee=function(){var e=Object(y.useContext)(G).changeColors,t=Object(y.useState)("#F47373"),n=Object(M.a)(t,2),r=n[0],c=n[1],a=Object(y.useState)(null),i=Object(M.a)(a,2),o=i[0],l=i[1],d=Object(y.useContext)(U),s=d.darkMode,j=d.toggleDarkMode,b=Boolean(o);return Object(z.jsxs)("div",{children:[Object(z.jsxs)(Pe,{darkMode:s,to:"/",children:[Object(z.jsx)("div",{className:"text",children:"Add Car"}),Object(z.jsx)(Ie.a,{className:"icon"})]}),Object(z.jsxs)(Pe,{darkMode:s,to:"/feed",children:[Object(z.jsx)("div",{className:"text",children:"Collection"}),Object(z.jsx)(Le.a,{className:"icon"})]}),Object(z.jsx)(ze,{onClick:j,darkMode:s,children:s?Object(z.jsx)(Me.a,{}):Object(z.jsx)(Ve.a,{})}),Object(z.jsx)(ze,{onClick:function(e){return function(e){l(e.currentTarget)}(e)},darkMode:s,children:Object(z.jsx)(Fe.a,{})}),Object(z.jsx)(ke.a,{open:b,anchorEl:o,onClose:function(){l(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(z.jsxs)(Je,{children:[Object(z.jsx)(we.a,{onChange:function(e){return c(e.hex)},color:r,width:"200px"}),Object(z.jsxs)(Be,{children:[Object(z.jsx)(q.a,{variant:"contained",color:"secondary",onClick:function(){return e(r,"secondary")},children:"Set Secondary"}),Object(z.jsx)(q.a,{variant:"contained",color:"primary",onClick:function(){return e(r,"primary")},children:"Set primary"})]})]})})]})},Ye=D.b.div(x||(x=Object(S.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\tbackground-color: rgb(29, 28, 28);\n"]))),$e=D.b.div(O||(O=Object(S.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\twidth: 15%;\n\tmax-height: 100%;\n\tbackground-color: ",";\n\tmargin: 1rem 0 1rem 1rem;\n\tborder-radius: 10px;\n\tbox-shadow: 0 0 1em ",";\n\t&.dark {\n\t\tbackground-color: $dark-mode;\n\t}\n"])),(function(e){return e.darkMode?he:xe}),Oe),Ge=D.b.div(p||(p=Object(S.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\twidth: 100%;\n\ttext-align: center;\n"]))),He=D.b.div(f||(f=Object(S.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\tbackground-color: ",";\n\tmargin: 1rem;\n\tmax-height: 8vh;\n\tmin-height: 8vh;\n\tmax-width: 100%;\n\ttext-transform: uppercase;\n\tborder-radius: 10px;\n\tbox-shadow: 0 0 1em ",";\n\t","\n"])),xe,Oe,(function(e){return e.darkMode?"\n                background-color: ".concat(he,";\n                color: ").concat(xe,";"):""})),Ue=D.b.input(m||(m=Object(S.a)(["\n\twidth: 90%;\n\theight: 90%;\n\tborder: none;\n\ttext-align: center;\n\tborder-radius: 10px;\n\tbox-shadow: none;\n\tfont-size: 40px;\n\t&:focus {\n\t\toutline: none;\n\t}\n\t","\n"])),(function(e){return e.darkMode?"\n                background-color: ".concat(he,";\n                color: ").concat(xe,";"):""})),Ke=D.b.div(g||(g=Object(S.a)(["\n\tdisplay: flex;\n\tbackground-color: ",";\n\tmargin: 1rem 0 1rem 1rem;\n\tmargin: 0 1rem 1rem 1rem;\n\toverflow: auto;\n\tjustify-content: center;\n\tborder-radius: 10px;\n\tbox-shadow: 0 0 1em ",";\n\theight: 100vh;\n"])),(function(e){return e.darkMode?he:xe}),Oe),Qe=function(){var e=JSON.parse(localStorage.getItem("data")||"[]"),t=Object(y.useState)("Add Car"),n=Object(M.a)(t,2),r=n[0],c=n[1],a=Object(y.useState)(""),i=Object(M.a)(a,2),o=i[0],l=i[1],d=Object(y.useContext)(U).darkMode;return Object(z.jsx)(T.a,{children:Object(z.jsxs)(Ye,{children:[Object(z.jsx)($e,{darkMode:d,children:Object(z.jsx)(Ee,{})}),Object(z.jsxs)(Ge,{children:[Object(z.jsx)(He,{darkMode:d,children:"Collection"===r?Object(z.jsx)(Ue,{placeholder:"Search",darkMode:d,onChange:function(e){return function(e){l(e.target.value.trim().replace(/\s/g,""))}(e)}}):Object(z.jsx)("h1",{children:r})}),Object(z.jsx)(Ke,{darkMode:d,children:Object(z.jsxs)(V.c,{children:[Object(z.jsx)(V.a,{exact:!0,path:"/",children:Object(z.jsx)(ee,{setTitle:c})}),Object(z.jsx)(V.a,{path:"/feed",children:Object(z.jsx)(ye,{fetchedData:e,search:o,setSearch:l,setTitle:c})})]})})]})]})})},Re=n(177),We=n(355),Xe=n(27),Ze=n(175),_e=D.b.div(v||(v=Object(S.a)(["\n\theight: 100vh;\n"]))),et=function(){var e=Object(y.useContext)(U).darkMode,t=Object(y.useContext)(G).colors,n=Object(Re.a)({palette:{type:e?"dark":"light",primary:{main:t.primary},secondary:{main:t.secondary}}});return Object(z.jsx)(We.a,{theme:n,children:Object(z.jsx)(_e,{className:"App",children:Object(z.jsx)(Xe.a,{utils:Ze.a,children:Object(z.jsx)(Qe,{})})})})},tt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,364)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};n(314);w.a.render(Object(z.jsx)(k.a.StrictMode,{children:Object(z.jsx)(K,{children:Object(z.jsx)(H,{children:Object(z.jsx)(et,{})})})}),document.getElementById("root")),tt()}},[[315,1,2]]]);
//# sourceMappingURL=main.1b0342fb.chunk.js.map