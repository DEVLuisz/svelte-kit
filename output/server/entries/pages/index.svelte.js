import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, f as add_attribute, b as each } from "../../chunks/index-21e67821.js";
import { C as Card, T as Title, a as TagLink } from "../../chunks/TagLink-be057931.js";
import { m as minhaLista, T as Tag } from "../../chunks/Tag-6ed7df35.js";
var IngredienteSelecionavel_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "button.svelte-cwlwa5{cursor:pointer}")();
const css$2 = {
  code: "button.svelte-cwlwa5{cursor:pointer}",
  map: null
};
const IngredienteSelecionavel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selecionado;
  let $minhaLista, $$unsubscribe_minhaLista;
  $$unsubscribe_minhaLista = subscribe(minhaLista, (value) => $minhaLista = value);
  let { ingrediente } = $$props;
  if ($$props.ingrediente === void 0 && $$bindings.ingrediente && ingrediente !== void 0)
    $$bindings.ingrediente(ingrediente);
  $$result.css.add(css$2);
  selecionado = $minhaLista.includes(ingrediente);
  $$unsubscribe_minhaLista();
  return `<button class="${"svelte-cwlwa5"}">${validate_component(Tag, "Tag").$$render($$result, { ativa: selecionado }, {}, {
    default: () => {
      return `${escape(ingrediente)}`;
    }
  })}
</button>`;
});
var Category_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".categoria-container.svelte-1c6j594{padding:0.75rem 0.5rem}.categoria-imagem.svelte-1c6j594{margin-bottom:0.5rem}.categoria-nome.svelte-1c6j594{font-size:1.125rem;color:var(--verde);margin-bottom:0.875rem}.ingredientes.svelte-1c6j594{display:flex;flex-wrap:wrap;justify-content:center;gap:0.75rem 1rem}")();
const css$1 = {
  code: ".categoria-container.svelte-1c6j594{padding:0.75rem 0.5rem}.categoria-imagem.svelte-1c6j594{margin-bottom:0.5rem}.categoria-nome.svelte-1c6j594{font-size:1.125rem;color:var(--verde);margin-bottom:0.875rem}.ingredientes.svelte-1c6j594{display:flex;flex-wrap:wrap;justify-content:center;gap:0.75rem 1rem}",
  map: null
};
const Category = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { categoria } = $$props;
  if ($$props.categoria === void 0 && $$bindings.categoria && categoria !== void 0)
    $$bindings.categoria(categoria);
  $$result.css.add(css$1);
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"categoria-container svelte-1c6j594"}"><img src="${"/icones/categorias_ingredientes/" + escape(categoria.imagem)}"${add_attribute("alt", categoria.nome, 0)} class="${"categoria-imagem svelte-1c6j594"}">

  <h3 class="${"categoria-nome svelte-1c6j594"}">${escape(categoria.nome)}</h3>

  <ul class="${"ingredientes svelte-1c6j594"}">${each(categoria.ingredientes, (ingrediente) => {
        return `<li>${validate_component(IngredienteSelecionavel, "IngredienteSelecionavel").$$render($$result, { ingrediente }, {}, {})}
      </li>`;
      })}</ul></div>`;
    }
  })}`;
});
var categorias = [
  {
    nome: "Latic\xEDnios e Ovos",
    ingredientes: [
      "Ovos",
      "Queijo",
      "Leite",
      "Manteiga",
      "Creme de Leite",
      "Iogurte",
      "Leite Condensado",
      "Sorvete"
    ],
    imagem: "laticinios_e_ovos.png"
  },
  {
    nome: "Farinhas e Fermentos",
    ingredientes: [
      "Farinha de trigo",
      "Povilho",
      "Farinha de rosca",
      "Canjica",
      "Farinha de mandioca",
      "Fub\xE1",
      "Linha\xE7a",
      "Fermento qu\xEDmico"
    ],
    imagem: "farinhas_e_fermentos.png"
  },
  {
    nome: "Temperos e Especiarias",
    ingredientes: [
      "Canela",
      "Cravo",
      "Or\xE9gano",
      "Noz moscada",
      "Tomilho",
      "Pimenta do Reino",
      "Cominho"
    ],
    imagem: "temperos_e_especiarias.png"
  },
  {
    nome: "\xD3leos, Gorduras e Vinagres",
    ingredientes: [
      "Vinagre",
      "\xD3leo",
      "Dend\xEA",
      "Azeite de Oliva",
      "Banha",
      "Aceto Bals\xE2mico",
      "\xD3leo de coco"
    ],
    imagem: "oleos_gorduras_e_vinagres.png"
  },
  {
    nome: "Hortali\xE7as e Verduras",
    ingredientes: [
      "Cebola",
      "Alho",
      "Tomate",
      "Ab\xF3bora",
      "Abobrinha",
      "Batata",
      "Piment\xE3o",
      "Espinafre",
      "Cenoura"
    ],
    imagem: "hortalicas_e_verduras.png"
  },
  {
    nome: "A\xE7\xFAcares e Ado\xE7antes",
    ingredientes: [
      "A\xE7\xFAcar branco",
      "A\xE7\xFAcar mascavo",
      "A\xE7\xFAcar cristal",
      "Melado",
      "Mel",
      "Baunilha",
      "Glucose",
      "Xilito",
      "Stevia"
    ],
    imagem: "acucares_e_adocantes.png"
  },
  {
    nome: "Prote\xEDnas Animais",
    ingredientes: [
      "Peixe",
      "Carne bovina",
      "Carne de porco",
      "Frango",
      "Bacon",
      "Salsicha",
      "Atum",
      "Salm\xE3o",
      "Presunto",
      "Bacalhau"
    ],
    imagem: "proteinas_animais.png"
  },
  {
    nome: "Gr\xE3os, Cereais e Leguminosas",
    ingredientes: [
      "Arroz",
      "Feij\xE3o",
      "Aveia",
      "Ervilha",
      "Lentilha",
      "Gr\xE3o de bico",
      "Milho",
      "Gergelim",
      "Quinoa"
    ],
    imagem: "graos_cerais_e_leguminosas.png"
  },
  {
    nome: "Frutas frescas",
    ingredientes: [
      "Banana",
      "Ma\xE7\xE3",
      "Uva",
      "Pera",
      "Lim\xE3o",
      "Morango",
      "Ameixa",
      "Framboesa",
      "Acabaxi"
    ],
    imagem: "frutas_frescas.png"
  },
  {
    nome: "Frutas secas",
    ingredientes: [
      "Castanha de caju",
      "Castanha do par\xE1",
      "Uva passa",
      "Damasco",
      "T\xE2mara",
      "Pistache",
      "Am\xEAndoa",
      "Amendoim"
    ],
    imagem: "frutas_secas.png"
  },
  {
    nome: "P\xE3es e Massas",
    ingredientes: [
      "P\xE3o",
      "P\xE3o s\xEDrio",
      "Tortilha",
      "Macarr\xE3o",
      "Nhoque",
      "Massa de pastel",
      "Massa de lasanha",
      "Biscoito",
      "Broa"
    ],
    imagem: "paes_e_massas.png"
  },
  {
    nome: "Doces e guloseimas",
    ingredientes: [
      "Chocolate",
      "Geleia",
      "Goiabada",
      "Caramelo",
      "Chantilly",
      "Cacau em p\xF3",
      "Suspiro",
      "Gelatina",
      "Pa\xE7oca"
    ],
    imagem: "doces_e_guloseimas.png"
  }
];
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".info.svelte-1czh79.svelte-1czh79{margin-bottom:3.375rem}.info.svelte-1czh79>p.svelte-1czh79{line-height:2rem}.categorias.svelte-1czh79.svelte-1czh79{margin-bottom:4.6875rem;display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem}.buscar-receitas.svelte-1czh79.svelte-1czh79{display:flex;justify-content:center}")();
const css = {
  code: ".info.svelte-1czh79.svelte-1czh79{margin-bottom:3.375rem}.info.svelte-1czh79>p.svelte-1czh79{line-height:2rem}.categorias.svelte-1czh79.svelte-1czh79{margin-bottom:4.6875rem;display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem}.buscar-receitas.svelte-1czh79.svelte-1czh79{display:flex;justify-content:center}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listEmpty;
  let $minhaLista, $$unsubscribe_minhaLista;
  $$unsubscribe_minhaLista = subscribe(minhaLista, (value) => $minhaLista = value);
  $$result.css.add(css);
  listEmpty = $minhaLista.length === 0;
  $$unsubscribe_minhaLista();
  return `${$$result.head += `${$$result.title = `<title>Svelte | Home</title>`, ""}`, ""}

<main>${validate_component(Title, "Title").$$render($$result, { tag: "h1" }, {}, {
    default: () => {
      return `Ingredientes`;
    }
  })}

  <div class="${"info svelte-1czh79"}"><p class="${"svelte-1czh79"}">Selecione abaixo os Ingredientes que voc\xEA deseja usar nessa refei\xE7\xE3o:</p>
    <p class="${"svelte-1czh79"}">*Aten\xE7\xE3o: Consideramos que voc\xEA tenha em casa: sal, pimenta e \xE1gua.</p></div>

  <ul class="${"categorias svelte-1czh79"}">${each(categorias, (categoria) => {
    return `<li>${validate_component(Category, "Category").$$render($$result, { categoria }, {}, {})}
      </li>`;
  })}</ul>

  <div class="${"buscar-receitas svelte-1czh79"}">${validate_component(TagLink, "TagLink").$$render($$result, {
    href: "/receitas",
    desabilitada: listEmpty
  }, {}, {
    default: () => {
      return `Buscar Receitas!`;
    }
  })}</div>
</main>`;
});
export { Routes as default };
