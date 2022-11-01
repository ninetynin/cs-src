<script>
  import Greet from "$lib/Greet.svelte";
</script>

<h1>CS-src</h1>

<div class="row" style="text-align: center">
   <div class="COA">
      <a href="" >
        <img src="./yellow-folder.png" class="logo svelte" alt="COA" /> 
      </a>
      <p>COA</p>
   </div>
   <div class="DSA">
      <a href="">
        <img src="./yellow-folder.png" class="logo svelte" alt="COA" /> 
      </a>
      <p>DSA</p>
    </div>
    <div class="DSD">
      <a href="">
        <img src="./yellow-folder.png" class="logo svelte" alt="COA" /> 
      </a>
      <p>DSD</p>
      </div> 
    <div class="OOPS">
      <a href="" >
        <img src="./yellow-folder.png" class="logo svelte" alt="COA" /> 
      </a>
      <p>OOPS</p>
      </div>
    <div class="MATHS">
      <a href="">
        <img src="./yellow-folder.png" class="logo svelte" alt="COA" /> 
      </a>
      <p>MATHS</p>
      </div>
</div>

<style>
  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #747bff);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00);
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
