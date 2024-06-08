<script>
  function goBack() {
    window.history.back();
  }
</script>

<button on:click={goBack} class="back-button">
  ← Retour
</button>

<style>
  .back-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
  }
</style>
