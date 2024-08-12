import { useState } from "react";
import "./botoesFiltro.css";
import logofit from "../../assets/fit/logofit.png";
import logoMassas from "../../assets/massas/bolo-batata.png";

function BotoesFiltro({ setFiltro }) {
  const [filtroAtivo, setFiltroAtivo] = useState(null);

  const handleFiltro = (categoria) => {
    if (filtroAtivo === categoria) {
      // Se o filtro clicado for igual ao filtro ativo, remove o filtro
      setFiltro(null);
      setFiltroAtivo(null);
    } else {
      // Caso contrário, define o novo filtro
      setFiltro(categoria);
      setFiltroAtivo(categoria);
    }
  };

  return (
    <div className="container-buttons-filtro">
      <button
        className={`button-filtro ${filtroAtivo === "Fit" ? "ativo" : ""}`}
        onClick={() => handleFiltro("Fit")}
      >
        <img src={logofit} width={"40px"} />
        Fit
      </button>
      <button
        className={`button-filtro ${
          filtroAtivo === "Refeições" ? "ativo" : ""
        }`}
        onClick={() => handleFiltro("Refeições")}
      >
        <i class="fa-solid fa-bread-slice"></i>
        Refeições
      </button>
      <button
        className={`button-filtro ${filtroAtivo === "Massas" ? "ativo" : ""}`}
        onClick={() => handleFiltro("Massas")}
      >
        <img src={logoMassas} width={"40px"} />
        Massas
      </button>
      <button
        className={`button-filtro ${filtroAtivo === "Empadas" ? "ativo" : ""}`}
        onClick={() => handleFiltro("Empadas")}
      >
        <i class="fa-solid fa-utensils"></i>
        Empadas
      </button>
      <button
        className={`button-filtro ${filtroAtivo === "Empadao" ? "ativo" : ""}`}
        onClick={() => handleFiltro("Empadao")}
      >
        <i class="fa-solid fa-whiskey-glass"></i>
        Empadão
      </button>
      <button
        className={`button-filtro ${filtroAtivo === "Bebidas" ? "ativo" : ""}`}
        onClick={() => handleFiltro("Bebidas")}
      >
        <i class="fa-solid fa-whiskey-glass"></i>
        Bebidas
      </button>

      <button
        className={`button-filtro ${filtroAtivo === null ? "ativo" : ""}`}
        onClick={() => handleFiltro(null)}
      >
        <i class="fa-solid fa-bars"></i>
        Todos
      </button>
    </div>
  );
}

export default BotoesFiltro;
