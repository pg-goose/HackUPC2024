<script>
  let destinationCity = '';
  let departureDate = '';
  let arrivalDate = '';
</script>

<div class="container">
  <h1>Añadir Destino</h1>
  <form action="?/register" method="POST">
    <div class="input-group">
      <label for="destination">Ciudad de Destino:</label>
      <input type="text" id="destination" bind:value={destinationCity}>
    </div>
    <div class="input-group">
      <label for="departure-date">Fecha de Salida:</label>
      <input type="date" id="departure-date" bind:value={departureDate}>
    </div>
    <div class="input-group">
      <label for="arrival-date">Fecha de Llegada:</label>
      <input type="date" id="arrival-date" bind:value={arrivalDate}>
    </div>
    <button type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 8.354a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708 0l-.708-.708a.5.5 0 0 1 0-.708L9.793 8 6.438 4.646a.5.5 0 0 1 0-.708l.708-.708a.5.5 0 0 1 .708 0l3.5 3.5z"/>
        <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </button>
  </form>
</div>
