<script>
  import Rating from './Rating.svelte';

  let ratingItem1 = null;
  let ratingItem2 = null;
  let ratingItem3 = null;

</script>

<div class="space-y-8 p-4">
  <!-- Item 1 -->
  <div>
    <h2 class="text-2xl font-semibold mb-2">Item 1</h2>

    <Rating bind:rating={ratingItem1} />

    {#if ratingItem1 !== null}
      <p class="mt-2">{ratingItem1} star{ratingItem1 > 1 ? 's' : ''}</p>
    {:else}
      <p class="mt-2 text-gray-600">No rating</p>
    {/if}
    
  </div>

  <!-- Item 2 -->
  <div>
    <h2 class="text-2xl font-semibold mb-2">Item 2</h2>

    <Rating bind:rating={ratingItem2} />

    {#if ratingItem2 !== null}
      <p class="mt-2">{ratingItem2} star{ratingItem2 > 1 ? 's' : ''}</p>
    {:else}
      <p class="mt-2 text-gray-600">No rating</p>
    {/if}

  </div>

  <!-- Item 3 -->
  <div>
    <h2 class="text-2xl font-semibold mb-2">Item 3</h2>

    <Rating bind:rating={ratingItem3} />

    {#if ratingItem3 !== null}
      <p class="mt-2">{ratingItem3} star{ratingItem3 > 1 ? 's' : ''}</p>
    {:else}
      <p class="mt-2 text-gray-600">No rating</p>
    {/if}

  </div>
</div>

