import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    if (this.authService.isloggedIn()) {
      console.log('ATUH GUARD SAYD THEY ARE ALREADY LOGGED IN!');
      // this.router.navigate(['/user'])
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    }
      return false;


  }
}
