import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GuardaRotas implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //Recupera o valor do usuário autenticado
        var autenticado = sessionStorage.getItem("usuario-autenticado");

        //Se usuário autenticado, retorno verdadeiro
        if (autenticado == "1") {
            return true;
        }

        //Cofigurando a página de retorno
        this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
        return false;       
    }

}
