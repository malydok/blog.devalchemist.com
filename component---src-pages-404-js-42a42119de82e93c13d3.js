(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var n=a(7),r=a.n(n),i=a(0),s=a.n(i),o=a(151),c=a(152),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,a=e.description;return s.a.createElement(o.a,{location:this.props.location,title:t,description:a},s.a.createElement(c.a,{title:"404: Not Found"}),s.a.createElement("h1",null,"Not Found"),s.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(s.a.Component);t.default=l;var m="3998338720"},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(148),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(149);a(154);t.a=function(e){var t=e.location,a=e.title,n=e.description,s=e.children,o="/"===t.pathname?"h1":"span",c=r.a.createElement(o,{className:"site-name"},r.a.createElement("div",{className:"site-name__image"},r.a.createElement("svg",{className:"site-name__horns",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 71 100",width:"42",role:"presentation"},r.a.createElement("path",{d:"M58.627 56.034l-10.35-27.41s15.944-1.4 13.425-13.706C59.637 4.81 53.592 1.56 52.286.978 50.978.393 51.634.27 51.634.27s9.754.433 13.985 7.376c4.474 7.343 8.39 20.698-.56 32.446-8.95 11.747-6.433 15.942-6.433 15.942zM12.362 56.034l10.35-27.41s-15.944-1.4-13.428-13.707C11.352 4.81 17.398 1.56 18.704.977c1.304-.584.65-.707.65-.707S9.6.703 5.37 7.646c-4.476 7.342-8.392 20.698.56 32.446 8.95 11.747 6.432 15.942 6.432 15.942z"})),r.a.createElement("svg",{className:"site-name__letter",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 71 100",width:"42",role:"presentation"},r.a.createElement("path",{d:"M3.228 99.712l12.75-5.092 19.26-56.215 19.51 56.035 12.62 5.272L39.86 25.326h-9.188"}))),r.a.createElement("span",{className:"site-name__text"},a));return r.a.createElement("div",{className:"sections-wrap"},r.a.createElement("header",{className:"site-header"},r.a.createElement(i.a,{to:"/",className:"home-link",title:"All articles"},c,r.a.createElement("p",{className:"site-description"},n))),r.a.createElement("main",{className:"section-main"},s),r.a.createElement("footer",{className:"site-footer"},r.a.createElement("p",null,"Written by ",r.a.createElement("a",{href:"mailto:marek@devalchemist.com"},"Marek")," in the rare times he's inspired."),r.a.createElement("p",null,"No data collecting or cookie storing. Suck it GDPR.")))}},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(155),l=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,c=n.data.site,m=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Devilish Alchemist's Blog",description:"Front-end musings and stuff",author:"Marek Pietrzak"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-42a42119de82e93c13d3.js.map