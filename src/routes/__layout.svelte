<script lang="ts">
  import "../app.css";
  import Cabecalho from "$lib/components/Cabecalho.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import MinhaLista from "$lib/components/MinhaLista.svelte";
  import { minhaLista } from "$lib/store/minhaLista";
</script>

<div class="container-principal">
  <Cabecalho />
  <div class="estilo-principal">
    {#if $minhaLista.length}
      <!--Se não tiver nada da lista, da false e vice-versa-->
      <div class="minha-lista-container">
        <MinhaLista />
        <div class="divisoria" />
      </div>
    {/if}
    <slot />
  </div>
  <Footer />
</div>

<style>
  .container-principal {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .estilo-principal {
    text-align: center;
    padding: 0 5vw 3.375rem;
    flex: 1;
  }

  .minha-lista-container {
    margin-bottom: 2rem;
  }

  .divisoria {
    width: 40vw;
    height: 2px;
    background-color: var(--verde);
    margin: 0 auto;
  }
</style>
