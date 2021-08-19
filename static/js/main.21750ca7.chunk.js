(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Container_container__3L51t"}},13:function(t,e,n){t.exports={find:"Filter_find__mj_-W"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=(n(19),n(14)),s=n(2),u=n(3),l=n(5),b=n(4),d=n(11),m=n.n(d),h=n(0),f=function(t){var e=t.children;return Object(h.jsx)("div",{className:m.a.container,children:e})},j=n(12),p=n(7),C=n.n(p),O=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.getSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit(a,c),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t.getInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{className:C.a.form,onSubmit:this.getSubmit,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:this.getInputChange,required:!0})]}),Object(h.jsxs)("label",{children:["Phone number",Object(h.jsx)("input",{type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:this.getInputChange,required:!0})]}),Object(h.jsx)("button",{className:C.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=n(13),v=n.n(g),x=function(t){var e=t.filter,n=t.onChange;return Object(h.jsxs)("label",{className:v.a.find,children:["Find contacts by name",Object(h.jsx)("input",{type:"text",value:e,onChange:n})]})},_=n(8),S=n.n(_),y=function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(h.jsx)("ul",{className:S.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{children:[a,": ",c,Object(h.jsx)("button",{className:S.a.btn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},F=n(9),N=n.n(F),k=n(23),w=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:Object(k.a)(),name:e,number:n};t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert(e+" is already in contacts"):t.setState({contacts:[].concat(Object(o.a)(t.state.contacts),[a])})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.hadleFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilterContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(h.jsxs)(f,{children:[Object(h.jsx)("h1",{className:N.a.title,children:"Phonebook"}),Object(h.jsx)(O,{onSubmit:this.addContact}),Object(h.jsx)("h2",{className:N.a.subtitle,children:"Contacts"}),Object(h.jsx)(x,{onChange:this.hadleFilter,filter:this.state.filter}),Object(h.jsx)(y,{contacts:this.getFilterContact(),onDeleteContacts:this.deleteContact})]})}}]),n}(a.Component),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),A()},7:function(t,e,n){t.exports={form:"ContactForm_form__2JvSi",btn:"ContactForm_btn__1zx2N"}},8:function(t,e,n){t.exports={list:"ContactsList_list__1u4wU",btn:"ContactsList_btn__1sqbe"}},9:function(t,e,n){t.exports={title:"App_title__ZikRm",subtitle:"App_subtitle__nPRyS"}}},[[21,1,2]]]);
//# sourceMappingURL=main.21750ca7.chunk.js.map