<script>
  import "../app.css";
  import { base } from "$app/paths";
</script>

<main class="container">
    <nav>
        <a href="{base}/"><h3 class="home">HOME</h3></a>
        <!-- <a href="{base}/about"><h3 class="about">about</h3></a> -->
    </nav>
  <slot />
</main>
