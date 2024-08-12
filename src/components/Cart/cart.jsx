import { useContext, useEffect, useState } from "react";
import { Dock } from "react-dock";

import "./cart.css";
import ProdutoCart from "../ProdutoCart/produtoCart";
import { CartContext } from "../../contexts/cart-context";

const PHONE_NUMBER = "5521988359825";

function Cart() {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState("");

  const { cartItems, setCartItems, totalCart, setTotalCart } =
    useContext(CartContext);

  function handleOrder() {
    if (address.trim().length === 0) {
      return alert("Informe os dados da entrega para prosseguir");
    }

    const produtos = cartItems
      .map((produto) => `\n${produto.qtd} ${produto.nome}`)
      .join(", ");

    const mensagem = `
      *NOVO PEDIDO*: 🍔🥤🍟
      *Entregar em*: ${address} 📦
      *Produtos Escolhidos*: ${produtos}
      *Valor Total*: ${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(totalCart)} 💸
    `;

    window.open(
      `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodeURIComponent(
        mensagem
      )}`,
      "_blank"
    );
    setCartItems([]);
    setShow(false);
    setTotalCart(0);
    setAddress("");
  }

  const dimStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  };

  useEffect(() => {
    window.addEventListener("openSidebar", () => {
      setShow(true);
    });
  }, []);

  function closeWindow() {
    setShow(false);
  }

  return (
    <Dock
      position="right"
      isVisible={show}
      fluid={false}
      dimStyle={dimStyle}
      size={360}
      onVisibleChange={(visible) => setShow(visible)}
    >
      <div className="container-cart">
        <button className="cart-button-close" onClick={closeWindow}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        <h1 className="titulo-cart">Meu Pedido:</h1>
      </div>

      <div className="lista-produtos">
        {cartItems.map((item) => {
          return (
            <ProdutoCart
              key={item.id}
              id={item.id}
              foto={item.foto}
              nome={item.nome}
              qtd={item.qtd}
              preco={item.preco}
            />
          );
        })}
      </div>

      <div>
        <textarea
          className="input-entrega"
          placeholder="Digite aqui seu endereço...(Rua, Número, Bairro e ponto de referência)."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>

      <div className="cart-rodape">
        <div className="cart-valor">
          <span>Total: </span>
          <span className="preco-total">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(totalCart)}
          </span>
        </div>
        <div>
          <button className="button-cart" onClick={handleOrder}>
            Finalizar Pedido
          </button>
        </div>
      </div>
    </Dock>
  );
}

export default Cart;
