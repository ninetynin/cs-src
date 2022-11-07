<script>
    import Pdf from "$lib/Pdf.svelte";
    import Docx from "$lib/Docx.svelte";
    import Ppt from "$lib/Ppt.svelte";
    import Pptx from "$lib/Pptx.svelte";
    let url = "https://learnermanipal.sharepoint.com/sites/ManipalOSF/Shared%20Documents/General/Branchwise%20Course%20Material/Computer%20science%20(Core)/Year-2/III-%20Sem/Data%20structures%20and%20its%20applications/Latest%202022/";
    let docx1 = url + "cprgrams1.docx";
    let docx2 = url + "Dynamic%20Queue%20allocation_NEW.docx";
    let pptx1 = url + "Module%201%20-%20Chapter%2010%20Pointers.pptx";
    let ppt1 = url + "Module%201%20-%20Chapter%2011%20Pointer%20Applications.ppt";
    let ppt2 = url + "Module%201%20-%20Chapter%2012%20Derived%20Types%20%5bAutosaved%5d.ppt";
    let pptx2 = url + "Latest%202022/Module%201%20-%20Recursion.pptx";
    let ppt3 = url + "Module%202%20-%20Stacks%20and%20Queues.ppt";
    let ppt4 = url + "Module%203%20%20Linked%20Lists.ppt";
    let pptx3 = url + "Module%204%20-%20Trees1.pptx";
    let pptx4 = url + "sparsematrix.pptx";
</script>

   <div class="linkfit">
    <div class="divunknow"><Docx url={docx1} text="cprgrams1" /></div>
    <div class="divunknow"><Pptx url={pptx1} text="Pointers" /></div>
    <div class="divunknow"><Ppt url={ppt1} text="Pointer Applications" /></div>
    <div class="divunknow"><Ppt url={ppt2} text="Derived Types" /></div>
    <div class="divunknow"><Pptx url={pptx2} text="Recursion" /></div>
    <div class="divunknow"><Ppt url={ppt3} text="Stacks and Queues" /></div>
    <div class="divunknow"><Ppt url={ppt4} text="Linked Lists" /></div>
    <div class="divunknow"><Pptx url={pptx3} text="Trees1" /></div>
    <div class="divunknow"><Pptx url={pptx4} text="sparsematrix" /></div>
    <div class="divunknow"><Docx url={docx2} text="Dynamic Queue allocation" /></div>
  </div>

  <style>
    .linkfit {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .divunknow {
      margin: 10px;
    }
  </style>