<script>
  import Navbar from '../components/Navbar.svelte';
</script>

<div class="app-container">
  <slot></slot> <!-- Ce slot représente le contenu des différentes pages -->
  <Navbar />
</div>

<style>
  .app-container {
    padding-bottom: 60px;
  }
</style>
