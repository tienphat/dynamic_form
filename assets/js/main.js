$(document).ready(function () {
    var myarr = {
        component: '',
        column: ''
    };

    $('.page_right .column_select').draggable({
        containment: 'document', helper: 'clone',
        start: function () {
            components = $(this).attr('data-components1');
            switch (components) {
                case 'Column1':
                    myarr.column = '<div class="row"><div class="col-md-12 column_sel"></div></div>';
                    break;
                case 'Column2':
                    myarr.column = '<div class="row"><div class="col-md-6 column_sel"></div><div class="col-md-6 column_sel"></div></div>';
                    break;
                default:
                    myarr.column = '<div class="col-md-12 column_sel"></div>';
                    break;
            }
        }
    });
    $('.page_right .component').draggable({
        containment: 'document', helper: 'clone',
        start: function () {
            components = $(this).attr('data-components');
            switch (components) {
                case 'Text':

                    myarr.component = '<div class="form-group box_component">';
                    myarr.component += '    <label class="col-md-4 control-label" for="textinput">Text Input</label>  ';
                    myarr.component += '    <div class="col-md-8">';
                    myarr.component += '         <input type="text" class="form-control" name="" id="" value=""/></span><br>';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default btn_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
                case 'Text Area':
                    myarr.component = '<div class="form-group box_component">';
                    myarr.component += '    <label class="col-md-12 control-label" for="textinput">Textarea</label>  ';
                    myarr.component += '    <div class="col-md-12">';
                    myarr.component += '         <textarea name="" class="form-control"  id="" cols="10" rows="3"></textarea>';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default btn_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
                case 'Radio':
                    myarr.component = '<div class="form-group box_component">';
                    myarr.component += '    <label class="col-md-4 control-label" for="textinput">Radio</label>  ';
                    myarr.component += '    <div class="col-md-8">';
                    myarr.component += '         <input type="radio"  name="" id="" value="1"/>1';
                    myarr.component += '         <input type="radio"  name="" id="" value="2"/>2';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default btn_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
                case 'Checkbox':
                    myarr.component = '<div class="form-group box_component">';
                    myarr.component += '    <label class="col-md-4 control-label" for="textinput">Checkbox</label>  ';
                    myarr.component += '    <div class="col-md-8">';
                    myarr.component += '         <input type="checkbox" name="" id="" value="1"/>1';
                    myarr.component += '         <input type="checkbox" name="" id="" value="2"/>2';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default btn_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
                case 'Select':
                    myarr.component = '<div class="form-group box_component">';
                    myarr.component += '    <label class="col-md-4 control-label" for="textinput">Select</label>  ';
                    myarr.component += '    <div class="col-md-8">';
                    myarr.component += '         <select name="" class="form-control" ><option value="1">Option1</option></select>';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default btn_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
                case 'Header':
                    myarr.component = '<div class="form-group box_component">';
                    myarr.component += '    <div class="col-md-12">';
                    myarr.component += '         <h4><label>This is a label</label></h4>';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default btn_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
                case 'Date_Field':
                    myarr.component = '<div class="form-group box_component">';
                    myarr.component += '    <label class="col-md-4 control-label" for="textinput">Date</label>  ';
                    myarr.component += '    <div class="col-md-8">';
                    myarr.component += '         <input type="date" class="form-control"  name="" id="" value=""/>';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
            }
        }
    });
    $('.page_left').droppable({
        accept: '.column_select',
        drop: function () {
            $('.dropable').append(myarr.column);
            set_drop();
            
        }
    });

    set_drop();

    function set_drop() {
        $('.column_sel').droppable({
            accept: '.component',
            drop: function () {
                if ($(this).children().length <= 0 ) {
                    $(this).append(myarr.component);
                }
                $('.column_sel, .btn_edit').click(function(){
                    $('#modalComponent').modal('show');
                });
            }
        });
    }
    
//    show modal
    

});

