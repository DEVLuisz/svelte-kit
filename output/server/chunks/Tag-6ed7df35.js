import { n as noop, d as safe_not_equal, c as create_ssr_component, e as escape } from "./index-21e67821.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set2(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update: update2, subscribe: subscribe2 };
}
const { subscribe, update, set } = writable([]);
const minhaLista = {
  subscribe,
  set,
  adicionarIngrediente(ingrediente) {
    update((valorAtual) => [...valorAtual, ingrediente]);
  },
  removerIngrediente(ingrediente) {
    update((valorAtual) => valorAtual.filter((item) => item !== ingrediente));
  }
};
var Tag_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".tag.svelte-nj3up1{height:48px;border-radius:8px;padding:1rem;text-align:center;color:var(--cor-texto-principal);background-color:var(--cinza);display:flex;justify-content:center;align-items:center;transition:0.4s}.ativa.svelte-nj3up1{color:var(--branco);background-color:var(--laranja)}.lg.svelte-nj3up1{font-size:1.125rem;padding:1rem 1.5rem}.desabilitada.svelte-nj3up1{opacity:0.7;cursor:default}")();
const css = {
  code: ".tag.svelte-nj3up1{height:48px;border-radius:8px;padding:1rem;text-align:center;color:var(--cor-texto-principal);background-color:var(--cinza);display:flex;justify-content:center;align-items:center;transition:0.4s}.ativa.svelte-nj3up1{color:var(--branco);background-color:var(--laranja)}.lg.svelte-nj3up1{font-size:1.125rem;padding:1rem 1.5rem}.desabilitada.svelte-nj3up1{opacity:0.7;cursor:default}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ativa = false } = $$props;
  let { tamanho = "md" } = $$props;
  let { desabilitada = false } = $$props;
  if ($$props.ativa === void 0 && $$bindings.ativa && ativa !== void 0)
    $$bindings.ativa(ativa);
  if ($$props.tamanho === void 0 && $$bindings.tamanho && tamanho !== void 0)
    $$bindings.tamanho(tamanho);
  if ($$props.desabilitada === void 0 && $$bindings.desabilitada && desabilitada !== void 0)
    $$bindings.desabilitada(desabilitada);
  $$result.css.add(css);
  return `<div class="${[
    "tag " + escape(tamanho) + " svelte-nj3up1",
    (ativa ? "ativa" : "") + " " + (desabilitada ? "desabilitada" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export { Tag as T, minhaLista as m };
