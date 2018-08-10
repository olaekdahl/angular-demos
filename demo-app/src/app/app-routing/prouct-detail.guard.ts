import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouteReuseStrategy } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProuctDetailGuard implements CanActivate {
constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const pid = +next.url[1].path;
      if(isNaN(pid) || pid < 1) {
        alert('Product id not found!');
        this.router.navigate(['/products']);
        return false;
      }   
    return true;
  }
}
