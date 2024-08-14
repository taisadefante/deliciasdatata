import empada_Frango from "./assets/empadas/frango.png";
import empada_frango_azeitona from "./assets/empadas/frango_azeitona.png";
import empada_queijo from "./assets/empadas/queijo.png";
import empada_Leite_condensado from "./assets/empadas/leite_condensado.png";
import empada_alho_poro from "./assets/empadas/alho-poro.jpg";

import empadao from "./assets/empadao/empadao.jpg";

import empadinha_frango from "./assets/empadinhas/frango.jpg";
import empadinha_alho_poro from "./assets/empadinhas/alho_poro.jpg";
import empadinha_leite_condensado from "./assets/empadinhas/doce_leite.jpg";
import empadinha_queijo from "./assets/empadinhas/queijo.jpg";

import quiche_alho_poro from "./assets/quiche/alho_poro.png";
import quiche_queijo from "./assets/quiche/queijo.png";
import quiche_leite_condensado from "./assets/quiche/leite_condensado.png";
import quiche_queijo25 from "./assets/quiche/queijo 25cm.png";
import quiche_brigadeiro from "./assets/quiche/brigadeiro.png";

import mini_pizza_mucarela from "./assets/pizza/mucarela.png";
import mini_pizza_mucarela_12cm from "./assets/pizza/mini_pizza_11cm.png";
import mini_pizza_calabresa_12cm from "./assets/pizza/14CM.png";
import mini_pizza_mucarela_14cm from "./assets/pizza/14CM-.png";
import mini_pizza_calabresa_14cm from "./assets/pizza/14CM.png";

import mini_pizza_calabresa from "./assets/pizza/12minipizzacalabresa.jpg";

import bolinhofeijoada from "./assets/bolinhofeijoada/IMG_2669.jpg";

import lasanha_bolonhesa from "./assets/massas/lasanha_bolonhesa.png";
import lasanha_frango from "./assets/massas/lasanha-frango.jpg";
import nhoque from "./assets/massas/nhoque.jpg";

import bolo_batata from "./assets/massas/bolo-batata.png";
import bolo_batata_arroz from "./assets/refeicoes/BOLO BATATA E ARROZ BRANCO.png";

import pepsi from "./assets/bebida/pepsi.jpg";
import sukita_uva from "./assets/bebida/sukita_uva.jpg";
import sukita_laranja from "./assets/bebida/sukita_laranja.jpg";

import donuts1 from "./assets/donuts/3_simples.jpg";
import donuts2 from "./assets/donuts/caixa.jpg";
import donuts3 from "./assets/donuts/churros_recheado.jpg";
import donuts4 from "./assets/donuts/churros_recheado_chocolate.jpg";
import donuts5 from "./assets/donuts/simples4.jpg";
import donuts6 from "./assets/donuts/cobertura_coco.jpg";
import donuts7 from "./assets/donuts/dupla_churros_recheado.jpg";
import donuts8 from "./assets/donuts/dupla_simples.jpg";
import donuts9 from "./assets/donuts/petisqueira_6_churros.jpg";
import donuts10 from "./assets/donuts/pilurito.jpg";
import donuts11 from "./assets/donuts/recheado_cobertura.jpg";
import donuts12 from "./assets/donuts/simples.jpg";
import donuts13 from "./assets/donuts/simples1.jpg";
import donuts14 from "./assets/donuts/simples3.jpg";
import churros from "./assets/donuts/churros.png";

import brigadeiro from "./assets/docinho/brigadeiro.jpeg";
import morango from "./assets/docinho/morango.jpg";
import ninho from "./assets/docinho/ninho.jpg";

import chocomaca from "./assets/outros/chocomaca.png";
import chocomaca2 from "./assets/outros/chocomaca3.png";
import chocomaca3 from "./assets/outros/chocomaca2.png";
import pirulitomarshmallow from "./assets/outros/pirulito-mar.png";
import pirulitochoc from "./assets/outros/pirulito-de-chocolate.png";
import arrozdoce from "./assets/outros/arroz doce.jpg";

const produtos = [
  //EMPADAS
  {
    id: 1,
    nome: "Empada Frango",
    categoria: "Empadas",
    descricao: "( Aprox: 7cm )",
    preco: 3.0,
    foto: empada_Frango,
  },
  {
    id: 1.1,
    nome: "Empada Frango c/ requeijão",
    categoria: "Empadas",
    descricao: "( Aprox: 7cm )",
    preco: 3.5,
    foto: empada_Frango,
  },
  {
    id: 1.2,
    nome: "Empada Frango c/ azeitona",
    categoria: "Empadas",
    descricao: "( Aprox: 7cm )",
    preco: 3.0,
    foto: empada_frango_azeitona,
  },

  {
    id: 1.3,
    nome: "Empada Queijo",
    categoria: "Empadas",
    descricao: "( Aprox: 7cm )",
    preco: 3.0,
    foto: empada_queijo,
  },

  {
    id: 1.4,
    nome: "Empada Alho poró",
    categoria: "Empadas",
    descricao: "( Aprox: 7cm )",
    preco: 3.0,
    foto: empada_alho_poro,
  },

  {
    id: 1.5,
    nome: "Empada Camarão (esgotado)",
    categoria: "Empadas",
    descricao: "( Aprox: 7cm )",
    preco: 4.0,
    foto: empada_Frango,
  },

  {
    id: 1.6,
    nome: "Empada Palmito",
    categoria: "Empadas",
    descricao: "( Aprox: 7cm )",
    preco: 3.0,
    foto: empada_Frango,
  },

  {
    id: 1.7,
    nome: "Empada Leite Condensado",
    categoria: "Empadas",
    descricao: "( Aprox: 7cm )",
    preco: 3.0,
    foto: empada_Leite_condensado,
  },

  // empadão
  {
    id: 2,
    nome: "Empadão de frango",
    categoria: "Empadão",
    descricao:
      "( Aprox: 500gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",

    preco: 24.9,
    foto: empadao,
  },

  {
    id: 2.1,
    nome: "Empadão de frango c/ requeijão",
    categoria: "Empadão",
    descricao:
      "( Aprox: 500gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",

    preco: 24.9,
    foto: empadao,
  },

  //EMPADINHAS 3,5CM

  {
    id: 3,
    nome: "Empadinha Frango ",
    categoria: "Empadinhas",
    descricao: " Aprox: ( 3,5cm) - cento por R$ 90,00 (por encomenda)",
    preco: 1.0,
    foto: empadinha_frango,
  },
  {
    id: 3.1,
    nome: "Empadinha queijo ",
    categoria: "Empadinhas",
    descricao: " Aprox: ( 3,5cm) - cento por R$ 90,00 (por encomenda)",
    preco: 1.0,
    foto: empadinha_queijo,
  },

  {
    id: 3.2,
    nome: "Empadinha Leite condensado ",
    categoria: "Empadinhas",
    descricao: " Aprox: ( 3,5cm) - cento por R$ 90,00 (por encomenda)",
    preco: 1.0,
    foto: empadinha_leite_condensado,
  },

  //EMPADINHAS 4,5CM

  {
    id: 3.3,
    nome: "Empadinha Frango ",
    categoria: "Empadinhas",
    descricao: " Aprox: ( 4,5cm) - cento por R$ 100,00 (por encomenda)",
    preco: 1.2,
    foto: empadinha_frango,
  },
  {
    id: 3.4,
    nome: "Empadinha queijo ",
    categoria: "Empadinhas",
    descricao: " Aprox: ( 4,5cm) - cento por R$ 100,00 (por encomenda)",
    preco: 1.2,
    foto: empadinha_queijo,
  },

  {
    id: 3.4,
    nome: "Empadinha Camarão ",
    categoria: "Empadinhas",
    descricao: " Aprox: ( 4,5cm) - cento por R$ 100,00 (por encomenda)",
    preco: 1.3,
    foto: empadinha_frango,
  },

  {
    id: 3.5,
    nome: "Empadinha Leite condensado ",
    categoria: "Empadinhas",
    descricao: " Aprox: ( 4,5cm) - cento por R$ 100,00 (por encomenda)",
    preco: 1.2,
    foto: empadinha_leite_condensado,
  },
  {
    id: 3.6,
    nome: "Empadinha Alho poró ",
    categoria: "Empadinhas",
    descricao: " Aprox: ( 4,5cm) - cento por R$ 100,00 (por encomenda)",
    preco: 1.2,
    foto: empadinha_alho_poro,
  },

  //Quiche
  {
    id: 4,
    nome: "Quiche alho poró",
    categoria: "Quiche",
    descricao:
      "Aprox: ( 9cm ) - Outros tamanhos por encomenda  - 17cm por 22,00 -  25cm por  R$ 38,90,  - 30cm por R$ 52,00.",
    preco: 4.5,
    foto: quiche_alho_poro,
  },
  {
    id: 4.1,
    nome: "Quiche queijo",
    categoria: "Quiche",
    descricao:
      "Aprox: ( 9cm ) - Outros tamanhos por encomenda  - 17cm por 22,00 -  25cm por  R$ 38,90,  - 30cm por R$ 52,00.",
    preco: 4.5,
    foto: quiche_queijo,
  },

  {
    id: 4.2,
    nome: "Quiche 5 queijos",
    categoria: "Quiche",
    descricao:
      "Aprox: ( 9cm ) - Outros tamanhos por encomenda  - 17cm por 22,00 -  25cm por  R$ 38,90,  - 30cm por R$ 52,00.",
    preco: 5.0,
    foto: quiche_queijo,
  },

  {
    id: 4.3,
    nome: "Quiche leite condensado",
    categoria: "Quiche",
    descricao: "Aprox: ( 9cm ) .",
    preco: 4.5,
    foto: quiche_leite_condensado,
  },

  {
    id: 4.4,
    nome: "Quiche brigadeiro",
    categoria: "Quiche",
    descricao: "Aprox: ( 9cm ) ",
    preco: 5.0,
    foto: quiche_brigadeiro,
  },

  {
    id: 4.4,
    nome: "Quiche Queijo 17cm ",
    categoria: "Quiche",
    descricao: "",
    preco: 22.0,
    foto: quiche_queijo25,
  },

  {
    id: 4.5,
    nome: "Quiche Queijo 25cm ",
    categoria: "Quiche",
    descricao: "",
    preco: 38.9,
    foto: quiche_queijo25,
  },
  {
    id: 4.6,
    nome: "Quiche Queijo 30cm ",
    categoria: "Quiche",
    descricao: ".",
    preco: 52.0,
    foto: quiche_queijo25,
  },

  //MASSAS
  {
    id: 5,
    nome: "Lasanha bolonhesa c/ queijo e presunto ",
    categoria: "Massas",
    descricao:
      " (aprox: 500gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",
    preco: 22.0,
    foto: lasanha_bolonhesa,
  },

  {
    id: 5.1,
    nome: "Lasanha de frango c/ queijo",
    categoria: "Massas",
    descricao:
      " (aprox: 500gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",
    preco: 22.0,
    foto: lasanha_frango,
  },

  {
    id: 5.2,
    nome: "Nhoque Batata a bolonhesa",
    categoria: "Massas",
    descricao:
      " (aprox: 550gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",
    preco: 22.0,
    foto: nhoque,
  },

  {
    id: 5.3,
    nome: "Nhoque Batata c/ carne de panela",
    categoria: "Massas",
    descricao:
      " (aprox: 550gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",
    preco: 22.0,
    foto: nhoque,
  },

  {
    id: 5.4,
    nome: "Nhoque Aipim  a bolonhesa",
    categoria: "Massas",
    descricao:
      " (aprox: 550gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",
    preco: 22.0,
    foto: nhoque,
  },

  {
    id: 5.5,
    nome: "Nhoque Aipim c/ carne de panela",
    categoria: "Massas",
    descricao:
      " (aprox: 550gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",
    preco: 22.0,
    foto: nhoque,
  },
  //REFEIÇÕES TRADICIONAIS
  {
    id: 6,
    nome: "Bolo de batata",
    categoria: "Refeições Tradionais",
    descricao:
      "Recheado com molho a bolonhesa e queijo (aprox: 600gr)  - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta).",
    preco: 20.0,
    foto: bolo_batata,
  },

  {
    id: 6.1,
    nome: "Bolo de batata c/ arroz",
    categoria: "Refeições Tradionais",
    descricao: "Recheado com molho a bolonhesa e queijo (aprox: 500gr)  .",
    preco: 14.0,
    foto: bolo_batata_arroz,
  },

  //MINI PIZZA

  {
    id: 7,
    nome: "Mini pizza muçarela 5cm",
    categoria: "Pizza",
    descricao:
      " Aprox: ( 5cm ) cada - cento por R$ 80,00 (verficar disponibilidade)",
    preco: 0.9,
    foto: mini_pizza_mucarela,
  },

  {
    id: 7.1,
    nome: "Mini pizza calabresa 5cm",
    categoria: "Pizza",
    descricao:
      " Aprox: ( 5cm ) cada - cento por R$ 85,00 (verficar disponibilidade)",
    preco: 0.95,
    foto: mini_pizza_calabresa,
  },
  {
    id: 7.2,
    nome: "Mini pizza muçarela 7cm",
    categoria: "Pizza",
    descricao:
      " Aprox: ( 7cm ) cada - cento por R$ 100,00 (verificar disponibilidade)",
    preco: 1.25,
    foto: mini_pizza_mucarela,
  },

  {
    id: 7.3,
    nome: "Mini pizza muçarela 11cm",
    categoria: "Pizza",
    descricao: " Aprox: 12cm cada ",
    preco: 2.0,
    foto: mini_pizza_mucarela_12cm,
  },

  {
    id: 7.4,
    nome: "Mini pizza calabresa 11cm",
    categoria: "Pizza",
    descricao: " Aprox: 12cm cada ",
    preco: 2.2,
    foto: mini_pizza_calabresa_14cm,
  },

  {
    id: 7.5,
    nome: "Mini pizza muçarela 14cm",
    categoria: "Pizza",
    descricao: " Aprox: 14cm cada ",
    preco: 3,
    foto: mini_pizza_mucarela_14cm,
  },

  {
    id: 7.6,
    nome: "Mini pizza calabresa 14cm",
    categoria: "Pizza",
    descricao: " Aprox: 14cm cada ",
    preco: 3.2,
    foto: mini_pizza_mucarela_12cm,
  },
  //BOLINHO FEIJOADA
  {
    id: 8,
    nome: "Bolinho feijoada",
    categoria: "Salgados",
    descricao:
      " Aprox: ( 35g ) cada - temos para sua festa com aprox 20g a R$1,20 unid",
    preco: 2.0,
    foto: bolinhofeijoada,
  },

  //DONUTS
  {
    id: 9,
    nome: "3 Donuts",
    categoria: "Donuts",
    preco: 5.0,
    descricao:
      "Aprox: ( 5cm ) - 3 donuts simples, massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha - acima de 50 unid R$ 1,50 cada",
    foto: donuts1,
  },

  {
    id: 9.1,
    nome: "Donuts simples caixa",
    categoria: "Donuts",
    preco: 3,
    descricao:
      "Aprox: ( 5cm ) -  3 donuts simples, massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha - acima de 50 unid R$ 1,50 cada",
    foto: donuts2,
  },

  {
    id: 9.2,
    nome: "Churros",
    categoria: "Donuts",
    preco: 3,
    descricao:
      "Aprox: ( 5cm ) - massa de canela polvilhado no açucar com canela com recheio de doce de leite.",
    foto: churros,
  },

  {
    id: 9.3,
    nome: "Donuts churros",
    categoria: "Donuts",
    preco: 3,
    descricao:
      "Aprox: ( 5cm ) - massa de canela, recheio de doce de leite e cobertura de doce de leite.",
    foto: donuts3,
  },

  {
    id: 9.4,
    nome: "Donuts banofe",
    categoria: "Donuts",
    preco: 3,
    descricao:
      "Aprox: ( 5cm ) - massa de canela, recheio de doce de leite com pedaços de banana e cobertura de doce de chocolate branco.",
    foto: donuts4,
  },

  {
    id: 9.5,
    nome: "Donuts",
    categoria: "Donuts",
    preco: 2,
    descricao:
      "Aprox: ( 5cm ) - massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha - acima de 50 unid R$ 1,50 cada",
    foto: donuts5,
  },

  {
    id: 9.6,
    nome: "2 donuts recheado",
    categoria: "Donuts",
    preco: 5.5,
    descricao:
      "Aprox: ( 5cm ) - massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha, recheado com brigadeiro",
    foto: donuts6,
  },

  {
    id: 9.7,
    nome: "Donuts irresistivel",
    categoria: "Donuts",
    preco: 5.5,
    descricao: "Aprox: ( 5cm ) - São 2 donuts recheado",
    foto: donuts7,
  },

  {
    id: 9.8,
    nome: "2 Donuts cobertura",
    categoria: "Donuts",
    preco: 3,
    descricao:
      "Aprox: ( 5cm ) - 2 donuts simples, massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha - acima de 50 unid R$ 1,50 cada",
    foto: donuts8,
  },

  {
    id: 9.9,
    nome: "Petisqueira donuts churros",
    categoria: "Donuts",
    preco: 13.0,
    descricao: "São 6 donuts massa canela com  doce de leite. ",
    foto: donuts9,
  },

  {
    id: 9.11,
    nome: "Pilulito donuts",
    categoria: "Donuts",
    preco: 2.1,
    descricao: "o cento sai a R$ 1.70 cada",
    foto: donuts10,
  },

  {
    id: 9.12,
    nome: "Donuts Recheado",
    categoria: "Donuts",
    preco: 3,
    descricao:
      "Aprox: ( 5cm ) - massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha, recheado com brigadeiro",
    foto: donuts11,
  },

  {
    id: 9.13,
    nome: "Donuts",
    categoria: "Donuts",
    preco: 2.1,
    descricao:
      "Aprox: ( 5cm ) - massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração. - acima de 50 unid R$ 1,50 cada",
    foto: donuts12,
  },

  {
    id: 9.14,
    nome: "Donuts",
    categoria: "Donuts",
    preco: 2,
    descricao:
      "Aprox: ( 5cm ) - massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha. - acima de 50 unid R$ 1,50 cada",
    foto: donuts13,
  },

  {
    id: 9.15,
    nome: "Donuts",
    categoria: "Donuts",
    preco: 2,
    descricao:
      "Aprox: ( 5cm ) - massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha. - acima de 50 unid R$ 1,50 cada",
    foto: donuts14,
  },

  //BEBIDA
  {
    id: 11,
    nome: "Pepsi 2lt",
    categoria: "Bebidas",
    descricao: "",
    preco: 10.0,
    foto: pepsi,
  },
  {
    id: 11.1,
    nome: "Sukita uva",
    categoria: "Bebidas",
    preco: 8.0,
    foto: sukita_uva,
  },
  {
    id: 11.2,
    nome: "Sukita Laranja",
    categoria: "Bebidas",
    preco: 8.0,
    foto: sukita_laranja,
  },

  // Doces e sobremesas

  {
    id: 12,
    nome: "Arroz Doce",
    categoria: "Doces e sobremesas",
    descricao: "",
    preco: 5.0,
    foto: arrozdoce,
  },

  {
    id: 12.1,
    nome: "Docinho Brigadeiro",
    categoria: "Doces e sobremesas",
    descricao:
      "Aprox: ( 15g ) - acima de 50 unidades sai a R$1,5 unidade, cento por R$ 120,00 ",
    preco: 2.0,
    foto: brigadeiro,
  },

  {
    id: 12.2,
    nome: "Docinho ninho",
    categoria: "Doces e sobremesas",
    descricao:
      "Aprox: ( 15g ) - acima de 50 unidades sai a R$1,5 unidade, cento por R$ 120,00 ",
    preco: 2.0,
    foto: ninho,
  },

  {
    id: 12.3,
    nome: "Docinho morango",
    categoria: "Doces e sobremesas",
    descricao:
      "Aprox: ( 15g ) - acima de 50 unidades sai a R$1,5 unidade, cento por R$ 120,00 ",
    preco: 2.0,
    foto: morango,
  },

  // Festas
  {
    id: 13,
    nome: "Choco maça",
    categoria: "Festa",
    descricao: "Por encomenda - colorido sai a R$ 3,40",
    preco: 3.0,
    foto: chocomaca,
  },

  {
    id: 13.1,
    nome: "choco maça",
    categoria: "Festa",
    descricao: "Por encomenda - colorido sai a R$ 3,40",
    preco: 3.0,
    foto: chocomaca2,
  },

  {
    id: 13.2,
    nome: "Choco maça",
    categoria: "Festa",
    descricao: "Por encomenda",
    preco: 3.3,
    foto: chocomaca3,
  },

  {
    id: 13.3,
    nome: "Pirulito marshmallow",
    categoria: "Festa",
    descricao: "Por encomenda - a cor de sua preferência.",
    preco: 1.5,
    foto: pirulitomarshmallow,
  },

  {
    id: 13.4,
    nome: "Pirulito de chocolate",
    categoria: "Festa",
    descricao: "Por encomenda - a cor de sua preferência.",
    preco: 3.0,
    foto: pirulitochoc,
  },
];

export default produtos;
