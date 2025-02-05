<script>
    import Rating from '../Rating.svelte';
  
    let ratingItem1 = null;
    let ratingItem2 = null;
    let ratingItem3 = null;

    const ratingItems = [ratingItem1, ratingItem2, ratingItem3];
  
  </script>
  
  <div class="space-y-8 p-4">
    
    
    {#each [1, 2, 3] as n}

        <div class="flex">

            <h2 class="text-2xl font-semibold mb-2">Item {n}</h2>
    
            <Rating bind:rating={ratingItems[n-1]}/>
        
            {#if ratingItems[n-1] !== null}

                <p class="rating mt-2">{ratingItems[n-1]} star{ratingItems[n-1] > 1 ? 's' : ''}</p>

            {:else}

                <p class="rating mt-2 text-gray-600">No rating</p>

            {/if}

        </div>

    {/each}
 
  </div>
  
  