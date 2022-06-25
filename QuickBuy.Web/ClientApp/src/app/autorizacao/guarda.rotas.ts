import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs";
import { Usuario } from "../modelo/usuario";
import { UsuarioServico } from "../servicos/usuario/usuario.servico";

@Injectable({
    providedIn: 'root'
})
export class GuardaRotas implements CanActivate {

    constructor(private router: Router, private usuarioServico: UsuarioServico) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        //Se usuário autenticado, retorno verdadeiro
        if (this.usuarioServico.usuario_autenticado()) {
            return true;
        }

        //Cofigurando a página de retorno
        this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
        return false;
    }

}
