(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{149:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(50),a=n.n(s),i=(n(149),n(150),n(54)),r=n(177),o=n(7);function d(){var e=Object(c.useState)("home"),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(o.jsx)("div",{children:Object(o.jsx)(r.a,{pointing:!0,secondary:!0,children:Object(o.jsx)(r.a.Item,{id:"home",name:"home",active:"home"===n,onClick:function(e){var t=e.target;s(t.id)}})})})}var u=n(175),l=n(178),j=n(10),b=n(68),h=n(180),O=n(182),f=n(183),x=n(179),m=n(174),p=n(77),v=n(132),g=[{Id:1,Content:"Drink some coffee",Active:!0,Created:new Date,Edited:new Date},{Id:2,Content:"Develop a ToDo program",Active:!0,Created:new Date,Edited:new Date}],C=function(e){return g.find((function(t){return t.Id===e}))},k=function(e){if(0===e.Id){var t=Math.max.apply(Math,Object(v.a)(g.map((function(e){return e.Id}))))+1;e.Id=t,g.push(e)}else{var n=g.find((function(t){return t.Id===e.Id}));n&&(g[g.indexOf(n)]=e)}return e},I={message:null,setMessage:null,tasks:[],setTasks:null},T=Object(c.createContext)(I);function A(e){var t=e.children,n=Object(c.useState)([]),s=Object(i.a)(n,2),a=s[0],r=s[1],d=Object(c.useState)(null),u=Object(i.a)(d,2),l=u[0],j=u[1];return Object(c.useEffect)((function(){r(g)}),[]),Object(o.jsx)(T.Provider,{value:{tasks:a,setTasks:r,message:l,setMessage:j},children:t})}function E(){var e=Object(c.useContext)(T),t=e.tasks,n=e.setTasks,s=e.setMessage;function a(e){!function(e){if(e){var t=g.find((function(t){return t.Id===e}));t&&g.splice(g.indexOf(t),1)}}(e),n(t.filter((function(t){return t.Id!==e}))),s({success:!0,header:"Success",content:"Task successsfully deleted"})}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h.a,{as:"h2",textAlign:"center",children:" List of tasks"}),t.length>0&&t.map((function(e){return Object(o.jsxs)(O.a,{children:[Object(o.jsx)(h.a,{children:e.Content}),Object(o.jsxs)(f.a,{children:[Object(o.jsxs)(f.a.Column,{floated:"left",mobile:16,tablet:8,computer:8,children:[Object(o.jsx)(x.a,{size:"mini",type:"button",onClick:function(){return function(e){var t=C(e);t&&(t.Edited=new Date,t.Active=!t.Active,k(t),s({success:!0,header:"Success",content:"Task successsfully edited"}))}(e.Id)},color:e.Active?"orange":"teal",children:e.Active?"Active":"Already done"}),e.Created<e.Edited?Object(o.jsxs)("p",{children:["Edited: ",e.Edited.toLocaleDateString()," at ",e.Edited.toLocaleTimeString()]}):Object(o.jsxs)("p",{children:["Created: ",e.Created.toLocaleDateString()," at ",e.Created.toLocaleTimeString()]})]}),Object(o.jsx)(f.a.Column,{floated:"right",mobile:16,tablet:7,computer:7,children:Object(o.jsxs)("div",{className:"ui two buttons",children:[Object(o.jsx)(x.a,{color:"green",as:b.b,to:"/edittodo/".concat(e.Id),children:"Edit"}),Object(o.jsx)(x.a,{color:"orange",onClick:function(){return a(e.Id)},children:"Delete"})]})})]})]},e.Id)})),Object(o.jsx)(m.a,{horizontal:!0,children:Object(o.jsxs)(h.a,{as:"h4",children:[Object(o.jsx)(p.a,{name:"edit outline"}),"New Task"]})}),Object(o.jsx)(x.a,{as:b.c,to:"/newtodo",positive:!0,content:"Create Task"})]})}var w=n(102),D=n(82),S=n(176);function y(){var e=Object(c.useContext)(T),t=e.tasks,n=e.message,s=e.setMessage,a=Object(j.f)(),r=Object(j.g)().id,d=Object(c.useState)({Id:0,Content:"",Active:!0,Created:new Date,Edited:new Date}),u=Object(i.a)(d,2),l=u[0],b=u[1];return Object(c.useEffect)((function(){if(r){var e=C(Number(r));e&&b(e)}}),[r]),Object(c.useEffect)((function(){null!==n&&s(null)}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(h.a,{as:"h2",textAlign:"center",children:[r?"Edit":"New"," task"]}),Object(o.jsxs)(S.a,{onSubmit:function(){(function(){if(""===l.Content.trim())return s({success:!1,header:"Empty Task",content:"Task is empty, please fill task description"}),!1;if(t.some((function(e){return e.Content===l.Content})))return s({success:!1,header:"Task duplication",content:"Such task already exist, please submit another task"}),!1;return!0})()&&(0!==l.Id&&(l.Edited=new Date),k(l),s({success:!0,header:"Success",content:"Task successsfully added"}),a.push("/"))},error:!0,children:[Object(o.jsx)(S.a.Input,{required:!0,label:"Task description",placeholder:"Write the task here",value:l.Content||"",name:"Content",onChange:function(e){var t=e.target,c=t.name,a=t.value;b(Object(D.a)(Object(D.a)({},l),{},Object(w.a)({},c,a))),null!==n&&s(null)}}),Object(o.jsx)(S.a.Checkbox,{label:"Active",checked:l.Active||!1,name:"Active",onChange:function(){b(Object(D.a)(Object(D.a)({},l),{},{Active:!l.Active})),null!==n&&s(null)}}),Object(o.jsx)(x.a,{positive:!0,type:"submit",children:"Submit"}),Object(o.jsx)(x.a,{onClick:function(){a.push("/"),null!==n&&s(null)},type:"button",children:"Cancel"})]})]})}var L=function(){var e=Object(c.useContext)(T).message;return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{}),Object(o.jsxs)(u.a,{text:!0,style:{marginTop:"3em"},children:[Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/",exact:!0,component:E}),Object(o.jsx)(j.a,{path:["/newtodo","/edittodo/:id"],component:y})]}),e&&Object(o.jsx)(l.a,{error:!e.success,success:e.success,header:e.header,content:e.content})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,184)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};a.a.render(Object(o.jsx)(A,{children:Object(o.jsx)(b.a,{children:Object(o.jsx)(L,{})})}),document.getElementById("root")),F()}},[[162,1,2]]]);
//# sourceMappingURL=main.cf4e9d83.chunk.js.map