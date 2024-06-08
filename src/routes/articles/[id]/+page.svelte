<script lang="ts">
  import BackButton from '../../../components/BackButton.svelte';
  export let data;

  // Utilisez un reactive statement pour réagir aux changements de `data`.
  $: article = data ? data.props.article : undefined;

  // Log pour voir ce que contient `article` après les changements de `data`.
  $: if (article) {
    console.log("Article received in component:", article);
  }
</script>

<BackButton />

{#if article}
  <article>
    <h1>{article.title}</h1>
    <p>{article.description}</p>
  </article>
{:else}
  <p>Chargement de l'article...</p>
{/if}

