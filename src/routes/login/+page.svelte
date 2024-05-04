<script lang='ts'>
  let email = "";
  let password = "";
  let hashPassword = "";

  async function hash(pass: string) {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const result = await crypto.subtle.digest(
      'SHA-256',
      encoder.encode(password)
    )
    hashPassword = decoder.decode(result)
  }
  $: hash(password)

  async function handleSubmit() {
    window.location.href = "/home";
  }
</script>

<div class="container">
  <h2>Iniciar sesión</h2>
  <form action="?/login" method="post">
    <input type="email" placeholder="Correo electrónico" bind:value={email} />
    <input type="password" placeholder="Contraseña" bind:value={password} />
    <input type="hidden" placeholder="pass hash" bind:value={hashPassword} />
    <button type="submit">Iniciar sesión</button>
  </form>
  <a class="register" href="/register">¿No tienes cuenta? Regístrate aquí</a>
</div>

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

  .register {
    margin-top: 10px;
    font-size: 14px;
    color: #0693e3;
    text-decoration: none;
  }

  .register:hover {
    text-decoration: underline;
  }
</style>
