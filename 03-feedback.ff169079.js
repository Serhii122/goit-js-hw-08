function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,o,a,i,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=o;return r=o=void 0,l=t,i=e.apply(a,n)}function S(e){return l=e,f=setTimeout(O,t),c?y(e):i}function x(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=a}function O(){var e=g();if(x(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,a-(e-l)):n}(e))}function h(e){return f=void 0,v&&r?y(e):(r=o=void 0,i)}function j(){var e=g(),n=x(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),i}return t=b(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?d(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=o=f=void 0},j.flush=function(){return void 0===f?i:h(g())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};let y=JSON.parse(localStorage.getItem("feedback-form-state"))||{};const S={feetbackForm:document.querySelector(".feedback-form"),textArea:document.querySelector("textarea"),emailArea:document.querySelector("input")};S.feetbackForm.addEventListener("input",e(t)((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),S.feetbackForm.addEventListener("submit",(function(e){if(""===S.textArea.value||""===S.emailArea.value)return alert("Please fill in all the fields!");e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),y={}})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(e.message&&(S.textArea.value=e.message),e.email&&(S.emailArea.value=e.email))}();
//# sourceMappingURL=03-feedback.ff169079.js.map
