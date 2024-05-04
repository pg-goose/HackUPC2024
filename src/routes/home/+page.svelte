<script lang='ts'>
  import { redirect } from "@sveltejs/kit";
  let destino: String
  let fechaInicio: Date
  let fechaFin: Date

  async function createViaje(event: SubmitEvent) {
    //let fechaInicio2 = new Date(fechaInicio)
    //let fechaFin2 = new Date(fechaFin)
    try {
      console.log(typeof(fechaInicio));
      const response = await fetch("/home", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({destino, fechaInicio, fechaFin})
        });
      if (!response.ok) {
        console.error("Could not log in")
        throw new Error(`HTTP status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.error("Error in submit: ", error)
      return
    }
    window.location.href = '/home';
  }


</script>

<div class="newtrip">
  <h1>Añadir Destino</h1>
  <form on:submit|preventDefault={createViaje} method="POST">
    <div class="input-group">
      <label for="destination">Ciudad de Destino:</label>
      <input type="text" id="destination" bind:value={destino}>
    </div>
    <div class="input-group">
      <label for="departure-date">Fecha de Salida:</label>
      <input type="date" id="departure-date" bind:value={fechaInicio}>
    </div>
    <div class="input-group">
      <label for="arrival-date">Fecha de Llegada:</label>
      <input type="date" id="arrival-date" bind:value={fechaFin}>
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



<style>
  /* Puedes agregar estilos adicionales según tus preferencias */
  /* Estilos globales */
  :global(html, body) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden; /* Evitar desbordamiento horizontal */
}
/* Estilos para el contenedor principal */
.newtrip {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar horizontalmente */
  background-color: #0693e3; /* Color de fondo azul */
  width: 100%; /* Ocupar el ancho total de la pantalla */
  padding: 20px; /* Espaciado interno */
  margin: 0; /* Eliminar márgenes */
}

form {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar horizontalmente */
  width: 100%; /* Ocupar el ancho total del contenedor */
  max-width: 500px; /* Ancho máximo para dispositivos más grandes */
}

.input-group {
  margin-bottom: 10px;
  width: 100%; /* Ocupar el ancho total del formulario */
}

label {
  margin-bottom: 5px;
  color: white; /* Color de texto blanco */
}

input[type="text"],
input[type="date"] {
  padding: 8px;
  width: 100%; /* Ocupar el ancho total del grupo de entrada */
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
  width: 95%; /* Casi el ancho total del contenedor */
  margin: 10px 0; /* Espaciado superior e inferior */
}

button:hover {
  background-color: #007acc; /* Color de fondo azul más oscuro al pasar el mouse */
  color: white; /* Cambiar el texto a blanco al pasar el mouse */
}

/* Estilos para el menú de viajes */
.trips-menu {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar horizontalmente */
  margin-top: 20px; /* Espacio superior */
  width: 100%; /* Ocupar el ancho total de la pantalla */
  
}

.trip-bubble {
  width: 95%; /* Casi el ancho total de la pantalla */
  background-color: white; /* Fondo blanco */
  border-radius: 20px; /* Bordes más redondeados */
  margin-top: 10px; /* Espacio entre burbujas */
  display: flex;
  justify-content: space-around; /* Distribuir contenido equitativamente */
  align-items: center; /* Centrar contenido horizontalmente */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Sombra ligera */
  padding: 10px; /* Espaciado interno */
}

.trip-info {
  margin: 0; /* Eliminar márgenes por defecto */
  color: #0693e3; /* Texto azul */
  font-size: 1rem; /* Tamaño de fuente estándar */
}
.trip-bubble:hover .trip-info {
  color: white; /* Cambiar el texto a blanco al pasar el mouse sobre el botón */
}

</style>
