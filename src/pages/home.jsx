import { useContext, useState } from "react";
import BotoesFiltro from "../components/BotoesFiltro/botoesFiltro";
import Navbar from "../components/Navbar/navbar";
import ProdutoVitrine from "../components/ProdutosVitrine/produtosVitrine";
import produtos from "../dados";
import "./style.css";
import { CartContext } from "../contexts/cart-context";
import Footer from "../components/footer/footer";

export default function Home() {
  const [filtro, setFiltro] = useState(null);
  const { cartItems } = useContext(CartContext);

  const cartQuantidadeItems = cartItems.reduce(
    (total, produto) => total + produto.qtd,
    0
  );

  const produtosFiltrados = produtos.filter((produto) => {
    if (!filtro) return true;
    return produto.categoria === filtro;
  });

  return (
    <>
      <Navbar itemsCount={cartQuantidadeItems} />
      <div className="home-container">
        <BotoesFiltro setFiltro={setFiltro} />
        <div className="content-produtos">
          {produtosFiltrados.map((prod) => (
            <ProdutoVitrine
              key={prod.id}
              id={prod.id}
              nome={prod.nome}
              descricao={prod.descricao}
              preco={prod.preco}
              foto={prod.foto}
              categoria={prod.categoria}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
