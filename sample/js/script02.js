$(function(){

 let txt1 = "おはようございます！";
 let txt2 ="お元気ですか？";
 let num1 = 20;
 let num2 = 32;

 $("#button01").on("click",function(){
     $("#content").text("こんにちは！");
 }

 $("#button02").on("click",function(){
    $("#content").text(txt1);
})

 $("#button03").on("click",function(){
    $("#content").text(txt1+txt2);
})