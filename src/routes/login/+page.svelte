<script lang='ts'>
    import { redirect } from "@sveltejs/kit";

  let email = "";
  let password = "";
  let hashPassword = "";

  async function hash() {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const result = await crypto.subtle.digest(
      'SHA-256',
      encoder.encode(password)
    )
    hashPassword = decoder.decode(result)
  }
  $: hash()

  async function login(event: SubmitEvent) {
    try {
      const response = await fetch("/login", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({email, hashPassword})
        });
        if (!response.ok) {
        console.log(response);
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

<div class="container">
  <h2>Iniciar sesión</h2>
  <form on:submit|preventDefault={login} method="post">
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
    align-items: center; /* Horizontal center */
    justify-content: center; /* Vertical center */
    height: 100vh; /* Full height of viewport */
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center; /* Horizontal center */
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
