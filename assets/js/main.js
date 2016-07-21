$(function () {
    var myarr = {};
    myarr = {
        name: '',
        data: '',
        col: '',
        column: ''
    };
    function check_components(type) {
        switch (type) {
            case '1':
                myarr.column = '1'
                break;
            case '2':
                myarr.column = '2'
                break;
            case '3':
                myarr.column = '3'
                break;
            case '4':
                myarr.column = '4'
                break;
            case 'Text_Field':
                myarr.data = '<div class="form-group box_component">';
                myarr.data += '   <label class="col-md-4 control-label" for="passwordinput">Label</label>';
                myarr.data += '   <div class="col-md-8">';
                myarr.data += '      <input id="passwordinput" name="passwordinput" type="text" placeholder="placeholder" class="form-control input-md">';
                myarr.data += '   </div>';
                myarr.data += '</div>';
                break;
            case 'Text_Area':
                myarr.data = '<div class="form-group box_component">';
                myarr.data += '   <label class="col-md-4 control-label" for="passwordinput">Label</label>';
                myarr.data += '   <div class="col-md-8">';
                myarr.data += '      <textarea name="" class="form-control" cols="10" rows="2">This is Textarea</textarea>';
                myarr.data += '   </div>';
                myarr.data += '</div>';
                break;
            case 'Radio':
                myarr.data = '<div class="form-group box_component">';
                myarr.data += '   <label class="col-md-4 control-label" for="passwordinput">Label</label>';
                myarr.data += '   <div class="col-md-8">';
                myarr.data += '      <input type="radio"  name="radio" id="" value="1"/> 1';
                myarr.data += '      <input type="radio"  name="radio" id="" value="1"/> 2';
                myarr.data += '   </div>';
                myarr.data += '</div>';
                break;
            case 'Checkbox':
                myarr.data = '<div class="form-group box_component">';
                myarr.data += '   <label class="col-md-4 control-label" for="passwordinput">Label</label>';
                myarr.data += '   <div class="col-md-8">';
                myarr.data += '      <input type="checkbox" name="" id="" value="1"/> 1';
                myarr.data += '      <input type="checkbox" name="" id="" value="1"/> 2';
                myarr.data += '   </div>';
                myarr.data += '</div>';
                break;
            case 'Select':
                myarr.data = '<div class="form-group box_component">';
                myarr.data += '   <label class="col-md-4 control-label" for="passwordinput">Label</label>';
                myarr.data += '   <div class="col-md-8">';
                myarr.data += '      <select name="" class="form-control"><option value="1">Option 1</option><option value="2">Option 2</option></select>';
                myarr.data += '   </div>';
                myarr.data += '</div>';
                break;
            case 'Header':
                myarr.data = '<div class="form-group box_component">';
                myarr.data += '   <label class="col-md-12 control-label">Header</label>';
                myarr.data += '</div>';
                break;
            case 'Date_Field':
                myarr.data = '<div class="form-group box_component">';
                myarr.data += '   <label class="col-md-4 control-label" for="passwordinput">Label</label>';
                myarr.data += '   <div class="col-md-8">';
                myarr.data += '      <input type="date" class="form-control" name="" id=""/>';
                myarr.data += '   </div>';
                myarr.data += '</div>';
                break;
        }
    }

    function design_col(column) {
        switch (column) {
            case '1':
                myarr.col = '<div class="row r_box_component">';
                myarr.col += '   <div class="col-md-12">';
                myarr.col += '      <div class="box_com">';
                myarr.col += '      </div>';
                myarr.col += '  </div>';
                myarr.col += '</div>';
                break;
            case '2':
                myarr.col = '<div class="row r_box_component">';
                myarr.col += '<div class="col-md-6">';
                myarr.col += '    <div class="box_com">';
                myarr.col += '    </div>';
                myarr.col += '</div>';
                myarr.col += '<div class="col-md-6">';
                myarr.col += '    <div class="box_com">';
                myarr.col += '    </div>';
                myarr.col += '  </div>';
                myarr.col += '</div>';
                break;
            case '3':
                myarr.col = '<div class="row r_box_component">';
                myarr.col += '<div class="col-md-4">';
                myarr.col += '    <div class="box_com">';
                myarr.col += '    </div>';
                myarr.col += '</div>';
                myarr.col += '<div class="col-md-4">';
                myarr.col += '    <div class="box_com">';
                myarr.col += '    </div>';
                myarr.col += '</div>';
                myarr.col += '<div class="col-md-4">';
                myarr.col += '    <div class="box_com">';
                myarr.col += '    </div>';
                myarr.col += '  </div>';
                myarr.col += '</div>';
                break;
            case '4':
                myarr.col = '<div class="row r_box_component">';
                myarr.col += '<div class="col-md-3">';
                myarr.col += '    <div class="box_com">';
                myarr.col += '    </div>';
                myarr.col += '</div>';
                myarr.col += '<div class="col-md-3">';
                myarr.col += '    <div class="box_com">';
                myarr.col += '    </div>';
                myarr.col += '</div>';
                myarr.col += '<div class="col-md-3">';
                myarr.col += '    <div class="box_com">';
                myarr.col += '    </div>';
                myarr.col += '</div>';
                myarr.col += '<div class="col-md-3">';
                myarr.col += '    <div class="box_com">';
                myarr.col += '    </div>';
                myarr.col += '  </div>';
                myarr.col += '</div>';
                break;
        }
    }
    ;

    //Get value input radio
    $('.droppable').droppable({
        drop: function(){
            design_col(myarr.column);
            $('.droppable .droped').append(myarr.col);
        }
    });
    //add event column
    function add_event_column() {
        $('.droppable').find('.box_com').each(function () {
            $(this).droppable({
                drop: function (event, ui) {
                    $(this).append(myarr.data);
                    $(this).sortable({
                        revert: true
                    });
                    $(this).disableSelection();
                }
            });
        });
    }

    $(".item_dragable").each(function () {
        var selector = $(this).attr('data-components');
        $(this).draggable({
//            connectToSortable: ".box_component",
            helper: "clone",
            revert: "invalid",
            start: function () {
                check_components(selector);
                add_event_column();
            }
        });
    });

});