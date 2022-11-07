<script>
    import Ppt from "$lib/Ppt.svelte";
    import Pptx from "$lib/Pptx.svelte";
    let url = "https://learnermanipal.sharepoint.com/sites/ManipalOSF/Shared%20Documents/General/Branchwise%20Course%20Material/Computer%20science%20(Core)/Year-2/III-%20Sem/Object%20Oriented%20programming/Latest%202022/";
    let ppt1 = url + "1.Ch1_Java%20Programming%20Fundamentals.ppt";
    let ppt2 = url + "2.Ch2_Introducing%20datatypes%20and%20operators.ppt";
    let ppt3 = url + "3.Ch3_Program%20Control%20Statements.ppt";
    let ppt4 = url + "4.Ch4_Introducing%20classes%20objects%20and%20methods.ppt";
    let ppt5 = url + "5.Ch5_More%20Datatypes%20and%20operators.ppt";
    let ppt6 = url + "6.Ch6_Closer%20look%20at%20methods%20and%20classes.ppt";
    let ppt7 = url + "7.Ch7_Inheritance.ppt";
    let ppt8 = url + "8.Ch8_Interfaces.ppt";
    let ppt9 = url + "9.Ch9_Packages.ppt";
    let pptx1 = url + "10.Ch10_Exception%20handling.pptx";
    let pptx2 = url + "11.Ch11_Multithreading.pptx";
    let pptx3 = url + "12.Ch12_Generics.pptx";
    let pptx4 = url + "13.Ch13_JavaFX.pptx";
    let ppt10 = url + "14.Ch14_CERT%20JAVA%20CODING%20STANDARD.ppt";
</script>

   <div class="linkfit">
    <div class="divunknow"><Ppt url={ppt1} text="Java" /></div>
    <div class="divunknow"><Ppt url={ppt2} text="datatypes & operators" /></div>
    <div class="divunknow"><Ppt url={ppt3} text="Control Statements" /></div>
    <div class="divunknow"><Ppt url={ppt4} text="classes objects & methods" /></div>
    <div class="divunknow"><Ppt url={ppt5} text=" Datatypes & operators" /></div>
    <div class="divunknow"><Ppt url={ppt6} text="methods & classes" /></div>
    <div class="divunknow"><Ppt url={ppt7} text="Inheritance" /></div>
    <div class="divunknow"><Ppt url={ppt8} text="Interfaces" /></div>
    <div class="divunknow"><Ppt url={ppt9} text="Packages" /></div>
    <div class="divunknow"><Pptx url={pptx1} text="Exception handling" /></div>
    <div class="divunknow"><Pptx url={pptx2} text="Multithreading" /></div>
    <div class="divunknow"><Pptx url={pptx3} text="Generics" /></div>
    <div class="divunknow"><Pptx url={pptx4} text="JavaFX" /></div>
    <div class="divunknow"><Ppt url={ppt10} text="CERT JAVA CODING STANDARD" /></div>
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