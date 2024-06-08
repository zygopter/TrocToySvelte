<script lang="ts">
  import { user } from '$lib/stores/userStore';
  import type { User } from '$lib/types/user';
  import { goto } from '$app/navigation';

  let isAuthenticated = false;
  let userInfo: User | null = null;

  $: if ($user) {
    isAuthenticated = true;
    userInfo = $user;
  }

  function handleLogin() {
    goto('/login');
  }

  function handleSignup() {
    goto('/signup');
  }
</script>

{#if isAuthenticated && userInfo}
  <div>
    <h1>Profil de {userInfo.name}</h1>
    <img src={userInfo.photo} alt={`Photo de profil de ${userInfo.name}`}>
    <p>Location: {userInfo.location}</p>
  </div>
{:else}
  <div>
    <h1>Connectez-vous</h1>
    <button on:click={handleLogin}>Se connecter</button>
    <button on:click={handleSignup}>Créer un compte</button>
  </div>
{/if}
