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
      console.log(await response.json());
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

<style>
  /* Puedes agregar estilos adicionales según tus preferencias */
</style>

<div class="container">
  <h1>Añadir Destino</h1>
  <form on:submit|preventDefault={createViaje} method="POST">
    <div class="input-group">
      <label for="destination">Ciudad de Destino:</label>
      <input type="text" id="destination" bind:value={destino}>
    </div>
    <div class="input-group">
      <label for="departure-date">Fecha de Salida:</label>
      <input type="datetime-local" id="departure-date" bind:value={fechaInicio}>
    </div>
    <div class="input-group">
      <label for="arrival-date">Fecha de Llegada:</label>
      <input type="datetime-local" id="arrival-date" bind:value={fechaFin}>
    </div>
    <button type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 8.354a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708 0l-.708-.708a.5.5 0 0 1 0-.708L9.793 8 6.438 4.646a.5.5 0 0 1 0-.708l.708-.708a.5.5 0 0 1 .708 0l3.5 3.5z"/>
        <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </button>
  </form>
</div>
