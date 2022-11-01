<script>
  import Greet from "$lib/Greet.svelte";
</script>

<h1>CS-src</h1>

<div class="row" style="text-align: center">
   <div class="COA">
      <a href="" >
        <img src="./yellow-folder.png" class="logo coa" alt="COA" /> 
      </a>
      <p>COA</p>
   </div>
   <div class="DSA">
      <a href="">
        <img src="./pink-folder.png" class="logo dsa" alt="DSA" /> 
      </a>
      <p>DSA</p>
    </div>
    <div class="DSD">
      <a href="">
        <img src="./liviolet-folder.png" class="logo dsd" alt="DSD" /> 
      </a>
      <p>DSD</p>
      </div> 
    <div class="OOPS">
      <a href="" >
        <img src="./idkgreen-folder.png" class="logo oops" alt="OOPS" /> 
      </a>
      <p>OOPS</p>
      </div>
    <div class="MATHS">
      <a href="">
        <img src="./maybeblue-folder.png" class="logo maths" alt="maths" /> 
      </a>
      <p>MATHS</p>
      </div>
</div>

<footer class="footer">
  <p class="footerfont">OSF Prototype</p>
</footer>

<style>

  .logo.coa:hover {
    filter: drop-shadow(0 0 2em #F0EEA3);
  }

  .logo.dsa:hover {
    filter: drop-shadow(0 0 2em #FCAEBB);
  }

  .logo.dsd:hover {
    filter: drop-shadow(0 0 2em #F3B2DA);
  }
  
  .logo.maths:hover {
    filter: drop-shadow(0 0 2em #98E4D8);
  }

  .logo.oops:hover {
    filter: drop-shadow(0 0 2em #6DCFEA);
  }

  .row {
    /* center it from top and bottom */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .footerfont {
    font-size: 0.8rem;
    font-weight: 400;
    color: #6c6c6d;
  }

  /*set the footer to bottom of the screen */
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
</style>
