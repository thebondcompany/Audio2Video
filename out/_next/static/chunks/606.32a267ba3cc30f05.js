(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[606],{

/***/ 4143:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/ort.bundle.min.135f155b.mjs";

/***/ }),

/***/ 3674:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/ort-wasm-simd-threaded.jsep.03bc89f8.wasm";

/***/ }),

/***/ 257:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var _global_process, _global_process1;
module.exports = ((_global_process = __webpack_require__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = __webpack_require__.g.process) == null ? void 0 : _global_process1.env) === "object" ? __webpack_require__.g.process : __webpack_require__(4227);

//# sourceMappingURL=process.js.map

/***/ }),

/***/ 6434:
/***/ (function(module) {

var __dirname = "/";
(function(){var e={675:function(e,r){"use strict";r.byteLength=byteLength;r.toByteArray=toByteArray;r.fromByteArray=fromByteArray;var t=[];var f=[];var n=typeof Uint8Array!=="undefined"?Uint8Array:Array;var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var o=0,u=i.length;o<u;++o){t[o]=i[o];f[i.charCodeAt(o)]=o}f["-".charCodeAt(0)]=62;f["_".charCodeAt(0)]=63;function getLens(e){var r=e.length;if(r%4>0){throw new Error("Invalid string. Length must be a multiple of 4")}var t=e.indexOf("=");if(t===-1)t=r;var f=t===r?0:4-t%4;return[t,f]}function byteLength(e){var r=getLens(e);var t=r[0];var f=r[1];return(t+f)*3/4-f}function _byteLength(e,r,t){return(r+t)*3/4-t}function toByteArray(e){var r;var t=getLens(e);var i=t[0];var o=t[1];var u=new n(_byteLength(e,i,o));var a=0;var s=o>0?i-4:i;var h;for(h=0;h<s;h+=4){r=f[e.charCodeAt(h)]<<18|f[e.charCodeAt(h+1)]<<12|f[e.charCodeAt(h+2)]<<6|f[e.charCodeAt(h+3)];u[a++]=r>>16&255;u[a++]=r>>8&255;u[a++]=r&255}if(o===2){r=f[e.charCodeAt(h)]<<2|f[e.charCodeAt(h+1)]>>4;u[a++]=r&255}if(o===1){r=f[e.charCodeAt(h)]<<10|f[e.charCodeAt(h+1)]<<4|f[e.charCodeAt(h+2)]>>2;u[a++]=r>>8&255;u[a++]=r&255}return u}function tripletToBase64(e){return t[e>>18&63]+t[e>>12&63]+t[e>>6&63]+t[e&63]}function encodeChunk(e,r,t){var f;var n=[];for(var i=r;i<t;i+=3){f=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(e[i+2]&255);n.push(tripletToBase64(f))}return n.join("")}function fromByteArray(e){var r;var f=e.length;var n=f%3;var i=[];var o=16383;for(var u=0,a=f-n;u<a;u+=o){i.push(encodeChunk(e,u,u+o>a?a:u+o))}if(n===1){r=e[f-1];i.push(t[r>>2]+t[r<<4&63]+"==")}else if(n===2){r=(e[f-2]<<8)+e[f-1];i.push(t[r>>10]+t[r>>4&63]+t[r<<2&63]+"=")}return i.join("")}},72:function(e,r,t){"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var f=t(675);var n=t(783);var i=typeof Symbol==="function"&&typeof Symbol.for==="function"?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=Buffer;r.SlowBuffer=SlowBuffer;r.INSPECT_MAX_BYTES=50;var o=2147483647;r.kMaxLength=o;Buffer.TYPED_ARRAY_SUPPORT=typedArraySupport();if(!Buffer.TYPED_ARRAY_SUPPORT&&typeof console!=="undefined"&&typeof console.error==="function"){console.error("This browser lacks typed array (Uint8Array) support which is required by "+"`buffer` v5.x. Use `buffer` v4.x if you require old browser support.")}function typedArraySupport(){try{var e=new Uint8Array(1);var r={foo:function(){return 42}};Object.setPrototypeOf(r,Uint8Array.prototype);Object.setPrototypeOf(e,r);return e.foo()===42}catch(e){return false}}Object.defineProperty(Buffer.prototype,"parent",{enumerable:true,get:function(){if(!Buffer.isBuffer(this))return undefined;return this.buffer}});Object.defineProperty(Buffer.prototype,"offset",{enumerable:true,get:function(){if(!Buffer.isBuffer(this))return undefined;return this.byteOffset}});function createBuffer(e){if(e>o){throw new RangeError('The value "'+e+'" is invalid for option "size"')}var r=new Uint8Array(e);Object.setPrototypeOf(r,Buffer.prototype);return r}function Buffer(e,r,t){if(typeof e==="number"){if(typeof r==="string"){throw new TypeError('The "string" argument must be of type string. Received type number')}return allocUnsafe(e)}return from(e,r,t)}Buffer.poolSize=8192;function from(e,r,t){if(typeof e==="string"){return fromString(e,r)}if(ArrayBuffer.isView(e)){return fromArrayLike(e)}if(e==null){throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, "+"or Array-like Object. Received type "+typeof e)}if(isInstance(e,ArrayBuffer)||e&&isInstance(e.buffer,ArrayBuffer)){return fromArrayBuffer(e,r,t)}if(typeof SharedArrayBuffer!=="undefined"&&(isInstance(e,SharedArrayBuffer)||e&&isInstance(e.buffer,SharedArrayBuffer))){return fromArrayBuffer(e,r,t)}if(typeof e==="number"){throw new TypeError('The "value" argument must not be of type number. Received type number')}var f=e.valueOf&&e.valueOf();if(f!=null&&f!==e){return Buffer.from(f,r,t)}var n=fromObject(e);if(n)return n;if(typeof Symbol!=="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]==="function"){return Buffer.from(e[Symbol.toPrimitive]("string"),r,t)}throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, "+"or Array-like Object. Received type "+typeof e)}Buffer.from=function(e,r,t){return from(e,r,t)};Object.setPrototypeOf(Buffer.prototype,Uint8Array.prototype);Object.setPrototypeOf(Buffer,Uint8Array);function assertSize(e){if(typeof e!=="number"){throw new TypeError('"size" argument must be of type number')}else if(e<0){throw new RangeError('The value "'+e+'" is invalid for option "size"')}}function alloc(e,r,t){assertSize(e);if(e<=0){return createBuffer(e)}if(r!==undefined){return typeof t==="string"?createBuffer(e).fill(r,t):createBuffer(e).fill(r)}return createBuffer(e)}Buffer.alloc=function(e,r,t){return alloc(e,r,t)};function allocUnsafe(e){assertSize(e);return createBuffer(e<0?0:checked(e)|0)}Buffer.allocUnsafe=function(e){return allocUnsafe(e)};Buffer.allocUnsafeSlow=function(e){return allocUnsafe(e)};function fromString(e,r){if(typeof r!=="string"||r===""){r="utf8"}if(!Buffer.isEncoding(r)){throw new TypeError("Unknown encoding: "+r)}var t=byteLength(e,r)|0;var f=createBuffer(t);var n=f.write(e,r);if(n!==t){f=f.slice(0,n)}return f}function fromArrayLike(e){var r=e.length<0?0:checked(e.length)|0;var t=createBuffer(r);for(var f=0;f<r;f+=1){t[f]=e[f]&255}return t}function fromArrayBuffer(e,r,t){if(r<0||e.byteLength<r){throw new RangeError('"offset" is outside of buffer bounds')}if(e.byteLength<r+(t||0)){throw new RangeError('"length" is outside of buffer bounds')}var f;if(r===undefined&&t===undefined){f=new Uint8Array(e)}else if(t===undefined){f=new Uint8Array(e,r)}else{f=new Uint8Array(e,r,t)}Object.setPrototypeOf(f,Buffer.prototype);return f}function fromObject(e){if(Buffer.isBuffer(e)){var r=checked(e.length)|0;var t=createBuffer(r);if(t.length===0){return t}e.copy(t,0,0,r);return t}if(e.length!==undefined){if(typeof e.length!=="number"||numberIsNaN(e.length)){return createBuffer(0)}return fromArrayLike(e)}if(e.type==="Buffer"&&Array.isArray(e.data)){return fromArrayLike(e.data)}}function checked(e){if(e>=o){throw new RangeError("Attempt to allocate Buffer larger than maximum "+"size: 0x"+o.toString(16)+" bytes")}return e|0}function SlowBuffer(e){if(+e!=e){e=0}return Buffer.alloc(+e)}Buffer.isBuffer=function isBuffer(e){return e!=null&&e._isBuffer===true&&e!==Buffer.prototype};Buffer.compare=function compare(e,r){if(isInstance(e,Uint8Array))e=Buffer.from(e,e.offset,e.byteLength);if(isInstance(r,Uint8Array))r=Buffer.from(r,r.offset,r.byteLength);if(!Buffer.isBuffer(e)||!Buffer.isBuffer(r)){throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array')}if(e===r)return 0;var t=e.length;var f=r.length;for(var n=0,i=Math.min(t,f);n<i;++n){if(e[n]!==r[n]){t=e[n];f=r[n];break}}if(t<f)return-1;if(f<t)return 1;return 0};Buffer.isEncoding=function isEncoding(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return true;default:return false}};Buffer.concat=function concat(e,r){if(!Array.isArray(e)){throw new TypeError('"list" argument must be an Array of Buffers')}if(e.length===0){return Buffer.alloc(0)}var t;if(r===undefined){r=0;for(t=0;t<e.length;++t){r+=e[t].length}}var f=Buffer.allocUnsafe(r);var n=0;for(t=0;t<e.length;++t){var i=e[t];if(isInstance(i,Uint8Array)){i=Buffer.from(i)}if(!Buffer.isBuffer(i)){throw new TypeError('"list" argument must be an Array of Buffers')}i.copy(f,n);n+=i.length}return f};function byteLength(e,r){if(Buffer.isBuffer(e)){return e.length}if(ArrayBuffer.isView(e)||isInstance(e,ArrayBuffer)){return e.byteLength}if(typeof e!=="string"){throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. '+"Received type "+typeof e)}var t=e.length;var f=arguments.length>2&&arguments[2]===true;if(!f&&t===0)return 0;var n=false;for(;;){switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return utf8ToBytes(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return base64ToBytes(e).length;default:if(n){return f?-1:utf8ToBytes(e).length}r=(""+r).toLowerCase();n=true}}}Buffer.byteLength=byteLength;function slowToString(e,r,t){var f=false;if(r===undefined||r<0){r=0}if(r>this.length){return""}if(t===undefined||t>this.length){t=this.length}if(t<=0){return""}t>>>=0;r>>>=0;if(t<=r){return""}if(!e)e="utf8";while(true){switch(e){case"hex":return hexSlice(this,r,t);case"utf8":case"utf-8":return utf8Slice(this,r,t);case"ascii":return asciiSlice(this,r,t);case"latin1":case"binary":return latin1Slice(this,r,t);case"base64":return base64Slice(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return utf16leSlice(this,r,t);default:if(f)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase();f=true}}}Buffer.prototype._isBuffer=true;function swap(e,r,t){var f=e[r];e[r]=e[t];e[t]=f}Buffer.prototype.swap16=function swap16(){var e=this.length;if(e%2!==0){throw new RangeError("Buffer size must be a multiple of 16-bits")}for(var r=0;r<e;r+=2){swap(this,r,r+1)}return this};Buffer.prototype.swap32=function swap32(){var e=this.length;if(e%4!==0){throw new RangeError("Buffer size must be a multiple of 32-bits")}for(var r=0;r<e;r+=4){swap(this,r,r+3);swap(this,r+1,r+2)}return this};Buffer.prototype.swap64=function swap64(){var e=this.length;if(e%8!==0){throw new RangeError("Buffer size must be a multiple of 64-bits")}for(var r=0;r<e;r+=8){swap(this,r,r+7);swap(this,r+1,r+6);swap(this,r+2,r+5);swap(this,r+3,r+4)}return this};Buffer.prototype.toString=function toString(){var e=this.length;if(e===0)return"";if(arguments.length===0)return utf8Slice(this,0,e);return slowToString.apply(this,arguments)};Buffer.prototype.toLocaleString=Buffer.prototype.toString;Buffer.prototype.equals=function equals(e){if(!Buffer.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(this===e)return true;return Buffer.compare(this,e)===0};Buffer.prototype.inspect=function inspect(){var e="";var t=r.INSPECT_MAX_BYTES;e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim();if(this.length>t)e+=" ... ";return"<Buffer "+e+">"};if(i){Buffer.prototype[i]=Buffer.prototype.inspect}Buffer.prototype.compare=function compare(e,r,t,f,n){if(isInstance(e,Uint8Array)){e=Buffer.from(e,e.offset,e.byteLength)}if(!Buffer.isBuffer(e)){throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. '+"Received type "+typeof e)}if(r===undefined){r=0}if(t===undefined){t=e?e.length:0}if(f===undefined){f=0}if(n===undefined){n=this.length}if(r<0||t>e.length||f<0||n>this.length){throw new RangeError("out of range index")}if(f>=n&&r>=t){return 0}if(f>=n){return-1}if(r>=t){return 1}r>>>=0;t>>>=0;f>>>=0;n>>>=0;if(this===e)return 0;var i=n-f;var o=t-r;var u=Math.min(i,o);var a=this.slice(f,n);var s=e.slice(r,t);for(var h=0;h<u;++h){if(a[h]!==s[h]){i=a[h];o=s[h];break}}if(i<o)return-1;if(o<i)return 1;return 0};function bidirectionalIndexOf(e,r,t,f,n){if(e.length===0)return-1;if(typeof t==="string"){f=t;t=0}else if(t>2147483647){t=2147483647}else if(t<-2147483648){t=-2147483648}t=+t;if(numberIsNaN(t)){t=n?0:e.length-1}if(t<0)t=e.length+t;if(t>=e.length){if(n)return-1;else t=e.length-1}else if(t<0){if(n)t=0;else return-1}if(typeof r==="string"){r=Buffer.from(r,f)}if(Buffer.isBuffer(r)){if(r.length===0){return-1}return arrayIndexOf(e,r,t,f,n)}else if(typeof r==="number"){r=r&255;if(typeof Uint8Array.prototype.indexOf==="function"){if(n){return Uint8Array.prototype.indexOf.call(e,r,t)}else{return Uint8Array.prototype.lastIndexOf.call(e,r,t)}}return arrayIndexOf(e,[r],t,f,n)}throw new TypeError("val must be string, number or Buffer")}function arrayIndexOf(e,r,t,f,n){var i=1;var o=e.length;var u=r.length;if(f!==undefined){f=String(f).toLowerCase();if(f==="ucs2"||f==="ucs-2"||f==="utf16le"||f==="utf-16le"){if(e.length<2||r.length<2){return-1}i=2;o/=2;u/=2;t/=2}}function read(e,r){if(i===1){return e[r]}else{return e.readUInt16BE(r*i)}}var a;if(n){var s=-1;for(a=t;a<o;a++){if(read(e,a)===read(r,s===-1?0:a-s)){if(s===-1)s=a;if(a-s+1===u)return s*i}else{if(s!==-1)a-=a-s;s=-1}}}else{if(t+u>o)t=o-u;for(a=t;a>=0;a--){var h=true;for(var c=0;c<u;c++){if(read(e,a+c)!==read(r,c)){h=false;break}}if(h)return a}}return-1}Buffer.prototype.includes=function includes(e,r,t){return this.indexOf(e,r,t)!==-1};Buffer.prototype.indexOf=function indexOf(e,r,t){return bidirectionalIndexOf(this,e,r,t,true)};Buffer.prototype.lastIndexOf=function lastIndexOf(e,r,t){return bidirectionalIndexOf(this,e,r,t,false)};function hexWrite(e,r,t,f){t=Number(t)||0;var n=e.length-t;if(!f){f=n}else{f=Number(f);if(f>n){f=n}}var i=r.length;if(f>i/2){f=i/2}for(var o=0;o<f;++o){var u=parseInt(r.substr(o*2,2),16);if(numberIsNaN(u))return o;e[t+o]=u}return o}function utf8Write(e,r,t,f){return blitBuffer(utf8ToBytes(r,e.length-t),e,t,f)}function asciiWrite(e,r,t,f){return blitBuffer(asciiToBytes(r),e,t,f)}function latin1Write(e,r,t,f){return asciiWrite(e,r,t,f)}function base64Write(e,r,t,f){return blitBuffer(base64ToBytes(r),e,t,f)}function ucs2Write(e,r,t,f){return blitBuffer(utf16leToBytes(r,e.length-t),e,t,f)}Buffer.prototype.write=function write(e,r,t,f){if(r===undefined){f="utf8";t=this.length;r=0}else if(t===undefined&&typeof r==="string"){f=r;t=this.length;r=0}else if(isFinite(r)){r=r>>>0;if(isFinite(t)){t=t>>>0;if(f===undefined)f="utf8"}else{f=t;t=undefined}}else{throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")}var n=this.length-r;if(t===undefined||t>n)t=n;if(e.length>0&&(t<0||r<0)||r>this.length){throw new RangeError("Attempt to write outside buffer bounds")}if(!f)f="utf8";var i=false;for(;;){switch(f){case"hex":return hexWrite(this,e,r,t);case"utf8":case"utf-8":return utf8Write(this,e,r,t);case"ascii":return asciiWrite(this,e,r,t);case"latin1":case"binary":return latin1Write(this,e,r,t);case"base64":return base64Write(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ucs2Write(this,e,r,t);default:if(i)throw new TypeError("Unknown encoding: "+f);f=(""+f).toLowerCase();i=true}}};Buffer.prototype.toJSON=function toJSON(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function base64Slice(e,r,t){if(r===0&&t===e.length){return f.fromByteArray(e)}else{return f.fromByteArray(e.slice(r,t))}}function utf8Slice(e,r,t){t=Math.min(e.length,t);var f=[];var n=r;while(n<t){var i=e[n];var o=null;var u=i>239?4:i>223?3:i>191?2:1;if(n+u<=t){var a,s,h,c;switch(u){case 1:if(i<128){o=i}break;case 2:a=e[n+1];if((a&192)===128){c=(i&31)<<6|a&63;if(c>127){o=c}}break;case 3:a=e[n+1];s=e[n+2];if((a&192)===128&&(s&192)===128){c=(i&15)<<12|(a&63)<<6|s&63;if(c>2047&&(c<55296||c>57343)){o=c}}break;case 4:a=e[n+1];s=e[n+2];h=e[n+3];if((a&192)===128&&(s&192)===128&&(h&192)===128){c=(i&15)<<18|(a&63)<<12|(s&63)<<6|h&63;if(c>65535&&c<1114112){o=c}}}}if(o===null){o=65533;u=1}else if(o>65535){o-=65536;f.push(o>>>10&1023|55296);o=56320|o&1023}f.push(o);n+=u}return decodeCodePointsArray(f)}var u=4096;function decodeCodePointsArray(e){var r=e.length;if(r<=u){return String.fromCharCode.apply(String,e)}var t="";var f=0;while(f<r){t+=String.fromCharCode.apply(String,e.slice(f,f+=u))}return t}function asciiSlice(e,r,t){var f="";t=Math.min(e.length,t);for(var n=r;n<t;++n){f+=String.fromCharCode(e[n]&127)}return f}function latin1Slice(e,r,t){var f="";t=Math.min(e.length,t);for(var n=r;n<t;++n){f+=String.fromCharCode(e[n])}return f}function hexSlice(e,r,t){var f=e.length;if(!r||r<0)r=0;if(!t||t<0||t>f)t=f;var n="";for(var i=r;i<t;++i){n+=s[e[i]]}return n}function utf16leSlice(e,r,t){var f=e.slice(r,t);var n="";for(var i=0;i<f.length;i+=2){n+=String.fromCharCode(f[i]+f[i+1]*256)}return n}Buffer.prototype.slice=function slice(e,r){var t=this.length;e=~~e;r=r===undefined?t:~~r;if(e<0){e+=t;if(e<0)e=0}else if(e>t){e=t}if(r<0){r+=t;if(r<0)r=0}else if(r>t){r=t}if(r<e)r=e;var f=this.subarray(e,r);Object.setPrototypeOf(f,Buffer.prototype);return f};function checkOffset(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}Buffer.prototype.readUIntLE=function readUIntLE(e,r,t){e=e>>>0;r=r>>>0;if(!t)checkOffset(e,r,this.length);var f=this[e];var n=1;var i=0;while(++i<r&&(n*=256)){f+=this[e+i]*n}return f};Buffer.prototype.readUIntBE=function readUIntBE(e,r,t){e=e>>>0;r=r>>>0;if(!t){checkOffset(e,r,this.length)}var f=this[e+--r];var n=1;while(r>0&&(n*=256)){f+=this[e+--r]*n}return f};Buffer.prototype.readUInt8=function readUInt8(e,r){e=e>>>0;if(!r)checkOffset(e,1,this.length);return this[e]};Buffer.prototype.readUInt16LE=function readUInt16LE(e,r){e=e>>>0;if(!r)checkOffset(e,2,this.length);return this[e]|this[e+1]<<8};Buffer.prototype.readUInt16BE=function readUInt16BE(e,r){e=e>>>0;if(!r)checkOffset(e,2,this.length);return this[e]<<8|this[e+1]};Buffer.prototype.readUInt32LE=function readUInt32LE(e,r){e=e>>>0;if(!r)checkOffset(e,4,this.length);return(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};Buffer.prototype.readUInt32BE=function readUInt32BE(e,r){e=e>>>0;if(!r)checkOffset(e,4,this.length);return this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};Buffer.prototype.readIntLE=function readIntLE(e,r,t){e=e>>>0;r=r>>>0;if(!t)checkOffset(e,r,this.length);var f=this[e];var n=1;var i=0;while(++i<r&&(n*=256)){f+=this[e+i]*n}n*=128;if(f>=n)f-=Math.pow(2,8*r);return f};Buffer.prototype.readIntBE=function readIntBE(e,r,t){e=e>>>0;r=r>>>0;if(!t)checkOffset(e,r,this.length);var f=r;var n=1;var i=this[e+--f];while(f>0&&(n*=256)){i+=this[e+--f]*n}n*=128;if(i>=n)i-=Math.pow(2,8*r);return i};Buffer.prototype.readInt8=function readInt8(e,r){e=e>>>0;if(!r)checkOffset(e,1,this.length);if(!(this[e]&128))return this[e];return(255-this[e]+1)*-1};Buffer.prototype.readInt16LE=function readInt16LE(e,r){e=e>>>0;if(!r)checkOffset(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t};Buffer.prototype.readInt16BE=function readInt16BE(e,r){e=e>>>0;if(!r)checkOffset(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t};Buffer.prototype.readInt32LE=function readInt32LE(e,r){e=e>>>0;if(!r)checkOffset(e,4,this.length);return this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};Buffer.prototype.readInt32BE=function readInt32BE(e,r){e=e>>>0;if(!r)checkOffset(e,4,this.length);return this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};Buffer.prototype.readFloatLE=function readFloatLE(e,r){e=e>>>0;if(!r)checkOffset(e,4,this.length);return n.read(this,e,true,23,4)};Buffer.prototype.readFloatBE=function readFloatBE(e,r){e=e>>>0;if(!r)checkOffset(e,4,this.length);return n.read(this,e,false,23,4)};Buffer.prototype.readDoubleLE=function readDoubleLE(e,r){e=e>>>0;if(!r)checkOffset(e,8,this.length);return n.read(this,e,true,52,8)};Buffer.prototype.readDoubleBE=function readDoubleBE(e,r){e=e>>>0;if(!r)checkOffset(e,8,this.length);return n.read(this,e,false,52,8)};function checkInt(e,r,t,f,n,i){if(!Buffer.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>n||r<i)throw new RangeError('"value" argument is out of bounds');if(t+f>e.length)throw new RangeError("Index out of range")}Buffer.prototype.writeUIntLE=function writeUIntLE(e,r,t,f){e=+e;r=r>>>0;t=t>>>0;if(!f){var n=Math.pow(2,8*t)-1;checkInt(this,e,r,t,n,0)}var i=1;var o=0;this[r]=e&255;while(++o<t&&(i*=256)){this[r+o]=e/i&255}return r+t};Buffer.prototype.writeUIntBE=function writeUIntBE(e,r,t,f){e=+e;r=r>>>0;t=t>>>0;if(!f){var n=Math.pow(2,8*t)-1;checkInt(this,e,r,t,n,0)}var i=t-1;var o=1;this[r+i]=e&255;while(--i>=0&&(o*=256)){this[r+i]=e/o&255}return r+t};Buffer.prototype.writeUInt8=function writeUInt8(e,r,t){e=+e;r=r>>>0;if(!t)checkInt(this,e,r,1,255,0);this[r]=e&255;return r+1};Buffer.prototype.writeUInt16LE=function writeUInt16LE(e,r,t){e=+e;r=r>>>0;if(!t)checkInt(this,e,r,2,65535,0);this[r]=e&255;this[r+1]=e>>>8;return r+2};Buffer.prototype.writeUInt16BE=function writeUInt16BE(e,r,t){e=+e;r=r>>>0;if(!t)checkInt(this,e,r,2,65535,0);this[r]=e>>>8;this[r+1]=e&255;return r+2};Buffer.prototype.writeUInt32LE=function writeUInt32LE(e,r,t){e=+e;r=r>>>0;if(!t)checkInt(this,e,r,4,4294967295,0);this[r+3]=e>>>24;this[r+2]=e>>>16;this[r+1]=e>>>8;this[r]=e&255;return r+4};Buffer.prototype.writeUInt32BE=function writeUInt32BE(e,r,t){e=+e;r=r>>>0;if(!t)checkInt(this,e,r,4,4294967295,0);this[r]=e>>>24;this[r+1]=e>>>16;this[r+2]=e>>>8;this[r+3]=e&255;return r+4};Buffer.prototype.writeIntLE=function writeIntLE(e,r,t,f){e=+e;r=r>>>0;if(!f){var n=Math.pow(2,8*t-1);checkInt(this,e,r,t,n-1,-n)}var i=0;var o=1;var u=0;this[r]=e&255;while(++i<t&&(o*=256)){if(e<0&&u===0&&this[r+i-1]!==0){u=1}this[r+i]=(e/o>>0)-u&255}return r+t};Buffer.prototype.writeIntBE=function writeIntBE(e,r,t,f){e=+e;r=r>>>0;if(!f){var n=Math.pow(2,8*t-1);checkInt(this,e,r,t,n-1,-n)}var i=t-1;var o=1;var u=0;this[r+i]=e&255;while(--i>=0&&(o*=256)){if(e<0&&u===0&&this[r+i+1]!==0){u=1}this[r+i]=(e/o>>0)-u&255}return r+t};Buffer.prototype.writeInt8=function writeInt8(e,r,t){e=+e;r=r>>>0;if(!t)checkInt(this,e,r,1,127,-128);if(e<0)e=255+e+1;this[r]=e&255;return r+1};Buffer.prototype.writeInt16LE=function writeInt16LE(e,r,t){e=+e;r=r>>>0;if(!t)checkInt(this,e,r,2,32767,-32768);this[r]=e&255;this[r+1]=e>>>8;return r+2};Buffer.prototype.writeInt16BE=function writeInt16BE(e,r,t){e=+e;r=r>>>0;if(!t)checkInt(this,e,r,2,32767,-32768);this[r]=e>>>8;this[r+1]=e&255;return r+2};Buffer.prototype.writeInt32LE=function writeInt32LE(e,r,t){e=+e;r=r>>>0;if(!t)checkInt(this,e,r,4,2147483647,-2147483648);this[r]=e&255;this[r+1]=e>>>8;this[r+2]=e>>>16;this[r+3]=e>>>24;return r+4};Buffer.prototype.writeInt32BE=function writeInt32BE(e,r,t){e=+e;r=r>>>0;if(!t)checkInt(this,e,r,4,2147483647,-2147483648);if(e<0)e=4294967295+e+1;this[r]=e>>>24;this[r+1]=e>>>16;this[r+2]=e>>>8;this[r+3]=e&255;return r+4};function checkIEEE754(e,r,t,f,n,i){if(t+f>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function writeFloat(e,r,t,f,i){r=+r;t=t>>>0;if(!i){checkIEEE754(e,r,t,4,34028234663852886e22,-34028234663852886e22)}n.write(e,r,t,f,23,4);return t+4}Buffer.prototype.writeFloatLE=function writeFloatLE(e,r,t){return writeFloat(this,e,r,true,t)};Buffer.prototype.writeFloatBE=function writeFloatBE(e,r,t){return writeFloat(this,e,r,false,t)};function writeDouble(e,r,t,f,i){r=+r;t=t>>>0;if(!i){checkIEEE754(e,r,t,8,17976931348623157e292,-17976931348623157e292)}n.write(e,r,t,f,52,8);return t+8}Buffer.prototype.writeDoubleLE=function writeDoubleLE(e,r,t){return writeDouble(this,e,r,true,t)};Buffer.prototype.writeDoubleBE=function writeDoubleBE(e,r,t){return writeDouble(this,e,r,false,t)};Buffer.prototype.copy=function copy(e,r,t,f){if(!Buffer.isBuffer(e))throw new TypeError("argument should be a Buffer");if(!t)t=0;if(!f&&f!==0)f=this.length;if(r>=e.length)r=e.length;if(!r)r=0;if(f>0&&f<t)f=t;if(f===t)return 0;if(e.length===0||this.length===0)return 0;if(r<0){throw new RangeError("targetStart out of bounds")}if(t<0||t>=this.length)throw new RangeError("Index out of range");if(f<0)throw new RangeError("sourceEnd out of bounds");if(f>this.length)f=this.length;if(e.length-r<f-t){f=e.length-r+t}var n=f-t;if(this===e&&typeof Uint8Array.prototype.copyWithin==="function"){this.copyWithin(r,t,f)}else if(this===e&&t<r&&r<f){for(var i=n-1;i>=0;--i){e[i+r]=this[i+t]}}else{Uint8Array.prototype.set.call(e,this.subarray(t,f),r)}return n};Buffer.prototype.fill=function fill(e,r,t,f){if(typeof e==="string"){if(typeof r==="string"){f=r;r=0;t=this.length}else if(typeof t==="string"){f=t;t=this.length}if(f!==undefined&&typeof f!=="string"){throw new TypeError("encoding must be a string")}if(typeof f==="string"&&!Buffer.isEncoding(f)){throw new TypeError("Unknown encoding: "+f)}if(e.length===1){var n=e.charCodeAt(0);if(f==="utf8"&&n<128||f==="latin1"){e=n}}}else if(typeof e==="number"){e=e&255}else if(typeof e==="boolean"){e=Number(e)}if(r<0||this.length<r||this.length<t){throw new RangeError("Out of range index")}if(t<=r){return this}r=r>>>0;t=t===undefined?this.length:t>>>0;if(!e)e=0;var i;if(typeof e==="number"){for(i=r;i<t;++i){this[i]=e}}else{var o=Buffer.isBuffer(e)?e:Buffer.from(e,f);var u=o.length;if(u===0){throw new TypeError('The value "'+e+'" is invalid for argument "value"')}for(i=0;i<t-r;++i){this[i+r]=o[i%u]}}return this};var a=/[^+/0-9A-Za-z-_]/g;function base64clean(e){e=e.split("=")[0];e=e.trim().replace(a,"");if(e.length<2)return"";while(e.length%4!==0){e=e+"="}return e}function utf8ToBytes(e,r){r=r||Infinity;var t;var f=e.length;var n=null;var i=[];for(var o=0;o<f;++o){t=e.charCodeAt(o);if(t>55295&&t<57344){if(!n){if(t>56319){if((r-=3)>-1)i.push(239,191,189);continue}else if(o+1===f){if((r-=3)>-1)i.push(239,191,189);continue}n=t;continue}if(t<56320){if((r-=3)>-1)i.push(239,191,189);n=t;continue}t=(n-55296<<10|t-56320)+65536}else if(n){if((r-=3)>-1)i.push(239,191,189)}n=null;if(t<128){if((r-=1)<0)break;i.push(t)}else if(t<2048){if((r-=2)<0)break;i.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;i.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;i.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else{throw new Error("Invalid code point")}}return i}function asciiToBytes(e){var r=[];for(var t=0;t<e.length;++t){r.push(e.charCodeAt(t)&255)}return r}function utf16leToBytes(e,r){var t,f,n;var i=[];for(var o=0;o<e.length;++o){if((r-=2)<0)break;t=e.charCodeAt(o);f=t>>8;n=t%256;i.push(n);i.push(f)}return i}function base64ToBytes(e){return f.toByteArray(base64clean(e))}function blitBuffer(e,r,t,f){for(var n=0;n<f;++n){if(n+t>=r.length||n>=e.length)break;r[n+t]=e[n]}return n}function isInstance(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function numberIsNaN(e){return e!==e}var s=function(){var e="0123456789abcdef";var r=new Array(256);for(var t=0;t<16;++t){var f=t*16;for(var n=0;n<16;++n){r[f+n]=e[t]+e[n]}}return r}()},783:function(e,r){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
r.read=function(e,r,t,f,n){var i,o;var u=n*8-f-1;var a=(1<<u)-1;var s=a>>1;var h=-7;var c=t?n-1:0;var l=t?-1:1;var p=e[r+c];c+=l;i=p&(1<<-h)-1;p>>=-h;h+=u;for(;h>0;i=i*256+e[r+c],c+=l,h-=8){}o=i&(1<<-h)-1;i>>=-h;h+=f;for(;h>0;o=o*256+e[r+c],c+=l,h-=8){}if(i===0){i=1-s}else if(i===a){return o?NaN:(p?-1:1)*Infinity}else{o=o+Math.pow(2,f);i=i-s}return(p?-1:1)*o*Math.pow(2,i-f)};r.write=function(e,r,t,f,n,i){var o,u,a;var s=i*8-n-1;var h=(1<<s)-1;var c=h>>1;var l=n===23?Math.pow(2,-24)-Math.pow(2,-77):0;var p=f?0:i-1;var y=f?1:-1;var g=r<0||r===0&&1/r<0?1:0;r=Math.abs(r);if(isNaN(r)||r===Infinity){u=isNaN(r)?1:0;o=h}else{o=Math.floor(Math.log(r)/Math.LN2);if(r*(a=Math.pow(2,-o))<1){o--;a*=2}if(o+c>=1){r+=l/a}else{r+=l*Math.pow(2,1-c)}if(r*a>=2){o++;a/=2}if(o+c>=h){u=0;o=h}else if(o+c>=1){u=(r*a-1)*Math.pow(2,n);o=o+c}else{u=r*Math.pow(2,c-1)*Math.pow(2,n);o=0}}for(;n>=8;e[t+p]=u&255,p+=y,u/=256,n-=8){}o=o<<n|u;s+=n;for(;s>0;e[t+p]=o&255,p+=y,o/=256,s-=8){}e[t+p-y]|=g*128}}};var r={};function __nccwpck_require__(t){var f=r[t];if(f!==undefined){return f.exports}var n=r[t]={exports:{}};var i=true;try{e[t](n,n.exports,__nccwpck_require__);i=false}finally{if(i)delete r[t]}return n.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t=__nccwpck_require__(72);module.exports=t})();

/***/ }),

/***/ 4227:
/***/ (function(module) {

var __dirname = "/";
(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout==="function"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=true;t.env={};t.argv=[];t.version="";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(229);module.exports=r})();

/***/ }),

/***/ 5973:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  InferenceSession: function() { return /* reexport */ inference_session_InferenceSession; },
  TRACE: function() { return /* reexport */ TRACE; },
  TRACE_FUNC_BEGIN: function() { return /* reexport */ TRACE_FUNC_BEGIN; },
  TRACE_FUNC_END: function() { return /* reexport */ TRACE_FUNC_END; },
  Tensor: function() { return /* reexport */ tensor_Tensor; },
  env: function() { return /* reexport */ env_env; },
  registerBackend: function() { return /* reexport */ registerBackend; }
});

;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/backend-impl.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const backends = new Map();
const backendsSortedByPriority = [];
/**
 * Register a backend.
 *
 * @param name - the name as a key to lookup as an execution provider.
 * @param backend - the backend object.
 * @param priority - an integer indicating the priority of the backend. Higher number means higher priority. if priority
 * < 0, it will be considered as a 'beta' version and will not be used as a fallback backend by default.
 *
 * @ignore
 */
const registerBackend = (name, backend, priority) => {
    if (backend && typeof backend.init === 'function' && typeof backend.createInferenceSessionHandler === 'function') {
        const currentBackend = backends.get(name);
        if (currentBackend === undefined) {
            backends.set(name, { backend, priority });
        }
        else if (currentBackend.priority > priority) {
            // same name is already registered with a higher priority. skip registeration.
            return;
        }
        else if (currentBackend.priority === priority) {
            if (currentBackend.backend !== backend) {
                throw new Error(`cannot register backend "${name}" using priority ${priority}`);
            }
        }
        if (priority >= 0) {
            const i = backendsSortedByPriority.indexOf(name);
            if (i !== -1) {
                backendsSortedByPriority.splice(i, 1);
            }
            for (let i = 0; i < backendsSortedByPriority.length; i++) {
                if (backends.get(backendsSortedByPriority[i]).priority <= priority) {
                    backendsSortedByPriority.splice(i, 0, name);
                    return;
                }
            }
            backendsSortedByPriority.push(name);
        }
        return;
    }
    throw new TypeError('not a valid backend');
};
/**
 * Try to resolve and initialize a backend.
 *
 * @param backendName - the name of the backend.
 * @returns the backend instance if resolved and initialized successfully, or an error message if failed.
 */
const tryResolveAndInitializeBackend = async (backendName) => {
    const backendInfo = backends.get(backendName);
    if (!backendInfo) {
        return 'backend not found.';
    }
    if (backendInfo.initialized) {
        return backendInfo.backend;
    }
    else if (backendInfo.aborted) {
        return backendInfo.error;
    }
    else {
        const isInitializing = !!backendInfo.initPromise;
        try {
            if (!isInitializing) {
                backendInfo.initPromise = backendInfo.backend.init(backendName);
            }
            await backendInfo.initPromise;
            backendInfo.initialized = true;
            return backendInfo.backend;
        }
        catch (e) {
            if (!isInitializing) {
                backendInfo.error = `${e}`;
                backendInfo.aborted = true;
            }
            return backendInfo.error;
        }
        finally {
            delete backendInfo.initPromise;
        }
    }
};
/**
 * Resolve execution providers from the specific session options.
 *
 * @param options - the session options object.
 * @returns a promise that resolves to a tuple of an initialized backend instance and a session options object with
 * filtered EP list.
 *
 * @ignore
 */
const resolveBackendAndExecutionProviders = async (options) => {
    // extract backend hints from session options
    const eps = options.executionProviders || [];
    const backendHints = eps.map((i) => (typeof i === 'string' ? i : i.name));
    const backendNames = backendHints.length === 0 ? backendsSortedByPriority : backendHints;
    // try to resolve and initialize all requested backends
    let backend;
    const errors = [];
    const availableBackendNames = new Set();
    for (const backendName of backendNames) {
        const resolveResult = await tryResolveAndInitializeBackend(backendName);
        if (typeof resolveResult === 'string') {
            errors.push({ name: backendName, err: resolveResult });
        }
        else {
            if (!backend) {
                backend = resolveResult;
            }
            if (backend === resolveResult) {
                availableBackendNames.add(backendName);
            }
        }
    }
    // if no backend is available, throw error.
    if (!backend) {
        throw new Error(`no available backend found. ERR: ${errors.map((e) => `[${e.name}] ${e.err}`).join(', ')}`);
    }
    // for each explicitly requested backend, if it's not available, output warning message.
    for (const { name, err } of errors) {
        if (backendHints.includes(name)) {
            // eslint-disable-next-line no-console
            console.warn(`removing requested execution provider "${name}" from session options because it is not available: ${err}`);
        }
    }
    const filteredEps = eps.filter((i) => availableBackendNames.has(typeof i === 'string' ? i : i.name));
    return [
        backend,
        new Proxy(options, {
            get: (target, prop) => {
                if (prop === 'executionProviders') {
                    return filteredEps;
                }
                return Reflect.get(target, prop);
            },
        }),
    ];
};
//# sourceMappingURL=backend-impl.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/backend.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

//# sourceMappingURL=backend.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/version.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// This file is generated by /js/scripts/update-version.ts
// Do not modify file content manually.
const version = '1.21.0';
//# sourceMappingURL=version.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/env-impl.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

let logLevelValue = 'warning';
const env = {
    wasm: {},
    webgl: {},
    webgpu: {},
    versions: { common: version },
    set logLevel(value) {
        if (value === undefined) {
            return;
        }
        if (typeof value !== 'string' || ['verbose', 'info', 'warning', 'error', 'fatal'].indexOf(value) === -1) {
            throw new Error(`Unsupported logging level: ${value}`);
        }
        logLevelValue = value;
    },
    get logLevel() {
        return logLevelValue;
    },
};
// set property 'logLevel' so that they can be correctly transferred to worker by `postMessage()`.
Object.defineProperty(env, 'logLevel', { enumerable: true });
//# sourceMappingURL=env-impl.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/env.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Represent a set of flags as a global singleton.
 */
const env_env = env;
//# sourceMappingURL=env.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/tensor-conversion-impl.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * implementation of Tensor.toDataURL()
 */
const tensorToDataURL = (tensor, options) => {
    const canvas = typeof document !== 'undefined' ? document.createElement('canvas') : new OffscreenCanvas(1, 1);
    canvas.width = tensor.dims[3];
    canvas.height = tensor.dims[2];
    const pixels2DContext = canvas.getContext('2d');
    if (pixels2DContext != null) {
        // Default values for height and width & format
        let width;
        let height;
        if (options?.tensorLayout !== undefined && options.tensorLayout === 'NHWC') {
            width = tensor.dims[2];
            height = tensor.dims[3];
        }
        else {
            // Default layout is NCWH
            width = tensor.dims[3];
            height = tensor.dims[2];
        }
        const inputformat = options?.format !== undefined ? options.format : 'RGB';
        const norm = options?.norm;
        let normMean;
        let normBias;
        if (norm === undefined || norm.mean === undefined) {
            normMean = [255, 255, 255, 255];
        }
        else {
            if (typeof norm.mean === 'number') {
                normMean = [norm.mean, norm.mean, norm.mean, norm.mean];
            }
            else {
                normMean = [norm.mean[0], norm.mean[1], norm.mean[2], 0];
                if (norm.mean[3] !== undefined) {
                    normMean[3] = norm.mean[3];
                }
            }
        }
        if (norm === undefined || norm.bias === undefined) {
            normBias = [0, 0, 0, 0];
        }
        else {
            if (typeof norm.bias === 'number') {
                normBias = [norm.bias, norm.bias, norm.bias, norm.bias];
            }
            else {
                normBias = [norm.bias[0], norm.bias[1], norm.bias[2], 0];
                if (norm.bias[3] !== undefined) {
                    normBias[3] = norm.bias[3];
                }
            }
        }
        const stride = height * width;
        // Default pointer assignments
        let rTensorPointer = 0, gTensorPointer = stride, bTensorPointer = stride * 2, aTensorPointer = -1;
        // Updating the pointer assignments based on the input image format
        if (inputformat === 'RGBA') {
            rTensorPointer = 0;
            gTensorPointer = stride;
            bTensorPointer = stride * 2;
            aTensorPointer = stride * 3;
        }
        else if (inputformat === 'RGB') {
            rTensorPointer = 0;
            gTensorPointer = stride;
            bTensorPointer = stride * 2;
        }
        else if (inputformat === 'RBG') {
            rTensorPointer = 0;
            bTensorPointer = stride;
            gTensorPointer = stride * 2;
        }
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                const R = (tensor.data[rTensorPointer++] - normBias[0]) * normMean[0]; // R value
                const G = (tensor.data[gTensorPointer++] - normBias[1]) * normMean[1]; // G value
                const B = (tensor.data[bTensorPointer++] - normBias[2]) * normMean[2]; // B value
                const A = aTensorPointer === -1 ? 255 : (tensor.data[aTensorPointer++] - normBias[3]) * normMean[3]; // A value
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                pixels2DContext.fillStyle = 'rgba(' + R + ',' + G + ',' + B + ',' + A + ')';
                pixels2DContext.fillRect(j, i, 1, 1);
            }
        }
        if ('toDataURL' in canvas) {
            return canvas.toDataURL();
        }
        else {
            throw new Error('toDataURL is not supported');
        }
    }
    else {
        throw new Error('Can not access image data');
    }
};
/**
 * implementation of Tensor.toImageData()
 */
const tensorToImageData = (tensor, options) => {
    const pixels2DContext = typeof document !== 'undefined'
        ? document.createElement('canvas').getContext('2d')
        : new OffscreenCanvas(1, 1).getContext('2d');
    let image;
    if (pixels2DContext != null) {
        // Default values for height and width & format
        let width;
        let height;
        let channels;
        if (options?.tensorLayout !== undefined && options.tensorLayout === 'NHWC') {
            width = tensor.dims[2];
            height = tensor.dims[1];
            channels = tensor.dims[3];
        }
        else {
            // Default layout is NCWH
            width = tensor.dims[3];
            height = tensor.dims[2];
            channels = tensor.dims[1];
        }
        const inputformat = options !== undefined ? (options.format !== undefined ? options.format : 'RGB') : 'RGB';
        const norm = options?.norm;
        let normMean;
        let normBias;
        if (norm === undefined || norm.mean === undefined) {
            normMean = [255, 255, 255, 255];
        }
        else {
            if (typeof norm.mean === 'number') {
                normMean = [norm.mean, norm.mean, norm.mean, norm.mean];
            }
            else {
                normMean = [norm.mean[0], norm.mean[1], norm.mean[2], 255];
                if (norm.mean[3] !== undefined) {
                    normMean[3] = norm.mean[3];
                }
            }
        }
        if (norm === undefined || norm.bias === undefined) {
            normBias = [0, 0, 0, 0];
        }
        else {
            if (typeof norm.bias === 'number') {
                normBias = [norm.bias, norm.bias, norm.bias, norm.bias];
            }
            else {
                normBias = [norm.bias[0], norm.bias[1], norm.bias[2], 0];
                if (norm.bias[3] !== undefined) {
                    normBias[3] = norm.bias[3];
                }
            }
        }
        const stride = height * width;
        if (options !== undefined) {
            if ((options.format !== undefined && channels === 4 && options.format !== 'RGBA') ||
                (channels === 3 && options.format !== 'RGB' && options.format !== 'BGR')) {
                throw new Error("Tensor format doesn't match input tensor dims");
            }
        }
        // Default pointer assignments
        const step = 4;
        let rImagePointer = 0, gImagePointer = 1, bImagePointer = 2, aImagePointer = 3;
        let rTensorPointer = 0, gTensorPointer = stride, bTensorPointer = stride * 2, aTensorPointer = -1;
        // Updating the pointer assignments based on the input image format
        if (inputformat === 'RGBA') {
            rTensorPointer = 0;
            gTensorPointer = stride;
            bTensorPointer = stride * 2;
            aTensorPointer = stride * 3;
        }
        else if (inputformat === 'RGB') {
            rTensorPointer = 0;
            gTensorPointer = stride;
            bTensorPointer = stride * 2;
        }
        else if (inputformat === 'RBG') {
            rTensorPointer = 0;
            bTensorPointer = stride;
            gTensorPointer = stride * 2;
        }
        image = pixels2DContext.createImageData(width, height);
        for (let i = 0; i < height * width; rImagePointer += step, gImagePointer += step, bImagePointer += step, aImagePointer += step, i++) {
            image.data[rImagePointer] = (tensor.data[rTensorPointer++] - normBias[0]) * normMean[0]; // R value
            image.data[gImagePointer] = (tensor.data[gTensorPointer++] - normBias[1]) * normMean[1]; // G value
            image.data[bImagePointer] = (tensor.data[bTensorPointer++] - normBias[2]) * normMean[2]; // B value
            image.data[aImagePointer] =
                aTensorPointer === -1 ? 255 : (tensor.data[aTensorPointer++] - normBias[3]) * normMean[3]; // A value
        }
    }
    else {
        throw new Error('Can not access image data');
    }
    return image;
};
//# sourceMappingURL=tensor-conversion-impl.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/tensor-factory-impl.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Create a new tensor object from image object
 *
 * @param buffer - Extracted image buffer data - assuming RGBA format
 * @param imageFormat - input image configuration - required configurations height, width, format
 * @param tensorFormat - output tensor configuration - Default is RGB format
 */
const bufferToTensor = (buffer, options) => {
    if (buffer === undefined) {
        throw new Error('Image buffer must be defined');
    }
    if (options.height === undefined || options.width === undefined) {
        throw new Error('Image height and width must be defined');
    }
    if (options.tensorLayout === 'NHWC') {
        throw new Error('NHWC Tensor layout is not supported yet');
    }
    const { height, width } = options;
    const norm = options.norm ?? { mean: 255, bias: 0 };
    let normMean;
    let normBias;
    if (typeof norm.mean === 'number') {
        normMean = [norm.mean, norm.mean, norm.mean, norm.mean];
    }
    else {
        normMean = [norm.mean[0], norm.mean[1], norm.mean[2], norm.mean[3] ?? 255];
    }
    if (typeof norm.bias === 'number') {
        normBias = [norm.bias, norm.bias, norm.bias, norm.bias];
    }
    else {
        normBias = [norm.bias[0], norm.bias[1], norm.bias[2], norm.bias[3] ?? 0];
    }
    const inputformat = options.format !== undefined ? options.format : 'RGBA';
    // default value is RGBA since imagedata and HTMLImageElement uses it
    const outputformat = options.tensorFormat !== undefined ? (options.tensorFormat !== undefined ? options.tensorFormat : 'RGB') : 'RGB';
    const stride = height * width;
    const float32Data = outputformat === 'RGBA' ? new Float32Array(stride * 4) : new Float32Array(stride * 3);
    // Default pointer assignments
    let step = 4, rImagePointer = 0, gImagePointer = 1, bImagePointer = 2, aImagePointer = 3;
    let rTensorPointer = 0, gTensorPointer = stride, bTensorPointer = stride * 2, aTensorPointer = -1;
    // Updating the pointer assignments based on the input image format
    if (inputformat === 'RGB') {
        step = 3;
        rImagePointer = 0;
        gImagePointer = 1;
        bImagePointer = 2;
        aImagePointer = -1;
    }
    // Updating the pointer assignments based on the output tensor format
    if (outputformat === 'RGBA') {
        aTensorPointer = stride * 3;
    }
    else if (outputformat === 'RBG') {
        rTensorPointer = 0;
        bTensorPointer = stride;
        gTensorPointer = stride * 2;
    }
    else if (outputformat === 'BGR') {
        bTensorPointer = 0;
        gTensorPointer = stride;
        rTensorPointer = stride * 2;
    }
    for (let i = 0; i < stride; i++, rImagePointer += step, bImagePointer += step, gImagePointer += step, aImagePointer += step) {
        float32Data[rTensorPointer++] = (buffer[rImagePointer] + normBias[0]) / normMean[0];
        float32Data[gTensorPointer++] = (buffer[gImagePointer] + normBias[1]) / normMean[1];
        float32Data[bTensorPointer++] = (buffer[bImagePointer] + normBias[2]) / normMean[2];
        if (aTensorPointer !== -1 && aImagePointer !== -1) {
            float32Data[aTensorPointer++] = (buffer[aImagePointer] + normBias[3]) / normMean[3];
        }
    }
    // Float32Array -> ort.Tensor
    const outputTensor = outputformat === 'RGBA'
        ? new Tensor('float32', float32Data, [1, 4, height, width])
        : new Tensor('float32', float32Data, [1, 3, height, width]);
    return outputTensor;
};
/**
 * implementation of Tensor.fromImage().
 */
const tensorFromImage = async (image, options) => {
    // checking the type of image object
    const isHTMLImageEle = typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement;
    const isImageDataEle = typeof ImageData !== 'undefined' && image instanceof ImageData;
    const isImageBitmap = typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap;
    const isString = typeof image === 'string';
    let data;
    let bufferToTensorOptions = options ?? {};
    const createCanvas = () => {
        if (typeof document !== 'undefined') {
            return document.createElement('canvas');
        }
        else if (typeof OffscreenCanvas !== 'undefined') {
            return new OffscreenCanvas(1, 1);
        }
        else {
            throw new Error('Canvas is not supported');
        }
    };
    const createCanvasContext = (canvas) => {
        if (typeof HTMLCanvasElement !== 'undefined' && canvas instanceof HTMLCanvasElement) {
            return canvas.getContext('2d');
        }
        else if (canvas instanceof OffscreenCanvas) {
            return canvas.getContext('2d');
        }
        else {
            return null;
        }
    };
    // filling and checking image configuration options
    if (isHTMLImageEle) {
        // HTMLImageElement - image object - format is RGBA by default
        const canvas = createCanvas();
        canvas.width = image.width;
        canvas.height = image.height;
        const pixels2DContext = createCanvasContext(canvas);
        if (pixels2DContext != null) {
            let height = image.height;
            let width = image.width;
            if (options !== undefined && options.resizedHeight !== undefined && options.resizedWidth !== undefined) {
                height = options.resizedHeight;
                width = options.resizedWidth;
            }
            if (options !== undefined) {
                bufferToTensorOptions = options;
                if (options.tensorFormat !== undefined) {
                    throw new Error('Image input config format must be RGBA for HTMLImageElement');
                }
                else {
                    bufferToTensorOptions.tensorFormat = 'RGBA';
                }
                bufferToTensorOptions.height = height;
                bufferToTensorOptions.width = width;
            }
            else {
                bufferToTensorOptions.tensorFormat = 'RGBA';
                bufferToTensorOptions.height = height;
                bufferToTensorOptions.width = width;
            }
            pixels2DContext.drawImage(image, 0, 0);
            data = pixels2DContext.getImageData(0, 0, width, height).data;
        }
        else {
            throw new Error('Can not access image data');
        }
    }
    else if (isImageDataEle) {
        let height;
        let width;
        if (options !== undefined && options.resizedWidth !== undefined && options.resizedHeight !== undefined) {
            height = options.resizedHeight;
            width = options.resizedWidth;
        }
        else {
            height = image.height;
            width = image.width;
        }
        if (options !== undefined) {
            bufferToTensorOptions = options;
        }
        bufferToTensorOptions.format = 'RGBA';
        bufferToTensorOptions.height = height;
        bufferToTensorOptions.width = width;
        if (options !== undefined) {
            const tempCanvas = createCanvas();
            tempCanvas.width = width;
            tempCanvas.height = height;
            const pixels2DContext = createCanvasContext(tempCanvas);
            if (pixels2DContext != null) {
                pixels2DContext.putImageData(image, 0, 0);
                data = pixels2DContext.getImageData(0, 0, width, height).data;
            }
            else {
                throw new Error('Can not access image data');
            }
        }
        else {
            data = image.data;
        }
    }
    else if (isImageBitmap) {
        // ImageBitmap - image object - format must be provided by user
        if (options === undefined) {
            throw new Error('Please provide image config with format for Imagebitmap');
        }
        const canvas = createCanvas();
        canvas.width = image.width;
        canvas.height = image.height;
        const pixels2DContext = createCanvasContext(canvas);
        if (pixels2DContext != null) {
            const height = image.height;
            const width = image.width;
            pixels2DContext.drawImage(image, 0, 0, width, height);
            data = pixels2DContext.getImageData(0, 0, width, height).data;
            bufferToTensorOptions.height = height;
            bufferToTensorOptions.width = width;
            return bufferToTensor(data, bufferToTensorOptions);
        }
        else {
            throw new Error('Can not access image data');
        }
    }
    else if (isString) {
        return new Promise((resolve, reject) => {
            const canvas = createCanvas();
            const context = createCanvasContext(canvas);
            if (!image || !context) {
                return reject();
            }
            const newImage = new Image();
            newImage.crossOrigin = 'Anonymous';
            newImage.src = image;
            newImage.onload = () => {
                canvas.width = newImage.width;
                canvas.height = newImage.height;
                context.drawImage(newImage, 0, 0, canvas.width, canvas.height);
                const img = context.getImageData(0, 0, canvas.width, canvas.height);
                bufferToTensorOptions.height = canvas.height;
                bufferToTensorOptions.width = canvas.width;
                resolve(bufferToTensor(img.data, bufferToTensorOptions));
            };
        });
    }
    else {
        throw new Error('Input data provided is not supported - aborted tensor creation');
    }
    if (data !== undefined) {
        return bufferToTensor(data, bufferToTensorOptions);
    }
    else {
        throw new Error('Input data provided is not supported - aborted tensor creation');
    }
};
/**
 * implementation of Tensor.fromTexture().
 */
const tensorFromTexture = (texture, options) => {
    const { width, height, download, dispose } = options;
    // Always assume RGBAF32. TODO: support different texture format
    const dims = [1, height, width, 4];
    return new Tensor({ location: 'texture', type: 'float32', texture, dims, download, dispose });
};
/**
 * implementation of Tensor.fromGpuBuffer().
 */
const tensorFromGpuBuffer = (gpuBuffer, options) => {
    const { dataType, dims, download, dispose } = options;
    return new Tensor({ location: 'gpu-buffer', type: dataType ?? 'float32', gpuBuffer, dims, download, dispose });
};
/**
 * implementation of Tensor.fromMLTensor().
 */
const tensorFromMLTensor = (mlTensor, options) => {
    const { dataType, dims, download, dispose } = options;
    return new Tensor({ location: 'ml-tensor', type: dataType ?? 'float32', mlTensor, dims, download, dispose });
};
/**
 * implementation of Tensor.fromPinnedBuffer().
 */
const tensorFromPinnedBuffer = (type, buffer, dims) => new Tensor({ location: 'cpu-pinned', type, data: buffer, dims: dims ?? [buffer.length] });
//# sourceMappingURL=tensor-factory-impl.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/tensor-impl-type-mapping.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// a runtime map that maps type string to TypedArray constructor. Should match Tensor.DataTypeMap.
const NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP = new Map([
    ['float32', Float32Array],
    ['uint8', Uint8Array],
    ['int8', Int8Array],
    ['uint16', Uint16Array],
    ['int16', Int16Array],
    ['int32', Int32Array],
    ['bool', Uint8Array],
    ['float64', Float64Array],
    ['uint32', Uint32Array],
    ['int4', Uint8Array],
    ['uint4', Uint8Array],
]);
// a runtime map that maps type string to TypedArray constructor. Should match Tensor.DataTypeMap.
const NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP = new Map([
    [Float32Array, 'float32'],
    [Uint8Array, 'uint8'],
    [Int8Array, 'int8'],
    [Uint16Array, 'uint16'],
    [Int16Array, 'int16'],
    [Int32Array, 'int32'],
    [Float64Array, 'float64'],
    [Uint32Array, 'uint32'],
]);
// the following code allows delaying execution of BigInt/Float16Array checking. This allows lazy initialization for
// NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP and NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP, which allows BigInt/Float16Array
// polyfill if available.
let isTypedArrayChecked = false;
const checkTypedArray = () => {
    if (!isTypedArrayChecked) {
        isTypedArrayChecked = true;
        const isBigInt64ArrayAvailable = typeof BigInt64Array !== 'undefined' && BigInt64Array.from;
        const isBigUint64ArrayAvailable = typeof BigUint64Array !== 'undefined' && BigUint64Array.from;
        // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any
        const Float16Array = globalThis.Float16Array;
        const isFloat16ArrayAvailable = typeof Float16Array !== 'undefined' && Float16Array.from;
        if (isBigInt64ArrayAvailable) {
            NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.set('int64', BigInt64Array);
            NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.set(BigInt64Array, 'int64');
        }
        if (isBigUint64ArrayAvailable) {
            NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.set('uint64', BigUint64Array);
            NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.set(BigUint64Array, 'uint64');
        }
        if (isFloat16ArrayAvailable) {
            NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.set('float16', Float16Array);
            NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.set(Float16Array, 'float16');
        }
        else {
            // if Float16Array is not available, use 'Uint16Array' to store the data.
            NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.set('float16', Uint16Array);
        }
    }
};
//# sourceMappingURL=tensor-impl-type-mapping.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/tensor-utils-impl.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * calculate size from dims.
 *
 * @param dims the dims array. May be an illegal input.
 */
const calculateSize = (dims) => {
    let size = 1;
    for (let i = 0; i < dims.length; i++) {
        const dim = dims[i];
        if (typeof dim !== 'number' || !Number.isSafeInteger(dim)) {
            throw new TypeError(`dims[${i}] must be an integer, got: ${dim}`);
        }
        if (dim < 0) {
            throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${dim}`);
        }
        size *= dim;
    }
    return size;
};
/**
 * implementation of Tensor.reshape()
 */
const tensorReshape = (tensor, dims) => {
    switch (tensor.location) {
        case 'cpu':
            return new Tensor(tensor.type, tensor.data, dims);
        case 'cpu-pinned':
            return new Tensor({
                location: 'cpu-pinned',
                data: tensor.data,
                type: tensor.type,
                dims,
            });
        case 'texture':
            return new Tensor({
                location: 'texture',
                texture: tensor.texture,
                type: tensor.type,
                dims,
            });
        case 'gpu-buffer':
            return new Tensor({
                location: 'gpu-buffer',
                gpuBuffer: tensor.gpuBuffer,
                type: tensor.type,
                dims,
            });
        case 'ml-tensor':
            return new Tensor({
                location: 'ml-tensor',
                mlTensor: tensor.mlTensor,
                type: tensor.type,
                dims,
            });
        default:
            throw new Error(`tensorReshape: tensor location ${tensor.location} is not supported`);
    }
};
//# sourceMappingURL=tensor-utils-impl.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/tensor-impl.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.




/**
 * the implementation of Tensor interface.
 *
 * @ignore
 */
class Tensor {
    /**
     * implementation.
     */
    constructor(arg0, arg1, arg2) {
        // perform one-time check for BigInt/Float16Array support
        checkTypedArray();
        let type;
        let dims;
        if (typeof arg0 === 'object' && 'location' in arg0) {
            //
            // constructing tensor from specific location
            //
            this.dataLocation = arg0.location;
            type = arg0.type;
            dims = arg0.dims;
            switch (arg0.location) {
                case 'cpu-pinned': {
                    const expectedTypedArrayConstructor = NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.get(type);
                    if (!expectedTypedArrayConstructor) {
                        throw new TypeError(`unsupported type "${type}" to create tensor from pinned buffer`);
                    }
                    if (!(arg0.data instanceof expectedTypedArrayConstructor)) {
                        throw new TypeError(`buffer should be of type ${expectedTypedArrayConstructor.name}`);
                    }
                    this.cpuData = arg0.data;
                    break;
                }
                case 'texture': {
                    if (type !== 'float32') {
                        throw new TypeError(`unsupported type "${type}" to create tensor from texture`);
                    }
                    this.gpuTextureData = arg0.texture;
                    this.downloader = arg0.download;
                    this.disposer = arg0.dispose;
                    break;
                }
                case 'gpu-buffer': {
                    if (type !== 'float32' &&
                        type !== 'float16' &&
                        type !== 'int32' &&
                        type !== 'int64' &&
                        type !== 'uint32' &&
                        type !== 'uint8' &&
                        type !== 'bool' &&
                        type !== 'uint4' &&
                        type !== 'int4') {
                        throw new TypeError(`unsupported type "${type}" to create tensor from gpu buffer`);
                    }
                    this.gpuBufferData = arg0.gpuBuffer;
                    this.downloader = arg0.download;
                    this.disposer = arg0.dispose;
                    break;
                }
                case 'ml-tensor': {
                    if (type !== 'float32' &&
                        type !== 'float16' &&
                        type !== 'int32' &&
                        type !== 'int64' &&
                        type !== 'uint32' &&
                        type !== 'uint64' &&
                        type !== 'int8' &&
                        type !== 'uint8' &&
                        type !== 'bool' &&
                        type !== 'uint4' &&
                        type !== 'int4') {
                        throw new TypeError(`unsupported type "${type}" to create tensor from MLTensor`);
                    }
                    this.mlTensorData = arg0.mlTensor;
                    this.downloader = arg0.download;
                    this.disposer = arg0.dispose;
                    break;
                }
                default:
                    throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`);
            }
        }
        else {
            //
            // constructing tensor of location 'cpu'
            //
            let data;
            let maybeDims;
            // check whether arg0 is type or data
            if (typeof arg0 === 'string') {
                //
                // Override: constructor(type, data, ...)
                //
                type = arg0;
                maybeDims = arg2;
                if (arg0 === 'string') {
                    // string tensor
                    if (!Array.isArray(arg1)) {
                        throw new TypeError("A string tensor's data must be a string array.");
                    }
                    // we don't check whether every element in the array is string; this is too slow. we assume it's correct and
                    // error will be populated at inference
                    data = arg1;
                }
                else {
                    // numeric tensor
                    const typedArrayConstructor = NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.get(arg0);
                    if (typedArrayConstructor === undefined) {
                        throw new TypeError(`Unsupported tensor type: ${arg0}.`);
                    }
                    if (Array.isArray(arg1)) {
                        if ((arg0 === 'float16' && typedArrayConstructor === Uint16Array) || arg0 === 'uint4' || arg0 === 'int4') {
                            // - 'float16':
                            //   When no Float16Array polyfill is used, we cannot create 'float16' tensor from number array.
                            //
                            //   Throw error here because when user try to use number array as data,
                            //   e.g. new Tensor('float16', [1, 2, 3, 4], dims)), it will actually call
                            //   Uint16Array.from(arg1) which generates wrong data.
                            //
                            // - 'uint4' and 'int4':
                            //   Uint8Array.from(arg1) will generate wrong data for 'uint4' and 'int4' tensor.
                            //
                            throw new TypeError(`Creating a ${arg0} tensor from number array is not supported. Please use ${typedArrayConstructor.name} as data.`);
                        }
                        else if (arg0 === 'uint64' || arg0 === 'int64') {
                            // use 'as any' here because:
                            // 1. TypeScript's check on type of 'Array.isArray()' does not work with readonly arrays.
                            // see https://github.com/microsoft/TypeScript/issues/17002
                            // 2. TypeScript's check on union type of '(BigInt64ArrayConstructor|BigUint64ArrayConstructor).from()'
                            // does not accept parameter mapFn.
                            // 3. parameters of 'SupportedTypedArrayConstructors.from()' does not match the requirement of the union
                            // type.
                            // assume 'arg1' is of type "readonly number[]|readonly bigint[]" here.
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            data = typedArrayConstructor.from(arg1, BigInt);
                        }
                        else {
                            // assume 'arg1' is of type "readonly number[]" here.
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            data = typedArrayConstructor.from(arg1);
                        }
                    }
                    else if (arg1 instanceof typedArrayConstructor) {
                        data = arg1;
                    }
                    else if (arg1 instanceof Uint8ClampedArray) {
                        if (arg0 === 'uint8') {
                            data = Uint8Array.from(arg1);
                        }
                        else {
                            throw new TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);
                        }
                    }
                    else if (arg0 === 'float16' && arg1 instanceof Uint16Array && typedArrayConstructor !== Uint16Array) {
                        // when Float16Array is available and data is of type Uint16Array.
                        // We allow Uint16Array to be passed in as data for 'float16' tensor until Float16Array is generally
                        // supported in JavaScript environment.
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        data = new globalThis.Float16Array(arg1.buffer, arg1.byteOffset, arg1.length);
                    }
                    else {
                        throw new TypeError(`A ${type} tensor's data must be type of ${typedArrayConstructor}`);
                    }
                }
            }
            else {
                //
                // Override: constructor(data, ...)
                //
                maybeDims = arg1;
                if (Array.isArray(arg0)) {
                    // only boolean[] and string[] is supported
                    if (arg0.length === 0) {
                        throw new TypeError('Tensor type cannot be inferred from an empty array.');
                    }
                    const firstElementType = typeof arg0[0];
                    if (firstElementType === 'string') {
                        type = 'string';
                        data = arg0;
                    }
                    else if (firstElementType === 'boolean') {
                        type = 'bool';
                        // 'arg0' is of type 'boolean[]'. Uint8Array.from(boolean[]) actually works, but typescript thinks this is
                        // wrong type. We use 'as any' to make it happy.
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        data = Uint8Array.from(arg0);
                    }
                    else {
                        throw new TypeError(`Invalid element type of data array: ${firstElementType}.`);
                    }
                }
                else if (arg0 instanceof Uint8ClampedArray) {
                    type = 'uint8';
                    data = Uint8Array.from(arg0);
                }
                else {
                    // get tensor type from TypedArray
                    const mappedType = NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.get(arg0.constructor);
                    if (mappedType === undefined) {
                        throw new TypeError(`Unsupported type for tensor data: ${arg0.constructor}.`);
                    }
                    type = mappedType;
                    data = arg0;
                }
            }
            // type and data is processed, now processing dims
            if (maybeDims === undefined) {
                // assume 1-D tensor if dims omitted
                maybeDims = [data.length];
            }
            else if (!Array.isArray(maybeDims)) {
                throw new TypeError("A tensor's dims must be a number array");
            }
            dims = maybeDims;
            this.cpuData = data;
            this.dataLocation = 'cpu';
        }
        // perform check on dims
        const size = calculateSize(dims);
        // if data is on CPU, check whether data length matches tensor size
        if (this.cpuData && size !== this.cpuData.length) {
            if ((type === 'uint4' || type === 'int4') && Math.ceil(size / 2) === this.cpuData.length) {
                // for (u)int4, the data length is half of the tensor size. So we check this special case when size is odd.
            }
            else {
                throw new Error(`Tensor's size(${size}) does not match data length(${this.cpuData.length}).`);
            }
        }
        this.type = type;
        this.dims = dims;
        this.size = size;
    }
    // #endregion
    // #region factory
    static async fromImage(image, options) {
        return tensorFromImage(image, options);
    }
    static fromTexture(texture, options) {
        return tensorFromTexture(texture, options);
    }
    static fromGpuBuffer(gpuBuffer, options) {
        return tensorFromGpuBuffer(gpuBuffer, options);
    }
    static fromMLTensor(mlTensor, options) {
        return tensorFromMLTensor(mlTensor, options);
    }
    static fromPinnedBuffer(type, buffer, dims) {
        return tensorFromPinnedBuffer(type, buffer, dims);
    }
    // #endregion
    // #region conversions
    toDataURL(options) {
        return tensorToDataURL(this, options);
    }
    toImageData(options) {
        return tensorToImageData(this, options);
    }
    // #endregion
    // #region properties
    get data() {
        this.ensureValid();
        if (!this.cpuData) {
            throw new Error('The data is not on CPU. Use `getData()` to download GPU data to CPU, ' +
                'or use `texture` or `gpuBuffer` property to access the GPU data directly.');
        }
        return this.cpuData;
    }
    get location() {
        return this.dataLocation;
    }
    get texture() {
        this.ensureValid();
        if (!this.gpuTextureData) {
            throw new Error('The data is not stored as a WebGL texture.');
        }
        return this.gpuTextureData;
    }
    get gpuBuffer() {
        this.ensureValid();
        if (!this.gpuBufferData) {
            throw new Error('The data is not stored as a WebGPU buffer.');
        }
        return this.gpuBufferData;
    }
    get mlTensor() {
        this.ensureValid();
        if (!this.mlTensorData) {
            throw new Error('The data is not stored as a WebNN MLTensor.');
        }
        return this.mlTensorData;
    }
    // #endregion
    // #region methods
    async getData(releaseData) {
        this.ensureValid();
        switch (this.dataLocation) {
            case 'cpu':
            case 'cpu-pinned':
                return this.data;
            case 'texture':
            case 'gpu-buffer':
            case 'ml-tensor': {
                if (!this.downloader) {
                    throw new Error('The current tensor is not created with a specified data downloader.');
                }
                if (this.isDownloading) {
                    throw new Error('The current tensor is being downloaded.');
                }
                try {
                    this.isDownloading = true;
                    const data = await this.downloader();
                    this.downloader = undefined;
                    this.dataLocation = 'cpu';
                    this.cpuData = data;
                    if (releaseData && this.disposer) {
                        this.disposer();
                        this.disposer = undefined;
                    }
                    return data;
                }
                finally {
                    this.isDownloading = false;
                }
            }
            default:
                throw new Error(`cannot get data from location: ${this.dataLocation}`);
        }
    }
    dispose() {
        if (this.isDownloading) {
            throw new Error('The current tensor is being downloaded.');
        }
        if (this.disposer) {
            this.disposer();
            this.disposer = undefined;
        }
        this.cpuData = undefined;
        this.gpuTextureData = undefined;
        this.gpuBufferData = undefined;
        this.mlTensorData = undefined;
        this.downloader = undefined;
        this.isDownloading = undefined;
        this.dataLocation = 'none';
    }
    // #endregion
    // #region tensor utilities
    ensureValid() {
        if (this.dataLocation === 'none') {
            throw new Error('The tensor is disposed.');
        }
    }
    reshape(dims) {
        this.ensureValid();
        if (this.downloader || this.disposer) {
            throw new Error('Cannot reshape a tensor that owns GPU resource.');
        }
        return tensorReshape(this, dims);
    }
}
//# sourceMappingURL=tensor-impl.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/tensor.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// eslint-disable-next-line @typescript-eslint/naming-convention
const tensor_Tensor = Tensor;
//# sourceMappingURL=tensor.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/trace.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * @ignore
 */
const TRACE = (deviceType, label) => {
    if (typeof env.trace === 'undefined' ? !env.wasm.trace : !env.trace) {
        return;
    }
    // eslint-disable-next-line no-console
    console.timeStamp(`${deviceType}::ORT::${label}`);
};
const TRACE_FUNC = (msg, extraMsg) => {
    const stack = new Error().stack?.split(/\r\n|\r|\n/g) || [];
    let hasTraceFunc = false;
    for (let i = 0; i < stack.length; i++) {
        if (hasTraceFunc && !stack[i].includes('TRACE_FUNC')) {
            let label = `FUNC_${msg}::${stack[i].trim().split(' ')[1]}`;
            if (extraMsg) {
                label += `::${extraMsg}`;
            }
            TRACE('CPU', label);
            return;
        }
        if (stack[i].includes('TRACE_FUNC')) {
            hasTraceFunc = true;
        }
    }
};
/**
 * @ignore
 */
const TRACE_FUNC_BEGIN = (extraMsg) => {
    if (typeof env.trace === 'undefined' ? !env.wasm.trace : !env.trace) {
        return;
    }
    TRACE_FUNC('BEGIN', extraMsg);
};
/**
 * @ignore
 */
const TRACE_FUNC_END = (extraMsg) => {
    if (typeof env.trace === 'undefined' ? !env.wasm.trace : !env.trace) {
        return;
    }
    TRACE_FUNC('END', extraMsg);
};
//# sourceMappingURL=trace.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/inference-session-impl.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.



class InferenceSession {
    constructor(handler) {
        this.handler = handler;
    }
    async run(feeds, arg1, arg2) {
        TRACE_FUNC_BEGIN();
        const fetches = {};
        let options = {};
        // check inputs
        if (typeof feeds !== 'object' || feeds === null || feeds instanceof tensor_Tensor || Array.isArray(feeds)) {
            throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");
        }
        let isFetchesEmpty = true;
        // determine which override is being used
        if (typeof arg1 === 'object') {
            if (arg1 === null) {
                throw new TypeError('Unexpected argument[1]: cannot be null.');
            }
            if (arg1 instanceof tensor_Tensor) {
                throw new TypeError("'fetches' cannot be a Tensor");
            }
            if (Array.isArray(arg1)) {
                if (arg1.length === 0) {
                    throw new TypeError("'fetches' cannot be an empty array.");
                }
                isFetchesEmpty = false;
                // output names
                for (const name of arg1) {
                    if (typeof name !== 'string') {
                        throw new TypeError("'fetches' must be a string array or an object.");
                    }
                    if (this.outputNames.indexOf(name) === -1) {
                        throw new RangeError(`'fetches' contains invalid output name: ${name}.`);
                    }
                    fetches[name] = null;
                }
                if (typeof arg2 === 'object' && arg2 !== null) {
                    options = arg2;
                }
                else if (typeof arg2 !== 'undefined') {
                    throw new TypeError("'options' must be an object.");
                }
            }
            else {
                // decide whether arg1 is fetches or options
                // if any output name is present and its value is valid OnnxValue, we consider it fetches
                let isFetches = false;
                const arg1Keys = Object.getOwnPropertyNames(arg1);
                for (const name of this.outputNames) {
                    if (arg1Keys.indexOf(name) !== -1) {
                        const v = arg1[name];
                        if (v === null || v instanceof tensor_Tensor) {
                            isFetches = true;
                            isFetchesEmpty = false;
                            fetches[name] = v;
                        }
                    }
                }
                if (isFetches) {
                    if (typeof arg2 === 'object' && arg2 !== null) {
                        options = arg2;
                    }
                    else if (typeof arg2 !== 'undefined') {
                        throw new TypeError("'options' must be an object.");
                    }
                }
                else {
                    options = arg1;
                }
            }
        }
        else if (typeof arg1 !== 'undefined') {
            throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");
        }
        // check if all inputs are in feed
        for (const name of this.inputNames) {
            if (typeof feeds[name] === 'undefined') {
                throw new Error(`input '${name}' is missing in 'feeds'.`);
            }
        }
        // if no fetches is specified, we use the full output names list
        if (isFetchesEmpty) {
            for (const name of this.outputNames) {
                fetches[name] = null;
            }
        }
        // feeds, fetches and options are prepared
        const results = await this.handler.run(feeds, fetches, options);
        const returnValue = {};
        for (const key in results) {
            if (Object.hasOwnProperty.call(results, key)) {
                const result = results[key];
                if (result instanceof tensor_Tensor) {
                    returnValue[key] = result;
                }
                else {
                    returnValue[key] = new tensor_Tensor(result.type, result.data, result.dims);
                }
            }
        }
        TRACE_FUNC_END();
        return returnValue;
    }
    async release() {
        return this.handler.dispose();
    }
    static async create(arg0, arg1, arg2, arg3) {
        TRACE_FUNC_BEGIN();
        // either load from a file or buffer
        let filePathOrUint8Array;
        let options = {};
        if (typeof arg0 === 'string') {
            filePathOrUint8Array = arg0;
            if (typeof arg1 === 'object' && arg1 !== null) {
                options = arg1;
            }
            else if (typeof arg1 !== 'undefined') {
                throw new TypeError("'options' must be an object.");
            }
        }
        else if (arg0 instanceof Uint8Array) {
            filePathOrUint8Array = arg0;
            if (typeof arg1 === 'object' && arg1 !== null) {
                options = arg1;
            }
            else if (typeof arg1 !== 'undefined') {
                throw new TypeError("'options' must be an object.");
            }
        }
        else if (arg0 instanceof ArrayBuffer ||
            (typeof SharedArrayBuffer !== 'undefined' && arg0 instanceof SharedArrayBuffer)) {
            const buffer = arg0;
            let byteOffset = 0;
            let byteLength = arg0.byteLength;
            if (typeof arg1 === 'object' && arg1 !== null) {
                options = arg1;
            }
            else if (typeof arg1 === 'number') {
                byteOffset = arg1;
                if (!Number.isSafeInteger(byteOffset)) {
                    throw new RangeError("'byteOffset' must be an integer.");
                }
                if (byteOffset < 0 || byteOffset >= buffer.byteLength) {
                    throw new RangeError(`'byteOffset' is out of range [0, ${buffer.byteLength}).`);
                }
                byteLength = arg0.byteLength - byteOffset;
                if (typeof arg2 === 'number') {
                    byteLength = arg2;
                    if (!Number.isSafeInteger(byteLength)) {
                        throw new RangeError("'byteLength' must be an integer.");
                    }
                    if (byteLength <= 0 || byteOffset + byteLength > buffer.byteLength) {
                        throw new RangeError(`'byteLength' is out of range (0, ${buffer.byteLength - byteOffset}].`);
                    }
                    if (typeof arg3 === 'object' && arg3 !== null) {
                        options = arg3;
                    }
                    else if (typeof arg3 !== 'undefined') {
                        throw new TypeError("'options' must be an object.");
                    }
                }
                else if (typeof arg2 !== 'undefined') {
                    throw new TypeError("'byteLength' must be a number.");
                }
            }
            else if (typeof arg1 !== 'undefined') {
                throw new TypeError("'options' must be an object.");
            }
            filePathOrUint8Array = new Uint8Array(buffer, byteOffset, byteLength);
        }
        else {
            throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");
        }
        // resolve backend, update session options with validated EPs, and create session handler
        const [backend, optionsWithValidatedEPs] = await resolveBackendAndExecutionProviders(options);
        const handler = await backend.createInferenceSessionHandler(filePathOrUint8Array, optionsWithValidatedEPs);
        TRACE_FUNC_END();
        return new InferenceSession(handler);
    }
    startProfiling() {
        this.handler.startProfiling();
    }
    endProfiling() {
        this.handler.endProfiling();
    }
    get inputNames() {
        return this.handler.inputNames;
    }
    get outputNames() {
        return this.handler.outputNames;
    }
}
//# sourceMappingURL=inference-session-impl.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/inference-session.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// eslint-disable-next-line @typescript-eslint/naming-convention
const inference_session_InferenceSession = InferenceSession;
//# sourceMappingURL=inference-session.js.map
;// CONCATENATED MODULE: ./node_modules/onnxruntime-common/dist/esm/index.js
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * # ONNX Runtime JavaScript API
 *
 * ONNX Runtime JavaScript API is a unified API for all JavaScript usages, including the following NPM packages:
 *
 * - [onnxruntime-node](https://www.npmjs.com/package/onnxruntime-node)
 * - [onnxruntime-web](https://www.npmjs.com/package/onnxruntime-web)
 * - [onnxruntime-react-native](https://www.npmjs.com/package/onnxruntime-react-native)
 *
 * See also:
 * - [Get Started](https://onnxruntime.ai/docs/get-started/with-javascript/)
 * - [Inference examples](https://github.com/microsoft/onnxruntime-inference-examples/tree/main/js)
 *
 * @packageDocumentation
 */









//# sourceMappingURL=index.js.map

/***/ })

}]);