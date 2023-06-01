import { c as create_ssr_component, e as escape, i as is_void, f as add_attribute, v as validate_component } from "./index-21e67821.js";
import { T as Tag } from "./Tag-6ed7df35.js";
var Title_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".titulo.svelte-eiayfa{color:var(--verde);text-transform:uppercase}.tag-h1.svelte-eiayfa{font-size:1.5rem;font-weight:700;line-height:2rem;margin-bottom:1rem}")();
const css$1 = {
  code: ".titulo.svelte-eiayfa{color:var(--verde);text-transform:uppercase}.tag-h1.svelte-eiayfa{font-size:1.5rem;font-weight:700;line-height:2rem;margin-bottom:1rem}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  $$result.css.add(css$1);
  return `${((tag$1) => {
    return tag$1 ? `<${tag} class="${"titulo tag-" + escape(tag) + " svelte-eiayfa"}">${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}
`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
var Card_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".card.svelte-uovng9{width:var(--largura, 300px);min-height:100%;background:var(--branco);box-shadow:4px 4px 10px 1px rgba(0, 0, 0, 0.1)}")();
const css = {
  code: ".card.svelte-uovng9{width:var(--largura, 300px);min-height:100%;background:var(--branco);box-shadow:4px 4px 10px 1px rgba(0, 0, 0, 0.1)}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"card svelte-uovng9"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const TagLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { desabilitada = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.desabilitada === void 0 && $$bindings.desabilitada && desabilitada !== void 0)
    $$bindings.desabilitada(desabilitada);
  return `<a${add_attribute("href", href, 0)}>${validate_component(Tag, "Tag").$$render($$result, { ativa: true, tamanho: "lg", desabilitada }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</a>`;
});
export { Card as C, Title as T, TagLink as a };
