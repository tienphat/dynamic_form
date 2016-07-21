$(document).ready(function (){
    $('.page_right .ui-sortable-handle1').draggable({
        containment: 'document',helper: 'clone',
        start: function (){
            components = $(this).attr('data-components1');
            switch(components) {
                case 'Column1':
                    contentsa = '<div class="row"><div class="col-md-12 page_left1"></div></div>';
                    break;
                case 'Column2':
                    contentsa = '<div class="row"><div class="col-md-6 page_left1"></div><div class="col-md-6 page_left1"></div></div>';
                    break;
                case 'Column3':
                    contentsa = '<div class="row"><div class="col-md-4 page_left1"></div><div class="col-md-4 page_left1"></div><div class="col-md-4 page_left1"></div></div>';
                    break;
                case 'Column4':
                    contentsa = '<div class="row"><div class="col-md-3 page_left1"></div><div class="col-md-3 page_left1"></div><div class="col-md-3 page_left1"></div><div class="col-md-3 page_left1"></div></div>';
                    break;
            }
        }
    });
    $('.page_right .ui-sortable-handle').draggable({
        containment: 'document',helper: 'clone',
        start: function (){
            components = $(this).attr('data-components');
            switch(components) {
                case 'Text':
                    contents = '<span class="chinh1"><lable>Text:</lable><input type="text" /></span><br>';
                    break;
                case 'Text Area':
                    contents = '<span class="chinh1"><lable>Textarea:</lable><textarea></textarea></span><br>';
                    break;
                case 'Radio':
                    contents = '<span class="chinh1">Radio: <input type="radio" /></span><br>';
                    break;
                     case 'Checkbox':
                    contents = '<span class="chinh1">Checkbox:<input type="checkbox" /></span><br>';
                    break;
                case 'Select':
                    contents = '<span class="chinh1">Select:<select></select></span><br>';
                    break;
                case 'Header':
                    contents = '<span class="chinh1">Label:<label>header</label></span><br>';
                    break;
            }
        }
    });
    $('.page_left').droppable({
        accept: '.ui-sortable-handle1',
        drop: function (){
            $('.page_left').append(contentsa);
            $('.page_left1').droppable({
                accept: '.ui-sortable-handle',
                drop: function (){
                    $(this).append(contents);
                }
            });
        }
    });
    
});

