<script>
  let email = '';
  let password = '';

  async function handleSubmit() {
    // Realiza la solicitud POST para enviar los datos del formulario a la base de datos
    
    
      window.location.href = '/home';
  }
    
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrar horizontalmente */
    justify-content: center; /* Centrar verticalmente */
    height: 100vh; /* Altura completa de la ventana */
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrar horizontalmente */
    width: 300px;
  }

  input {
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: #0693e3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #007acc;
  }

  .register-link {
    margin-top: 10px;
    font-size: 14px;
    color: #0693e3;
    text-decoration: none;
  }

  .register-link:hover {
    text-decoration: underline;
  }
</style>

<div class="container">
  <h2>Iniciar sesión</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="email" placeholder="Correo electrónico" bind:value={email}>
    <input type="password" placeholder="Contraseña" bind:value={password}>
    <button type="submit">Iniciar sesión</button>
  </form>
  <a href="/register">¿No tienes cuenta? Regístrate aquí</a>
</div>
