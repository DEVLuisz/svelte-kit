<script lang="ts">
  import Tag from "./Tag.svelte";
  import { minhaLista } from "$lib/store/minhaLista";
  export let ingrediente: string;
  $: selecionado = $minhaLista.includes(ingrediente); ///Para Reatividade 

  function orClick() {
    if (!selecionado) {
      minhaLista.adicionarIngrediente(ingrediente);
    } else {
      minhaLista.removerIngrediente(ingrediente);
    }
  }
</script>

<button on:click={orClick}>
  <Tag ativa={selecionado}>{ingrediente}</Tag>
</button>

<style>
  button {
    cursor: pointer;
  }
</style>
