(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-context-toaster"] = factory();
	else
		root["react-context-toaster"] = factory();
})(this, function() {
return webpackJsonpreact_context_toaster([1],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ContextToast = function (_React$Component) {
  _inherits(ContextToast, _React$Component);

  function ContextToast(props) {
    _classCallCheck(this, ContextToast);

    var _this = _possibleConstructorReturn(this, (ContextToast.__proto__ || Object.getPrototypeOf(ContextToast)).call(this, props));

    if (!props.title && !props.children) {
      throw new Error('ContextToasts requires you to provide either a title, children or both.');
    }
    _this.onClickFunc = _this.onClickFunc.bind(_this);
    _this.state = { isVisible: false };
    return _this;
  }

  _createClass(ContextToast, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showTimeoutId = setTimeout(function () {
        return _this2.setState({ isVisible: true });
      }, 0);
      var hideTimeoutId = setTimeout(function () {
        return _this2.setState({ isVisible: false });
      }, this.props.lifetime);
      var removeTimeoutId = setTimeout(this.props.removeToastFunc, this.props.lifetime + this.props.animationLength);
      this.setState({ timeoutIds: [showTimeoutId, hideTimeoutId, removeTimeoutId] });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.state.timeoutIds.forEach(function (tid) {
        clearTimeout(tid);
      });
    }
  }, {
    key: 'onClickFunc',
    value: function onClickFunc() {
      if (this.props.closeOnClick) {
        this.setState({ isVisible: false });
        setTimeout(this.props.removeToastFunc, this.props.animationLength);
      }
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      if (!this.props.title) {
        return null;
      }
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'h1',
        { className: 'ContextToaster__Toast__textContainer__title' },
        this.props.title
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var toastClassNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()((_classnames = {
        ContextToaster__Toast: true,
        'ContextToaster__Toast--visible': this.state.isVisible
      }, _defineProperty(_classnames, 'ContextToaster__Toast--' + this.props.type.toUpperCase(), !!this.props.type), _defineProperty(_classnames, this.props.className, !!this.props.className), _classnames));
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        { className: toastClassNames, onClick: this.onClickFunc },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'ContentToaster__Toast__iconContainer' }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'ContextToaster__Toast__textContainer' },
          this.getTitle(),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'ContextToaster__Toast__textContainer__textMessage' },
            this.props.children
          )
        )
      );
    }
  }]);

  return ContextToast;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

ContextToast.defaultProps = {
  animationLength: 200,
  closeOnClick: true,
  customClass: null,
  lifetime: 5000
};
ContextToast.propTypes = {
  animationLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node]),
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  closeOnClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  lifetime: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  removeToastFunc: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  type: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

/* harmony default export */ __webpack_exports__["a"] = (ContextToast);

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(47)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./contextToaster.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./contextToaster.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOAST_TYPES", function() { return TOAST_TYPES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ContextToast__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__consts__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contextToaster_css__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contextToaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__contextToaster_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var INITIAL_STATE = {
  toasts: []
};
var DEFAULT_LIFETIME = 5000;
var DEFAULT_ANIMATION_LENGTH = 200;
var TOAST_TYPES = {
  ERROR: 'ERROR',
  NOTIFY: 'NOTIFY',
  SUCCESS: 'SUCCESS',
  WARN: 'WARN'
};

var ContextToaster = function (_React$Component) {
  _inherits(ContextToaster, _React$Component);

  function ContextToaster(props) {
    _classCallCheck(this, ContextToaster);

    var _this = _possibleConstructorReturn(this, (ContextToaster.__proto__ || Object.getPrototypeOf(ContextToaster)).call(this, props));

    _this.notify = _this.notify.bind(_this);
    _this.state = INITIAL_STATE;
    return _this;
  }

  _createClass(ContextToaster, [{
    key: 'removeToast',
    value: function removeToast(toastKey) {
      var nextToasts = this.state.toasts.filter(function (toast) {
        return toast.key !== toastKey;
      });
      this.setState({ toasts: nextToasts });
    }
  }, {
    key: 'notify',
    value: function notify(_ref) {
      var title = _ref.title,
          message = _ref.message,
          _ref$type = _ref.type,
          type = _ref$type === undefined ? TOAST_TYPES.NOTIFY : _ref$type,
          className = _ref.className,
          _ref$lifetime = _ref.lifetime,
          lifetime = _ref$lifetime === undefined ? DEFAULT_LIFETIME : _ref$lifetime,
          _ref$animationLength = _ref.animationLength,
          animationLength = _ref$animationLength === undefined ? DEFAULT_ANIMATION_LENGTH : _ref$animationLength,
          _ref$closeOnClick = _ref.closeOnClick,
          closeOnClick = _ref$closeOnClick === undefined ? true : _ref$closeOnClick;

      var timestamp = new Date().getTime();
      var key = type + '_' + message + '_' + timestamp;
      var removeToastFunc = this.removeToast.bind(this, key);
      var newToast = { title: title, message: message, type: type, className: className, key: key, lifetime: lifetime, removeToastFunc: removeToastFunc, closeOnClick: closeOnClick, animationLength: animationLength };
      var nextToasts = this.state.toasts.concat(newToast);
      setTimeout(removeToastFunc, lifetime + animationLength);
      this.setState({ toasts: nextToasts });
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return _defineProperty({}, __WEBPACK_IMPORTED_MODULE_3__consts__["a" /* CONTEXT_TOAST_NOTIFY_FUNC_NAME */], this.notify);
    }
  }, {
    key: 'getToasts',
    value: function getToasts() {
      return this.state.toasts.map(function (toast) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__ContextToast__["a" /* default */],
          {
            title: toast.title,
            key: toast.key,
            lifetime: toast.lifetime,
            animationLength: toast.animationLength,
            type: toast.type,
            removeToastFunc: toast.removeToastFunc,
            closeOnClick: toast.closeOnClick
          },
          toast.message
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'ContextToaster__Scope' },
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'ContextToaster__ToastsList' },
          this.getToasts()
        )
      );
    }
  }]);

  return ContextToaster;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ContextToaster.childContextTypes = _defineProperty({}, __WEBPACK_IMPORTED_MODULE_3__consts__["a" /* CONTEXT_TOAST_NOTIFY_FUNC_NAME */], __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func);

ContextToaster.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node])
};

/* harmony default export */ __webpack_exports__["default"] = (ContextToaster);

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(undefined);
// imports


// module
exports.push([module.i, ".ContextToaster__ToastsList {\n    bottom: 0;\n    display: flex;\n    flex-flow: column;\n    left: 0;\n    margin: 0;\n    padding: 16px;\n    position: fixed;\n}\n\n.ContextToaster__Toast {\n    background-color: #424242;\n    border-radius: 2px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\n    display: flex;\n    font-family: Optima, Segoe, \"Segoe UI\", Candara, Calibri, Arial, sans-serif;\n    list-style: none;\n    margin-bottom: 8px;\n    opacity: 0;\n    transition: box-shadow 0.2s, opacity 0.2s, transform 0.2s;\n    transform: translateX(-150px);\n    width: 320px;\n}\n\n.ContextToaster__Toast--visible {\n    opacity: 0.85;\n    transform: translateX(0);\n}\n\n.ContextToaster__Toast--visible:hover {\n    opacity: 1;\n    transform: translateX(-6px);\n}\n\n.ContextToaster__Toast:last-child {\n    margin-bottom: 0\n}\n\n.ContentToaster__Toast__iconContainer {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n}\n\n.ContentToaster__Toast__iconContainer:before {\n    background-color: #fff;\n    border-radius: 18px;\n    color: #424242;\n    content: '\\1F514\\FE0E';\n    display: block;\n    font-size: 24px;\n    height: 36px;\n    line-height: 34px;\n    margin: 0 8px 0 16px;\n    text-align: center;\n    width: 36px;\n}\n\n.ContextToaster__Toast__textContainer {\n    color: #fff;\n    display: flex;\n    flex-flow: column;\n    justify-content: space-around;\n}\n\n.ContextToaster__Toast__textContainer__title {\n    font-size: 16px;\n    margin: 0;\n    padding: 16px 8px 0;\n}\n\n.ContextToaster__Toast__textContainer__textMessage {\n    margin: 0;\n    padding: 0 16px 16px 8px;\n}\n\n/* Types */\n.ContextToaster__Toast--NOTIFY {\n    background-color: #424242;\n}\n.ContextToaster__Toast--NOTIFY .ContentToaster__Toast__iconContainer:before {\n    color: #424242;\n    content: '\\2609\\FE0E';\n    line-height: 38px;\n}\n\n.ContextToaster__Toast--ERROR {\n    background-color: #F44336;\n}\n\n.ContextToaster__Toast--ERROR .ContentToaster__Toast__iconContainer:before {\n    color: #F44336;\n    content: '\\2716\\FE0E';\n}\n\n.ContextToaster__Toast--WARN {\n    background-color: #FFD600;\n}\n\n.ContextToaster__Toast--WARN .ContentToaster__Toast__iconContainer:before {\n    color: #FFD600;\n    content: '!\\FE0E';\n    font-size: 34px;\n    font-weight: bold;\n    line-height: 38px;\n    text-indent: 11px;\n}\n\n.ContextToaster__Toast--SUCCESS {\n    background-color: #4CAF50;\n}\n\n.ContextToaster__Toast--SUCCESS .ContentToaster__Toast__iconContainer:before {\n    color: #4CAF50;\n    content: '\\2714\\FE0E';\n}", ""]);

// exports


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTEXT_TOAST_NOTIFY_FUNC_NAME; });
var CONTEXT_TOAST_NOTIFY_FUNC_NAME = 'popToast';

/* unused harmony default export */ var _unused_webpack_default_export = ({ CONTEXT_TOAST_NOTIFY_FUNC_NAME: CONTEXT_TOAST_NOTIFY_FUNC_NAME });

/***/ })

},[27]);
});