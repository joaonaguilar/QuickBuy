using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
    public class Usuario : Entidade
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }

        /// <summary>
        /// Usuário pode ter nenhum ou vários pedidos
        /// </summary>
        public virtual ICollection<Pedido> Pedidos { get; set; }

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
