<script lang="ts">
  import type IReceita from "$lib/Interfaces/IReceita";
  import Card from "./Card.svelte";
  export let receita: IReceita;
</script>

<Card --largura="280px">
  <img src={`/imagens/receitas/${receita.imagem}`} alt={receita.nome} class="receita-img" />

  <div class="receita-info">
    <h3 class="receita-nome">{receita.nome}</h3>
    {#if receita.quantidade}
      <p class="receita-quantidade" style="white-space: pre-line">{receita.quantidade}</p>
      <hr />
    {/if}
        <h4 class="receita-modo">Modo de Preparo:</h4>
    <p class="receita-descricao">{receita.modo}</p>
  </div>
</Card>

<style>
  .receita-img {
    width: 100%;
    height: 150px;
  }

  .receita-nome {
    font-size: 1.125rem;
  }

  .receita-info {
    padding: 0.75rem 0.875rem;
  }

  .receita-quantidade {
    font-size: 0.850rem;
    margin-bottom: 0.5rem;
  }

  .receita-modo {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .receita-descricao {
    font-size: 0.875rem;
    line-height: 1.5;
    white-space: pre-line;
  }
</style>
