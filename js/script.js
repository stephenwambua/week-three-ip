var submit = document.getElementById("submit");
submit.addEventListener("click", function(e){
    e.preventDefault();
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    if (name == "") {
        alert("Enter your name in the form");
    }else if(email == ""){
       alert("Enter a valid email adress")
    }else if(comment == ""){
        alert("Please enter your comment in the comment section")
    }else{
        alert("Your masage has been received");
    }
} )

$('#dsn').click(function(){
    $('#dsn p').toggle();
    $('#dsn img').toggle();
});
$('#dev').click(function(){
    $('#dev p').toggle();
    $('#dev img').toggle();
});
$('#prod').click(function(){
    $('#prod p').toggle();
    $('#prod img').toggle();
});
$('#firststep').mouseenter(function(){
    $('#firststep p').show();
});
$('#firststep').mouseleave(function(){
    $('#firststep p').hide();
});
$('#steptwo').mouseenter(function(){
    $('#steptwo p').show();
});
$('#steptwo').mouseleave(function(){
    $('#steptwo p').hide();
});
$('#stepthree').mouseenter(function(){
    $('#stepthree p').show();
});
$('#stepthree').mouseleave(function(){
    $('#stepthree p').hide();
});
$('#stepfour').mouseenter(function(){
    $('#stepfour p').show();
});
$('#stepfour').mouseleave(function(){
    $('#stepfour p').hide();
});
$('#stepfive').mouseenter(function(){
    $('#stepfive p').show();
});
$('#stepfive').mouseleave(function(){
    $('#stepfive p').hide();
});
$('#stepsix').mouseenter(function(){
    $('#stepsix p').show();
});
$('#stepsix').mouseleave(function(){
    $('#stepsix p').hide();
});
$('#stepseven').mouseenter(function(){
    $('#stepseven p').show();
});
$('#stepseven').mouseleave(function(){
    $('#stepseven p').hide();
});
$('#stepeight').mouseenter(function(){
    $('#stepeight p').show();
});
$('#stepeight').mouseleave(function(){
    $('#stepeight p').hide();
});
