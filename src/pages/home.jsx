import { useContext, useState } from "react";
import BotoesFiltro from "../components/BotoesFiltro/botoesFiltro";
import Navbar from "../components/Navbar/navbar";
import produtos from "../dados";
import "./style.css";
import { CartContext } from "../contexts/cart-context";
import Footer from "../components/footer/footer";
import uberentrega from "../assets/uberentrega.jpg";
import picpayLogo from "../assets/picpay.png";
import mercadoPagoLogo from "../assets/mercadopago.jpeg";
import pixLogo from "../assets/pix.png";

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
        <section className="payment-section">
          <h2>Aceitamos:</h2>
          <div className="payment-methods">
            <img src={picpayLogo} alt="PicPay" />
            <img src={mercadoPagoLogo} alt="Mercado Pago" />
            <img src={pixLogo} alt="Pix" />
          </div>
        </section>
        <section className="shipping-section">
          <h2>
            <img src={uberentrega} />
          </h2>
          <p> </p>
        </section>
        <Footer />
      </div>
    </>
  );
}
