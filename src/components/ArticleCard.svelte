<!-- src/components/ArticleCard.svelte -->
<script>
  export let article;
</script>

<div class="article-card">
  <h2>{article.title}</h2>
  <p>{article.description}</p>
  <!-- Si vous souhaitez afficher les coordonnées -->
  <p>Location: {article.location.coordinates.join(', ')}</p>
  <!-- Afficher les images si disponibles -->
  {#if article.photo.length > 0}
    <div class="photo-container">
      {#each article.photo as photo}
        <img src={photo} alt={`Photo of ${article.title}`} />
      {/each}
    </div>
  {:else}
    <p>No photos available</p>
  {/if}
</div>

<style>
  .article-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  .photo-container img {
    width: 100%; /* Ajustez la taille selon vos besoins */
    height: auto;
    margin-bottom: 5px;
  }
</style>
