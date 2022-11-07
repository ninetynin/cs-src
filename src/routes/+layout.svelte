<script>
  import "../app.css";
</script>

<main class="container">
  <slot />
  
  <footer class="footer">
    <p class="footerfont">Built with love from section-c💖😶‍🌫️</p>
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
</main>
