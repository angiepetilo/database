/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/api.js"
/*!*****************************!*\
  !*** ./resources/js/api.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Api = {
  baseUrl: '/api',
  token: localStorage.getItem('token'),
  request: function request(endpoint) {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var options, url, headers, response, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            options = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : {};
            url = "".concat(_this.baseUrl).concat(endpoint);
            headers = _objectSpread({
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }, options.headers);
            if (_this.token) {
              headers['Authorization'] = "Bearer ".concat(_this.token);
            }
            _context.p = 1;
            _context.n = 2;
            return fetch(url, _objectSpread(_objectSpread({}, options), {}, {
              headers: headers
            }));
          case 2:
            response = _context.v;
            _context.n = 3;
            return response.json();
          case 3:
            data = _context.v;
            if (!(response.status === 401)) {
              _context.n = 4;
              break;
            }
            _this.logout();
            return _context.a(2, null);
          case 4:
            if (response.ok) {
              _context.n = 5;
              break;
            }
            throw new Error(data.message || 'API Error');
          case 5:
            return _context.a(2, data);
          case 6:
            _context.p = 6;
            _t = _context.v;
            console.error('API Request Failed:', _t);
            throw _t;
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[1, 6]]);
    }))();
  },
  setToken: function setToken(token) {
    this.token = token;
    if (token) localStorage.setItem('token', token);else localStorage.removeItem('token');
  },
  logout: function logout() {
    this.setToken(null);
    localStorage.removeItem('user');
    window.location.href = '/login';
  },
  // Auth
  login: function login(credentials) {
    return Api.request('/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  },
  getProfile: function getProfile() {
    return Api.request('/me');
  },
  // Products
  getProducts: function getProducts() {
    return Api.request('/products');
  },
  getProduct: function getProduct(id) {
    return Api.request("/products/".concat(id));
  },
  createProduct: function createProduct(data) {
    return Api.request('/products', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  updateProduct: function updateProduct(id, data) {
    return Api.request("/products/".concat(id), {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  deleteProduct: function deleteProduct(id) {
    return Api.request("/products/".concat(id), {
      method: 'DELETE'
    });
  },
  // Inventory
  getInventory: function getInventory() {
    return Api.request('/inventory');
  },
  updateInventory: function updateInventory(data) {
    return Api.request('/inventory', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  // Sales
  getSales: function getSales() {
    return Api.request('/sales');
  },
  createSale: function createSale(data) {
    return Api.request('/sales', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  // Categories & Units
  getCategories: function getCategories() {
    return Api.request('/categories');
  },
  getUnits: function getUnits() {
    return Api.request('/units');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ },

/***/ "./resources/js/app.js"
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./resources/js/api.js");
/* harmony import */ var _pos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos */ "./resources/js/pos.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


window.Api = _api__WEBPACK_IMPORTED_MODULE_0__["default"];
window.POS = _pos__WEBPACK_IMPORTED_MODULE_1__["default"];
var App = {
  user: JSON.parse(localStorage.getItem('user')),
  init: function init() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _this.handleRouting();
            window.addEventListener('popstate', function () {
              return _this.handleRouting();
            });
            _this.hideLoader();
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  hideLoader: function hideLoader() {
    var loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(function () {
        return loader.style.display = 'none';
      }, 500);
    }
  },
  navigate: function navigate(path) {
    window.history.pushState({}, '', path);
    this.handleRouting();
  },
  handleRouting: function handleRouting() {
    var path = window.location.pathname;
    var app = document.getElementById('app');
    if (path === '/login') {
      this.renderLogin(app);
    } else if (path.startsWith('/admin')) {
      if (!this.user || this.user.role_id !== 1) {
        this.navigate('/login');
        return;
      }
      this.renderAdminLayout(app);
    } else if (path === '/pos') {
      if (!this.user) {
        this.navigate('/login');
        return;
      }
      this.renderPOS(app);
    } else {
      this.renderLanding(app);
    }
  },
  renderLanding: function renderLanding(container) {
    container.innerHTML = "\n            <div class=\"min-h-screen flex flex-col items-center justify-center p-6 text-center\">\n                <div class=\"glass-panel p-12 max-w-2xl animate-float\">\n                    <h1 class=\"text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent\">\n                        ERISMS\n                    </h1>\n                    <p class=\"text-xl text-gray-600 mb-10 leading-relaxed\">\n                        The ultimate Enterprise Resource & Inventory Stock Management System. \n                        Streamline your operations with our premium POS and advanced back-office tools.\n                    </p>\n                    <div class=\"flex gap-4 justify-center\">\n                        <button onclick=\"App.navigate('/login')\" class=\"px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-200\">\n                            Get Started\n                        </button>\n                        <button class=\"px-8 py-4 bg-white text-gray-700 rounded-2xl font-bold border border-gray-200 hover:bg-gray-50 transition-all transition-all transform hover:scale-105\">\n                            Learn More\n                        </button>\n                    </div>\n                </div>\n            </div>\n        ";
  },
  renderLogin: function renderLogin(container) {
    var _this2 = this;
    container.innerHTML = "\n            <div class=\"min-h-screen flex items-center justify-center p-6\">\n                <div class=\"glass-panel p-10 w-full max-w-md animate-fade-in\">\n                    <h2 class=\"text-3xl font-bold mb-8 text-gray-800\">Login</h2>\n                    <form id=\"login-form\" class=\"space-y-6\">\n                        <div>\n                            <label class=\"block text-sm font-semibold text-gray-600 mb-2\">Username</label>\n                            <input type=\"text\" name=\"username\" class=\"form-input\" required placeholder=\"admin\">\n                        </div>\n                        <div>\n                            <label class=\"block text-sm font-semibold text-gray-600 mb-2\">Password</label>\n                            <input type=\"password\" name=\"password\" class=\"form-input\" required placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\">\n                        </div>\n                        <button type=\"submit\" class=\"w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg\">\n                            Sign In\n                        </button>\n                    </form>\n                </div>\n            </div>\n        ";
    document.getElementById('login-form').addEventListener('submit', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
        var formData, data, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              e.preventDefault();
              formData = new FormData(e.target);
              _context2.p = 1;
              _context2.n = 2;
              return _api__WEBPACK_IMPORTED_MODULE_0__["default"].login(Object.fromEntries(formData));
            case 2:
              data = _context2.v;
              if (data && data.access_token) {
                _api__WEBPACK_IMPORTED_MODULE_0__["default"].setToken(data.access_token);
                localStorage.setItem('user', JSON.stringify(data.user));
                _this2.user = data.user;
                _this2.navigate(_this2.user.role_id === 1 ? '/admin' : '/pos');
              }
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              alert('Login failed: ' + _t.message);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  renderAdminLayout: function renderAdminLayout(container) {
    var path = window.location.pathname;
    container.innerHTML = "\n            <div class=\"flex h-screen bg-gray-50 overflow-hidden\">\n                <!-- Sidebar -->\n                <aside class=\"w-72 bg-white border-r border-gray-100 flex flex-col\">\n                    <div class=\"p-8\">\n                        <h1 class=\"text-2xl font-black text-blue-600\">ERISMS</h1>\n                    </div>\n                    \n                    <nav class=\"flex-1 px-4 space-y-2\">\n                        <a href=\"/admin\" onclick=\"event.preventDefault(); App.navigate('/admin')\" class=\"sidebar-link ".concat(path === '/admin' ? 'active' : '', "\">\n                            <span class=\"w-5 h-5\">\uD83D\uDCCA</span> Dashboard\n                        </a>\n                        <a href=\"/admin/products\" onclick=\"event.preventDefault(); App.navigate('/admin/products')\" class=\"sidebar-link ").concat(path === '/admin/products' ? 'active' : '', "\">\n                            <span class=\"w-5 h-5\">\uD83D\uDCE6</span> Products\n                        </a>\n                        <a href=\"/admin/inventory\" onclick=\"event.preventDefault(); App.navigate('/admin/inventory')\" class=\"sidebar-link ").concat(path === '/admin/inventory' ? 'active' : '', "\">\n                            <span class=\"w-5 h-5\">\uD83C\uDFEC</span> Inventory\n                        </a>\n                        <a href=\"/admin/sales\" onclick=\"event.preventDefault(); App.navigate('/admin/sales')\" class=\"sidebar-link ").concat(path === '/admin/sales' ? 'active' : '', "\">\n                            <span class=\"w-5 h-5\">\uD83D\uDCB0</span> Sales Reports\n                        </a>\n                        <a href=\"/pos\" onclick=\"event.preventDefault(); App.navigate('/pos')\" class=\"sidebar-link\">\n                            <span class=\"w-5 h-5\">\uD83D\uDED2</span> Go to POS\n                        </a>\n                    </nav>\n\n                    <div class=\"p-4 border-t border-gray-50\">\n                        <button onclick=\"Api.logout()\" class=\"w-full flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all\">\n                            <span>\uD83D\uDEAA</span> Logout\n                        </button>\n                    </div>\n                </aside>\n\n                <!-- Main Content -->\n                <main id=\"admin-view\" class=\"flex-1 overflow-y-auto p-10\">\n                    <!-- Dynamic View Injection -->\n                </main>\n            </div>\n        ");
    var view = document.getElementById('admin-view');
    if (path === '/admin') this.renderAdminDashboard(view);else if (path === '/admin/products') this.renderAdminProducts(view);else view.innerHTML = '<h1>Page Under Construction</h1>';
  },
  renderAdminDashboard: function renderAdminDashboard(container) {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            container.innerHTML = "\n            <div class=\"animate-fade-in\">\n                <header class=\"mb-10\">\n                    <h2 class=\"text-4xl font-bold text-gray-800 mb-2\">Admin Dashboard</h2>\n                    <p class=\"text-gray-500\">Welcome back, ".concat(_this3.user.username, "!</p>\n                </header>\n\n                <div class=\"grid grid-cols-1 md:grid-cols-4 gap-6 mb-10\">\n                    <div class=\"glass-panel p-6 border-l-4 border-blue-500\">\n                        <p class=\"text-sm font-semibold text-gray-500 mb-1\">Total Sales</p>\n                        <h3 class=\"text-3xl font-bold text-gray-800\">\u20B10.00</h3>\n                    </div>\n                    <div class=\"glass-panel p-6 border-l-4 border-emerald-500\">\n                        <p class=\"text-sm font-semibold text-gray-500 mb-1\">Orders</p>\n                        <h3 class=\"text-3xl font-bold text-gray-800\">0</h3>\n                    </div>\n                    <div class=\"glass-panel p-6 border-l-4 border-amber-500\">\n                        <p class=\"text-sm font-semibold text-gray-500 mb-1\">Products</p>\n                        <h3 class=\"text-3xl font-bold text-gray-800\">0</h3>\n                    </div>\n                    <div class=\"glass-panel p-6 border-l-4 border-purple-500\">\n                        <p class=\"text-sm font-semibold text-gray-500 mb-1\">Customers</p>\n                        <h3 class=\"text-3xl font-bold text-gray-800\">0</h3>\n                    </div>\n                </div>\n\n                <div class=\"grid grid-cols-1 lg:grid-cols-2 gap-8\">\n                    <div class=\"glass-panel p-8\">\n                        <h3 class=\"text-xl font-bold mb-6\">Recent Transactions</h3>\n                        <div class=\"space-y-4\">\n                            <p class=\"text-gray-400 text-center py-10\">No recent sales found.</p>\n                        </div>\n                    </div>\n                    <div class=\"glass-panel p-8\">\n                        <h3 class=\"text-xl font-bold mb-6\">Low Stock Alert</h3>\n                        <div class=\"space-y-4\">\n                            <p class=\"text-gray-400 text-center py-10\">All items are sufficiently stocked.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ");
          case 1:
            return _context3.a(2);
        }
      }, _callee3);
    }))();
  },
  renderPOS: function renderPOS(container) {
    var _this4 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            container.innerHTML = "\n            <div class=\"h-screen flex flex-col bg-gray-100 overflow-hidden\">\n                <!-- POS Header -->\n                <header class=\"bg-white border-b border-gray-200 p-4 flex items-center justify-between\">\n                    <div class=\"flex items-center gap-4\">\n                        <h1 class=\"text-2xl font-black text-blue-600\">ERISMS POS</h1>\n                        <div class=\"h-6 w-px bg-gray-200\"></div>\n                        <p class=\"text-gray-500 font-medium\">Terminal #01</p>\n                    </div>\n                    <div class=\"flex items-center gap-6\">\n                        <div class=\"text-right\">\n                            <p class=\"font-bold text-gray-800\">".concat(_this4.user.username, "</p>\n                            <p class=\"text-xs text-gray-500\">Cashier</p>\n                        </div>\n                        <button onclick=\"App.navigate('/admin')\" class=\"px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50\">Admin Panel</button>\n                    </div>\n                </header>\n\n                <div class=\"flex-1 flex overflow-hidden\">\n                    <!-- Product Selection -->\n                    <section class=\"flex-1 p-6 flex flex-col gap-6 overflow-hidden\">\n                        <div class=\"flex gap-4\">\n                            <input type=\"text\" placeholder=\"Search products or scan barcode...\" class=\"flex-1 p-4 rounded-xl border-0 shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 transition-all\">\n                            <select class=\"p-4 rounded-xl border-0 shadow-sm ring-1 ring-gray-200 bg-white\">\n                                <option>All Categories</option>\n                            </select>\n                        </div>\n\n                        <div id=\"pos-products\" class=\"flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto pb-6\">\n                            <!-- Loading State -->\n                            <div class=\"col-span-full flex flex-col items-center justify-center py-20 text-gray-400\">\n                                <span class=\"animate-spin text-4xl mb-4\">\u231B</span>\n                                <p>Checking inventory...</p>\n                            </div>\n                        </div>\n                    </section>\n\n                    <!-- Cart Sidebar -->\n                    <aside class=\"w-[400px] bg-white border-l border-gray-200 flex flex-col p-6\">\n                        <h2 class=\"text-2xl font-bold mb-6 flex items-center justify-between\">\n                            Order Cart\n                            <span class=\"text-sm font-normal text-gray-400 bg-gray-50 px-3 py-1 rounded-full\" id=\"cart-item-count\">0 items</span>\n                        </h2>\n\n                        <div id=\"pos-cart-items\" class=\"flex-1 overflow-y-auto mb-6 pr-2\">\n                            <div class=\"h-full flex flex-col items-center justify-center text-gray-400\">\n                                <span class=\"text-5xl mb-4\">\uD83D\uDED2</span>\n                                <p>Your cart is empty</p>\n                            </div>\n                        </div>\n\n                        <div class=\"space-y-4 pt-6 border-t border-gray-100\">\n                            <div class=\"flex justify-between text-gray-500\">\n                                <span>Subtotal</span>\n                                <span id=\"pos-subtotal\">\u20B10.00</span>\n                            </div>\n                            <div class=\"flex justify-between text-gray-500\">\n                                <span>Tax (0%)</span>\n                                <span>\u20B10.00</span>\n                            </div>\n                            <div class=\"flex justify-between text-2xl font-black text-gray-800\">\n                                <span>Total</span>\n                                <span id=\"pos-total\">\u20B10.00</span>\n                            </div>\n                            <button onclick=\"POS.checkout()\" class=\"w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95 transform\">\n                                Complete Transaction\n                            </button>\n                        </div>\n                    </aside>\n                </div>\n            </div>\n        ");
            _this4.loadPOSProducts();
          case 1:
            return _context4.a(2);
        }
      }, _callee4);
    }))();
  },
  loadPOSProducts: function loadPOSProducts() {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var container, products, _t2;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            container = document.getElementById('pos-products');
            _context5.p = 1;
            _context5.n = 2;
            return _api__WEBPACK_IMPORTED_MODULE_0__["default"].getProducts();
          case 2:
            products = _context5.v;
            container.innerHTML = products.map(function (p) {
              var _p$inventory;
              return "\n                <div onclick=\"POS.addToCart(".concat(JSON.stringify(p).replace(/"/g, '&quot;'), ")\" class=\"bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group\">\n                    <div class=\"aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform\">\n                        ").concat(p.category_id === 1 ? '🥤' : p.category_id === 2 ? '🍿' : '📦', "\n                    </div>\n                    <h3 class=\"font-bold text-gray-800 truncate\">").concat(p.product_name, "</h3>\n                    <div class=\"flex items-center justify-between mt-2\">\n                        <span class=\"text-blue-600 font-black\">\u20B1").concat(p.price, "</span>\n                        <span class=\"text-xs text-gray-400\">").concat(((_p$inventory = p.inventory) === null || _p$inventory === void 0 ? void 0 : _p$inventory.quantity) || 0, " left</span>\n                    </div>\n                </div>\n            ");
            }).join('');
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t2 = _context5.v;
            container.innerHTML = '<p class="col-span-full text-center text-red-500">Failed to load products.</p>';
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }))();
  }
};
window.App = App;
document.addEventListener('DOMContentLoaded', function () {
  App.init();
});

/***/ },

/***/ "./resources/js/pos.js"
/*!*****************************!*\
  !*** ./resources/js/pos.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./resources/js/api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var POS = {
  cart: [],
  addToCart: function addToCart(product) {
    var existing = this.cart.find(function (item) {
      return item.product_id === product.product_id;
    });
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push(_objectSpread(_objectSpread({}, product), {}, {
        quantity: 1
      }));
    }
    this.renderCart();
  },
  removeFromCart: function removeFromCart(productId) {
    this.cart = this.cart.filter(function (item) {
      return item.product_id !== productId;
    });
    this.renderCart();
  },
  updateQuantity: function updateQuantity(productId, delta) {
    var item = this.cart.find(function (i) {
      return i.product_id === productId;
    });
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) this.removeFromCart(productId);else this.renderCart();
    }
  },
  renderCart: function renderCart() {
    var container = document.getElementById('pos-cart-items');
    if (!container) return;
    container.innerHTML = this.cart.map(function (item) {
      return "\n            <div class=\"flex items-center justify-between p-3 mb-2 bg-white/50 rounded-xl border border-white/50\">\n                <div>\n                    <h4 class=\"font-semibold text-gray-800\">".concat(item.product_name, "</h4>\n                    <p class=\"text-sm text-gray-500\">\u20B1").concat(item.price, " x ").concat(item.quantity, "</p>\n                </div>\n                <div class=\"flex items-center gap-2\">\n                    <button onclick=\"POS.updateQuantity(").concat(item.product_id, ", -1)\" class=\"w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors\">-</button>\n                    <span class=\"w-8 text-center font-bold\">").concat(item.quantity, "</span>\n                    <button onclick=\"POS.updateQuantity(").concat(item.product_id, ", 1)\" class=\"w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors\">+</button>\n                </div>\n            </div>\n        ");
    }).join('');
    var total = this.cart.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    }, 0);
    var totalEl = document.getElementById('pos-total');
    if (totalEl) totalEl.innerText = "\u20B1".concat(total.toFixed(2));
  },
  checkout: function checkout() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(_this.cart.length === 0)) {
              _context.n = 1;
              break;
            }
            return _context.a(2, alert('Cart is empty'));
          case 1:
            _context.p = 1;
            _context.n = 2;
            return _api__WEBPACK_IMPORTED_MODULE_0__["default"].createSale({
              customer_id: 1,
              // Default customer
              payment_method: 'cash',
              items: _this.cart.map(function (item) {
                return {
                  product_id: item.product_id,
                  quantity: item.quantity,
                  price: item.price
                };
              })
            });
          case 2:
            result = _context.v;
            if (result) {
              alert('Sale completed successfully!');
              _this.cart = [];
              _this.renderCart();
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            alert('Checkout failed: ' + _t.message);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }))();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (POS);

/***/ },

/***/ "./resources/sass/app.scss"
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;