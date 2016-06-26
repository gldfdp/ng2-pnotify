'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PNotifyService = exports.PNotifySettings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pnotify = require('pnotify');

var _pnotify2 = _interopRequireDefault(_pnotify);

require('pnotify/dist/pnotify.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PNotifySettings = exports.PNotifySettings = function PNotifySettings() {
  _classCallCheck(this, PNotifySettings);
};

var PNotifyService = exports.PNotifyService = function () {
  _createClass(PNotifyService, null, [{
    key: 'parameters',
    get: function get() {
      return [[PNotifySettings]];
    }
  }]);

  function PNotifyService(settings) {
    _classCallCheck(this, PNotifyService);

    this.pnotifySettings = Object.assign({ styling: 'brighttheme' }, settings);

    if (typeof this.pnotifySettings.styling === 'undefined') {
      throw new Error('pnotifySettings.styling must be a string');
    }

    this.isDesktop = false;
  }

  _createClass(PNotifyService, [{
    key: 'desktop',
    value: function desktop() {
      _pnotify2.default.desktop.permission();
      this.isDesktop = true;
    }
  }, {
    key: 'pnotify',
    value: function pnotify(opts) {
      opts.styling = this.pnotifySettings.styling;
      if (this.isDesktop) {
        opts.desktop = opts.desktop || {};
        opts.desktop.desktop = true;
      }
      return new _pnotify2.default(opts);
    }
  }, {
    key: 'success',
    value: function success(opts) {
      opts.type = 'success';
      return this.pnotify(opts);
    }
  }, {
    key: 'notice',
    value: function notice(opts) {
      opts.type = 'notice';
      return this.pnotify(opts);
    }
  }, {
    key: 'error',
    value: function error(opts) {
      opts.type = 'error';
      return this.pnotify(opts);
    }
  }, {
    key: 'info',
    value: function info(opts) {
      opts.type = 'info';
      return this.pnotify(opts);
    }
  }]);

  return PNotifyService;
}();
