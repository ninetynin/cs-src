<script>
    import Pdf from "$lib/Pdf.svelte";
    let url = "https://learnermanipal.sharepoint.com/sites/ManipalOSF/Shared%20Documents/General/Branchwise%20Course%20Material/Computer%20science%20(Core)/Year-2/III-%20Sem/Computer%20organisation%20and%20architecture/Books/"
    let book1 = url + "Computer%20Architecture%20and%20Organization%20(John%20Patrick%20Hayes)%20(z-lib.org).pdf"
    let book2 = url + "%20Organization%20and%20Architecture%20Designing%20for%20Performance%20(8th%20Edition)%20(William%20Stallings)%20(z-lib.org).pdf"
    let book3 = url + "Computer%20Organization%20and%20Design%20The%20Hardware%20Software%20Interface,%203rd%20Edition%20(David%20A.%20Patterson,%20John%20L.%20Hennessy%20etc.)%20(z-lib.org).pdf"
    let book4 = url + "Computer%20organization%20and%20embedded%20systems%20(Carl%20Hamacher,%20Zvonko%20Vranesic,%20Safwat%20Zaky%20etc.)%20(z-lib.org).pdf"
    let book5 = url + "Fundamentals%20of%20Digital%20Logic%20and%20Microcomputer%20Design%20(M.%20Rafiquzzaman)%20(z-lib.org).pdf"
    let ishannwork = url + "CONTROL%20Unit%20Latest%20ie%20Rafiquzzaman%20.pdf"
</script>

   <div class="linkfit">
    <Pdf url={book1} text="John Patrick Hayes" />
    <Pdf url={book2} text="William Stallings" />
    <Pdf url={book3} text="David A. Patterson" />
    <Pdf url={book4} text="Carl Hamacher" />
    <Pdf url={book5} text="M. Rafiquzzaman" />
    <Pdf url={ishannwork} text="CU Latest Rafi." />
  </div>

  <style>
    .linkfit {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  </style>