/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/simple-swizzle";
exports.ids = ["vendor-chunks/simple-swizzle"];
exports.modules = {

/***/ "(ssr)/./node_modules/simple-swizzle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar isArrayish = __webpack_require__(/*! is-arrayish */ \"(ssr)/./node_modules/simple-swizzle/node_modules/is-arrayish/index.js\");\nvar concat = Array.prototype.concat;\nvar slice = Array.prototype.slice;\nvar swizzle = module.exports = function swizzle(args) {\n    var results = [];\n    for(var i = 0, len = args.length; i < len; i++){\n        var arg = args[i];\n        if (isArrayish(arg)) {\n            // http://jsperf.com/javascript-array-concat-vs-push/98\n            results = concat.call(results, slice.call(arg));\n        } else {\n            results.push(arg);\n        }\n    }\n    return results;\n};\nswizzle.wrap = function(fn) {\n    return function() {\n        return fn(swizzle(arguments));\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxhQUFhQyxtQkFBT0EsQ0FBQztBQUV6QixJQUFJQyxTQUFTQyxNQUFNQyxTQUFTLENBQUNGLE1BQU07QUFDbkMsSUFBSUcsUUFBUUYsTUFBTUMsU0FBUyxDQUFDQyxLQUFLO0FBRWpDLElBQUlDLFVBQVVDLE9BQU9DLE9BQU8sR0FBRyxTQUFTRixRQUFRRyxJQUFJO0lBQ25ELElBQUlDLFVBQVUsRUFBRTtJQUVoQixJQUFLLElBQUlDLElBQUksR0FBR0MsTUFBTUgsS0FBS0ksTUFBTSxFQUFFRixJQUFJQyxLQUFLRCxJQUFLO1FBQ2hELElBQUlHLE1BQU1MLElBQUksQ0FBQ0UsRUFBRTtRQUVqQixJQUFJWCxXQUFXYyxNQUFNO1lBQ3BCLHVEQUF1RDtZQUN2REosVUFBVVIsT0FBT2EsSUFBSSxDQUFDTCxTQUFTTCxNQUFNVSxJQUFJLENBQUNEO1FBQzNDLE9BQU87WUFDTkosUUFBUU0sSUFBSSxDQUFDRjtRQUNkO0lBQ0Q7SUFFQSxPQUFPSjtBQUNSO0FBRUFKLFFBQVFXLElBQUksR0FBRyxTQUFVQyxFQUFFO0lBQzFCLE9BQU87UUFDTixPQUFPQSxHQUFHWixRQUFRYTtJQUNuQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50LW5leHQvLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanM/Yzk5OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5aXNoID0gcmVxdWlyZSgnaXMtYXJyYXlpc2gnKTtcblxudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBzd2l6emxlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzd2l6emxlKGFyZ3MpIHtcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdHZhciBhcmcgPSBhcmdzW2ldO1xuXG5cdFx0aWYgKGlzQXJyYXlpc2goYXJnKSkge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vamF2YXNjcmlwdC1hcnJheS1jb25jYXQtdnMtcHVzaC85OFxuXHRcdFx0cmVzdWx0cyA9IGNvbmNhdC5jYWxsKHJlc3VsdHMsIHNsaWNlLmNhbGwoYXJnKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdHMucHVzaChhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuc3dpenpsZS53cmFwID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZuKHN3aXp6bGUoYXJndW1lbnRzKSk7XG5cdH07XG59O1xuIl0sIm5hbWVzIjpbImlzQXJyYXlpc2giLCJyZXF1aXJlIiwiY29uY2F0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsInN3aXp6bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJncyIsInJlc3VsdHMiLCJpIiwibGVuIiwibGVuZ3RoIiwiYXJnIiwiY2FsbCIsInB1c2giLCJ3cmFwIiwiZm4iLCJhcmd1bWVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/simple-swizzle/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/simple-swizzle/node_modules/is-arrayish/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/simple-swizzle/node_modules/is-arrayish/index.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("module.exports = function isArrayish(obj) {\n    if (!obj || typeof obj === \"string\") {\n        return false;\n    }\n    return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== \"String\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQtbmV4dC8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanM/YzY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJyYXlpc2gob2JqKSB7XG5cdGlmICghb2JqIHx8IHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkob2JqKSB8fFxuXHRcdChvYmoubGVuZ3RoID49IDAgJiYgKG9iai5zcGxpY2UgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fFxuXHRcdFx0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCAob2JqLmxlbmd0aCAtIDEpKSAmJiBvYmouY29uc3RydWN0b3IubmFtZSAhPT0gJ1N0cmluZycpKSk7XG59O1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJpc0FycmF5aXNoIiwib2JqIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwic3BsaWNlIiwiRnVuY3Rpb24iLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsV0FBV0MsR0FBRztJQUN2QyxJQUFJLENBQUNBLE9BQU8sT0FBT0EsUUFBUSxVQUFVO1FBQ3BDLE9BQU87SUFDUjtJQUVBLE9BQU9BLGVBQWVDLFNBQVNBLE1BQU1DLE9BQU8sQ0FBQ0YsUUFDM0NBLElBQUlHLE1BQU0sSUFBSSxLQUFNSCxDQUFBQSxJQUFJSSxNQUFNLFlBQVlDLFlBQ3pDQyxPQUFPQyx3QkFBd0IsQ0FBQ1AsS0FBTUEsSUFBSUcsTUFBTSxHQUFHLE1BQU9ILElBQUlRLFdBQVcsQ0FBQ0MsSUFBSSxLQUFLLFFBQVE7QUFDL0YiLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvbm9kZV9tb2R1bGVzL2lzLWFycmF5aXNoL2luZGV4LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/simple-swizzle/node_modules/is-arrayish/index.js\n");

/***/ })

};
;