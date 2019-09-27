var rows;
$( document ).ready(function() {
    $(".table").hide();
    $("#value").click(function(){
       
     var todo = $('#Main_form').find('input[name="title"]').val();
      var dis = $('#Main_form').find('#discription').val();
       var date = $('#Main_form').find('input[name="date"]').val();
        var status = $('#Main_form').find('#inlineFormCustomSelect').val();
        $(".form").remove();
        $("#mytable").show();
           rows +=' <tr><td>'+todo+'</td>';
           rows +=' <td>'+dis+'</td>';
           rows +=' <td>'+date+'</td>';
           rows +=' <td>'+status+'</td>';
        $('#mytable').append(rows);


    });
});