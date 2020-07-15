(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{16:function(t,e,n){t.exports={root:"TodoList_root__29eoQ",empty:"TodoList_empty__ug84N"}},17:function(t,e,n){t.exports={todoItem:"TodoItem_todoItem__1hpbC",edit:"TodoItem_edit__1le0P"}},19:function(t,e,n){t.exports={todoInput:"TodoInput_todoInput__1a6jQ",input:"TodoInput_input__QOK2C"}},28:function(t,e,n){t.exports=n(42)},33:function(t,e,n){},34:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(11),i=n.n(r),c=(n(33),n(34),n(16)),d=n.n(c),u=n(17),l=n.n(u),s=n(6),m=n(54),f=n(23),O=n.n(f),p=n(24),E=n.n(p),_=n(26),T=n(19),v=n.n(T),b=n(2),L=function(t){return t.todo.todoList},y=function(t){return t.todo.todoList.length},D=function(t){return t.todo.editMode},j=Object(b.a)(L,(function(t){return Object.values(t)})),g=Object(b.a)(L,D,(function(t,e){return t.find((function(t){return t.id===e}))})),h=Object(s.b)((function(t){return{task:g(t)}}),{addTodo:function(t,e,n){return function(o){if(e)return o({type:"EDIT_TODO",payload:{text:t,task:e,index:n}});o({type:"ADD_TODO",payload:{id:Object(m.a)(),text:t}})}}})((function(t){var e=t.addTodo,n=t.task,r=t.index,i=Object(o.useState)((null===n||void 0===n?void 0:n.text)||""),c=Object(_.a)(i,2),d=c[0],u=c[1],l=function(){e(d,n,r),u("")};return a.a.createElement("div",{className:v.a.todoInput},a.a.createElement("input",{value:d,onChange:function(t){return u(t.target.value)},onKeyDown:function(t){return function(t){"Enter"===t.key&&l()}(t)},className:v.a.input}),a.a.createElement("button",{onClick:function(){return l()}},n?"edit":"add"))})),x=Object(s.b)((function(t){return{editMode:D(t)}}),{deleteTodo:function(t){return{type:"DELETE_TODO",payload:{id:t}}},setEditMode:function(t){return{type:"EDIT_MODE",payload:{id:t}}}})((function(t){var e=t.id,n=t.text,o=t.index,r=t.deleteTodo,i=t.editMode,c=t.setEditMode;return a.a.createElement(a.a.Fragment,null,i===e?a.a.createElement(h,{index:o}):a.a.createElement("div",{className:l.a.todoItem},a.a.createElement("span",null,o+1,") ",n),a.a.createElement("div",{className:l.a.edit},a.a.createElement(O.a,{onClick:function(){return c(e)}}),a.a.createElement(E.a,{onClick:function(){return r(e)}}))))})),I=Object(s.b)((function(t){return{todoList:j(t),numTodo:y(t)}}),{loadTodosFromLocalStorage:function(t){return{type:"LOAD_TODOS_FROM_LOCALSTORAGE",payload:{todoList:t}}}})((function(t){var e=t.todoList,n=t.numTodo,r=t.loadTodosFromLocalStorage,i=JSON.parse(localStorage.getItem("todoList"));return Object(o.useEffect)((function(){i.length>0&&r(i)}),[]),Object(o.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(e))}),[e]),a.a.createElement("div",{className:d.a.root},a.a.createElement("div",null,"You have ",n," Todos"),a.a.createElement("div",null,0===n?a.a.createElement("span",{className:d.a.empty},"Empty, add task"):e.map((function(t,e){return a.a.createElement(x,{key:t.id,id:t.id,text:t.text,index:e})}))),a.a.createElement("div",null,a.a.createElement(h,null)))}));var k=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(I,null))},M=n(13),S=Object(M.b)({name:"counter",initialState:{value:0},reducers:{increment:function(t){t.value+=1},decrement:function(t){t.value-=1},incrementByAmount:function(t,e){t.value+=e.payload}}}),A=S.actions,w=(A.increment,A.decrement,A.incrementByAmount,S.reducer),N=n(25),C=n(7),F={todoList:[],editMode:null},B=Object(M.a)({reducer:{counter:w,todo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0,n=e.type,o=e.payload;switch(n){case"ADD_TODO":return Object(C.a)({},t,{todoList:[].concat(Object(N.a)(t.todoList),[o])});case"DELETE_TODO":return Object(C.a)({},t,{todoList:t.todoList.filter((function(t){return t.id!==o.id}))});case"EDIT_MODE":return Object(C.a)({},t,{editMode:o.id});case"EDIT_TODO":return Object(C.a)({},t,{todoList:t.todoList.map((function(t){return t.id===o.task.id?Object(C.a)({},t,{text:o.text}):t})),editMode:null});case"LOAD_TODOS_FROM_LOCALSTORAGE":return Object(C.a)({},t,{todoList:o.todoList});default:return t}}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:B},a.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.f433b800.chunk.js.map