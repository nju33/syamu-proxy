!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){module.exports=function(e){return new Proxy(e,{get:function(e,n){var t=e[n];return null===t?null:void 0!==t?"number"==typeof t?0:"string"==typeof t?"":Array.isArray(t)?[]:"object"==typeof t?{}:Reflect.get.apply(Reflect,arguments):void 0}})}});
//# sourceMappingURL=shamu-proxy.umd.js.map