<script>
    import { base } from '$app/paths';
    export let url = "";
    export let text = "";
</script>

<div>
    <a href={url} >
        <img src="{base}/docx.png" class="logo coa" alt="COA PDF" /> 
    </a>
    <p class="text">{text}</p>
</div>

<style> 
    .logo.coa:hover {
      filter: drop-shadow(0 0 2em #E2574C);
    }
</style>