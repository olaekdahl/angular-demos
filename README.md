# angular-demos

[Lab Fixes]
Add  (window as any).global = window to polyfill.ts on line 64 to get socket.io to work.
Change import 'rxjs/add/operator/catch'; to import { catchError } from 'rxjs/operators'; in lab 16.
