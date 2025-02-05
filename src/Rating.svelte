<script>

  export let rating = null;
  
  export let ratingOnHover = 0;

  function handleMouseEnter(n) {
    if (rating === null) {
      ratingOnHover = n;
    }
  }

  function handleMouseLeave() {
    if (rating === null) {
      ratingOnHover = 0;
    }
  }

  function handleClick(n) {
    if (rating === null) {
      rating = n;
    }
  }

  function getStarClass(n) {
    return n <= (rating !== null ? rating : ratingOnHover)
      ? 'text-yellow-500'  
      : 'text-gray-400';   
  }
</script>


<div class="flex">
  {#each [1, 2, 3, 4, 5] as star}
    <span
      on:mouseleave={handleMouseLeave}
      on:mouseenter={() => handleMouseEnter(star)}
      on:click={() => handleClick(star)}
      class="star cursor-pointer text-3xl select-none {getStarClass(star)}">
      ★
    </span>
  {/each}
</div>