<script>
  // Puedes cambiar el nombre de la ciudad y las fechas según sea necesario
  let destinationCity = 'Nombre de la Ciudad';
  let departureDate = '01/05/2024';
  let arrivalDate = '10/05/2024';

  const users = [
    {
      name: 'Nombre Usuario 1',
      photo: 'ruta/foto1.jpg',
      hobbies: ['Hobby 1', 'Hobby 2']
    },
    {
      name: 'Nombre Usuario 2',
      photo: 'ruta/foto2.jpg',
      hobbies: ['Hobby 3', 'Hobby 4']
    },
    // Puedes agregar más usuarios según sea necesario
  ];
</script>

<div class="banner">
  <h2>{destinationCity}</h2>
  <p>Salida: {departureDate} - Llegada: {arrivalDate}</p>
</div>

<div class="users-container">
  {#each users as user}
    <div class="user-card">
      <div class="user-photo">
        <img src={user.photo} alt="Foto de perfil">
      </div>
      <div class="user-name">{user.name}</div>
      <div class="user-hobbies">{user.hobbies.join(', ')}</div>
    </div>
  {/each}
</div>
