(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(14),a=c.n(i),s=c(11),r=c(3),o=c(9),j=c(8),m="9226d2cbb7ed48fe3f3e70d3c7574602",l="https://api.themoviedb.org/",b="".concat(l,"3/movie/top_rated?api_key=").concat(m,"&language=en-US&page=1"),u=function(e,t){var c=null;c=e?"".concat(l,"3/search/movie?api_key=").concat(m,"&query=").concat(e):b,fetch(c).then((function(e){return e.json()})).then((function(e){return t(e.results)}))},v="GET_MOVIES_ITEM",d=function(e){return{type:v,payload:e}},O=c(16),p=Object(O.a)((function(e){return e.movies}),(function(e,t){return t}),(function(e,t){return e.movies.filter((function(e){return e.id===Number(t)}))})),h=c(1),f=function(e){var t=e.moviesItem;return Object(h.jsx)("div",{className:"movie-wrap",children:t.map((function(e){return Object(h.jsxs)("div",{className:"movie-item",children:[Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w342"+e.backdrop_path,alt:"",className:"movie-item-img"}),Object(h.jsxs)("div",{className:"movie-item-wrapper",children:[Object(h.jsx)("h3",{className:"movie-item-title",children:e.title}),Object(h.jsxs)("p",{className:"movie-item-stats",children:[Object(h.jsx)("span",{className:"movie-item-description",children:"Rating: "}),e.vote_average]}),Object(h.jsxs)("p",{className:"movie-item-stats",children:[Object(h.jsx)("span",{className:"movie-item-description",children:" Overview: "}),e.overview]}),Object(h.jsxs)("p",{className:"movie-item-stats",children:[Object(h.jsx)("span",{className:"movie-item-description",children:"Release date: "}),e.release_date]})]})]},e.id)}))})},x=function(){var e=Object(r.f)().id,t=Object(j.b)(),c={moviesItem:Object(j.c)((function(t){return p(t,e)}))},i=Object(n.useCallback)((function(){t(d)}),[t]);return Object(n.useEffect)((function(){u("",i)}),[e,i]),Object(h.jsx)(f,Object(o.a)({},c))},g=function(e){var t=e.movies;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:"gallery",children:t.map((function(e){return Object(h.jsx)("li",{className:"movie",children:Object(h.jsxs)(s.b,{to:"/movie/".concat(e.id),children:[Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w342"+e.poster_path,alt:""}),Object(h.jsxs)("div",{className:"movie-info",children:[Object(h.jsx)("h3",{children:e.title}),Object(h.jsx)("span",{children:e.vote_average})]}),Object(h.jsxs)("div",{className:"overview",children:[Object(h.jsx)("h3",{children:"Overview:"}),e.overview]})]})},e.id)}))})})},y=c(24),N="GET_MOVIES",w=function(e){var t=e.search,c=e.setQuery,i=e.query,a=Object(n.useCallback)((function(e){t(e),c("")}),[t,c]);return Object(h.jsxs)("form",{className:"search-form",children:[Object(h.jsx)("input",{className:"form-input",type:"text",placeholder:"Search any movie",value:i,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)("button",{onClick:a,className:"btn btn-primary mb-2",children:"Search"})]})},_=function(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),c=t[0],i=t[1],a=Object(j.b)(),s=Object(n.useCallback)((function(e){a({type:N,payload:e})}),[a]);Object(n.useEffect)((function(){u("",s)}),[s]);return Object(h.jsx)(w,{search:function(e){e.preventDefault(),u(c,s)},setQuery:i,query:c})},k=Object(O.a)((function(e){return e.movies}),(function(e){return e.movies})),I=function(){var e=Object(j.c)(k);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_,{}),Object(h.jsx)(g,{movies:e})]})},E=(c(34),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)("header",{children:Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{className:"link btn btn-primary mb-2",to:"/movie-app",children:"Home"})})})})}),Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{exact:!0,component:I,path:"/movie-app"}),Object(h.jsx)(r.a,{component:x,path:"/movie/:id"})]})})]})})}),S=c(13),C=c(22),q=c.n(C),F=c(23),M={movies:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;return t.type===N?Object(o.a)(Object(o.a)({},e),{},{movies:t.payload}):e},G={moviesItem:[]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return t.type===v?Object(o.a)(Object(o.a)({},e),{},{moviesItem:t.payload}):e},Q=function(){return Object(S.d)(Object(S.b)({movies:T,moviesItem:J}),Object(S.c)(Object(S.a)(F.a,q.a)))}();a.a.render(Object(h.jsx)(j.a,{store:Q,children:Object(h.jsx)(E,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d25c7a1f.chunk.js.map