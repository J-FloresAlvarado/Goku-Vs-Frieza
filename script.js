function deleteSomething(secondValue) {
      alert("Your wish has been submitted and granted 😌");
      document.getElementById("myText").value = "";
}

$(".No").click(function(){
    $('.container3').show();
	$(".actions").hide();
    $(".default").hide();
    $(".weak").show();
    $(".friezavictory").show();
    $("p").hide();
    $("h2").text("Oh No! You've lost all of the dragon balls and made Frieza win");
});

$(".Yes").click(function() {
    $("p").text("Make Goku practice by double-clicking him so he can get powerful");
    $(".container3").hide();
    $(".actions").hide();
    $("h2").hide();
});

 $(".default").dblclick(function() {
     $(".practice").show();
     $(".default").hide();
     $("p").text("Looks like you and Goku will make good protectors so let's put you guys to work.Click on Goku to continue");
});
 $(".practice").click(function(){
     $(".frieza").show();
     $(".practice").hide();
     $(".container2").show();
     $("p").text("Looks like someone is trying to get the dragon balls👀....it's Frieza😯. What do you want to do?");
 });

$(".Defend").click(function(){
    $(".actions2").hide();
    $('.container3').show();
    $(".frieza").hide();
    $(".friezavictory").show();
     $("p").text("Looks like Frieza got away...it's okay maybe next time 🤷");    
});
     
$(".Attack").click(function(){
    $(".fighting").show();
    $(".saiyan").fadeIn();
    $(".defeatedfrieza").show();
    $(".frieza").hide();
    $(".actions2").hide();
    $(".actions3").show();
     $("p").text("YESSS! We have defeated Frieza 🥳 and Goku has officially transformed to super saiyan 1. Hover over Frieza to gather the dragon balls that he was trying to steal");    
});

$(".defeatedfrieza").hover(function(){
    $(".db").fadeIn("extra slow");
    $(".fighting").hide();
    $(".saiyan").fadeOut("slow");
     $("p").text("You and Goku were able to complete this mission and for your hard work Goku would like to reward you by giving you the db and summoning Shenron 🐉  to make a wish.Then make your mouse leave the dragon ball to make Shenron appear");  
});
$(".db").mouseleave(function(){
    $(".Wish").show();
    $(".shenron").slideDown("extra slow");
    $(".db").fadeOut("faster");
    $(".defeatedfrieza").hide();
    $("p").css("color", "white");
    $("p").css("font-weight", "bold");
    $("p").text("Shenron:Tell me why have you summoned me? Tell me your wish now!Then proceed to click on me continue *Type your wish into the text box*");     
});
   

$(".shenron").click(function(){
    $(".container3").show();
    $(".granted").show("slow");
    $(".shenron").fadeOut("faster");
    $('.Wish').fadeOut();
    $("p").text("Congratulations you have completed the mission.Click restart to play again:D"); 
});

$(".container3").click(function(){
    $("p").show();
    $("p").text("After Bulma's creation of the super dragon radar it has been Goku's mission to obtain the dragon balls (db) but also protect them from bad guys like Frieza and you have been selected to help Goku with this mission");
    $("h2").text("Would you like to accept this mission?");
    $(".actions").slideDown();
    $(".container3").fadeOut();
    $(".granted").hide();
    $(".Wish").hide();
    $("button").slideDown();
    $(".default").slideDown();
    $(".weak").hide();
    $(".friezavictory").hide();
});
