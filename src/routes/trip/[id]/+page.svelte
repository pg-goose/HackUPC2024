<script>
  let destinationCity = 'Barcelona';
  let departureDate = '2024-05-01';
  let returnDate = '2024-05-10';

  const users = [
    {
      name: 'Jane Doe',
      photo: '/static/coquette.png', // Ruta relativa a la carpeta pública
      hobbies: ['Reading', 'Traveling']
    },
    {
      name: 'John Smith',
      photo: '/static/coquette.png', // Ruta relativa a la carpeta pública
      hobbies: ['Photography', 'Cooking']
    },
    // Add more users as needed
  ];
</script>


<div class="banner">
  <h2>{destinationCity}</h2>
  <p>Departure: {departureDate} | Return: {returnDate}</p>
</div>

<div class="users-container">
  {#each users as user}
  <div class="user-card">
    <img class="user-photo" src={user.photo} alt={user.name + "'s profile avatar"} />
    <div class="user-info">
      <div class="user-name">{user.name}</div>
      <div class="user-hobbies">{user.hobbies.join(', ')}</div>
    </div>
  </div>
{/each}
</div>

<style>
  .banner {
    background-color: #0693e3;
    color: white;
    padding: 20px;
    text-align: center;
  }

  .users-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }

  .user-card {
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    width: 200px;
    text-align: center;
  }

  .user-photo {
    width: 100%;
    height: auto;
  }

  .user-info {
    padding: 10px;
  }

  .user-name {
    font-weight: bold;
  }

  .user-hobbies {
    color: #555;
    font-size: 0.9em;
  }
</style>
