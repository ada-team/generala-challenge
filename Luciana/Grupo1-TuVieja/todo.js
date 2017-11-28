$(document).ready(function(){

$('#btn').on('click', function(){

var mensaje=$('#campo').val();

var li ="<li>"+mensaje+"<button type='button' class='removeBtn'>X</button></li>";
$('#list').append(li);
$('#campo').val("");

    if($('#urg').is(':checked')){
        $('li').last().css({'color':'red'});
    }
});


function borrarItem(){ 
    $(this).parent().remove(); }

$(document).on('click','.removeBtn', borrarItem);




});