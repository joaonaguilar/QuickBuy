﻿using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
    public class Usuario : Entidade
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public int SobreNome { get; set; }

        /// <summary>
        /// Usuário pode ter nenhum ou vários pedidos
        /// </summary>
        public ICollection<Pedido> Pedidos { get; set; }

        public override void Validate()
        {
            LimparMensagemValidacao();
                
            if (string.IsNullOrEmpty(Email))
                AdicionarCritica("Crítica - E-mail não informado");

            if (string.IsNullOrEmpty(Senha))
                AdicionarCritica("Crítica - Senha não informada");
        }
    }
}
