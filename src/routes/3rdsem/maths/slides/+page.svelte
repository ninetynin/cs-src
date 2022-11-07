<script>
    import Pdf from "$lib/Pdf.svelte";
    let url = "https://learnermanipal.sharepoint.com/sites/ManipalOSF/Shared%20Documents/General/Branchwise%20Course%20Material/Computer%20science%20(Core)/Year-2/III-%20Sem/Math-3/Latest%202022/";
    let slide1 = url + "Graph%20Theory.pdf";
    let slide2 = url + "Group%20Theory.pdf";
    let slide3 = url + "handwritten%20p-and-c.pdf";
    let slide4 = url + "Lattice_theory.pdf";
    let slide5 = url + "Ordering%20of%20Permutations.pdf";
    let slide6 = url + "Permutation%20and%20combination%5b478%5d.pdf";
    let slide7 = url + "Propositional%20and%20Predicate%20Calculus.pdf";
</script>

   <div class="linkfit">
    <div class="divunknow"><Pdf url={slide1} text="Graph Theory" /></div>
    <div class="divunknow"><Pdf url={slide2} text="Group Theory" /></div>
    <div class="divunknow"><Pdf url={slide3} text="Handwritten P and C" /></div>
    <div class="divunknow"><Pdf url={slide4} text="Lattice Theory" /></div>
    <div class="divunknow"><Pdf url={slide5} text="Ordering of Permutations" /></div>
    <div class="divunknow"><Pdf url={slide6} text="Permutation and Combination" /></div>
    <div class="divunknow"><Pdf url={slide7} text="Propositional and Predicate Calculus" /></div>
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