"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[7111],{"./node_modules/keycloakify/login/pages/LoginIdpLinkConfirm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>LoginIdpLinkConfirm});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/keycloakify/login/lib/kcClsx.js");function LoginIdpLinkConfirm(props){const{kcContext,i18n,doUseDefaultCss,Template,classes}=props,{kcClsx}=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_1__.z)({doUseDefaultCss,classes}),{url,idpAlias}=kcContext,{msg}=i18n;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,headerNode:msg("confirmLinkIdpTitle")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form",Object.assign({id:"kc-register-form",action:url.loginAction,method:"post"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",Object.assign({type:"submit",className:kcClsx("kcButtonClass","kcButtonDefaultClass","kcButtonBlockClass","kcButtonLargeClass"),name:"submitAction",id:"updateProfile",value:"updateProfile"},{children:msg("confirmLinkIdpReviewProfile")})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",Object.assign({type:"submit",className:kcClsx("kcButtonClass","kcButtonDefaultClass","kcButtonBlockClass","kcButtonLargeClass"),name:"submitAction",id:"linkAccount",value:"linkAccount"},{children:msg("confirmLinkIdpContinue",idpAlias)}))]}))}))}))}}}]);