$(function () {
    var myarr = {};
    myarr = {
        name: '',
        data: '',
        column: ''
    };
    function check_column(num) {
        switch (num) {
            case '1':
                myarr.column = '<div class="row r_box_component">';
                myarr.column += '   <div class="col-md-12">';
                myarr.column += '      <div class="box_com">';
                myarr.column += '      </div>';
                myarr.column += '  </div>';
                myarr.column += '</div>';
                break;
            case '2':
                myarr.column = '<div class="row r_box_component">';
                myarr.column += '<div class="col-md-6">';
                myarr.column += '    <div class="box_com">';
                myarr.column += '    </div>';
                myarr.column += '</div>';
                myarr.column += '<div class="col-md-6">';
                myarr.column += '    <div class="box_com">';
                myarr.column += '    </div>';
                myarr.column += '  </div>';
                myarr.column += '</div>';
                break;
            case '3':
                myarr.column = '<div class="row r_box_component">';
                myarr.column += '<div class="col-md-4">';
                myarr.column += '    <div class="box_com">';
                myarr.column += '    </div>';
                myarr.column += '</div>';
                myarr.column += '<div class="col-md-4">';
                myarr.column += '    <div class="box_com">';
                myarr.column += '    </div>';
                myarr.column += '</div>';
                myarr.column += '<div class="col-md-4">';
                myarr.column += '    <div class="box_com">';
                myarr.column += '    </div>';
                myarr.column += '  </div>';
                myarr.column += '</div>';
                break;
            case '4':
                myarr.column = '<div class="row r_box_component">';
                myarr.column += '<div class="col-md-3">';
                myarr.column += '    <div class="box_com">';
                myarr.column += '    </div>';
                myarr.column += '</div>';
                myarr.column += '<div class="col-md-3">';
                myarr.column += '    <div class="box_com">';
                myarr.column += '    </div>';
                myarr.column += '</div>';
                myarr.column += '<div class="col-md-3">';
                myarr.column += '    <div class="box_com">';
                myarr.column += '    </div>';
                myarr.column += '</div>';
                myarr.column += '<div class="col-md-3">';
                myarr.column += '    <div class="box_com">';
                myarr.column += '    </div>';
                myarr.column += '  </div>';
                myarr.column += '</div>';
                break;
        }
    }
    function check_components(type) {
        switch (type) {
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

    set_drag('column');
    set_drag('components');
    
    function set_drag(component) {
        $('.item_dragable').draggable({
            helper: "clone", revert: "invalid",
            start: function () {
                var selector = $(this).attr('data-' + component);
                check_column(selector);
                console.log(selector);
            }
        });
    }
    //Get value input radio
    $('.droppable').droppable({
        drop: function () {
            $('.droppable .droped').append(myarr.column);
            $('.box_com').each(function () {
                $(this).droppable({
                    drop: function () {
                        $(this).append(myarr.data);
                    }
                });
            });
        }
    });
    $('.box_com').each(function () {
        $(this).droppable({
            drop: function () {
                $(this).append(myarr.data);
            }
        });
    });

});