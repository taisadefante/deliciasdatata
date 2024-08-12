import { useContext, useState } from "react";
import BotoesFiltro from "../components/BotoesFiltro/botoesFiltro";
import Navbar from "../components/Navbar/navbar";
import produtos from "../dados";
import "./style.css";
import { CartContext } from "../contexts/cart-context";
import Footer from "../components/footer/footer";

export default function Home() {
  const [filtro, setFiltro] = useState(null);
  const [filtroAtivo, setFiltroAtivo] = useState(null);
  const { cartItems } = useContext(CartContext);

  const cartQuantidadeItems = cartItems.reduce(
    (total, produto) => total + produto.qtd,
    0
  );

  return (
    <>
      <Navbar itemsCount={cartQuantidadeItems} />
      <div className="home-container">
        <BotoesFiltro
          setFiltro={setFiltro}
          filtroAtivo={filtroAtivo}
          setFiltroAtivo={setFiltroAtivo}
          produtos={produtos}
        />
        <Footer />
      </div>
    </>
  );
}
