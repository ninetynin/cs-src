<script>
  import "../app.css";
</script>

<main class="container">
  <nav>
    <a href="/" class="logo">CSE MIT MANIPAL SRC</a>
    <ul>
      <li><a href="/3rdsem">3rd Sem</a></li>
        <li><a href="/3rdsem/coa">COA</a></li>
          <li><a href="/3rdsem/coa/latest-slides">latest-slides</a></li>
          <li><a href="/3rdsem/coa/others">others</a></li>
        <li><a href="/3rdsem/dsa">DSA</a></li>
        <li><a href="/3rdsem/dsd">DSD</a></li>
        <li><a href="/3rdsem/oops">OOPS</a></li>
        <li><a href="/3rdsem/maths">MATHS</a></li>
      <!-- <li><a href="/4thsem">4th Sem</a></li>
      <li><a href="/5thsem">5th Sem</a></li>
      <li><a href="/6thsem">6th Sem</a></li>
      <li><a href="/7thsem">7th Sem</a></li>
      <li><a href="/8thsem">8th Sem</a></li> -->
    </ul>
  </nav>
  <slot> </slot>
</main>

  <footer class="footer">
    <p class="footerfont">Built with 💖 from section-c 😶‍🌫️</p>
  </footer>


<style>
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