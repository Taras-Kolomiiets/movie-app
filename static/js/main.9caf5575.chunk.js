(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(15),a=c.n(i),s=c(11),r=c(3),o=c(9),j=c(8),m="9226d2cbb7ed48fe3f3e70d3c7574602",l="https://api.themoviedb.org/",b="".concat(l,"3/movie/top_rated?api_key=").concat(m,"&language=en-US&page=1"),u=function(e,t){console.log(t);var c=null;c=e?"".concat(l,"3/search/movie?api_key=").concat(m,"&query=").concat(e):b,fetch(c).then((function(e){return e.json()})).then((function(e){t(e.results)}))},v="GET_MOVIES_ITEM",d=function(e){return{type:v,payload:e}},O=c(17),p=Object(O.a)((function(e){return e.movies.movies}),(function(e,t){return t}),(function(e,t){return e.filter((function(e){return e.id===Number(t)}))})),h=c(1),f=function(e){var t=e.moviesItem;return Object(h.jsx)("div",{className:"movie-wrap",children:t.map((function(e){return Object(h.jsxs)("div",{className:"movie-item",children:[Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w342"+e.backdrop_path,alt:"",className:"movie-item-img"}),Object(h.jsxs)("div",{className:"movie-item-wrapper",children:[Object(h.jsx)("h3",{className:"movie-item-title",children:e.title}),Object(h.jsxs)("p",{className:"movie-item-stats",children:[Object(h.jsx)("span",{className:"movie-item-description",children:"Rating: "}),e.vote_average]}),Object(h.jsxs)("p",{className:"movie-item-stats",children:[Object(h.jsx)("span",{className:"movie-item-description",children:" Overview: "}),e.overview]}),Object(h.jsxs)("p",{className:"movie-item-stats",children:[Object(h.jsx)("span",{className:"movie-item-description",children:"Release date: "}),e.release_date]})]})]},e.id)}))})},x=function(){var e=Object(r.f)().id,t=Object(j.c)(),c={moviesItem:Object(j.d)((function(t){return p(t,e)}))},i=Object(n.useCallback)((function(){t(d)}),[t]);return Object(n.useEffect)((function(){u("",i)}),[e,i]),Object(h.jsx)(f,Object(o.a)({},c))},g=Object(j.b)((function(e){return{movies:e.movies.movies}}),null)((function(e){var t=e.movies;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:"gallery",children:t.map((function(e){return Object(h.jsx)("li",{className:"movie",children:Object(h.jsxs)(s.b,{to:"/movie/".concat(e.id),children:[Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w342"+e.poster_path,alt:""}),Object(h.jsxs)("div",{className:"movie-info",children:[Object(h.jsx)("h3",{children:e.title}),Object(h.jsx)("span",{children:e.vote_average})]}),Object(h.jsxs)("div",{className:"overview",children:[Object(h.jsx)("h3",{children:"Overview:"}),e.overview]})]})},e.id)}))})})})),y=c(27),N="GET_MOVIES",w=function(e){var t=e.search,c=e.setQuery,i=e.query,a=Object(n.useCallback)((function(e){t(e),c("")}),[t,c]);return Object(h.jsxs)("form",{className:"search-form",children:[Object(h.jsx)("input",{className:"form-input",type:"text",placeholder:"Search any movie",value:i,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)("button",{onClick:a,className:"btn btn-primary mb-2",children:"Search"})]})},_=function(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),c=t[0],i=t[1],a=Object(j.c)(),s=Object(n.useCallback)((function(e){a(function(e){return{type:N,payload:e}}(e))}),[a]);Object(n.useEffect)((function(){u("",s)}),[a,s]);return Object(h.jsx)(w,{search:function(e){e.preventDefault(),u(c,s)},setQuery:i,query:c})},k=Object(O.a)((function(e){return e.movies.movies}),(function(e){return e})),I=function(){var e=Object(j.d)(k);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_,{}),Object(h.jsx)(g,{movies:e})]})},E=(c(37),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)("header",{children:Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{className:"link btn btn-primary mb-2",to:"/movie-app",children:"Home"})})})})}),Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{exact:!0,component:I,path:"/movie-app"}),Object(h.jsx)(r.a,{component:x,path:"/movie/:id"})]})})]})})}),S=c(26),C=c(14),q=c(24),F=c.n(q),M=c(25),T={movies:[]},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;return t.type===N?Object(o.a)(Object(o.a)({},e),{},{movies:t.payload}):e},J={moviesItem:[]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;return t.type===v?Object(o.a)(Object(o.a)({},e),{},{moviesItem:t.payload}):e},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(C.d)(Object(C.b)(Object(o.a)(Object(o.a)({},e),{},{movies:G,moviesItem:Q})),Object(C.c)(C.a.apply(void 0,Object(S.a)(t).concat([M.a,F.a]))))},V=R();a.a.render(Object(h.jsx)(j.a,{store:V,children:Object(h.jsx)(E,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9caf5575.chunk.js.map