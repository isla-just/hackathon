$(function() {
    $(".chapter").hide();
    $(".movepiece").hide();
    
    $(".qna").hide();
    setTimeout(function(){$(".qna").show();},2000);

    $(".startstory").on("click", function(){
        $(".chapter-one").show();
        $("intro").hide();
    })
    $(".movespiece").on("click", function(){
        $(".movepiece").hide();
        if(chapnum===1){
            $(".chapter-one").show();
            $(".qna").hide();
            setTimeout(function(){$(".qna").show();},2000);
        }
        if(chapnum===2){
            $(".chapter-two").show();
            $(".qna").hide();
            setTimeout(function(){$(".qna").show();},2000);
            
        }
        if(chapnum===3){
            $(".chapter-three").show();
            $(".qna").hide();
            setTimeout(function(){$(".qna").show();},2000);
        }
        if(chapnum===4){
            $(".chapter-four").show();
            $(".qna").hide();
            setTimeout(function(){$(".qna").show();},2000);
        }
        if(chapnum===5){
            $(".chapter-five").show();
            $(".qna").hide();
            setTimeout(function(){$(".qna").show();},2000);
        }
    })

    $(".wrong").on("click", function(){
        $("p").css("color", "red");
        setTimeout(function(){$("p").css("color", "black");},500);
    })

    $(".chap1answer").on("click", function(){
        $(".chapter").hide();
        $(".movepiece").show();
    })
})
