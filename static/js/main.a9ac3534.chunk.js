(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{17:function(e,t,n){e.exports={todoItem:"TodoItem_todoItem__1hpbC",todoText:"TodoItem_todoText__3vmjo",edit:"TodoItem_edit__1le0P",checked:"TodoItem_checked__3oddJ",confirmButton:"TodoItem_confirmButton__3ovhF"}},23:function(e,t,n){e.exports={root:"TodoList_root__29eoQ",empty:"TodoList_empty__ug84N",revert:"TodoList_revert__3c9En",view:"TodoList_view__3mFKJ"}},31:function(e,t,n){e.exports={todoInput:"TodoInput_todoInput__1a6jQ",input:"TodoInput_input__QOK2C"}},49:function(e,t,n){e.exports=n(63)},54:function(e,t,n){},55:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(11),c=n.n(r),i=(n(54),n(55),n(25)),d=n(23),u=n.n(d),l=n(17),s=n.n(l),f=n(14),m=n(24),E=n.n(m),p=n(30),O=n(80),_=n(35),D=function(e){return e.todo.todoList||[]},T=function(e){return e.todo.todoList.length},v=function(e){return e.todo.editMode},L=Object(_.a)(D,v,(function(e,t){return null===e||void 0===e?void 0:e.find((function(e){return e.id===t}))})),b=function(e){return e.todo.confirmDeleteId},k=function(e){return e.todo.lastDeleted},h=function(e){return{type:"EDIT_MODE",payload:{id:e}}},y=n(40),j=n.n(y),I=n(41),C=n.n(I),g=n(46),x=n(31),S=n.n(x),w=n(37),M=n.n(w),N=n(36),A=n.n(N),R=Object(f.b)((function(e){return{task:L(e)}}),{addTodo:function(e,t){return function(n){if(t)return n({type:"EDIT_TODO",payload:{text:e,task:t}});n({type:"ADD_TODO",payload:{id:Object(O.a)(),text:e,checked:!1}})}},setEditMode:h})((function(e){var t=e.addTodo,n=e.task,r=e.setEditMode,c=e.edit,i=Object(o.useState)((null===n||void 0===n?void 0:n.text)||""),d=Object(g.a)(i,2),u=d[0],l=d[1],s=function(){0!==u.length&&(t(u,n),l(""))};return a.a.createElement("div",{className:S.a.todoInput},a.a.createElement("input",{onBlur:function(){return function(){if(n)return s();r(null)}()},autoFocus:!!n,value:u,onChange:function(e){return l(e.target.value)},onKeyDown:function(e){return function(e){"Enter"===e.key?s():"Escape"===e.key&&r(null)}(e)},className:S.a.input}),a.a.createElement("span",{onClick:function(){return s()}},c?a.a.createElement(A.a,null):a.a.createElement(M.a,null)))})),F=n(38),B=n.n(F),J=n(39),K=n.n(J),W=n(79),Q=Object(f.b)((function(e){return{editMode:v(e),confirmId:b(e)}}),{deleteTodo:function(e){return function(){var t=Object(p.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:"DELETE_TODO",payload:{id:e}}),setTimeout((function(){n({type:"CLEAR_LAST_DELETED"})}),3e3)}catch(o){console.error(o)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setEditMode:h,setChecked:function(e){return{type:"SET_CHECKED",payload:{id:e}}},confirmDelete:function(e){return{type:"CONFIRM_DELETE",payload:{id:e}}}})((function(e){var t=e.id,n=e.text,o=e.checked,r=e.index,c=e.deleteTodo,i=e.editMode,d=e.setEditMode,u=e.setChecked,l=e.confirmId,f=e.confirmDelete;return a.a.createElement(a.a.Fragment,null,i!==t||o?a.a.createElement("div",{className:s.a.todoItem},a.a.createElement("span",{className:s.a.todoText,onDoubleClick:function(){return d(t)}},o?a.a.createElement(B.a,{onClick:function(){return u(t)}}):a.a.createElement(K.a,{onClick:function(){return u(t)}}),a.a.createElement("span",{className:o?s.a.checked:""},r+1,") ",n)),a.a.createElement("div",{className:s.a.edit},a.a.createElement(j.a,{onClick:function(){return d(t)}}),a.a.createElement(C.a,{onClick:function(){return f(t)}}),l===t&&a.a.createElement("div",{className:s.a.confirmButton,onClick:function(){return f(null)}},a.a.createElement("span",null,"Want to delete this task?"),a.a.createElement(W.a,{onClick:function(){return c(t)},variant:"contained"},"Yes"),a.a.createElement(W.a,{onClick:function(){return f(null)},variant:"contained"},"No")))):a.a.createElement(R,{edit:!0}))})),G=n(43),H=n.n(G),V=n(42),Y=n.n(V),P=Object(f.b)((function(e){return{todoList:D(e),numTodo:T(e),lastDeleted:k(e)}}),{loadTodosFromLocalStorage:function(){return function(e){e({type:"LOAD_TODOS_FROM_LOCALSTORAGE",payload:{localStorageData:JSON.parse(localStorage.getItem("todoList"))}})}},addTodosInLocalStorage:function(e){return function(){localStorage.setItem("todoList",JSON.stringify(e))}},revertDeleted:function(){return function(){var e=Object(p.a)(E.a.mark((function e(t,n){var o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n(),e.prev=1,e.next=4,k(o);case 4:e.sent&&t({type:"REVERT_DELETED"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()}})((function(e){var t=e.todoList,n=e.numTodo,r=e.loadTodosFromLocalStorage,c=e.addTodosInLocalStorage,d=e.lastDeleted,l=e.revertDeleted;return Object(o.useEffect)((function(){r()}),[]),Object(o.useEffect)((function(){c(t)}),[c,t]),a.a.createElement("div",{className:u.a.root},a.a.createElement("div",null,"You have ",n," Todos"),a.a.createElement("div",null,0!==n&&t?t.map((function(e,t){return a.a.createElement(Q,{key:e.id,id:e.id,text:e.text,checked:e.checked,index:t})})):a.a.createElement("span",{className:u.a.empty},"Empty, add task")),a.a.createElement("div",null,a.a.createElement(R,null)),a.a.createElement("span",{onClick:function(){return l()},className:Y()(u.a.revert,Object(i.a)({},u.a.view,d))},"revert back ",a.a.createElement(H.a,null)))}));var $=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(P,null))},q=n(12),z=n(44),U=n(45),X=n(32),Z=n(6),ee={todoList:[],editMode:null,confirmDeleteId:null,lastDeleted:null},te=Object(q.combineReducers)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case"ADD_TODO":return Object(Z.a)({},e,{todoList:[].concat(Object(X.a)(e.todoList),[o])});case"DELETE_TODO":return Object(Z.a)({},e,{todoList:e.todoList.filter((function(e){return e.id!==o.id})),lastDeleted:e.todoList.find((function(e){return e.id===o.id?e:null})),confirmDeleteId:null});case"EDIT_MODE":return Object(Z.a)({},e,{editMode:o.id});case"EDIT_TODO":return Object(Z.a)({},e,{todoList:e.todoList.map((function(e){return e.id===o.task.id?Object(Z.a)({},e,{text:o.text}):e})),editMode:null});case"LOAD_TODOS_FROM_LOCALSTORAGE":return Object(Z.a)({},e,{todoList:o.localStorageData});case"SET_CHECKED":return Object(Z.a)({},e,{todoList:e.todoList.map((function(e){return e.id===o.id?Object(Z.a)({},e,{checked:!e.checked}):e}))});case"CONFIRM_DELETE":return Object(Z.a)({},e,{confirmDeleteId:o.id});case"CLEAR_LAST_DELETED":return Object(Z.a)({},e,{lastDeleted:null});case"REVERT_DELETED":return Object(Z.a)({},e,{todoList:[].concat(Object(X.a)(e.todoList),[e.lastDeleted]),lastDeleted:null});default:return e}}}),ne=Object(q.applyMiddleware)(z.a),oe=Object(q.createStore)(te,Object(U.composeWithDevTools)(ne));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f.a,{store:oe},a.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.a9ac3534.chunk.js.map