$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();
    
        const novaTarefa = $('#nova-tarefa').val();
        const addTarefa = $('#lista');
        $(`<li>${novaTarefa}</li>`).appendTo(addTarefa);

        $(addTarefa).fadeIn('slow');
        $('#nova-tarefa').val('');
    });

    $('#lista').on('click', 'li', function(e) {
        $(e.target).toggleClass('completed');
    });

    $('#limpar-tarefa').click(function() {
        $('#lista').empty();
    })
    
})
