$().ready(function(){
 //toplam li sayısı
let lisayisi=$("table#listele tbody tr").length;
//sayfada kaç veri gösterilecek
let sayfaveri=3
//kaç sayfa olacak
let sayfasayisi;
if (lisayisi%sayfaveri==0) {
    sayfasayisi=Math.round(lisayisi/sayfaveri)
} else {
    sayfasayisi=Math.round(lisayisi/sayfaveri)+1
}


$("table#listele tbody tr:gt("+(sayfaveri-1)+")").hide()

//sayfa sayılarını bastırır
for (let i = 1; i < sayfasayisi; i++) {
    $("ul#sayfalama").append(" <li><a href='javascript:void(0)'>"+i+"</a></li>")  
}

//aktif sayfa sayısını gösterir
$("ul#sayfalama li:first").addClass("page-link active")

$("ul#sayfalama li").click(function() {

    let index=$(this).index()+1
    let gt=sayfaveri*index;
    $("ul#sayfalama li").removeClass()  
    $("ul#sayfalama li:eq("+(index-1)+")").addClass("page-link active")  
    //sayfa sayısına tıklandığında gizle
    $("table#listele tbody tr").hide()

    for (i = gt-sayfaveri; i < gt; i++)
    {
        // console.log(gt +"  "+i)
        $("table#listele tbody tr:eq("+(i)+")").show()
        
    }
  
})

});
