import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
    public usuario;
    public returnUrl: string;
    public mensagem: string;
    private ativar_spinner: boolean;

    constructor(private router: Router, private activatedRouter: ActivatedRoute, private usuarioServico: UsuarioServico) {
        this.usuario = new Usuario();        
    }

    ngOnInit(): void {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    }

    entrar(): void {

        this.ativar_spinner = true;

        this.usuarioServico.verificarUsuario(this.usuario)
            .subscribe(
                usuario_json => {
                    //var usuarioRetorno: Usuario;
                    //usuarioRetorno = data;
                    //sessionStorage.setItem("usuario-autenticado", "1");
                    //sessionStorage.setItem("email-usuario", usuarioRetorno.email);

                    this.usuarioServico.usuario = usuario_json;

                    if (this.returnUrl == null)
                        this.router.navigate(['/']);
                    else
                        this.router.navigate([this.returnUrl]);
                    //console.log(data);
                },
                err => {
                    console.log(err.error);
                    this.mensagem = err.error;
                    this.ativar_spinner = false;
                }
            );
        //if (this.usuario.email == "leo@teste.com" && this.usuario.senha == "abc123") {
        //    sessionStorage.setItem("usuario-autenticado", "1");
        //    this.router.navigate([this.returnUrl]);
        //}
    }
}