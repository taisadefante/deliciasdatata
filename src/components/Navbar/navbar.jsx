import logo from "../../assets/logo.png";
import Cart from "../Cart/cart";
import "./navbar.css";

function Navbar({ itemsCount }) {
  function openSidebar() {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }

  return (
    <div className="navbar">
      <a href="/src/pages/home.jsx">
        <img src={logo} className="logotipo" alt="Logotipo do site" />
      </a>

      <button onClick={openSidebar} className="button">
        <i class="fa-solid fa-cart-shopping"></i>
        Seu Carrinho
        {itemsCount > 0 && <span className="badge">{itemsCount}</span>}
      </button>

      <Cart />
    </div>
  );
}

export default Navbar;
