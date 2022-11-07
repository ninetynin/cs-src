<script>
    import Ppt from "$lib/Ppt.svelte";
    let ppt1 = "https://learnermanipal.sharepoint.com/sites/ManipalOSF/_layouts/15/Doc.aspx?sourcedoc=%7B72EB1CE7-56FB-4110-A2FB-65DCD79893EE%7D&file=Verilog%20for%20sequential%20circuits.pptx&action=edit&mobileredirect=true&CT=1667829092049&OR=ItemsView";
    let ppt2 = "https://learnermanipal.sharepoint.com/:p:/r/sites/ManipalOSF/_layouts/15/Doc.aspx?sourcedoc=%7B73A61C55-B074-499C-80F5-572F241081BB%7D&file=Verilog-Combinational%20ciruits.pptx&action=edit&mobileredirect=true";
</script>

   <div class="linkfit">
    <div class="minidiv"><Ppt url={ppt1} text="Verilog-Sequential" /></div>
    <div class="minidiv"><Ppt url={ppt2} text="Verilog-Combinational" /></div>
  </div>

<style>
    .linkfit {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .minidiv {
        margin: 10px;
    }
</style>