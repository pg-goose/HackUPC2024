<script>
  // You can change the city name and dates as needed
  let destinationCity = 'City Name';
  let departureDate = '05/01/2024';
  let arrivalDate = '05/10/2024';

  const users = [
    {
      name: 'User Name 1',
      photo: 'path/photo1.jpg',
      hobbies: ['Hobby 1', 'Hobby 2']
    },
    {
      name: 'User Name 2',
      photo: 'path/photo2.jpg',
      hobbies: ['Hobby 3', 'Hobby 4']
    },
    // You can add more users as needed
  ];
</script>

<div class="banner">
  <h2>{destinationCity}</h2>
  <p>Departure: {departureDate} - Arrival: {arrivalDate}</p>
</div>

<div class="users-container">
  {#each users as user}
    <div class="user-card">
      <div class="user-photo">
        <img src={user.photo} alt="profile avatar" >
      </div>
      <div class="user-name">{user.name}</div>
      <div class="user-hobbies">{user.hobbies.join(', ')}</div>
    </div>
  {/each}
</div>
