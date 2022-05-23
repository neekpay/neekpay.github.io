// id si card olan objeleri gizle
$(document).ready(function () {
    $(".card").click(function(){
        $(this).hide();
      });
    
});

//tıklandıında uyarı ver
$(document).ready(function () {
    $(".tikla").mouseup(function(){
        alert("Başarı ile tıklandı!");
      });
    
});

//kapa ac islemi
$(document).ready(function () {
    $(".kapat").click(function(){
        $(".gizle").toggle();
      });
    
});