"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[8849],{"./src/login/pages/LoginResetPassword.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithEmailAsUsername:()=>WithEmailAsUsername,WithUsernameError:()=>WithUsernameError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _KcPageStory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/login/KcPageStory.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const{KcPageStory}=(0,_KcPageStory__WEBPACK_IMPORTED_MODULE_0__.N)({pageId:"login-reset-password.ftl"}),__WEBPACK_DEFAULT_EXPORT__={title:"login/login-reset-password.ftl",component:KcPageStory},Default={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(KcPageStory,{})},WithEmailAsUsername={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(KcPageStory,{kcContext:{realm:{loginWithEmailAllowed:!0,registrationEmailAsUsername:!0,duplicateEmailsAllowed:!1},auth:{attemptedUsername:""},messagesPerField:{existsError:field=>!1,get:field=>""},url:{loginAction:"/login",loginUrl:"/login-url"}}})},WithUsernameError={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(KcPageStory,{kcContext:{realm:{loginWithEmailAllowed:!1,registrationEmailAsUsername:!1,duplicateEmailsAllowed:!1},auth:{attemptedUsername:""},messagesPerField:{existsError:field=>"username"===field,get:field=>"username"===field?"Username is required":""},url:{loginAction:"/login",loginUrl:"/login-url"}}})},__namedExportsOrder=["Default","WithEmailAsUsername","WithUsernameError"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <KcPageStory />\n}",...Default.parameters?.docs?.source}}},WithEmailAsUsername.parameters={...WithEmailAsUsername.parameters,docs:{...WithEmailAsUsername.parameters?.docs,source:{originalSource:'{\n  render: () => <KcPageStory kcContext={{\n    realm: {\n      loginWithEmailAllowed: true,\n      registrationEmailAsUsername: true,\n      duplicateEmailsAllowed: false\n    },\n    auth: {\n      attemptedUsername: ""\n    },\n    messagesPerField: {\n      existsError: (field: string) => false,\n      get: (field: string) => ""\n    },\n    url: {\n      loginAction: "/login",\n      loginUrl: "/login-url"\n    }\n  }} />\n}',...WithEmailAsUsername.parameters?.docs?.source}}},WithUsernameError.parameters={...WithUsernameError.parameters,docs:{...WithUsernameError.parameters?.docs,source:{originalSource:'{\n  render: () => <KcPageStory kcContext={{\n    realm: {\n      loginWithEmailAllowed: false,\n      registrationEmailAsUsername: false,\n      duplicateEmailsAllowed: false\n    },\n    auth: {\n      attemptedUsername: ""\n    },\n    messagesPerField: {\n      existsError: (field: string) => field === "username",\n      get: (field: string) => field === "username" ? "Username is required" : ""\n    },\n    url: {\n      loginAction: "/login",\n      loginUrl: "/login-url"\n    }\n  }} />\n}',...WithUsernameError.parameters?.docs?.source}}}}}]);