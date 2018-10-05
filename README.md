# angular-demos

## Anular 5 Lab Fixes
- Lab 17: Add  `(window as any).global = window` to polyfill.ts on line 64 to get socket.io to work.
- Lab 16: Change `import 'rxjs/add/operator/catch';` to `import { catchError } from 'rxjs/operators';`
    - Or, [angular-6-rxjs-import-syntax on StackOverflow](https://stackoverflow.com/questions/49811177/angular-6-rxjs-import-syntax)
- Lab 21: `import { of } from 'rxjs';` and `of(1+2);`
