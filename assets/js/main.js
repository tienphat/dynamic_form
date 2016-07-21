$(document).ready(function (){
    $('.page_right .column_select').draggable({
        containment: 'document',helper: 'clone',
        start: function (){
            components = $(this).attr('data-components1');
            switch(components) {
                case 'Column1':
                    contentsa = '<div class="col-md-12 page_left1"></div>';
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
                default:
                    contentsa = '<div class="col-md-12 page_left1"></div>';
                    break;
            }
        }
    });
    $('.page_right .component').draggable({
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
                default:
                    contents = '<span class="chinh1"><lable>Text:</lable><input type="text" /></span><br>';
                    break;
            }
        }
    });
    $('.page_left').droppable({
        accept: '.column_select',
        drop: function (){
            $('.page_left').append(contentsa);
            $('.page_left1').droppable({
                accept: '.component',
                drop: function (){
                    $(this).append(contents);
                }
            });
        }
    });
    
});

