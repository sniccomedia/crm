!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=73)}({0:function(e,t){e.exports=window.wp.i18n},6:function(e,t){e.exports=window.wp.blockEditor},73:function(e,t,n){"use strict";n.r(t);var r=wp.blockEditor,o=r.InspectorControls,l=r.PanelColorSettings,a=(r.MediaUpload,r.MediaUploadCheck,wp.i18n.__),c=wp.components,i=c.PanelBody,u=c.PanelRow,s=c.ToggleControl,p=c.SelectControl,f=(c.Button,function(e){var t=e.attributes,n=t.productId,r=t.showDescription,c=t.showPrice,f=t.template,m=t.backgroundColor,d=t.contentColor,g=t.pricingColor,b=e.setAttributes;return n?React.createElement(o,null,React.createElement(i,{title:"Template Settings",initialOpen:!0},React.createElement(u,null,React.createElement("div",{className:"fluent-singleProduct-template-settings"},React.createElement(p,{label:a("Design Template"),value:f,options:[{value:"left",name:"Image Left"},{value:"top",name:"Image Top"},{value:"none",name:"No Image"}].map((function(e){return{value:e.value,label:e.name}})),onChange:function(e){return b({template:e})}}),React.createElement(s,{label:a("Show Description"),checked:r,onChange:function(){return b({showDescription:!r})}}),React.createElement(s,{label:a("Show Price"),checked:c,onChange:function(){return b({showPrice:!c})}})))),React.createElement("div",{className:"fluent-singleProduct-titleAndSubtitle-settings"},React.createElement(l,{title:a("Customization"),colorSettings:[{value:d,onChange:function(e){b({contentColor:e})},label:a("Content Color")},{value:m,onChange:function(e){b({backgroundColor:e})},label:a("Background Color")},{value:g,onChange:function(e){b({pricingColor:e})},label:a("Pricing Color")}]}))):null}),m=(n(0),n(8)),d=n.n(m);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=wp.components,E=w.RadioControl,_=w.Spinner,R=wp.element,C=R.useState,S=R.useEffect,O=(wp.i18n.__,function(e){var t=e.attributes,n=t.productId,r=t.showDescription,o=t.showPrice,l=t.buttonText,a=t.customImage,c=t.template,i=t.backgroundColor,u=t.contentColor,s=t.pricingColor,p=e.setAttributes,f=wp.blockEditor.InnerBlocks,m=h(C([]),2),g=m[0],y=m[1],v=h(C(""),2),w=v[0],R=v[1],O=h(C(""),2),P=O[0],k=O[1],j=h(C({}),2),x=j[0],N=j[1],I=h(C(!1),2),A=I[0],T=I[1],M=h(C(!1),2),D=M[0],L=M[1],B=h(C(!1),2),z=(B[0],B[1]);S((function(){n?K(n):U()}),[]);var F=wp.apiFetch,H=wp.url.addQueryArgs,U=function(e){L(!0),F({path:H("wc/store/products",b({per_page:6},e))}).then((function(e){y(e)})).catch((function(e){z(!0)})).finally((function(){L(!1)}))},K=function(e){T(!0),F({path:H("wc/store/products/"+e)}).then((function(e){N(e),p({productId:e.id}),T(!1)}))},Q={backgroundColor:i,color:u},V=d()("fcw_p","fcw_template_"+c,{fc_product_loading:A}),$=d()("fcw_search_box",{fc_product_loading:A});return[React.createElement("div",null,A&&React.createElement("div",{style:Q,className:"fc_woo_loader"},React.createElement(_,null),React.createElement("h3",null,"Loading product")),x.id&&n?React.createElement("div",{style:Q,className:V},"none"!=c&&React.createElement("div",{className:"fcw_image"},React.createElement("img",{src:a||x&&x.images&&x.images.length&&x.images[0].src||""})),React.createElement("div",{className:"fcw_p_content"},React.createElement("h2",{style:{color:u},className:"fcw_p_title",dangerouslySetInnerHTML:{__html:x.name}}),r&&React.createElement("div",{style:{color:u},className:"fcw_p_desc",dangerouslySetInnerHTML:{__html:x.short_description}}),o&&React.createElement("div",{style:{color:s},className:"fcw_p_price",dangerouslySetInnerHTML:{__html:x.price_html}}),React.createElement("div",{className:"fcb_p_button"},React.createElement(f,{template:[["core/buttons",{},[["core/button",{text:l,url:x.permalink,align:"left"}]]]],templateLock:"all"})))):React.createElement("div",{className:$},React.createElement("h4",null,"Search and Select a Product"),React.createElement("hr",null),React.createElement("div",{style:{marginBottom:"25px",display:"flex"},className:"fluent-single-product-search-bar"},React.createElement("div",{style:{width:"80%"}},React.createElement("input",{placeholder:"product",style:{width:"100%",height:"30px"},value:w,onChange:function(e){R(e.target.value)},onKeyDown:function(e){"Enter"!==e.key&&""!==e.target.value||U({search:w})}})),React.createElement("button",{style:{width:"20%",height:"30px"},onClick:function(){U({search:w})}},"Search")),D?React.createElement("h2",null,React.createElement(_,null)):React.createElement("div",{className:"fcw_results"},g&&g.length?React.createElement(E,{selected:P,options:g.map((function(e){return{value:e.id.toString(),label:e.name}})),onChange:function(e){k(e)}}):React.createElement("div",{className:"fcw_products_not_found"},React.createElement("h2",null,"No products found!"))),React.createElement("button",{style:{marginTop:"20px"},className:"components-button is-primary",onClick:function(){K(P)}},"Done")))]}),P=wp.element.Fragment,k=n(6),j={productId:{type:"number",default:null},showDescription:{type:"boolean",default:!0},showPrice:{type:"boolean",default:!0},buttonText:{type:"string",default:(0,wp.i18n.__)("Buy Now")},customImage:{type:"string",default:""},backgroundColor:{type:"string",default:"#fffeeb"},contentColor:{type:"string",default:""},pricingColor:{type:"string",default:""},template:{type:"string",default:"left"}},x=wp.element.createElement,N=wp.i18n.__,I=wp.blocks.registerBlockType,A=x("svg",{width:20,height:20},x("path",{d:"M0 0h24v24H0V0z",fill:"none"}),x("path",{fill:"#96588a",d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}));I("fluentcrm/woo-product",{title:N("Product Block"),description:N("Product Block For your Email"),category:"layout",icon:A,keywords:[N("product"),N("woocommerce"),N("card")],supports:{align:["wide","full"],html:!0},attributes:j,edit:function(e){return React.createElement(P,null,React.createElement("div",{className:"fluent-single-product-block"},React.createElement(O,{attributes:e.attributes,setAttributes:e.setAttributes})),React.createElement(f,{attributes:e.attributes,setAttributes:e.setAttributes}))},save:function(e){return React.createElement("div",null,React.createElement(React.Fragment,null,React.createElement(k.InnerBlocks.Content,null)))}})},8:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}});