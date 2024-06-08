<script lang="ts">
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';

  async function signup() {
    // Exemple de fonction pour traiter l'inscription
    console.log('Signup attempt with:', email, password);
    // Simule une inscription réussie et redirige
    goto('/login'); // Rediriger vers la page de connexion après inscription
  }
</script>

<form on:submit|preventDefault={signup}>
  <input type="email" bind:value={email} placeholder="Email">
  <input type="password" bind:value={password} placeholder="Password">
  <button type="submit">Signup</button>
</form>
