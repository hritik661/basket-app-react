(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{15:function(e,t,a){e.exports=a(32)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),i=a(1),l=a(2),u=a(12),m=a(3);function o(e,t){return e.products}function s(e,t){return e.products.find((function(e){return e.id===t.id}))}var d={items:[],currency:"EUR"};function p(e,t){return Object(m.a)(Object(m.a)({},e),{},{items:[].concat(Object(u.a)(e.items),[t.productId])})}function E(e,t){return Object(m.a)(Object(m.a)({},e),{},{items:e.items.filter((function(e){return e!==t.productId}))})}function f(e){return{type:"cart/REMOVE",payload:{productId:e}}}function v(e,t){return-1!==e.cart.items.indexOf(t.id)}function b(e,t){return e.cart.items.map((function(t){return s(e,{id:t})}))}function g(e,t){return e.cart.currency}function h(e,t){return e.cart.items.reduce((function(t,a){return t+s(e,{id:a}).price}),0)}var y=function(e){var t=e.name,a=e.price,r=e.currency,c=e.onClick;return n.a.createElement("div",{className:"cart-item"},n.a.createElement("div",null,n.a.createElement("button",{className:"btn btn-danger btn-xs",onClick:c},"X"),n.a.createElement("span",{className:"cart-item__name"},t)),n.a.createElement("div",{className:"cart-item__price"},a," ",r))},N=function(e){var t=e.items,a=e.total,r=e.currency,c=e.removeFromCart;return n.a.createElement("div",null,n.a.createElement("h3",null,"Shopping Cart"),n.a.createElement("div",{className:"cart"},n.a.createElement("div",{className:"panel panel-default"},n.a.createElement("div",{className:"panel-body"},t.length>0&&n.a.createElement("div",{className:"cart__body"},t.map((function(e){return n.a.createElement(y,Object.assign({key:e.id},e,{onClick:function(){return c(e.id)}}))}))),0===t.length&&n.a.createElement("div",{className:"alert alert-info"},"Cart is empty"),n.a.createElement("div",{className:"cart__total"},"Total: ",a," ",r)))))},_=(a(28),N),O=Object(i.b)((function(e,t){return{items:b(e),currency:g(e),total:h(e)}}),(function(e){return{removeFromCart:function(t){return e(f(t))}}}))(_),j=a(10),C=a(11),k=a(14),R=a(13),w=function(e){Object(k.a)(a,e);var t=Object(R.a)(a);function a(){var e;Object(j.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(){var t=e.props,a=t.id,r=t.addToCart,n=t.removeFromCart;t.isInCart?n(a):r(a)},e}return Object(C.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.price,r=e.currency,c=e.image,i=e.isInCart;return n.a.createElement("div",{className:"product thumbnail"},n.a.createElement("img",{src:c,alt:"product"}),n.a.createElement("div",{className:"caption"},n.a.createElement("h3",null,t),n.a.createElement("div",{className:"product__price"},a," ",r),n.a.createElement("div",{className:"product__button-wrap"},n.a.createElement("button",{className:i?"btn btn-danger":"btn btn-primary",onClick:this.handleClick},i?"Remove":"Add to cart"))))}}]),a}(r.Component),I=(a(29),w),U=Object(i.b)((function(e,t){return{isInCart:v(e,t)}}),(function(e){return{addToCart:function(t){return e({type:"cart/ADD",payload:{productId:t}})},removeFromCart:function(t){return e(f(t))}}}))(I),D=function(e){var t=e.products;return n.a.createElement("div",null,n.a.createElement("h3",null,"Products"),n.a.createElement("ul",{className:"product-list"},t.map((function(e){return n.a.createElement("li",{key:e.id,className:"product-list__item"},n.a.createElement(U,e))}))))},T=(a(30),D),A=Object(i.b)((function(e,t){return{products:o(e)}}))(T),S=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",null,"Basket App"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8"},n.a.createElement(A,null)),n.a.createElement("div",{className:"col-md-4"},n.a.createElement(O,null))))},X=[{id:1,name:"chair",price:499.99,currency:"EUR",image:"images/01.jpg"},{id:2,name:"chair",price:249.99,currency:"EUR",image:"images/02.jpg"},{id:4,name:"chair",price:239.99,currency:"EUR",image:"images/04.jpg"},{id:6,name:"chair Little",price:119.99,currency:"EUR",image:"images/06.jpg"},{id:5,name:"chair Peacock",price:599.99,currency:"EUR",image:"images/05.jpg"},{id:3,name:"chair",price:149.99,currency:"EUR",image:"images/03.jpg"}],F=(a(31),Object(l.b)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"cart/ADD":return p(e,t.payload);case"cart/REMOVE":return E(e,t.payload);default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e}})),V=Object(l.c)(F,{products:X},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(c.render)(n.a.createElement(i.a,{store:V},n.a.createElement(S,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a184af51.chunk.js.map