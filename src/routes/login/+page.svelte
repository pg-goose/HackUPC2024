<script>
  let email = "";
  let password = "";

  async function handleSubmit() {
    // Perform the POST request to send the form data to the database
    window.location.href = "/home";
  }
</script>

<div class="container">
  <h2>Log In</h2>
  <form action="?/login" method="post">
    <input type="email" placeholder="Email" bind:value={email} />
    <input type="password" placeholder="Password" bind:value={password} />
    <button type="submit">Log In</button>
  </form>
  <a href="/register">Don't have an account? Sign up here</a>
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
