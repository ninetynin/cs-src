<script>
    import Pdf from "$lib/Pdf.svelte";
    let url = "https://learnermanipal.sharepoint.com/sites/ManipalOSF/Shared%20Documents/General/Branchwise%20Course%20Material/Computer%20science%20(Core)/Year-2/III-%20Sem/Math-3/Books/";
    let book1 = url + ".P.Trembalyand%20R.%20Manohar,%20Discrete%20Mathematics%20Structures%20with%20application%20to%20computer%20science,%20Mc%20Graw%20Hill,%201987..pdf";
    let book2 = url + "An%20Introduction%20to%20Computational%20Combinatorics%20(E.%20S.%20Page,%20L.%20B.%20Wilson)%20(z-lib.org).pdf";
    let book3 = url + "Applied%20Combinatorics%20(Alan%20Tucker)%20(z-lib.org).pdf";
    let book4 = url + "C.L.Liu,%20Elements%20of%20Discrete%20Mathematics,%20Mc%20Graw%20Hill,%201986.pdf";
    let book5 = url + "Elements%20of%20Discrete%20Mathematics.pdf";
    let book6 = url + "Graph%20theory%20(Harary,%20Frank)%20(z-lib.org).pdf";
    let book7 = url + "Graph%20Theory%20with%20Applications%20to%20Engineering%20and%20Computer%20Science%20(Narsingh%20Deo)%20(z-lib.org).pdf";
    let book8 = url + "Topics%20in%20Algebra.pdf";
</script>

   <div class="linkfit">
    <div class="rechange"><Pdf url={book1} text="Manohar & Trembalyand" /></div>
    <div class="rechange"><Pdf url={book8} text="Topics in Algebra" /></div>
    <div class="rechange"><Pdf url={book3} text="Applied Combinatorics" /></div>
    <div class="rechange"><Pdf url={book4} text="McGrawHill" /></div>
    <div class="rechange"><Pdf url={book5} text="Elements of Discrete Maths" /></div>
    <div class="rechange"><Pdf url={book6} text="Graph Theory" /></div>
    <div class="rechange"><Pdf url={book7} text="Graph Theory with Applications" /></div>
    <div class="rechange"><Pdf url={book2} text="Computational Combinatorics" /></div>
  </div>

  <style>
    .linkfit {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .rechange {
      margin: 0.5rem;
    }
  </style>