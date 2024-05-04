<script>
  let destinationCity = '';
  let departureDate = '';
  let arrivalDate = '';

  function handleDestinationChange(event) {
    destinationCity = event.target.value;
  }

  function handleDepartureDateChange(event) {
    departureDate = event.target.value;
  }

  function handleArrivalDateChange(event) {
    arrivalDate = event.target.value;
  }

  function handleSubmit() {
    // Aquí podrías agregar la lógica para manejar el envío del formulario
    console.log('Ciudad de destino:', destinationCity);
    console.log('Fecha de salida:', departureDate);
    console.log('Fecha de llegada:', arrivalDate);
  }
</script>

<style>
  /* Puedes agregar estilos adicionales según tus preferencias */
</style>

<div class="container">
  <h1>Añadir Destino</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-group">
      <label for="destination">Ciudad de Destino:</label>
      <input type="text" id="destination" bind:value={destinationCity} on:input={handleDestinationChange}>
    </div>
    <div class="input-group">
      <label for="departure-date">Fecha de Salida:</label>
      <input type="date" id="departure-date" bind:value={departureDate} on:change={handleDepartureDateChange}>
    </div>
    <div class="input-group">
      <label for="arrival-date">Fecha de Llegada:</label>
      <input type="date" id="arrival-date" bind:value={arrivalDate} on:change={handleArrivalDateChange}>
    </div>
    <button type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 8.354a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708 0l-.708-.708a.5.5 0 0 1 0-.708L9.793 8 6.438 4.646a.5.5 0 0 1 0-.708l.708-.708a.5.5 0 0 1 .708 0l3.5 3.5z"/>
        <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </button>
  </form>
</div>
