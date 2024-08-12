import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import "./produtoVitrine.css";

function ProdutoVitrine(props) {
  const { AddCartItem } = useContext(CartContext);

  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1
    };

    AddCartItem(item);
  }

  return (
    <div className="container-vitrine">
      <div className="container-produtos">
        <img src={props.foto} alt="Foto comida" />
        <div>
          <h2 className="nome-produto-vitrine">{props.nome}</h2>
          <p className="descricao-produto-vitrine">{props.descricao}</p>
          <p className="preco-produto-vitrine">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.preco)}
          </p>
        </div>
        <div>
          <button onClick={AddItem} className="button-produto">
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdutoVitrine;
