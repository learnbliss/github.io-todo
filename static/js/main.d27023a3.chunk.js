(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{16:function(t,e,n){t.exports={root:"TodoList_root__29eoQ",empty:"TodoList_empty__ug84N"}},17:function(t,e,n){t.exports={todoItem:"TodoItem_todoItem__1hpbC",edit:"TodoItem_edit__1le0P"}},19:function(t,e,n){t.exports={todoInput:"TodoInput_todoInput__1a6jQ",input:"TodoInput_input__QOK2C"}},28:function(t,e,n){t.exports=n(42)},33:function(t,e,n){},34:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(11),r=n.n(i),c=(n(33),n(34),n(16)),d=n.n(c),u=n(17),l=n.n(u),s=n(6),m=n(54),f=function(t){return{type:"EDIT_MODE",payload:{id:t}}},O=n(23),E=n.n(O),p=n(24),_=n.n(p),v=n(26),T=n(19),b=n.n(T),L=n(2),y=function(t){return t.todo.todoList},D=function(t){return t.todo.todoList.length},j=function(t){return t.todo.editMode},g=Object(L.a)(y,(function(t){return Object.values(t)})),h=Object(L.a)(y,j,(function(t,e){return t.find((function(t){return t.id===e}))})),x=Object(s.b)((function(t){return{task:h(t)}}),{addTodo:function(t,e,n){return function(o){if(e)return o({type:"EDIT_TODO",payload:{text:t,task:e,index:n}});o({type:"ADD_TODO",payload:{id:Object(m.a)(),text:t}})}},setEditMode:f})((function(t){var e=t.addTodo,n=t.task,i=t.index,r=t.setEditMode,c=Object(o.useState)((null===n||void 0===n?void 0:n.text)||""),d=Object(v.a)(c,2),u=d[0],l=d[1],s=function(){e(u,n,i),l("")};return a.a.createElement("div",{className:b.a.todoInput},a.a.createElement("input",{onBlur:function(){return r(null)},value:u,onChange:function(t){return l(t.target.value)},onKeyDown:function(t){return function(t){"Enter"===t.key&&s()}(t)},className:b.a.input}),a.a.createElement("button",{onClick:function(){return s()}},n?"edit":"add"))})),I=Object(s.b)((function(t){return{editMode:j(t)}}),{deleteTodo:function(t){return{type:"DELETE_TODO",payload:{id:t}}},setEditMode:f})((function(t){var e=t.id,n=t.text,o=t.index,i=t.deleteTodo,r=t.editMode,c=t.setEditMode;return a.a.createElement(a.a.Fragment,null,r===e?a.a.createElement(x,{index:o}):a.a.createElement("div",{className:l.a.todoItem},a.a.createElement("span",null,o+1,") ",n),a.a.createElement("div",{className:l.a.edit},a.a.createElement(E.a,{onClick:function(){return c(e)}}),a.a.createElement(_.a,{onClick:function(){return i(e)}}))))})),M=Object(s.b)((function(t){return{todoList:g(t),numTodo:D(t)}}),{loadTodosFromLocalStorage:function(t){return{type:"LOAD_TODOS_FROM_LOCALSTORAGE",payload:{todoList:t}}}})((function(t){var e=t.todoList,n=t.numTodo,i=t.loadTodosFromLocalStorage,r=JSON.parse(localStorage.getItem("todoList"));return Object(o.useEffect)((function(){(null===r||void 0===r?void 0:r.length)>0&&i(r)}),[]),Object(o.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(e))}),[e]),a.a.createElement("div",{className:d.a.root},a.a.createElement("div",null,"You have ",n," Todos"),a.a.createElement("div",null,0===n?a.a.createElement("span",{className:d.a.empty},"Empty, add task"):e.map((function(t,e){return a.a.createElement(I,{key:t.id,id:t.id,text:t.text,index:e})}))),a.a.createElement("div",null,a.a.createElement(x,null)))}));var k=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(M,null))},S=n(13),A=Object(S.b)({name:"counter",initialState:{value:0},reducers:{increment:function(t){t.value+=1},decrement:function(t){t.value-=1},incrementByAmount:function(t,e){t.value+=e.payload}}}),w=A.actions,N=(w.increment,w.decrement,w.incrementByAmount,A.reducer),C=n(25),B=n(7),F={todoList:[],editMode:null},J=Object(S.a)({reducer:{counter:N,todo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0,n=e.type,o=e.payload;switch(n){case"ADD_TODO":return Object(B.a)({},t,{todoList:[].concat(Object(C.a)(t.todoList),[o])});case"DELETE_TODO":return Object(B.a)({},t,{todoList:t.todoList.filter((function(t){return t.id!==o.id}))});case"EDIT_MODE":return Object(B.a)({},t,{editMode:o.id});case"EDIT_TODO":return Object(B.a)({},t,{todoList:t.todoList.map((function(t){return t.id===o.task.id?Object(B.a)({},t,{text:o.text}):t})),editMode:null});case"LOAD_TODOS_FROM_LOCALSTORAGE":return Object(B.a)({},t,{todoList:o.todoList});default:return t}}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:J},a.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.d27023a3.chunk.js.map