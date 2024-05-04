<script>
    import { navigate } from 'svelte-routing'; // Importamos la función navigate para la redirección
  
    let empresaKey = '';
    let showEmpresaSection = true;
    let showDatosUsuarioSection = false;
    let showGustosUsuarioSection = false;
  
    let email = '';
    let nombre = '';
    let apellido = '';
    let segundoApellido = '';
    let ciudadResidencia = '';
    let password = '';
    let confirmPassword = '';
  
    let hobbies = [
      'Deporte',
      'Lectura',
      'Viajar',
      'Cocinar',
      'Música',
      'Cine',
      'Arte',
      'Fotografía',
      'Bailar',
      'Juegos de mesa',
      'Programación',
      'Jardinería',
      'Manualidades',
      'Idiomas',
      'Voluntariado',
      'Yoga',
      'Meditación',
      'Senderismo',
      'Pintura',
      'Teatro',
      'Baile',
      'Gastronomía',
      'Astronomía',
      'Moda',
      'Animales',
      'Ecología',
      'Historia',
      'Tecnología',
      'Maquillaje',
      'Debates'
    ];
  
    let selectedHobbies = [];
  
    async function handleContinueEmpresa() {
      // Agregar la lógica para verificar la clave de la empresa
      showEmpresaSection = false;
      showDatosUsuarioSection = true;
    }
  
    async function handleContinueDatosUsuario() {
      // Agregar la lógica para manejar el envío del formulario de datos de usuario
      // Verificar que las contraseñas coincidan
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, vuelve a ingresarlas.');
        return;
      }
      showDatosUsuarioSection = false;
      showGustosUsuarioSection = true;
    }
  
    async function handleSubmit() {
      // Agregar la lógica para manejar el envío del formulario de registro
      navigate('/home');
    }
  
    function handleSelectHobbies() {
      // Agregar la lógica para manejar la selección de aficiones
      console.log('Aficiones seleccionadas:', selectedHobbies);
    }
  </script>
  
  <style>
    /* Estilos CSS */
  </style>
  
  {#if showEmpresaSection}
    <div class="container">
      <h2>Registro de Empresa</h2>
      <div>
        <label for="empresaKey">Clave de Empresa:</label>
        <input type="password" id="empresaKey" placeholder="Clave de Empresa" bind:value={empresaKey}>
        <button on:click={handleContinueEmpresa}>Continuar</button>
      </div>
    </div>
  {/if}
  
  {#if showDatosUsuarioSection}
    <div class="container">
      <h2>Registro de Usuario - Datos Personales</h2>
      <form on:submit|preventDefault={handleContinueDatosUsuario}>
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
        <div class="input-group">
          <label for="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" placeholder="Confirmar Contraseña" bind:value={confirmPassword}>
        </div>
        <button type="submit">Continuar</button>
      </form>
    </div>
  {/if}
  
  {#if showGustosUsuarioSection}
    <div class="container">
      <h2>Registro de Usuario - Gustos</h2>
      <div>
        <p>Añadirás tus aficiones más tarde al editar tu perfil.</p>
        {#each hobbies as hobby}
          <div>
            <label>
              <input type="checkbox" bind:group={selectedHobbies} value={hobby}>
              {hobby}
            </label>
          </div>
        {/each}
        <button on:click={handleSelectHobbies}>Registrarse</button>
      </div>
    </div>
  {/if}
  