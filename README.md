# ng2-pnotify
A service wrapping [PNotify](https://github.com/sciactive/pnotify) for ng2.

# Install
`npm i -s ng2-pnotify`

# Usage
First, bootstrap the service globally:

```js
import { PNotifySettings } from 'ng2-pnotify';

bootstrap(App, [
  provide(PNotifySettings, { useValue: { styling: 'bootstrap3' } }) // defaults to 'brighttheme'
]);
```

Next, inject it into a component:
```js
import { PNotifyService } from 'ng2-pnotify';

@Component({
  providers: [PNotifyService],
  template: `<button (click)="notify()">click</button>`
})
export class MyComponent {

  static get parameters() {
    return [[PNotifyService]];
  }

  constructor(pnotify) {
    this.pnotify = pnotify;
  }

  notify() {
    this.pnotify.info({ text: 'hello!' });
  }
}
```

# Options
Name      | Default       | Description
----      | -------       | -----------
styling   | 'brighttheme' | The theme for pnotify to use. Valid settings are 'brighttheme', 'jqueryui', 'fontawesome', 'bootstrap3' - you must have the corresponding CSS for each of these.

# Functions

Name      | Description
----      | -----------          
success   | Creates a success dialog.
notice    | Creates a notice dialog.
error     | Creates an error dialog.
info      | Creates an info dialog.
pnotify   | Creates a custom dialog.
desktop   | Requests permission to use desktop mode.

# TODO
Wrappers for more functions, like prompts, modals, confirms.
