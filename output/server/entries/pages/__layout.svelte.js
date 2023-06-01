import { c as create_ssr_component, v as validate_component, e as escape, a as subscribe, b as each } from "../../chunks/index-21e67821.js";
import { T as Tag, m as minhaLista } from "../../chunks/Tag-6ed7df35.js";
var app = /* @__PURE__ */ (() => `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
 
:root {
    --cor-fundo-body: #FEF7EC;
    --cor-texto-principal: #444444;
    --branco: #FAFAFA;
    --cinza: #EAEAEA;
    --laranja: #FF734C;
    --verde: #41A86A;
}
 
body {
    font-family: 'Nunito', sans-serif;
    color: var(--cor-texto-principal);
   
    min-height: 100vh;
    background: url("/imagens/textura-marmore.png") repeat;
    background-color: var(--cor-fundo-body);
    background-size: 100%;
}
 
button, input, textarea {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
}
 
button {
    border: 0;
    background-color: transparent;
}
 
li {
    list-style: none;
}
 
a {
    text-decoration: none;
}
`)();
var Cabecalho_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => 'header.svelte-8w2bhc.svelte-8w2bhc{--largura-tela-base:1440;background:url("/imagens/header.png") no-repeat;background-size:100%;height:calc((325 / var(--largura-tela-base)) * 100vw);margin-bottom:3rem;display:flex;justify-content:center;align-items:center}header.svelte-8w2bhc>img.svelte-8w2bhc{width:calc((254 / var(--largura-tela-base)) * 100vw)}')();
const css$4 = {
  code: 'header.svelte-8w2bhc.svelte-8w2bhc{--largura-tela-base:1440;background:url("/imagens/header.png") no-repeat;background-size:100%;height:calc((325 / var(--largura-tela-base)) * 100vw);margin-bottom:3rem;display:flex;justify-content:center;align-items:center}header.svelte-8w2bhc>img.svelte-8w2bhc{width:calc((254 / var(--largura-tela-base)) * 100vw)}',
  map: null
};
const Cabecalho = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<header class="${"svelte-8w2bhc"}"><img src="${"/imagens/alura-cook-logo.svg"}" alt="${"Logo do Alura Cook"}" class="${"svelte-8w2bhc"}">
</header>`;
});
var Footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => 'footer.svelte-1w4xld4{background:url("/imagens/footer.png");height:100px;font-weight:700;color:var(--branco);display:flex;justify-content:center;align-items:center}.registered.svelte-1w4xld4{margin-right:1px}')();
const css$3 = {
  code: 'footer.svelte-1w4xld4{background:url("/imagens/footer.png");height:100px;font-weight:700;color:var(--branco);display:flex;justify-content:center;align-items:center}.registered.svelte-1w4xld4{margin-right:1px}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<footer class="${"svelte-1w4xld4"}"><img src="${"/icones/registered.png"}" alt="${"Icon Footer"}" class="${"registered svelte-1w4xld4"}">
  CopyRight | Created by \xA9Lu\xEDs.jsx | Alura Cook - 2022
</footer>`;
});
var MeuIngrediente_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '.meu-ingrediente-container.svelte-1cuwr8k{position:relative}.close.svelte-1cuwr8k{background-image:url("/icones/close.svg");height:10px;width:10px;cursor:pointer;position:absolute;top:4px;right:4px}.remover.svelte-1cuwr8k{line-height:24px;font-size:0.875rem;color:var(--laranja);cursor:pointer}')();
const css$2 = {
  code: '.meu-ingrediente-container.svelte-1cuwr8k{position:relative}.close.svelte-1cuwr8k{background-image:url("/icones/close.svg");height:10px;width:10px;cursor:pointer;position:absolute;top:4px;right:4px}.remover.svelte-1cuwr8k{line-height:24px;font-size:0.875rem;color:var(--laranja);cursor:pointer}',
  map: null
};
const MeuIngrediente = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ingrediente } = $$props;
  if ($$props.ingrediente === void 0 && $$bindings.ingrediente && ingrediente !== void 0)
    $$bindings.ingrediente(ingrediente);
  $$result.css.add(css$2);
  return `<div class="${"meu-ingrediente-container svelte-1cuwr8k"}">${validate_component(Tag, "Tag").$$render($$result, { ativa: true }, {}, {
    default: () => {
      return `<button class="${"close svelte-1cuwr8k"}"></button>
    ${escape(ingrediente)}`;
    }
  })}

  <span class="${"remover svelte-1cuwr8k"}">Remover
  </span>
</div>`;
});
var MinhaLista_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".minha-lista.svelte-iwnszj.svelte-iwnszj{padding-bottom:1.625rem}.minha-lista.svelte-iwnszj>h2.svelte-iwnszj{font-size:1.5rem;color:var(--laranja);margin-bottom:1.5rem;line-height:2rem;font-weight:700}.meus-ingredientes.svelte-iwnszj.svelte-iwnszj{display:flex;flex-wrap:wrap;justify-content:center;gap:0.75rem 1.875rem}")();
const css$1 = {
  code: ".minha-lista.svelte-iwnszj.svelte-iwnszj{padding-bottom:1.625rem}.minha-lista.svelte-iwnszj>h2.svelte-iwnszj{font-size:1.5rem;color:var(--laranja);margin-bottom:1.5rem;line-height:2rem;font-weight:700}.meus-ingredientes.svelte-iwnszj.svelte-iwnszj{display:flex;flex-wrap:wrap;justify-content:center;gap:0.75rem 1.875rem}",
  map: null
};
const MinhaLista = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $minhaLista, $$unsubscribe_minhaLista;
  $$unsubscribe_minhaLista = subscribe(minhaLista, (value) => $minhaLista = value);
  $$result.css.add(css$1);
  $$unsubscribe_minhaLista();
  return `<section class="${"minha-lista svelte-iwnszj"}"><h2 class="${"svelte-iwnszj"}">Sua lista:</h2>

  <ul class="${"meus-ingredientes svelte-iwnszj"}">${each($minhaLista, (ingrediente) => {
    return `<li>${validate_component(MeuIngrediente, "MeuIngrediente").$$render($$result, { ingrediente }, {}, {})}
      </li>`;
  })}</ul>
</section>`;
});
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container-principal.svelte-1s7vhvj{display:flex;flex-direction:column;min-height:100vh}.estilo-principal.svelte-1s7vhvj{text-align:center;padding:0 5vw 3.375rem;flex:1}.minha-lista-container.svelte-1s7vhvj{margin-bottom:2rem}.divisoria.svelte-1s7vhvj{width:40vw;height:2px;background-color:var(--verde);margin:0 auto}")();
const css = {
  code: ".container-principal.svelte-1s7vhvj{display:flex;flex-direction:column;min-height:100vh}.estilo-principal.svelte-1s7vhvj{text-align:center;padding:0 5vw 3.375rem;flex:1}.minha-lista-container.svelte-1s7vhvj{margin-bottom:2rem}.divisoria.svelte-1s7vhvj{width:40vw;height:2px;background-color:var(--verde);margin:0 auto}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $minhaLista, $$unsubscribe_minhaLista;
  $$unsubscribe_minhaLista = subscribe(minhaLista, (value) => $minhaLista = value);
  $$result.css.add(css);
  $$unsubscribe_minhaLista();
  return `<div class="${"container-principal svelte-1s7vhvj"}">${validate_component(Cabecalho, "Cabecalho").$$render($$result, {}, {}, {})}
  <div class="${"estilo-principal svelte-1s7vhvj"}">${$minhaLista.length ? `
      <div class="${"minha-lista-container svelte-1s7vhvj"}">${validate_component(MinhaLista, "MinhaLista").$$render($$result, {}, {}, {})}
        <div class="${"divisoria svelte-1s7vhvj"}"></div></div>` : ``}
    ${slots.default ? slots.default({}) : ``}</div>
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export { _layout as default };
