<script>
  let email = '';
  let password = '';

  function handleSubmit() {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
  }
</script>

<div class="container">
  <h2>Iniciar sesión</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="email" placeholder="Correo electrónico" bind:value={email}>
    <input type="password" placeholder="Contraseña" bind:value={password}>
    <button type="submit">Iniciar sesión</button>
  </form>
</div>
