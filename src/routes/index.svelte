<script lang="ts">
  import Title from "$lib/components/Title.svelte";
  import Category from "$lib/components/Category.svelte";
  import categorias from "$lib/json/categorias.json";
  import { beforeNavigate } from "$app/navigation";
  import { minhaLista } from '$lib/store/minhaLista';
  import TagLink from "$lib/components/TagLink.svelte";
  $: listEmpty = $minhaLista.length === 0;
  
  beforeNavigate((navigation) => {
    if(listEmpty && navigation.to?.pathname === '/receitas') {
        navigation.cancel()
    }
  })
</script>

<svelte:head>
  <title>Svelte | Home</title>
</svelte:head>

<main>
  <Title tag="h1">Ingredientes</Title>

  <div class="info">
    <p>Selecione abaixo os Ingredientes que você deseja usar nessa refeição:</p>
    <p>*Atenção: Consideramos que você tenha em casa: sal, pimenta e água.</p>
  </div>

  <ul class="categorias">
    {#each categorias as categoria (categoria.nome)}
      <li>
        <Category {categoria} />
      </li>
    {/each}
  </ul>

  <div class="buscar-receitas">
    <TagLink href='/receitas' desabilitada={listEmpty}>Buscar Receitas!</TagLink>
  </div>
</main>

<style>
  .info {
    margin-bottom: 3.375rem;
  }

  .info > p {
    line-height: 2rem;
  }

  .categorias {
    margin-bottom: 4.6875rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  .buscar-receitas {
    display: flex;
    justify-content: center;
  }
</style>
