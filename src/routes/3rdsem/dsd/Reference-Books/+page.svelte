<script>
    import Pdf from "$lib/Pdf.svelte";
    let url = "https://learnermanipal.sharepoint.com/sites/ManipalOSF/Shared%20Documents/General/Branchwise%20Course%20Material/Computer%20science%20(Core)/Year-2/III-%20Sem/Digital%20system%20and%20Design/Books/";
    let book1 = url + "digital%20design%20by%20morris%20mano.pdf";
    let book2 = url + "Digital%20Design%20Principles%20and%20Practices%20(John%20F.%20Wakerly)%20(z-lib.org).pdf";
    let book3 = url + "Digital%20Principles%20and%20Design%20(Donald%20D.%20Givone%20etc.)%20(z-lib.org).pdf";
    let book4 = url + "Fundamentalsbr%20ofbr%20Digital%20Logic%20with%20Verilog%20Design,%20THIRD%20EDITION%20(Stephen%20Brown%20and%20Zvonko%20Vranesic)%20(z-lib.org).pdf";
</script>

   <div class="linkfit">
    <Pdf url={book1} text="Morris Mano" />
    <Pdf url={book2} text="John F. Wakerly" />
    <Pdf url={book3} text="Donald D. Givone" />
    <Pdf url={book4} text="Stephen Brown" />
  </div>

  <style>
    .linkfit {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  </style>