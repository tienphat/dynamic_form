$(document).ready(function () {
    var myarr = {
        component: '',
        column: ''
    };

    //Kéo
    $('.page_right .column_select').draggable({
        containment: 'document', helper: 'clone',
        start: function () {
            components = $(this).attr('data-column');
            switch (components) {
                case 'Column1':
                    myarr.column = '<div class="row col_com"><div class="col-md-6 column_sel"></div><div class="col-md-6 column_sel"></div><div class ="icon_row">';
                    myarr.column += '<button class="btn btn-default btnDeleteRow"><i class="fa fa-times" aria-hidden="true"></i></button></div></div>';
                    break;
                case 'Header':
                    myarr.column = '<div class="row col_com"><div class="col-md-12 column_sel">';
                    myarr.column += '<div class="box_component fieldset_head">';
                    myarr.column += '    <div class="col-md-12 box_header">';
                    myarr.column += '         <h4><label class="head_fieldset col-md-12">This is a label</label></h4>';
                    myarr.column += '    </div>';
                    myarr.column += '    <div class ="box_icon">';
                    myarr.column += '     <button class="btn btn-default btnDeleteRow"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.column += '</div></div></div>';
                    break; 
                default:
                    myarr.column = '<div class="row col_com"><div class="col-md-6 column_sel"></div><div class="col-md-6 column_sel"></div><div class ="icon_row">';
                    myarr.column += '<button class="btn btn-default btnDeleteRow"><i class="fa fa-times" aria-hidden="true"></i></button></div></div>';
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
                    myarr.component = '<div class="box_component com_input">';
                    myarr.component += '    <label class="col-md-4 control-label" for="textinput">Label</label>  ';
                    myarr.component += '    <div class="col-md-8">';
                    myarr.component += '         <input type="text" class="form-control" name="" id="" value=""/></span><br>';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default btn_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default btnDelete"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
                case 'Text Area':
                    myarr.component = '<div class="box_component">';
                    myarr.component += '    <label class="col-md-4 control-label" for="textinput">Label</label>  ';
                    myarr.component += '    <div class="col-md-8">';
                    myarr.component += '         <textarea name="" class="form-control"  id="" cols="10" rows="3"></textarea>';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default btn_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default btnDelete"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
                case 'Radio':
                    myarr.component = '<div class="box_component">';
                    myarr.component += '    <label class="col-md-4 control-label" for="textinput">Label</label>  ';
                    myarr.component += '    <div class="col-md-8">';
                    myarr.component += '         <ul class="list-unstyled"><li><label><input type="radio"  name="radExample" id="" value="1" checked="checked"/>Radio</label></li>';
                    myarr.component += '               </ul>';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default btn_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default btnDelete"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
                case 'Checkbox':
                    myarr.component = '<div class="box_component">';
                    myarr.component += '    <label class="col-md-4 control-label" for="textinput">Label</label>  ';
                    myarr.component += '    <div class="col-md-8">';
                    myarr.component += '         <ul class="list-unstyled"><li><label><input type="checkbox" name="" id="" value="1" checked/>Checkbox</label></li>';
                    myarr.component += '                </ul>';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default btn_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default btnDelete"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
                case 'Select':
                    myarr.component = '<div class="box_component">';
                    myarr.component += '    <label class="col-md-4 control-label" for="textinput">Label</label>  ';
                    myarr.component += '    <div class="col-md-8">';
                    myarr.component += '         <select name="" class="form-control" ><option value="1">Option1</option><option value="2">Option2</option></select>';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default btn_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default btnDelete"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
                case 'Header':
                    myarr.component = '<div class="box_component fieldset_head">';
                    myarr.component += '    <div class="col-md-12 box_header">';
                    myarr.component += '         <h4><label class="head_fieldset col-md-12">This is a label</label></h4>';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon">';
                    myarr.component += '     <button class="btn btn-default btnDelete"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
                case 'Date_Field':
                    myarr.component = '<div class="box_component">';
                    myarr.component += '    <label class="col-md-4 control-label" for="textinput">Ngày tháng</label>  ';
                    myarr.component += '    <div class="col-md-8">';
                    myarr.component += '         <input type="text" placeholder="Ngày/tháng/năm" class="form-control selDate"  name="" id="" value=""/>';
                    myarr.component += '    </div>';
                    myarr.component += '    <div class ="box_icon"><button class="btn btn-default"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';
                    myarr.component += '     <button class="btn btn-default btnDelete"><i class="fa fa-times" aria-hidden="true"></i></button></div>';
                    myarr.component += '</div>';
                    break;
            }
        }
    });

//    Thả
    $('.page_left').droppable({
        accept: '.column_select',
        drop: function () {
            $('.dropable').append(myarr.column);
            set_drop();
            edit_header();
            hover_row_component();
        }
    });

    set_drop();

    function set_drop() {
        $('.column_sel').droppable({
            drop: function () {
                if ($(this).children().length <= 0) {
                    $(this).append(myarr.component);
                }
                $('.btn_edit').click(function () {
                    $('#modalComponent').modal('show');
                });
                selDate('.selDate');
                delComponent();
                edit_header();
                hover_row_component();
            }
        });
    }

    function selDate(selector) {
        var d = new Date();

        var currDate = d.getDate();
        var currMonth = d.getMonth();
        var currYear = d.getFullYear();

        var dateStr = currDate + "/" + currMonth + "/" + currYear;
        var now = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);

        $(selector).datepicker({
            format: "dd/mm/yyyy",
            language: "vi",
            defaultDate: dateStr,
            pick12HourFormat: true,
            minDate: true,
            changeYear: true,
            todayHighlight: true,
            autoclose: true
        });
    }

    //btnSave
    $('.form_builder_save').click(function () {
        var html = $('.page_left').html();
        $('.form_designed').html(html);
    });

    function delComponent() {
        $('.page_left').find('.column_sel').each(function () {
            $(this).find('.btnDelete').click(function () {
                $(this).parents('.column_sel').html('');
            });
        });
    }

    $('.btnClear').click(function () {
        var html = '<div class="row">';
        html += '   <div class="col-md-12 column_sel ui-droppable">';
        html += '   </div>';
        html += '</div>';
        $('.dropable').html(html);
        set_drop();
    });

//    edit header    
    edit_header();
    function edit_header() {
        $('.title').each(function () {
            var val_old = $(this).text();
            var html = '<div class="col-md-6 col-md-offset-3"><h3><input type="text" class="form-control input_title" value="' + val_old + '" / ></h3></div';
            set_val(val_old);

            $(this).click(function () {
                $('.header').html(html);
                $('.input_title').focus();
//                $('.input_title').blur(function () {
//                    var val_new = $(this).val();
//                    $('.header').html(set_val(val_new));
//                    edit_header();
//                });
                $('.input_title').keyup(function (e) {
                    if (e.keyCode === 13)
                    {
                        var val_keyup = $(this).val();
                        if (val_keyup === '') {
                            $('.header').html(set_val(val_old));
                        }
                        else {
                            $('.header').html(set_val(val_keyup));
                        }
                    }
                    edit_header();
                });
            });
        });
        $('.head_fieldset').each(function () {
            var val_old = $(this).text();
            var html = '<div class="col-md-12"><input type="text" class="form-control input_fieldset" value="' + val_old + '" / ></div';
            set_val_fieldset(val_old);

            $(this).click(function () {
                $(this).parents('.box_header').html(html);
                $('.input_fieldset').focus();
                $('.input_fieldset').blur(function () {
                    var val_new = $(this).val();
                    $(this).parents('.box_header').html(set_val_fieldset(val_new));
                    edit_header();
                });
                $('.input_fieldset').keyup(function (e) {
                    if (e.keyCode === 13)
                    {
                        var val_keyup = $(this).val();
                        if (val_keyup === '') {
                            $(this).parents('.box_header').html(set_val_fieldset(val_old));
                        }
                        else {
                            $(this).parents('.box_header').html(set_val_fieldset(val_keyup));
                        }
                    }
                    edit_header();
                });
            });
        });
    }
    function set_val(value) {
        var html = '<h3 class=""><label class="title col-md-8 col-md-offset-2">' + value + '</label></h3>';
        return html;
    }
    ;
    function set_val_fieldset(value) {
        var html = '<h4><label class="head_fieldset col-md-12">' + value + '</label></h4>';
        return html;
    }

//    hover row column
    hover_row_component();
    function hover_row_component() {
        $('.dropable').find('.col_com').each(function () {
            $(this).mouseover(function () {
                var string = $(this).find('.column_sel');
                if (string.children().length <= 0) {
                    $(this).find('.icon_row').css('display', 'block');
                }
            })
                    .mouseout(function () {
                        $(this).find('.icon_row').css('display', 'none');
                    });

        });
        $('.dropable').find('.col_com').each(function () {
            $(this).find('.btnDeleteRow').click(function () {
                console.log($(this).parents('.col_com'));
                $(this).parents('.col_com').remove();
            });
        });
    }
    
    //Get width col-md-6
//    
//    alert($('.col_com .col-md-6').find('label.control-label').width());


});

