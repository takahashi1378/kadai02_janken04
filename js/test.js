//  alert(123456)   

console.log("はじめてのジャバスクリプト")

console.log(23+5)
console.log(2000-1800)
console.log("18+5")

// 箱に入れる
var test = "文字が入ってます";
// 箱の名前を指定して表示する
console.log(test)




var score = 50
if(score === 60){
  console.log("50が出ました");  
}else{
    console.log("50ではありません");
}


var point = 90;
if (point > 80) {
  console.log("素晴らしい！おめでとう！");  
}else{
    console.log("もっとがんばりましょう");
}

// 0,1,2,3,4

// jqueryのお遊びをしてみましょう🤗
$("#aa").on('click', function(){

    var random = Math.floor(Math.random() * 5);
    console.log(random, 'ランダムな箱の中身')
    
    if(random === 0){
    console.log("大吉");
    $("#aa").html('大吉');
    $("#aa").css('color','red');
    }else if (random === 1){
        console.log("中吉");
        $("#aa").html('中吉')
        $("#aa").css('color','black');
    }
    else if (random === 2){
        console.log("小吉");
        $("#aa").html('小吉');
        $("#aa").css('color','black');
    }
    else if (random === 3){
        console.log("吉")  ; 
        $("#aa").html('吉');
        $("#aa").css('color','black');
    }
    else if (random === 4){
        console.log("末"); 
        $("#aa").html('末')  ;
        $("#aa").css('color','black'); 
    }
    








    // $("#aa").html('押されました！！！！！！')
    // $("#aa").css('color', 'red')
    // $("#aa").css('font-size', '130%')
    
    // $("#aa").fadeOut(3000)
    // $("#aa").fadeIn(3000)
  
    // この下消さない
  })










