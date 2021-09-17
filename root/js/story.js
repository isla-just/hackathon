$(function() {
    var chapnum=1;
    console.log("running");
    $(".chapter").hide();
    $(".movepiece").hide();
    $(".chapter-one").show();

    $(".movespiece").on("click", function(){
        $(".movepiece").hide();
        if(chapnum===1){
            $(".chapter-one").show();
        }
        if(chapnum===2){
            $(".chapter-two").show();
        }
        if(chapnum===3){
            $(".chapter-three").show();
        }
        if(chapnum===4){
            $(".chapter-four").show();
        }
        if(chapnum===5){
            $(".chapter-five").show();
        }
    })

    $(".chap1answer").on("click", function(){
        $(".chapter").hide();
        $(".movepiece").show();
        chapnum=2;
        console.log(chapnum)
    })

    $(".chap2answer").on("click", function(){
        $(".chapter").hide();
        $(".movepiece").show();
        chapnum=3;
    })

    $(".chap3answer").on("click", function(){
        $(".chapter").hide();
        $(".movepiece").show();
        chapnum=4;
    })

    $(".chap4answer").on("click", function(){
        $(".chapter").hide();
        $(".movepiece").show();
        chapnum=5;
    })

    $(".chap5answer").on("click", function(){
        $(".chapter").hide();
        $(".movepiece").show();
        chapnum=1;
    })
})