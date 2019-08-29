$('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace",
    });
    $('input').keydown(function(src){
        if(src.keyCode == 13 && $(this).val()!='')
        {
            //ENTER KEY WAS PRESSED
            var item = $(this).val();
            
            $(this).parent().parent().append('<li>' + item + '</li>');
            $(this).val('');
        }
    });
    $('#trash').droppable({
        drop: function(event, ui){
            ui.draggable.remove();
        }
    });