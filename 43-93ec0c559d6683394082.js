(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1009:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(1005),m=n.n(o),l=function(e){var t=e.url;return a.a.createElement(m.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-theme-provider",name:"terra-theme-provider",version:"4.3.0",url:t})}},1030:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(25)),o=r(n(26)),m=r(n(30)),l=r(n(27)),i=r(n(28)),d=r(n(29)),c=r(n(0)),p=r(n(3)),u=r(n(363)),s=r(n(1031)),h=r(n(1034));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.default)(e);if(t){var a=(0,d.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,i.default)(this,n)}}var v=p.default.bind(h.default),b=function(e){(0,l.default)(n,e);var t=f(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).state={theme:""},r.handleThemeChange=r.handleThemeChange.bind((0,m.default)(r)),r}return(0,o.default)(n,[{key:"handleThemeChange",value:function(e){this.setState({theme:e.target.value})}},{key:"render",value:function(){var e;return e=window.CSS&&window.CSS.supports&&window.CSS.supports("(--fake-var: 0)")?c.default.createElement("div",{className:v("theme-switcher-wrapper")},c.default.createElement("label",{htmlFor:"theme"}," Theme: "),c.default.createElement("select",{id:"theme",value:this.state.theme,onChange:this.handleThemeChange},c.default.createElement("option",{value:""},"Default"),c.default.createElement("option",{value:"cerner-mock-theme"},"Mock Theme"))):c.default.createElement("div",null),c.default.createElement("div",null,c.default.createElement("div",null,e),c.default.createElement(u.default,{themeName:this.state.theme},c.default.createElement("div",null,c.default.createElement(s.default,null,"Themable component"))))}}]),n}(c.default.Component);t.default=b},1031:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(17)),o=r(n(23)),m=r(n(0)),l=r(n(1)),i=r(n(3)),d=r(n(1032));n(1033);var c=i.default.bind(d.default),p={children:l.default.node.isRequired},u=function(e){var t=e.children,n=(0,o.default)(e,["children"]);return m.default.createElement("div",(0,a.default)({},n,{className:c("mock-theme-component",n.className)}),t)};u.propTypes=p;var s=u;t.default=s},1032:function(e,t,n){e.exports={"mock-theme-component":"MockThemeComponent-module__mock-theme-component___1oj2b"}},1033:function(e,t,n){},1034:function(e,t,n){e.exports={"theme-switcher-wrapper":"DefaultThemeProvider-module__theme-switcher-wrapper___1MiLI"}},1040:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n(17),a=n.n(r),o=n(23),m=n.n(o),l=n(0),i=n.n(l),d=n(361),c=n(1009),p=n(1026),u=n.n(p),s=function(){return Object(d.mdx)(u.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=m()(t,["components"]);return Object(d.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=m()(t,["components"]);return Object(d.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"The component(s) that will be wrapped by ",Object(d.mdx)("inlineCode",{parentName:"p"},"<ThemeProvider />")))}return t.isMDXComponent=!0,t({})}},{name:"themeName",type:function(){var e={};function t(t){var n=t.components,r=m()(t,["components"]);return Object(d.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=m()(t,["components"]);return Object(d.mdx)("wrapper",a()({},e,r,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("p",null,"Name of class for specified theme"))}return t.isMDXComponent=!0,t({})}}]})},h=n(1030),f=n.n(h),v={};function b(e){var t=e.components,n=m()(e,["components"]);return Object(d.mdx)("wrapper",a()({},v,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport classNames from 'classnames/bind';\nimport ThemeProvider from 'terra-theme-provider';\nimport MockThemeComponent from 'terra-theme-provider/lib/terra-dev-site/doc/example/MockThemeComponent';\nimport styles from './DefaultThemeProvider.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass DefaultThemeProvider extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      theme: '',\n    };\n    this.handleThemeChange = this.handleThemeChange.bind(this);\n  }\n\n  handleThemeChange(e) {\n    this.setState({ theme: e.target.value });\n  }\n\n  render() {\n    let themeSwitcher;\n\n    function supportsCSSVars() {\n      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');\n    }\n\n    if (supportsCSSVars()) {\n      themeSwitcher = (\n        <div className={cx('theme-switcher-wrapper')}>\n          <label htmlFor=\"theme\"> Theme: </label>\n          <select id=\"theme\" value={this.state.theme} onChange={this.handleThemeChange}>\n            <option value=\"\">Default</option>\n            <option value=\"cerner-mock-theme\">Mock Theme</option>\n          </select>\n        </div>\n      );\n    } else {\n      themeSwitcher = (\n        <div />\n      );\n    }\n\n    return (\n      <div>\n        <div>{themeSwitcher}</div>\n        <ThemeProvider themeName={this.state.theme}>\n          <div>\n            <MockThemeComponent>Themable component</MockThemeComponent>\n          </div>\n        </ThemeProvider>\n      </div>\n    );\n  }\n}\n\nexport default DefaultThemeProvider;\n\n")))}b.isMDXComponent=!0;var x=n(1010),j=n.n(x),O=function(e){var t=e.title,n=e.description,r=e.isExpanded;return i.a.createElement(j.a,{title:t||"Default Theme Provider",description:n,example:i.a.createElement(f.a,null),exampleSrc:i.a.createElement(b,null),isExpanded:r})},T={};function w(e){var t=e.components,n=m()(e,["components"]);return Object(d.mdx)("wrapper",a()({},T,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)(c.a,{mdxType:"Badge"}),Object(d.mdx)("h1",{id:"terra-theme-provider"},"Terra Theme Provider"),Object(d.mdx)("p",null,"The theme provider component provides a theme to Terra UI components via CSS custom properties a.k.a CSS variables. This is accomplished by setting a CSS class, generated from the ",Object(d.mdx)("inlineCode",{parentName:"p"},"themeName")," prop, which contains defined CSS custom properties for the specified theme on the ",Object(d.mdx)("inlineCode",{parentName:"p"},"html")," element."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Note:")),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"The CSS custom properties applied via the theme provided only works in browsers which have native support for CSS custom properties.")),Object(d.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Install with ",Object(d.mdx)("a",a()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"npm install terra-theme-provider"))))),Object(d.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(d.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",a()({parentName:"tr"},{align:null}),"Peer Dependency"),Object(d.mdx)("th",a()({parentName:"tr"},{align:null}),"Version"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",a()({parentName:"tr"},{align:null}),"react"),Object(d.mdx)("td",a()({parentName:"tr"},{align:null}),"^16.8.5")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",a()({parentName:"tr"},{align:null}),"react-dom"),Object(d.mdx)("td",a()({parentName:"tr"},{align:null}),"^16.8.5")))),Object(d.mdx)("h2",{id:"usage"},"Usage"),Object(d.mdx)("pre",null,Object(d.mdx)("code",a()({parentName:"pre"},{className:"language-js"}),"import ThemeProvider from 'terra-theme-provider';\n")),Object(d.mdx)("h2",{id:"examples"},"Examples"),Object(d.mdx)(O,{title:"Example Theme Provider",mdxType:"DefaultThemeProvider"}),Object(d.mdx)("h2",{id:"theme-provider-props-table"},"Theme Provider Props Table"),Object(d.mdx)(s,{mdxType:"ThemeProviderPropsTable"}))}w.isMDXComponent=!0}}]);
//# sourceMappingURL=43-93ec0c559d6683394082.js.map