"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var inquirer=require("inquirer"),rm=require("rimraf"),downloadRepo=require("download-git-repo"),ora=require("ora"),path=require("path");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var inquirer__default=_interopDefaultLegacy(inquirer),rm__default=_interopDefaultLegacy(rm),downloadRepo__default=_interopDefaultLegacy(downloadRepo),ora__default=_interopDefaultLegacy(ora),path__default=_interopDefaultLegacy(path);function __awaiter(o,i,u,l){return new(u=u||Promise)(function(e,t){function r(e){try{a(l.next(e))}catch(e){t(e)}}function n(e){try{a(l.throw(e))}catch(e){t(e)}}function a(t){t.done?e(t.value):new u(function(e){e(t.value)}).then(r,n)}a((l=l.apply(o,i||[])).next())})}function __generator(r,n){var a,o,i,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;u;)try{if(a=1,o&&(i=2&t[0]?o.return:t[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,t[1])).done)return i;switch(o=0,(t=i?[2&t[0],i.value]:t)[0]){case 0:case 1:i=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,o=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(!(i=0<(i=u.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){u.label=t[1];break}if(6===t[0]&&u.label<i[1]){u.label=i[1],i=t;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(t);break}i[2]&&u.ops.pop(),u.trys.pop();continue}t=n.call(r,u)}catch(e){t=[6,e],o=0}finally{a=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var tools={store:{packageConfig:null,currentPath:"",projectId:"",cookie:"",zipPath:"",templatePath:"",urlPrefix:"",proxyAddr:""},remove:function(e){return new Promise(function(t,r){rm__default.default(e,function(e){e?r({type:"remove",msg:e}):t(!0)})})},ask:function(r){return new Promise(function(t,e){inquirer__default.default.prompt(r).then(function(e){t(e)})})}};function fetchTemplate(o,i){return __awaiter(this,void 0,void 0,function(){var a;return __generator(this,function(e){switch(e.label){case 0:return a=path__default.default.join(o.root,o.cacheDir,"template"),tools.store.templatePath=a,console.log("templatePath",a),[4,tools.remove(a)];case 1:return e.sent(),[2,new Promise(function(t,r){var n=ora__default.default();n.start("正在下载模板...");var e="direct:"+o.templateUrl+"#";switch(i){case 0:e+="master";break;case 1:e+="webpack";break;default:e+="master"}downloadRepo__default.default(e,a,{clone:!0},function(e){e?(n.fail(),r(e)):(n.succeed(),t(!0))})})]}})})}function init(r){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:console.log("init22"),e.label=1;case 1:return e.trys.push([1,4,,5]),[4,tools.ask([{name:"templateType",type:"list",message:"模板类型",choices:[{name:"使用 dsv-cli 配套模板",value:0},{name:"webpack 配置模板",value:1}],default:0}])];case 2:return t=e.sent(),[4,fetchTemplate(r,t.templateType)];case 3:case 4:return e.sent(),[3,5];case 5:return[2]}})})}exports.init=init;
