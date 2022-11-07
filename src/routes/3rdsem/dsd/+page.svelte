<script>
  import { base } from '$app/paths';
  import Pdf from "$lib/Pdf.svelte";

  let ctrlf = "https://learnermanipal.sharepoint.com/sites/ManipalOSF/Shared%20Documents/General/Branchwise%20Course%20Material/Computer%20science%20(Core)/Year-2/III-%20Sem/Digital%20system%20and%20Design/Latest%202022/DSD%20Ctrl+F.pdf";
</script>

<div class="row" style="text-align: center">
    <div class="col-12">
        <Pdf url={ctrlf} text="CTRL+F" />
    </div>
    <div class="PPTS">
      <a href="{base}/3rdsem/dsd/ppts" >
        <img src="{base}/maybeblue-folder.png" class="logo blue" alt="COA" /> 
      </a>
      <p>PPTS</p>
    </div>
    <div class="Reference-books">
      <a href="{base}/3rdsem/dsd/Reference-Books" >
        <img src="{base}/liblack-folder.png" class="logo blue" alt="COA" /> 
      </a>
      <p>Reference-books</p>
    </div>
</div>

<style>
  /*TODO*/
</style>