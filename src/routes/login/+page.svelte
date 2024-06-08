<script lang="ts">
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';

  async function login() {
    // Exemple de fonction pour traiter la connexion
    // Ici tu pourrais appeler ton API backend pour vérifier les identifiants
    console.log('Login attempt with:', email, password);
    // Simule une connexion réussie et redirige
    // Remplace ceci par ton appel API et gestion d'état
    goto('/profile'); // Rediriger vers la page de profil après connexion
  }
</script>

<form on:submit|preventDefault={login}>
  <input type="email" bind:value={email} placeholder="Email">
  <input type="password" bind:value={password} placeholder="Password">
  <button type="submit">Login</button>
</form>
