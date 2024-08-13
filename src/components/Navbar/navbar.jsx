import logo from "../../assets/logo.png";
import Cart from "../Cart/cart";
import "./navbar.css";
import { FaWhatsapp } from "react-icons/fa"; // Certifique-se de ter instalado react-icons

function Navbar({ itemsCount }) {
  function openSidebar() {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }

  return (
    <>
      <div className="navbar">
        <a href="/src/pages/home.jsx">
          <img src={logo} className="logotipo" alt="Logotipo do site" />
        </a>

        <button onClick={openSidebar} className="button">
          <i className="fa-solid fa-cart-shopping"></i>
          Seu Carrinho
          {itemsCount > 0 && <span className="badge">{itemsCount}</span>}
        </button>

        <Cart />
      </div>

      {/* Ícone do WhatsApp */}
      <a
        href="https://wa.me/+5521988359825"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={32} />
      </a>
    </>
  );
}

export default Navbar;
