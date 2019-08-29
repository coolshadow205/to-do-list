$('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')",// which items must be selected for sorting.
        connectWith: "ul",//connectWith allows us to sort the task in other days as will because we have specified 'ul' parent of all li
        dropOnEmpty: true,
        placeholder: "emptySpace",//placeholder allows us to use change the ui of placeholder and by writing .placeholder in css
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