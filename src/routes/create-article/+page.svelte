<script>
  import { goto } from '$app/navigation';
  import { createArticle } from '$lib/services/articleService';
  import BackButton from '../../components/BackButton.svelte';

  let title = '';
  let description = '';
  let photos = []; // Gérer les fichiers de photos peut nécessiter un peu plus de logique

  async function handleSubmit() {
    const response = await createArticle(title, description, photos);
    console.log('Sending data:', response);

    if (response.ok) {
      goto('/'); // Rediriger vers la page d'accueil ou vers l'article créé
    } else {
      console.error('Failed to create article');
    }
  }
</script>

<BackButton />

<form on:submit|preventDefault={handleSubmit}>
  <label for="title">Title:</label>
  <input id="title" type="text" bind:value={title} required>

  <label for="description">Description:</label>
  <textarea id="description" bind:value={description} required></textarea>

  <label for="photos">Photos:</label>
  <input id="photos" type="file" multiple bind:files={photos}>

  <button type="submit">Create Article</button>
</form>
