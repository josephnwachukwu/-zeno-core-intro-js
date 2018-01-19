# <img src="Zen-Oh.png" width='75' /> @zeno-core/intro-js

An Angular module that wraps Introjs Functionality. 

To learn more about IntroJs click [here for documentation](http://usablica.github.io/intro.js/)

## Installation

To install this library, run:

```
$ npm install @zeno-core/intro-js --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { IntroJsModule } from 'ng2-intro-js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    IntroJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use the components, directives and pipes in your Angular application:


## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [josephnwachukwu](mailto:josephnwachukwu@gmail.com)
