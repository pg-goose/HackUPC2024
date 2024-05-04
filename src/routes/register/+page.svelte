<script>
    let email = '';
    let nombre = '';
    let apellido = '';
    let segundoApellido = '';
    let ciudadResidencia = '';
    let password = '';
  
    async function handleSubmit() {
      // Aquí puedes agregar la lógica para manejar el envío del formulario
      console.log('Correo electrónico:', email);
      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log('Segundo Apellido:', segundoApellido);
      console.log('Ciudad de Residencia:', ciudadResidencia);
      console.log('Contraseña:', password);
    }
  </script>
  
  <style>
    /* Estilos CSS */
  </style>
  
  <div class="container">
    <h2>Registro de Usuario</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="input-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" placeholder="Correo electrónico" bind:value={email}>
      </div>
      <div class="input-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" placeholder="Nombre" bind:value={nombre}>
      </div>
      <div class="input-group">
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" placeholder="Apellido" bind:value={apellido}>
      </div>
      <div class="input-group">
        <label for="segundoApellido">Segundo Apellido:</label>
        <input type="text" id="segundoApellido" placeholder="Segundo Apellido" bind:value={segundoApellido}>
      </div>
      <div class="input-group">
        <label for="ciudadResidencia">Ciudad de Residencia:</label>
        <input type="text" id="ciudadResidencia" placeholder="Ciudad de Residencia" bind:value={ciudadResidencia}>
      </div>
      <div class="input-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" placeholder="Contraseña" bind:value={password}>
      </div>
      <button type="submit">Registrarse</button>
    </form>
  </div>
  