<script>
    import Pdf from "$lib/Pdf.svelte";
    let url = "https://learnermanipal.sharepoint.com/sites/ManipalOSF/Shared%20Documents/General/Branchwise%20Course%20Material/Computer%20science%20(Core)/Year-2/III-%20Sem/Computer%20organisation%20and%20architecture/COA%202022%20Updated%20Slides/"
    let link12 = url + "1.%20Session%201%20and%202.pdf";
    let link34 = url + "2.%20Session%203%20and%204.pdf";
    let link56 = url + "3.%20Session%205%20and%206.pdf";
    let link78 = url + "4.%20Session%207%20and%208.pdf";
    let link910 = url + "5.%20Session%209%20and%2010.pdf";
    let link1112 = url + "6.%20Session%2011%20and%2012.pdf";
    let link1314 = url + "7.%20Session%2013%20and%2014.pdf";
    let link1516 = url + "8.%20Session%2015%20and%2016.pdf";
    let link1718 = url + "9.%20Session%2017%20and%2018.pdf";
    let link1920 = url + "10.%20Session%2019%20and%2020.pdf";
    let link2122 = url + "11.%20Session%2021%20and%2022.pdf";
    let link2326 = url + "12.%20Session%2023%20to%2026.pdf";
    let link2728 = url + "13.%20Session%2027%20to%2028.pdf";
    let link3134 = url + "14.%20Session%2031%20to%2034.pdf";
    let link3536 = url + "15.%20Session%2035%20to%2036.pdf";
    let link3738 = url + "16.%20Session%2037%20to%2038.pdf";
    let link3940 = url + "17.%20Session%2039%20to%2040.pdf";
    let link4142 = url + "18.%20Session%2041%20to%2042.pdf";
    let link4344 = url + "19.%20Session%2043%20to%2044.pdf";
    let link4548 = url + "20.%20Session%2045%20to%2048.pdf";
    let linkmprch = url + "14.%20microprogramming%20approach.pdf";
</script>

  <h1>COA_LATEST_SLIDES</h1>
  <div class="linkfit">
    <Pdf url={link12} text="1 & 2" />
    <Pdf url={link34} text="3 & 4" />
    <Pdf url={link56} text="5 & 6" />
    <Pdf url={link78} text="7 & 8" />
    <Pdf url={link910} text="9 & 10" />
    <Pdf url={link1112} text="11 & 12" />
    <Pdf url={link1314} text="13 & 14" />
    <Pdf url={link1516} text="15 & 16" />
    <Pdf url={link1718} text="17 & 18" />
    <Pdf url={link1920} text="19 & 20" />
    <Pdf url={link2122} text="21 & 22" />
    <Pdf url={link2326} text="23 to 26" />
    <Pdf url={link2728} text="27 to 28" />
    <Pdf url={link3134} text="31 to 34" />
    <Pdf url={link3536} text="35 to 36" />
    <Pdf url={link3738} text="37 to 38" />
    <Pdf url={link3940} text="39 to 40" />
    <Pdf url={link4142} text="41 to 42" />
    <Pdf url={link4344} text="43 to 44" />
    <Pdf url={link4548} text="45 to 48" />
    <Pdf url={linkmprch} text="microprogramming approach" />
  </div>

  <style>
    .linkfit {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  </style>