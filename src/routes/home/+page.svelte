<script>
  let destinationCity = '';
  let departureDate = '';
  let arrivalDate = '';

  function handleSubmit() {
    // Aquí podrías agregar la lógica para manejar el envío del formulario
    console.log('Destination City:', destinationCity);
    console.log('Departure Date:', departureDate);
    console.log('Arrival Date:', arrivalDate);
  }
</script>

<style>
  /* Puedes agregar estilos adicionales según tus preferencias */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrar horizontalmente */
    background-color: #0693e3; /* Color de fondo azul */
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrar horizontalmente */
    width: 300px;
  }

  .input-group {
    margin-bottom: 10px;
  }

  label {
    margin-bottom: 5px;
    color: white; /* Color de texto blanco */
  }

  input[type="text"],
  input[type="date"] {
    padding: 8px;
    width: 250px; /* Ajustar el ancho de los campos de entrada */
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: white; /* Fondo blanco para el botón */
    color: #0693e3; /* Texto azul */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #007acc; /* Color de fondo azul más oscuro al pasar el mouse */
    color: white; /* Texto blanco al pasar el mouse */
  }

  /* Estilos para el menú de viajes */
  .trips-menu {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrar horizontalmente */
    margin-top: 20px; /* Espacio superior */
  }

  .trip-bubble {
    width: 300px;
    height: 100px;
    background-color: white; /* Fondo blanco */
    border-radius: 10px;
    margin-top: 10px; /* Espacio entre burbujas */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centrar contenido verticalmente */
    align-items: center; /* Centrar contenido horizontalmente */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Sombra ligera */
  }

  .trip-info {
    text-align: center;
    color: #0693e3; /* Texto azul */
  }
</style>

<div class="container">
  <h1>Add Trip</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-group">
      <label for="destination">Destination:</label>
      <input type="text" id="destination" placeholder="Destination" bind:value={destinationCity}>
    </div>
    <div class="input-group">
      <label for="departure-date">Departure Date:</label>
      <input type="date" id="departure-date" bind:value={departureDate}>
    </div>
    <div class="input-group">
      <label for="arrival-date">Arrival Date:</label>
      <input type="date" id="arrival-date" bind:value={arrivalDate}>
    </div>
    <button type="submit">Add Trip</button>
  </form>
</div>

<!-- Menú de viajes -->
<div class="trips-menu">
  <button class="trip-bubble">
    <p class="trip-info">New York</p>
    <p class="trip-info">2024-05-01</p>
    <p class="trip-info">2024-05-10</p>
  </button>

  <button class="trip-bubble">
    <p class="trip-info">Paris</p>
    <p class="trip-info">2024-06-01</p>
    <p class="trip-info">2024-06-10</p>
  </button>

  <button class="trip-bubble">
    <p class="trip-info">Tokyo</p>
    <p class="trip-info">2024-07-01</p>
    <p class="trip-info">2024-07-10</p>
  </button>
</div>
