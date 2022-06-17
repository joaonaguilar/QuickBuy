namespace QuickBuy.Dominio.Entidades
{
    public class ItemPedido : Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            LimparMensagemValidacao();

            if (ProdutoId == 0)
                AdicionarCritica("Crítica - Não foi identificado a referência do Produto");

            if (Quantidade == 0)
                AdicionarCritica("Crítica - Não foi informado a quantidade");
        }
    }
}
