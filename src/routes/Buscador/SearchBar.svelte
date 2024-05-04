<!-- SearchBar.svelte -->
<script>
  import { writable } from 'svelte/store';

  let inputValue = '';
  let results = writable([]);

  $: if (inputValue.length > 0) {
    searchCities();
  } else {
    results.set([]); // Reiniciar los resultados si la barra de búsqueda está vacía
  }

  async function searchCities() {
    try {
      const response = await fetch(`http://localhost:3000/buscar-ciudad?ciudad=${inputValue}`);
      var data = await response.json();

      const cities = data.cities;
      
      results.set(cities);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  function handleCityClick(city) {
    inputValue = city;
  }
</script>

<div class="search-container">
  <input type="text" bind:value={inputValue} placeholder="Buscar ciudad..." />

  <!-- Svelte actualizará automáticamente esta parte cuando $results cambie -->
  {#if $results.length > 0}
    <ul>
      {#each $results as city}
        <li><button on:click={() => handleCityClick(city)}>{city}</button></li>
      {/each}
    </ul>
  {:else}
    <p>No hay resultados</p>
  {/if}
</div>



<style>
  /* Estilos CSS */
</style>
