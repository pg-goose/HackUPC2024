<script>
    import { navigate } from 'svelte-routing'; // Import navigate function for redirection
  
    let companyKey = '';
    let showCompanySection = true;
    let showUserDataSection = false;
    let showUserInterestsSection = false;
  
    let email = '';
    let firstName = '';
    let lastName = '';
    let secondLastName = '';
    let city = '';
    let password = '';
    let confirmPassword = '';
    let isCoquette = '';
  
    let hobbies = [
      'Sports',
      'Reading',
      'Traveling',
      'Cooking',
      'Music',
      'Movies',
      'Art',
      'Photography',
      'Dancing',
      'Board Games',
      'Programming',
      'Gardening',
      'Crafting',
      'Languages',
      'Volunteering',
      'Yoga',
      'Meditation',
      'Hiking',
      'Painting',
      'Theater',
      'Dance',
      'Culinary',
      'Astronomy',
      'Fashion',
      'Animals',
      'Ecology',
      'History',
      'Technology',
      'Makeup',
      'Debates'
    ];
  
    let selectedHobbies = [];
  
    async function handleContinueCompany() {
      // Add logic to verify company key
      // For now, just change the state to show the next section
      showCompanySection = false;
      showUserDataSection = true;
    }
  
    async function handleContinueUserData() {
      // Add logic to handle submission of user data form
      // Verify that passwords match
      if (password !== confirmPassword) {
        alert('Passwords do not match. Please re-enter your passwords.');
        return;
      }
      showUserDataSection = false;
      showUserInterestsSection = true;
    }
  
    async function handleSubmit() {
      // Add logic to handle registration form submission
      navigate('/home');
    }
  
    function handleSelectInterests() {
      // Add logic to handle selection of interests
      console.log('Selected interests:', selectedHobbies);
    }
  </script>
  
  <style>
    /* CSS styles */
  </style>
  
  {#if showCompanySection}
    <div class="container">
      <h2>Company Registration</h2>
      <div>
        <label for="companyKey">Company Key:</label>
        <input type="password" id="companyKey" placeholder="Company Key" bind:value={companyKey}>
        <button on:click={handleContinueCompany}>Continue</button>
      </div>
    </div>
  {/if}
  
  {#if showUserDataSection}
    <div class="container">
      <h2>User Registration - Personal Data</h2>
      <form on:submit|preventDefault={handleContinueUserData}>
        <div class="input-group">
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Email" bind:value={email}>
        </div>
        <div class="input-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" placeholder="First Name" bind:value={firstName}>
        </div>
        <div class="input-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" placeholder="Last Name" bind:value={lastName}>
        </div>
        <div class="input-group">
          <label for="secondLastName">Second Last Name:</label>
          <input type="text" id="secondLastName" placeholder="Second Last Name" bind:value={secondLastName}>
        </div>
        <div class="input-group">
          <label for="city">City of Residence:</label>
          <input type="text" id="city" placeholder="City of Residence" bind:value={city}>
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="Password" bind:value={password}>
        </div>
        <div class="input-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" placeholder="Confirm Password" bind:value={confirmPassword}>
        </div>
        <div class="input-group">
          <label for="isCoquette">Are you coquette?</label>
          <select id="isCoquette" bind:value={isCoquette}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  {/if}
  
  {#if showUserInterestsSection}
    <div class="container">
      <h2>User Registration - Interests</h2>
      <div>
        <p>You'll add your interests later when editing your profile.</p>
        {#each hobbies as hobby}
          <div>
            <label>
              <input type="checkbox" bind:group={selectedHobbies} value={hobby}>
              {hobby}
            </label>
          </div>
        {/each}
        <button on:click={handleSelectInterests}>Register</button>
      </div>
    </div>
  {/if}
  