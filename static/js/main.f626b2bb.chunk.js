(this.webpackJsonpfront_end_contactos=this.webpackJsonpfront_end_contactos||[]).push([[0],{16:function(t,e,c){},17:function(t,e,c){},35:function(t,e,c){},61:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(28),o=c.n(a),r=(c(16),c(3)),s=(c(35),c(18)),i=c.n(s),j=c(29),b=c(10),l=c.n(b),d=function(){var t=Object(j.a)(i.a.mark((function t(e){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://backend-proyecto-contactos.herokuapp.com/obtener");case 2:c=t.sent,e(c.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=c(6),m=c(8),O=c(1);var h=function(t){var e=t.state,c=t.showEdit,n=t.setRefrescar,a=t.refrescar,o=Object(u.b)().user,s=Object(m.b)(),i=Object(r.a)(s,2),j=i[0],b=i[1],d=function(t){var c;c=e.id_contactos,l.a.get("https://backend-proyecto-contactos.herokuapp.com/borrar/".concat(c)),n(!t)};return Object(O.jsxs)("div",{className:"contenedor",children:[Object(O.jsxs)("div",{className:"contenedor_info",children:[Object(O.jsx)("img",{alt:e.nombre_contacto,src:"/FrontEnd-Proyecto-Contactos-/img/contact.png"}),Object(O.jsxs)("div",{className:"container_info-text",children:[Object(O.jsx)("p",{className:"text_name",children:e.nombre_contacto}),Object(O.jsx)("p",{className:"text_number",children:e.numero_contacto})]})]}),Object(O.jsxs)("div",{className:"container_button",children:[Object(O.jsxs)("button",{className:"btns",onClick:function(){o?c(e.id_contactos,e.nombre_contacto,e.numero_contacto):j.error("Para poder Actualizar necesita iniciar sesion",{timeout:"1100"})},children:["Actualizar",Object(O.jsx)("img",{src:"/FrontEnd-Proyecto-Contactos-/img/iconEdit.svg",alt:"edit"})]}),Object(O.jsxs)("button",{className:"btns",onClick:function(){o?d(a,e.id_contactos):j.error("Para poder Eliminar necesita iniciar sesion",{timeout:"1000"})},children:["Eliminar",Object(O.jsx)("img",{src:"/FrontEnd-Proyecto-Contactos-/img/iconDelete.svg",alt:"delete"})]})]}),Object(O.jsx)(m.a,{ref:b})]},e.id_contactos)},x=c(7),g=c(9);c(17);var f=function(t){var e=t.children,c=t.onClick;return Object(O.jsx)("button",{className:"btn_send",onClick:c,children:e})},p=function(t){var e=t.setMostrarInsertar,c=Object(n.useState)({nombre:"",numero:0}),a=Object(r.a)(c,2),o=a[0],s=a[1],i=function(t){s(Object(g.a)(Object(g.a)({},o),{},Object(x.a)({},t.target.name,t.target.value)))};return Object(O.jsxs)("div",{className:"container_form_add",children:[Object(O.jsx)("h2",{children:"Agregar Contacto"}),Object(O.jsxs)("div",{className:"form_add",children:[Object(O.jsxs)("div",{className:"container__input",children:[Object(O.jsx)("label",{htmlFor:"nombre",children:"Nombre de Contacto:"}),Object(O.jsx)("input",{id:"nombre",name:"nombre",onChange:i})]}),Object(O.jsxs)("div",{className:"container__input",children:[Object(O.jsx)("label",{htmlFor:"numero",children:"N\xfamero de celular:"}),Object(O.jsx)("input",{id:"numero",name:"numero",onChange:i})]}),Object(O.jsx)(f,{onClick:function(){var t,c;t=o.nombre,c=o.numero,l.a.get("https://backend-proyecto-contactos.herokuapp.com/insertar/".concat(t,"/").concat(c)),e(!1)},children:"Agregar"})]})]})};var v=function(t){var e=t.contactoEditar,c=t.setMostrarActualizar,a=Object(n.useState)({nombre:"".concat(e.nombre),numero:"".concat(e.numero)}),o=Object(r.a)(a,2),s=o[0],i=o[1],j=function(t){i(Object(g.a)(Object(g.a)({},s),{},Object(x.a)({},t.target.name,t.target.value)))};return console.log(e),Object(O.jsxs)("div",{className:"container_form_add",children:[Object(O.jsxs)("h2",{children:["Actualizar Contacto:",e.nombre]}),Object(O.jsxs)("div",{className:"form_add",children:[Object(O.jsxs)("div",{className:"container__input",children:[Object(O.jsx)("label",{htmlFor:"nombre",children:"Nombre de Contacto:"}),Object(O.jsx)("input",{id:"nombre",name:"nombre",onChange:j,value:s.nombre})]}),Object(O.jsxs)("div",{className:"container__input",children:[Object(O.jsx)("label",{htmlFor:"numero",children:"N\xfamero de celular"}),Object(O.jsx)("input",{id:"numero",name:"numero",onChange:j,value:s.numero})]}),Object(O.jsx)(f,{onClick:function(){var t,n,a;t=e.id,n=s.nombre,a=s.numero,l.a.get("https://backend-proyecto-contactos.herokuapp.com/actualizar/".concat(t,"/").concat(n,"/").concat(a)),c(!1)},children:"Actualizar"})]})]})},_=function(t){var e=t.className,c=Object(u.b)().loginWithRedirect;return Object(O.jsx)("button",{className:e,onClick:function(){return c()},children:"Iniciar Sesion"})},N=function(t){var e=t.className,c=Object(u.b)().logout;return Object(O.jsx)("button",{className:e,onClick:function(){return c()},children:"Cerrar Sesion"})};var C=function(){var t=Object(n.useState)(!1),e=Object(r.a)(t,2),c=e[0],a=e[1],o=Object(n.useState)([]),s=Object(r.a)(o,2),i=s[0],j=s[1],b=Object(u.b)().user,l=Object(n.useState)(!1),x=Object(r.a)(l,2),g=x[0],f=x[1],C=Object(n.useState)(!1),k=Object(r.a)(C,2),E=k[0],y=k[1],F=Object(n.useState)({}),A=Object(r.a)(F,2),P=A[0],S=A[1],w=Object(m.b)(),z=Object(r.a)(w,2),R=z[0],I=z[1];Object(n.useEffect)((function(){d(j)}),[c,g,E]);var M=function(t,e,c){y(!E),S({id:t,nombre:e,numero:c})};return console.log(b),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"container_log_btns",children:[Object(O.jsx)(_,{className:"login"}),Object(O.jsx)(N,{className:"logout"})]}),Object(O.jsxs)("div",{className:"container__title",children:[Object(O.jsx)("h1",{children:"Lista de contactos"}),Object(O.jsxs)("button",{className:"btn_newContact",onClick:function(){b?(console.log("El usuario si existe"),f(!g)):R.error("Para poder Crear un contacto necesita iniciar sesion",{timeout:"1100"})},children:["Agregar contacto",Object(O.jsx)("img",{className:"img-btn",src:"/FrontEnd-Proyecto-Contactos-/img/iconContact.svg",alt:"add_contact"})]})]}),Object(O.jsx)(m.a,{ref:I}),Object(O.jsxs)("div",{className:"padre_contenedor",children:[g?Object(O.jsx)(p,{setMostrarInsertar:f}):"",E?Object(O.jsx)(v,{contactoEditar:P,setMostrarActualizar:y}):"",0===i.length?Object(O.jsx)("h2",{className:"loading",children:"Cargando..."}):i?i.map((function(t){return Object(O.jsx)(h,{showEdit:M,state:t,setRefrescar:a,refrescar:c},t.id_contactos)})):"No existen contactos"]})]})},k=c(30),E=c(2);o.a.render(Object(O.jsx)(u.a,{domain:"dev--cvjhxuo.us.auth0.com",clientId:"nQVsRhRaEuhsHDHDXqrQ61AbEk4bRQCB",redirectUri:"https://alex123-g.github.io/FrontEnd-Proyecto-Contactos-",children:Object(O.jsx)(k.a,{children:Object(O.jsxs)(E.c,{children:[Object(O.jsx)(E.a,{path:"/FrontEnd-Proyecto-Contactos-/",element:Object(O.jsx)(C,{})}),Object(O.jsx)(E.a,{path:"/FrontEnd-Proyecto-Contactos-/login",element:Object(O.jsx)(_,{})})]})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.f626b2bb.chunk.js.map