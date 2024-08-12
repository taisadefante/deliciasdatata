import empada_Frango from "./assets/empadas/frango.png";
import empada_frango_azeitona from "./assets/empadas/frango_azeitona.png";
import empada_queijo from "./assets/empadas/queijo.png";
import empada_Leite_condensado from "./assets/empadas/leite_condensado.png";
import empada_alho_poro from "./assets/empadas/alho-poro.jpg";
import empada_brigadeiro from "./assets/empadas/brigadeiro.png";

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
import mini_pizza_mucarela_12cm from "./assets/pizza/mini_pizza_12cm.jpg";

import mini_pizza_calabresa from "./assets/pizza/12minipizzacalabresa.jpg";

import bolinhofeijoada from "./assets/bolinhofeijoada/IMG_2669.jpg";

import lasanha_bolonhesa from "./assets/massas/lasanha_bolonhesa.png";
import lasanha_frango from "./assets/massas/lasanha-frango.jpg";
import bolo_batata from "./assets/massas/bolo-batata.png";
import nhoque from "./assets/massas/nhoque.jpg";

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
    categoria: "Empadao",
    descricao:
      "( Aprox: 500gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",

    preco: 24.9,
    foto: empadao,
  },

  {
    id: 2.1,
    nome: "Empadão de frango c/ requeijão",
    categoria: "Empadao",
    descricao:
      "( Aprox: 500gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",

    preco: 24.9,
    foto: empadao,
  },
  /*

  //EMPADINHAS 3,5CM

  {
    name: "Empadinha Frango ",
    category: "Empadinhas ",
    describe: " Aprox: ( 3,5cm) - cento por R$ 90,00 (por encomenda)",
    price: 1.0,
    image: empadinha_frango,
  },
  {
    name: "Empadinha queijo ",
    category: "Empadinhas ",
    describe: " Aprox: ( 3,5cm) - cento por R$ 90,00 (por encomenda)",
    price: 1.0,
    image: empadinha_queijo,
  },

  {
    name: "Empadinha Leite condensado ",
    category: "Empadinhas ",
    describe: " Aprox: ( 3,5cm) - cento por R$ 90,00 (por encomenda)",
    price: 1.0,
    image: empadinha_leite_condensado,
  },

  //EMPADINHAS 4,5CM

  {
    name: "Empadinha Frango ",
    category: "Empadinhas ",
    describe: " Aprox: ( 4,5cm) - cento por R$ 100,00 (por encomenda)",
    price: 1.2,
    image: empadinha_frango,
  },
  {
    name: "Empadinha queijo ",
    category: "Empadinhas ",
    describe: " Aprox: ( 4,5cm) - cento por R$ 100,00 (por encomenda)",
    price: 1.2,
    image: empadinha_queijo,
  },

  {
    name: "Empadinha Leite condensado ",
    category: "Empadinhas ",
    describe: " Aprox: ( 4,5cm) - cento por R$ 100,00 (por encomenda)",
    price: 1.2,
    image: empadinha_leite_condensado,
  },
  {
    name: "Empadinha Alho poró ",
    category: "Empadinhas ",
    describe: " Aprox: ( 4,5cm) - cento por R$ 100,00 (por encomenda)",
    price: 1.2,
    image: empadinha_alho_poro,
  },

  //Quiche
  {
    name: "Quiche alho poró",
    category: "Quiche",
    describe:
      "Aprox: ( 9cm ) - Outros tamanhos por encomenda  - 17cm por 22,00 -  25cm por  R$ 38,90,  - 30cm por R$ 52,00.",
    price: 4.5,
    image: quiche_alho_poro,
  },
  {
    name: "Quiche queijo",
    category: "Quiche",
    describe:
      "Aprox: ( 9cm ) - Outros tamanhos por encomenda  - 17cm por 22,00 -  25cm por  R$ 38,90,  - 30cm por R$ 52,00.",
    price: 4.5,
    image: quiche_queijo,
  },

  {
    name: "Quiche 5 queijos",
    category: "Quiche",
    describe:
      "Aprox: ( 9cm ) - Outros tamanhos por encomenda  - 17cm por 22,00 -  25cm por  R$ 38,90,  - 30cm por R$ 52,00.",
    price: 5.0,
    image: quiche_queijo,
  },

  {
    name: "Quiche leite condensado",
    category: "Quiche",
    describe: "Aprox: ( 9cm ) .",
    price: 4.5,
    image: quiche_leite_condensado,
  },

  {
    name: "Quiche brigadeiro",
    category: "Quiche",
    describe: "Aprox: ( 9cm ) ",
    price: 5.0,
    image: quiche_brigadeiro,
  },

  {
    name: "Quiche Queijo 17cm ",
    category: "Quiche",
    describe: "",
    price: 22.0,
    image: quiche_queijo25,
  },

  {
    name: "Quiche Queijo 25cm ",
    category: "Quiche",
    describe: "",
    price: 38.9,
    image: quiche_queijo25,
  },
  {
    name: "Quiche Queijo 30cm ",
    category: "Quiche",
    describe: ".",
    price: 52.0,
    image: quiche_queijo25,
  },

  //MASSAS
  {
    name: "Lasanha bolonhesa c/ queijo e presunto ",
    category: "Massas",
    describe:
      " (aprox: 500gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",
    price: 22.0,
    image: lasanha_bolonhesa,
  },

  {
    name: "Lasanha de frango c/ queijo",
    category: "Massas",
    describe:
      " (aprox: 500gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",
    price: 22.0,
    image: lasanha_frango,
  },

  {
    name: "Bolo de batata",
    category: "Massas",
    describe:
      "Recheado com molho a bolonhesa, queijo e presunto (aprox: 600gr)  - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",
    price: 22.0,
    image: bolo_batata,
  },

  {
    name: "Nhoque",
    category: "Massas",
    describe:
      " (aprox: 550gr) - Fazemos maiores por encomenda. também fazemos no seu pirex para aquele almoço especial ( valores sob consulta.",
    price: 24.0,
    image: nhoque,
  },

  //MINI PIZZA
  {
    name: "Mini pizza muçarela",
    category: "Mini Pizza",
    describe:
      " Aprox: ( +7cm ) cada - cento por R$ 100,00 (verificar disponibilidade)",
    price: 1.1,
    image: mini_pizza_mucarela,
  },

  {
    name: "Mini pizza muçarela",
    category: "Mini Pizza",
    describe: " Aprox: 12cm cada ",
    price: 2.0,
    image: mini_pizza_mucarela_12cm,
  },

  {
    name: "Mini pizza muçarela",
    category: "Mini Pizza",
    describe:
      " Aprox: ( 5cm ) cada - cento por R$ 80,00 (verficar disponibilidade)",
    price: 0.9,
    image: mini_pizza_mucarela,
  },

  {
    name: "Mini pizza calabresa",
    category: "Mini Pizza",
    describe:
      " Aprox: ( 5cm ) cada - cento por R$ 85,00 (verficar disponibilidade)",
    price: 0.95,
    image: mini_pizza_calabresa,
  },

  //BOLINHO FEIJOADA
  {
    name: "Bolinho feijoada",
    category: "Bolinho Feijoada",
    describe:
      " Aprox: ( 35g ) cada - temos para sua festa com aprox 20g a R$1,20 unid",
    price: 2.0,
    image: bolinhofeijoada,
  },

  //DONUTS
  {
    name: "3 Donuts",
    category: "Donuts",
    price: 5.0,
    describe:
      "Aprox: ( 5cm ) - 3 donuts simples, massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha - acima de 50 unid R$ 1,50 cada",
    image: donuts1,
  },

  {
    name: "Donuts simples caixa",
    category: "Donuts",
    price: 3,
    describe:
      "Aprox: ( 5cm ) -  3 donuts simples, massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha - acima de 50 unid R$ 1,50 cada",
    image: donuts2,
  },

  {
    name: "Churros",
    category: "Donuts",
    price: 3,
    describe:
      "Aprox: ( 5cm ) - massa de canela polvilhado no açucar com canela com recheio de doce de leite.",
    image: churros,
  },

  {
    name: "Donuts churros",
    category: "Donuts",
    price: 3,
    describe:
      "Aprox: ( 5cm ) - massa de canela, recheio de doce de leite e cobertura de doce de leite.",
    image: donuts3,
  },

  {
    name: "Donuts banofe",
    category: "Donuts",
    price: 3,
    describe:
      "Aprox: ( 5cm ) - massa de canela, recheio de doce de leite com pedaços de banana e cobertura de doce de chocolate branco.",
    image: donuts4,
  },

  {
    name: "Donuts",
    category: "Donuts",
    price: 2,
    describe:
      "Aprox: ( 5cm ) - massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha - acima de 50 unid R$ 1,50 cada",
    image: donuts5,
  },

  {
    name: "2 donuts recheado",
    category: "Donuts",
    price: 5.5,
    describe:
      "Aprox: ( 5cm ) - massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha, recheado com brigadeiro",
    image: donuts6,
  },

  {
    name: "Donuts irresistivel",
    category: "Donuts",
    price: 5.5,
    describe: "Aprox: ( 5cm ) - São 2 donuts recheado",
    image: donuts7,
  },

  {
    name: "2 Donuts cobertura",
    category: "Donuts",
    price: 3,
    describe:
      "Aprox: ( 5cm ) - 2 donuts simples, massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha - acima de 50 unid R$ 1,50 cada",
    image: donuts8,
  },

  {
    name: "Petisqueira donuts churros",
    category: "Donuts",
    price: 13.0,
    describe: "São 6 donuts massa canela com  doce de leite. ",
    image: donuts9,
  },

  {
    name: "Pilulito donuts",
    category: "Donuts",
    price: 2.1,
    describe: "o cento sai a R$ 1.70 cada",
    image: donuts10,
  },

  {
    name: "Donuts Recheado",
    category: "Donuts",
    price: 3,
    describe:
      "Aprox: ( 5cm ) - massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha, recheado com brigadeiro",
    image: donuts11,
  },

  {
    name: "Donuts",
    category: "Donuts",
    price: 2.1,
    describe:
      "Aprox: ( 5cm ) - massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração. - acima de 50 unid R$ 1,50 cada",
    image: donuts12,
  },

  {
    name: "Donuts",
    category: "Donuts",
    price: 2,
    describe:
      "Aprox: ( 5cm ) - massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha. - acima de 50 unid R$ 1,50 cada",
    image: donuts13,
  },

  {
    name: "Donuts",
    category: "Donuts",
    price: 2,
    describe:
      "Aprox: ( 5cm ) - massa(baunilha, chocolate, canela) com cobertura de chocolate branco ou preto e decoração a sua escolha. - acima de 50 unid R$ 1,50 cada",
    image: donuts14,
  },

  //DOCINHO

  {
    name: "Docinho Brigadeiro",
    category: "Docinho",
    describe:
      "Aprox: ( 15g ) - acima de 50 unidades sai a R$1,5 unidade, cento por R$ 120,00 ",
    price: 2.0,
    image: brigadeiro,
  },

  {
    name: "Docinho morango",
    category: "Docinho",
    describe:
      "Aprox: ( 15g ) - acima de 50 unidades sai a R$1,5 unidade, cento por R$ 120,00 ",
    price: 2.0,
    image: morango,
  },

  {
    name: "Docinho ninho",
    category: "Docinho",
    describe:
      "Aprox: ( 15g ) - acima de 50 unidades sai a R$1,5 unidade, cento por R$ 120,00 ",
    price: 2.0,
    image: ninho,
  },

  //BEBIDA
  {
    name: "Pepsi 2lt",
    category: "Bebida",
    price: 10.0,
    image: pepsi,
  },
  {
    name: "Sukita uva",
    category: "Bebida",
    price: 8.0,
    image: sukita_uva,
  },
  {
    name: "Sukita Laranja",
    category: "Bebida",
    price: 8.0,
    image: sukita_laranja,
  },

  // Outros

  {
    name: "Arroz Doce",
    category: "Outros",
    describe: "",
    price: 5.0,
    image: arrozdoce,
  },
  {
    name: "Choco maça",
    category: "Outros",
    describe: "Por encomenda - colorido sai a R$ 3,40",
    price: 3.0,
    image: chocomaca,
  },

  {
    name: "choco maça",
    category: "Outros",
    describe: "Por encomenda - colorido sai a R$ 3,40",
    price: 3.0,
    image: chocomaca2,
  },

  {
    name: "Choco maça",
    category: "Outros",
    describe: "Por encomenda",
    price: 3.3,
    image: chocomaca3,
  },

  {
    name: "Pirulito marshmallow",
    category: "Outros",
    describe: "Por encomenda - a cor de sua preferência.",
    price: 1.5,
    image: pirulitomarshmallow,
  },

  {
    name: "Pirulito de chocolate",
    category: "Outros",
    describe: "Por encomenda - a cor de sua preferência.",
    price: 3.0,
    image: pirulitochoc,
  },*/
];

export default produtos;
