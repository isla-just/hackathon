$(function() {
    $(".chapter").hide();
    $(".movepiece").hide();
    $("body").css("background-image","url('../assets/background.jpg')");

    
    $(".chapter-one").show();
    $("body").css("background-image","none");
    $(".qna").hide();


    setTimeout(function(){
        $("body").css("background-image","url('../assets/background.jpg')");
        $(".chaptercontent").hide();
        $("body").css("backdrop-filter","blur(10px)");
        $(".qna").show();
    },2000);


    $(".movespiece").on("click", function(){
        $(".movepiece").hide();
        if(chapnum===1){
            $(".chapter-one").show();
            $(".chaptercontent").show()
            $("body").css("background-image","none");
            $(".qna").hide();
            

            setTimeout(function(){
                $("body").css("background-image","url('../assets/background.jpg')");
                $("body").css("backdrop-filter","blur(10px)");
                $(".chaptercontent").hide();
                $(".qna").show();
            },2000);

        }
        if(chapnum===2){
            $(".chapter-two").show();
            $(".chaptercontent").show();
            $("body").css("background-image","none");
            $(".qna").hide();
            

            setTimeout(function(){
                $("body").css("background-image","url('../assets/background.jpg')");
                $("body").css("backdrop-filter","blur(10px)");
                $(".chaptercontent").hide();
                $(".qna").show();
            },2000);
            
        }
        if(chapnum===3){
            $(".chapter-three").show();
            $(".chaptercontent").show();
            $("body").css("background-image","none");
            $(".qna").hide();
            

            setTimeout(function(){
                $("body").css("background-image","url('../assets/background.jpg')");
                $(".chaptercontent").hide();
                $("body").css("backdrop-filter","blur(10px)");
                $(".qna").show();
            },2000);
        }
        if(chapnum===4){
            $(".chapter-four").show();
            $(".chaptercontent").show();
            $("body").css("background-image","none");
            $(".qna").hide();
            

            setTimeout(function(){
                $("body").css("background-image","url('../assets/background.jpg')");
                $(".chaptercontent").hide();
                $("body").css("backdrop-filter","blur(10px)");
                $(".qna").show();
            },2000);
        }
        if(chapnum===5){
            $(".chapter-five").show();
            $(".chaptercontent").show();
            $("body").css("background-image","none");
            $(".qna").hide();
            

            setTimeout(function(){
                $("body").css("background-image","url('../assets/background.jpg')");
                $(".chaptercontent").hide();
                $("body").css("backdrop-filter","blur(10px)");
                $(".qna").show();
            },2000);
        }
    })

    $(".wrong").on("click", function(){
        $("p").css("color", "red");
        $(".option").css("color", "red");
        $(".option").css("border-color", "red");
        $(".option").css("background-color", "red");
        setTimeout(function(){
            $("p").css("color", "black");
            $(".option").css("color", "black");
            $(".option").css("background-color", "white");
            $(".option").css("border-color", "white");
        },500);
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
