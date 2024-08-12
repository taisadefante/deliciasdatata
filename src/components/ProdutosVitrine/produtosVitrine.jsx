import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import "./produtoVitrine.css";

function ProdutoVitrine(props) {
  const { AddCartItem } = useContext(CartContext);
  const [modalOpen, setModalOpen] = useState(false);

  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1,
    };

    AddCartItem(item);
  }

  // Função para abrir o modal
  function openModal() {
    setModalOpen(true);
  }

  // Função para fechar o modal
  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="container-vitrine">
      <div className="container-produtos">
        <img
          src={props.foto}
          alt="Foto comida"
          onClick={openModal} // Abre o modal ao clicar na imagem
          style={{ cursor: "pointer" }}
        />
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
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>

      {/* Modal para exibir a imagem ampliada */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={props.foto} alt="Foto ampliada" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProdutoVitrine;
