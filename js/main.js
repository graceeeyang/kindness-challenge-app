var arrayImg = new Array();
arrayImg[0] = "ask.png";
arrayImg[1] = "callgparents.png";
arrayImg[2] = "callparents.png";
arrayImg[3] = "checkin.png";
arrayImg[4] = "coffee.png";
arrayImg[5] = "compliment.png";
arrayImg[6] = "cpr.png";
arrayImg[7] = "donateblood.png";
arrayImg[8] = "donatecharity.png";
arrayImg[9] = "donateclothes.png";
arrayImg[10] = "givebook.png";
arrayImg[11] = "highfive.png";
arrayImg[12] = "holddoor.png";
arrayImg[13] = "hug.png";
arrayImg[14] = "icecream.png";
arrayImg[15] = "intro.png";
arrayImg[16] = "kindnotes.png";
arrayImg[17] = "lane.png";
arrayImg[18] = "smile.png";
arrayImg[19] = "tellsomeone.png";
arrayImg[20] = "text.png";
arrayImg[21] = "thankyou.png";
arrayImg[22] = "volunteer.png";
arrayImg[23] = "writeletter.png";

function getRandomImage(arrayImg, path) {
    path = path || 'img/kind-cards/'; 
    var num = Math.floor( Math.random() * arrayImg.length );
    var img = arrayImg[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    
    document.getElementById("demo").innerHTML=imgStr; 
    document.getElementById("demo").style.display="";
}
$(function(){
    $("#swipe").on("swiperight",function(){
        $('#pg-two').hide();
        $('#pg-three').show();
         $('body').css('background-color','#FEBBA4');
	});
    
     $("#swipe").on("swipeleft",function(){
         getRandomImage(arrayImg);
     });    
    $('.yes').on("click", function(){
        $('#pg-one').hide();
        $('#pg-two').show();
        $('body').css('background-color','#FEE5C3');
        getRandomImage(arrayImg);
        $('pg-three').hide();
    });
    $('.new-deed').on("click", function(){
        $('#pg-three').hide();
        $('#pg-two').show();
        $('body').css('background-color','#FEE5C3');
        getRandomImage(arrayImg);
        $('pg-one').hide();
    });
    $('.accept').on("click", function(){
        $('#pg-two').hide();
        $('#pg-three').show(); 
        $('body').css('background-color','#FEBBA4');
    })
});
