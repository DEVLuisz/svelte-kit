<script lang="ts">
  import Receita from "$lib/components/Receita.svelte";
  import TagLink from "$lib/components/TagLink.svelte";
  import Title from "$lib/components/Title.svelte";
  import receitas from '$lib/json/receitas.json';
  import { minhaLista } from '$lib/store/minhaLista';

  $: receitasFiltradas = receitas.filter((receita) =>(
    receita.ingredientes.every((ingrediente) =>(
        $minhaLista.includes(ingrediente)
    ))
  ));
</script>

<svelte:head>
  <title>Svelte | Receitas</title>
</svelte:head>

<main>
  <Title tag="h1">Receitas!</Title>

  <div class="info">
    <p class="verde">Resultados Encontrados: {receitasFiltradas.length}</p>

    {#if receitasFiltradas.length}
    <p>
        Veja as opções de receitas que encontramos com os ingredientes que você
        tem por ai!
      </p>
      {:else}
      <p>
        Não encontramos nenhuma receita com os seus ingredientes 😫!
      </p>
    {/if}
  </div>

  {#if receitasFiltradas.length}
  <ul class="receitas">
    {#each receitasFiltradas as receita(receita.nome)}
    <li>
        <Receita {receita}/>
    </li>
    {/each}
  </ul>
  {/if}

  <div class="editar-lista">
    <TagLink href='/'>Editar Lista</TagLink>
  </div>
</main>

<style>
  .info {
    margin-bottom: 3.375rem;
  }

  .info > p {
    line-height: 2rem;
  }

  .info > p.verde {
    color: var(--verde);
  }

  .receitas {
    text-align: start;
    margin-bottom: 3.75rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  .receitas li {
    list-style: none;
  }

  .editar-lista {
        display: flex;
        justify-content: center;
    }
</style>
