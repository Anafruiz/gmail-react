(this["webpackJsonpGmail-Project"]=this["webpackJsonpGmail-Project"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(20),i=a.n(c),l=(a(30),a(18)),r=a(11),o=(a(31),a(0));var d=function(e){return Object(o.jsxs)("form",{className:"text-align-right",children:[Object(o.jsxs)("button",{className:"form__btn",onClick:function(t){t.preventDefault(),e.handleInboxFilter()},children:[Object(o.jsx)("span",{className:"fas fa-inbox"}),"Recibidos"]}),Object(o.jsxs)("button",{className:"form__btn",onClick:function(t){t.preventDefault(),e.handleDeletedFilter()},children:[Object(o.jsx)("span",{className:"fas fa-trash"}),"Papelera"]}),Object(o.jsx)("input",{className:"form__input-text",type:"text",defaultValue:e.textFilter,placeholder:"Buscar un correo",onKeyUp:function(t){t.preventDefault();var a={value:t.target.value};e.handleTextFilter(a)}})]})},j=a(4),b=a(2),u=function(e){var t=e.showInbox?" recibidos":" borrados",a=""===e.textFilter?" y sin filtrar.":Object(o.jsxs)("span",{children:["y filtrando por:",Object(o.jsx)("span",{className:"text--bold",children:e.textFilter})]});return Object(o.jsxs)("p",{className:"mb-1",children:["La usuaria est\xe1 visualizando los emails"," ",Object(o.jsx)("span",{className:"text--bold",children:t}),a]})};var m=function(e){return Object(o.jsxs)("header",{children:[Object(o.jsxs)("div",{className:"col2 mb-1",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"title",children:Object(o.jsxs)(j.b,{to:"/",className:"text--decoration--none",children:[Object(o.jsx)("span",{className:"fas fa-envelope-open-text mr-1"}),"Gmail"]})})}),Object(o.jsx)(d,{textFilter:e.textFilter,handleInboxFilter:e.handleInboxFilter,handleTextFilter:e.handleTextFilter,handleDeletedFilter:e.handleDeletedFilter})]}),Object(o.jsx)(b.c,{children:Object(o.jsx)(b.a,{exact:!0,path:"/",children:Object(o.jsx)(u,{textFilter:e.textFilter,showInbox:e.showInbox})})})]})},h=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h4",{className:"title--medium pb-1",children:"Pol\xedtica de privacidad:"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus voluptates nulla assumenda hic, molestiae at quibusdam repudiandae magnam accusantium sed accusamus amet sunt molestias explicabo natus eum temporibus. Eum."}),Object(o.jsx)(j.b,{to:"/",children:Object(o.jsx)("span",{title:"Volver",className:"btn--close fas fa-times-circle text--decoration--none"})})]})},x=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{className:"title--medium pb-1",children:"Cookies:"}),Object(o.jsx)("p",{children:"Esta web no usa cookies, pero s\xed que usa un poquito de local storage ;)"}),Object(o.jsx)(j.b,{to:"/",children:Object(o.jsx)("span",{title:"Volver",className:"btn--close fas fa-times-circle text--decoration--none"})})]})},f=function(){var e=function(e,t){return Object(o.jsx)(j.b,{className:"nav__link text--decoration--none",to:t,children:e})};return Object(o.jsxs)("div",{className:"col2",children:[Object(o.jsxs)("small",{className:"text--primary-light",children:[e("Politica de privacidad","/privacy"),"/",e("Cookies","/Cookies"),"/",Object(o.jsx)(b.a,{path:"/",children:function(t){return!1===t.match.isExact?Object(o.jsxs)(o.Fragment,{children:["/",e("Ir a la home","/")]}):null}})]}),Object(o.jsx)("small",{className:"text--primary-light text-align-right",children:"Ejercicio de React / Desarrollado por @anafruiz"})]})},O=(a(38),function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{path:"/cookies",children:Object(o.jsx)(x,{})}),Object(o.jsx)(b.a,{path:"/privacy",children:Object(o.jsx)(h,{})}),Object(o.jsx)(b.a,{children:Object(o.jsx)(f,{})})]})})});a(39);var p=function(e){var t=!0===e.deleted?"text--decoration--through":"",a=!0===e.read?"":"text--bold",n=e.deleted?"fa-trash-restore":"fa-trash",s=function(t){return Object(o.jsx)("td",{className:"email--cell",children:Object(o.jsx)(j.b,{className:"email--link text--decoration--none",to:"email/".concat(e.id),children:t})})};return Object(o.jsxs)("tr",{className:"cursor-pointer ".concat(t).concat(a),children:[s(e.from),s(e.subject),s(e.time),Object(o.jsx)("td",{className:"text-align-right",children:Object(o.jsx)("button",{className:"form__btn fas ".concat(n),onClick:function(t){t.stopPropagation(),e.handleDeleteEmail(e.id,!e.deleted)}})})]})};var v=function(e){var t=e.emails.map((function(t){return Object(o.jsx)(p,{id:t.id,from:t.fromName,subject:t.subject,time:t.date,read:t.read,deleted:t.deleted,handleDeleteEmail:e.handleDeleteEmail},t.id)}));return Object(o.jsx)("table",{className:"table",children:Object(o.jsx)("tbody",{children:t})})},N=function(e,t,a){var n=t.toLowerCase();return e.filter((function(e){return!0===a?!e.deleted:e.deleted})).filter((function(e){return e.fromName.toLowerCase().includes(n)||e.subject.toLowerCase().includes(n)||e.body.toLowerCase().includes(n)}))},F=a(22),g=a(23),y=a(13),k=a(25),E=a(24),_=function(e){Object(k.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(F.a)(this,a),(n=t.call(this,e)).handleDelete=n.handleDelete.bind(Object(y.a)(n)),n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.props.handleReadEmail(this.props.id)}},{key:"handleDelete",value:function(){this.props.handleDeleteEmail(this.props.id)}},{key:"render",value:function(){var e=this.props.deleted?"fa-trash-restore":"fa-trash";return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"col2 mt-1 pt-1",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"title--meidum",children:this.props.subject}),Object(o.jsxs)("h3",{className:"title--small",children:[Object(o.jsx)("span",{className:"text--bold display-inline-block mr-1",children:this.props.fromName}),Object(o.jsx)("span",{className:"text-normal display-inline-block",children:this.props.frontEmail})]})]}),Object(o.jsxs)("div",{className:"text-align-right",children:[Object(o.jsx)(j.b,{className:"fas fa-times-circle form__btn",to:"/"}),Object(o.jsx)(j.b,{className:"form__btn fas ".concat(e),to:"/",onClick:this.handleDeleteEmail})]})]}),Object(o.jsx)("p",{children:this.props.body}),Object(o.jsxs)("div",{className:"mt-1",children:[Object(o.jsxs)("button",{className:"form__btn",onClick:this.handleClick,children:[Object(o.jsx)("span",{className:"fas fa-reply"}),"Responder"]}),Object(o.jsxs)("button",{className:"form__btn",children:[Object(o.jsx)("span",{className:"fas fa-reply-all"}),"Responder a todos"]}),Object(o.jsxs)("button",{className:"form__btn",children:[Object(o.jsx)("span",{className:"fas fa-share"}),"Reenviar a todos"]})]})]})}}]),a}(s.a.Component),D=function(e,t,a){return fetch("//beta.adalab.es/ejercicios-extra/api/emails/v01.json").then((function(e){return e.json()})).then((function(e){return e.results}))},I=function(e,t){localStorage.setItem(e,JSON.stringify(t))},w=function(e,t){var a=JSON.parse(localStorage.getItem("emailFilters"));return null===a?t:a},C=function(e){return e.loading?Object(o.jsx)("div",{className:"loading mt-1"}):null};var S=function(){var e=w("emailFilters",{textFilter:"",showInbox:!0}),t=Object(n.useState)([]),a=Object(r.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)(e.textFilter),d=Object(r.a)(i,2),j=d[0],u=d[1],h=Object(n.useState)(e.showInbox),x=Object(r.a)(h,2),f=x[0],p=x[1],F=Object(n.useState)(!0),g=Object(r.a)(F,2),y=g[0],k=g[1];Object(n.useEffect)((function(){D().then((function(e){return c(e)})).then((function(){return k(!1)}))}),[]),Object(n.useEffect)((function(){I("emailFilters",{textFilter:j,showInbox:f})}));var E=function(e){s.find((function(t){return t.id===e})).read=!0,c(Object(l.a)(s))},S=function(e,t){return R(e,"deleted",t)},R=function(e,t,a){s.find((function(t){return t.id===e}))[t]=a,c(Object(l.a)(s))};return Object(o.jsxs)("div",{children:[Object(o.jsx)(m,{textFilter:j,showInbox:f,handleInboxFilter:function(){p(!0)},handleDeletedFilter:function(){p(!1)},handleTextFilter:function(e){u(e.value)}}),Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{path:"/email/:emailId",render:function(e){var t=s.find((function(t){return t.id===e.match.params.emailId}));return void 0!==t?Object(o.jsx)(_,{fromName:t.fromName,fromEmail:t.fromEmail,subject:t.subject,body:t.body,id:t.id,deleted:t.deleted,handleDeleteEmail:S,handleReadEmail:E}):Object(o.jsx)("p",{children:"Email no encontrado"})}}),Object(o.jsx)(b.a,{path:"/",children:Object(o.jsx)(v,{emails:N(s,j,f),handleDeleteEmail:S})})]}),Object(o.jsx)(C,{loading:y}),Object(o.jsx)(O,{})]})};i.a.render(Object(o.jsx)(j.a,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e6eae9d9.chunk.js.map