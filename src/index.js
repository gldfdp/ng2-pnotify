
import PNotify from 'pnotify';
import 'pnotify/dist/pnotify.css';
import 'pnotify/dist/pnotify.buttons.js';
import 'pnotify/dist/pnotify.buttons.css';

export class PNotifySettings {
  constructor() {}
}

export class PNotifyService {
  static get parameters() {
    return [[PNotifySettings]];
  }

  constructor(settings) {
    this.pnotifySettings = Object.assign({ styling: 'brighttheme' }, settings);

    if(typeof this.pnotifySettings.styling === 'undefined') {
      throw new Error('pnotifySettings.styling must be a string');
    }

    this.isDesktop = false;
  }

  desktop() {
    PNotify.desktop.permission();
    this.isDesktop = true;
  }

  pnotify(opts) {
    opts.styling = this.pnotifySettings.styling;
    if(this.isDesktop) {
      opts.desktop = opts.desktop || {};
      opts.desktop.desktop = true;
    }
    return new PNotify(opts);
  }

  success(opts) {
    opts.type = 'success';
    return this.pnotify(opts);
  }

  notice(opts) {
    opts.type = 'notice';
    return this.pnotify(opts);
  }

  error(opts) {
    opts.type = 'error';
    return this.pnotify(opts);
  }

  info(opts) {
    opts.type = 'info';
    return this.pnotify(opts);
  }
}
