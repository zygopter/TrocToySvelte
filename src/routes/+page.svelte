<!-- src/routes/+page.svelte -->
<script>
  import ArticleCard from '../components/ArticleCard.svelte';
  import { onMount } from 'svelte';


  let articles = [];

  onMount(async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/articles`);
    if (response.ok) {
      articles = await response.json();
    } else {
      console.error('Failed to fetch articles:', response.status);
    }
  });
</script>

<div>
  <h1>Welcome to TrocToy!</h1>
  {#each articles as article}
    <a href={`/articles/${article._id}`}>
      <ArticleCard {article} />
    </a>
  {/each}
</div>
