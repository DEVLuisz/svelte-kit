import { c as create_ssr_component, v as validate_component, e as escape, f as add_attribute, a as subscribe, b as each } from "../../chunks/index-21e67821.js";
import { C as Card, T as Title, a as TagLink } from "../../chunks/TagLink-be057931.js";
import { m as minhaLista } from "../../chunks/Tag-6ed7df35.js";
var Receita_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".receita-img.svelte-8k00or{width:100%;height:150px}.receita-nome.svelte-8k00or{font-size:1.125rem}.receita-info.svelte-8k00or{padding:0.75rem 0.875rem}")();
const css$1 = {
  code: ".receita-img.svelte-8k00or{width:100%;height:150px}.receita-nome.svelte-8k00or{font-size:1.125rem}.receita-info.svelte-8k00or{padding:0.75rem 0.875rem}",
  map: null
};
const Receita = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { receita } = $$props;
  if ($$props.receita === void 0 && $$bindings.receita && receita !== void 0)
    $$bindings.receita(receita);
  $$result.css.add(css$1);
  return `<div style="display: contents; --largura:${"280px"};">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<img src="${"/imagens/receitas/" + escape(receita.imagem)}"${add_attribute("alt", receita.nome, 0)} class="${"receita-img svelte-8k00or"}">

  <div class="${"receita-info svelte-8k00or"}"><h3 class="${"receita-nome svelte-8k00or"}">${escape(receita.nome)}</h3></div>`;
    }
  })}</div>`;
});
var receitas = [
  {
    nome: "Pasta de Alho Assado",
    ingredientes: [
      "Alho",
      "Azeite de Oliva"
    ],
    imagem: "pasta_de_alho_assado.png"
  },
  {
    nome: "Pat\xEA de Alho Assado",
    ingredientes: [
      "Alho",
      "Azeite de Oliva"
    ],
    imagem: "pate_de_alho_assado.png"
  },
  {
    nome: "Alho Assado",
    ingredientes: [
      "Alho",
      "Azeite de Oliva",
      "Or\xE9gano"
    ],
    imagem: "alho_assado.png"
  },
  {
    nome: "Arroz de Alho",
    ingredientes: [
      "Arroz",
      "Alho",
      "\xD3leo"
    ],
    imagem: "arroz_de_alho.png"
  },
  {
    nome: "P\xE3o de Alho",
    ingredientes: [
      "P\xE3o",
      "Manteiga",
      "Alho",
      "Or\xE9gano"
    ],
    imagem: "pao_de_alho.png"
  },
  {
    nome: "Macarr\xE3o de Alho e \xD3leo",
    ingredientes: [
      "Macarr\xE3o",
      "Alho",
      "\xD3leo",
      "Manteiga"
    ],
    imagem: "macarrao_de_alho_e_oleo.png"
  },
  {
    nome: "Bacalhau com chips de alho",
    ingredientes: [
      "Bacalhau",
      "Alho",
      "Azeite de Oliva",
      "Lim\xE3o"
    ],
    imagem: "bacalhau_com_chips_de_alho.png"
  },
  {
    nome: "Manteiga com tomilho e alho",
    ingredientes: [
      "Manteiga",
      "Alho",
      "Tomilho"
    ],
    imagem: "manteiga_com_tomilho_e_alho.png"
  },
  {
    nome: "Tortei com recheio de Ab\xF3bora",
    ingredientes: [
      "Massa de pastel",
      "Ab\xF3bora",
      "Tomate",
      "Alho",
      "\xD3leo",
      "Farinha de rosca",
      "Noz moscada"
    ],
    imagem: "tortei.png"
  },
  {
    nome: "Creme de Galinha",
    ingredientes: [
      "Frango",
      "Leite",
      "Creme de Leite",
      "Milho",
      "Ovos"
    ],
    imagem: "creme_de_galinha.png"
  },
  {
    nome: "Panqueca",
    ingredientes: [
      "Farinha de trigo",
      "Manteiga",
      "Leite",
      "Ovos"
    ],
    imagem: "panqueca.png"
  },
  {
    nome: "Milkshake de chocolate",
    ingredientes: [
      "Chocolate",
      "Chantilly"
    ],
    imagem: "milkshake_de_chocolate.png"
  },
  {
    nome: "Mousse de chocolate",
    ingredientes: [
      "Creme de Leite",
      "Chocolate",
      "Ovos",
      "Manteiga"
    ],
    imagem: "mousse_de_chocolate.png"
  }
];
var receitas_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".info.svelte-80l76.svelte-80l76{margin-bottom:3.375rem}.info.svelte-80l76>p.svelte-80l76{line-height:2rem}.info.svelte-80l76>p.verde.svelte-80l76{color:var(--verde)}.receitas.svelte-80l76.svelte-80l76{text-align:start;margin-bottom:3.75rem;display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem}.receitas.svelte-80l76 li.svelte-80l76{list-style:none}.editar-lista.svelte-80l76.svelte-80l76{display:flex;justify-content:center}")();
const css = {
  code: ".info.svelte-80l76.svelte-80l76{margin-bottom:3.375rem}.info.svelte-80l76>p.svelte-80l76{line-height:2rem}.info.svelte-80l76>p.verde.svelte-80l76{color:var(--verde)}.receitas.svelte-80l76.svelte-80l76{text-align:start;margin-bottom:3.75rem;display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem}.receitas.svelte-80l76 li.svelte-80l76{list-style:none}.editar-lista.svelte-80l76.svelte-80l76{display:flex;justify-content:center}",
  map: null
};
const Receitas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let receitasFiltradas;
  let $minhaLista, $$unsubscribe_minhaLista;
  $$unsubscribe_minhaLista = subscribe(minhaLista, (value) => $minhaLista = value);
  $$result.css.add(css);
  receitasFiltradas = receitas.filter((receita) => receita.ingredientes.every((ingrediente) => $minhaLista.includes(ingrediente)));
  $$unsubscribe_minhaLista();
  return `${$$result.head += `${$$result.title = `<title>Svelte | Receitas</title>`, ""}`, ""}

<main>${validate_component(Title, "Title").$$render($$result, { tag: "h1" }, {}, {
    default: () => {
      return `Receitas!`;
    }
  })}

  <div class="${"info svelte-80l76"}"><p class="${"verde svelte-80l76"}">Resultados Encontrados: ${escape(receitasFiltradas.length)}</p>

    ${receitasFiltradas.length ? `<p class="${"svelte-80l76"}">Veja as op\xE7\xF5es de receitas que encontramos com os ingredientes que voc\xEA
        tem por ai!
      </p>` : `<p class="${"svelte-80l76"}">N\xE3o encontramos nenhuma receita com os seus ingredientes \u{1F62B}!
      </p>`}</div>

  ${receitasFiltradas.length ? `<ul class="${"receitas svelte-80l76"}">${each(receitasFiltradas, (receita) => {
    return `<li class="${"svelte-80l76"}">${validate_component(Receita, "Receita").$$render($$result, { receita }, {}, {})}
    </li>`;
  })}</ul>` : ``}

  <div class="${"editar-lista svelte-80l76"}">${validate_component(TagLink, "TagLink").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Editar Lista`;
    }
  })}</div>
</main>`;
});
export { Receitas as default };
