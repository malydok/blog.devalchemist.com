(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var n=a(7),r=a.n(n),i=a(0),s=a.n(i),l=a(148),c=a(151),o=a(152),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata,a=t.title,n=t.description,r=e.allMarkdownRemark.edges;return s.a.createElement(c.a,{location:this.props.location,title:a,description:n},s.a.createElement(o.a,{title:"All posts",keywords:["blog","javascript","front-end"]}),s.a.createElement("ul",{className:"articles-list"},r.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return s.a.createElement("li",{className:"articles-list__item",key:t.fields.slug},s.a.createElement(l.a,{to:t.fields.slug,key:t.fields.slug,className:"article-link"},s.a.createElement("h2",{className:"article-link__title article__title"},a),s.a.createElement("small",{className:"article-link__date article__date"},t.frontmatter.date)))})))},t}(s.a.Component);t.default=m;var d="3505806831"},148:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(149),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},149:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(55),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(148);a(154);t.a=function(e){var t=e.location,a=e.title,n=e.description,s=e.children,l="/"===t.pathname?"h1":"span",c=r.a.createElement(l,{className:"site-name"},r.a.createElement("div",{className:"site-name__image"},r.a.createElement("svg",{className:"site-name__horns",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 71 100",width:"42",role:"presentation"},r.a.createElement("path",{d:"M58.627 56.034l-10.35-27.41s15.944-1.4 13.425-13.706C59.637 4.81 53.592 1.56 52.286.978 50.978.393 51.634.27 51.634.27s9.754.433 13.985 7.376c4.474 7.343 8.39 20.698-.56 32.446-8.95 11.747-6.433 15.942-6.433 15.942zM12.362 56.034l10.35-27.41s-15.944-1.4-13.428-13.707C11.352 4.81 17.398 1.56 18.704.977c1.304-.584.65-.707.65-.707S9.6.703 5.37 7.646c-4.476 7.342-8.392 20.698.56 32.446 8.95 11.747 6.432 15.942 6.432 15.942z"})),r.a.createElement("svg",{className:"site-name__letter",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 71 100",width:"42",role:"presentation"},r.a.createElement("path",{d:"M3.228 99.712l12.75-5.092 19.26-56.215 19.51 56.035 12.62 5.272L39.86 25.326h-9.188"}))),r.a.createElement("span",{className:"site-name__text"},a));return r.a.createElement("div",{className:"sections-wrap"},r.a.createElement("header",{className:"site-header"},r.a.createElement(i.a,{to:"/",className:"home-link",title:"All articles"},c,r.a.createElement("p",{className:"site-description"},n))),r.a.createElement("main",{className:"section-main"},s),r.a.createElement("footer",{className:"site-footer"},r.a.createElement("p",null,"Written by ",r.a.createElement("a",{href:"mailto:marek@devalchemist.com"},"Marek")," in the rare times he's inspired."),r.a.createElement("p",null,"No data collecting or cookie storing. Suck it GDPR.")))}},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),s=a(4),l=a.n(s),c=a(155),o=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,l=e.title,c=n.data.site,m=t||c.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Devilish Alchemist's Blog",description:"Front-end musings and stuff",author:"Marek Pietrzak"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-1a42e8f4e8b321626b05.js.map