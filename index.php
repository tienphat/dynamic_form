<?php
    ini_set('date.timezone', 'Asia/Ho_Chi_Minh');

    define('DS', DIRECTORY_SEPARATOR);
    define('SERVER_ROOT', __DIR__ . DS);
    require SERVER_ROOT . 'config.php';
    
?>
<html>
    <head>
        <meta charset="utf-8">
        <title>Thiết kế form Hành Chính Công</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" type="text/css" media="screen" href="assets/css/lib/formBuilder.min.css">
        <link href="assets/css/lib/bootstrap.css" rel="stylesheet">
        <link href="assets/css/lib/bootstrap-responsive.min.css" rel="stylesheet">
        <link href="assets/css/custom.css" rel="stylesheet">
        <link href="assets/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" type="text/css" href="assets/libs/datepicker.css" />

		<script type="text/javascript" charset="utf-8" src="assets/js/angular.min.js"></script>
        <script type="text/javascript" charset="utf-8" src="assets/js/jquery.min.js"></script>
        <script type="text/javascript" charset="utf-8" src="assets/js/bootstrap.min.js"></script>
        <script type="text/javascript" charset="utf-8" src="assets/js/formbuilder.min.js"></script>
        <script type="text/javascript" charset="utf-8" src="assets/js/jquery-ui.min.js"></script>

        <script type="text/javascript" charset="utf-8" src="assets/libs/bootstrap-datepicker.js"></script>
        <script type="text/javascript" charset="utf-8" src="assets/libs/locales/bootstrap-datepicker.vi.js"></script>
        <script type="text/javascript" charset="utf-8" src="assets/js/main.js" ></script>
    </head>

    <body>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Thiết kế form Hành Chính Công</a>
                </div>
            </div>
        </nav>
        <div class="container design_form">
            <div class="row">
                <div class="col-md-10">
                    <div class="page_left">
                        <div class="head_page">
                            <div class="header text-center box_header">
                                <h3 class=""><label class="title col-md-8 col-md-offset-2">Tiêu đề</label></h3>
                            </div>
                        </div>
                        <ul class="dropable list-unstyled">

                        </ul>
                    </div>
                </div>
                <div class="col-md-2 ">
                    <div class="page_right ">
                        <ul id="frmb-2-control-box" class="frmb-control ui-sortable">
                            <li class="column_select" data-column="Column1"><i class="fa fa-table" aria-hidden="true"></i> <span>Add row</span></li>
                            <li class="icon-header column_select" data-column="Header"><span>Header</span></li>

                            <li class="icon-text-input component" data-components="Text"><span>Text</span></li>
                            <li class="icon-text-area component" data-components="Text Area"><span>Text Area</span></li>
                            <li class="icon-radio-group component" data-components="Radio"><span>Radio</span></li>
                            <li class="icon-checkbox component" data-components="Checkbox"><span>Checkbox</span></li>
                            <li class="icon-select component" data-components="Select"><span>Select</span></li>
                            <li class="icon-calendar component item_dragable" data-components="Date_Field"><span>Date Field</span></li>    
                        </ul>
                        <div class="form-actions btn-group">
                            <button id="frmb-0-clear-all" type="button" class="clear-all btn btn-default btnClear">Clear</button>
                            <button id="frmb-0-view-data" type="button" class="view-data btn btn-default">&lt;/&gt;</button>
                            <button class="btn btn-primary form_builder_save" id="frmb-0-save" type="button">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container form_designed">

        </div>
        <div id="modalComponent" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Modal Header</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label class="col-md-12 control-label"> ID / Name </label>
                            <div class="col-md-12">
                                <input class="form-control field" data-type="input" type="text" name="id" id="id" value="textinput">
                            </div>
                        </div><div class="form-group">
                            <label class="col-md-12 control-label"> Label Text </label>
                            <div class="col-md-12">
                                <input class="form-control field" data-type="input" type="text" name="label" id="label" value="Text Input">
                            </div>
                        </div><div class="form-group">
                            <label class="col-md-12 control-label"> Placeholder </label>
                            <div class="col-md-12">
                                <input class="form-control field" data-type="input" type="text" name="placeholder" id="placeholder" value="placeholder">
                            </div>
                        </div>
                        <div class="checkbox">
                            <div class="col-md-12">
                                <label>
                                    <input type="checkbox" data-type="checkbox" class="field" name="required" id="required">
                                    Required
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label"> Input Size </label>
                            <div class="col-md-8">
                                <select class="form-control field" data-type="select" id="inputsize">
                                    <option value="col-md-1">Mini</option>
                                    <option value="col-md-2">Small</option>
                                    <option value="col-md-4" selected="">Medium</option>
                                    <option value="col-md-5">Large</option>
                                    <option value="col-md-6">Xlarge</option>
                                    <option value="col-md-8">Xxlarge</option>
                                </select>
                            </div>
                        </div>
                        <hr>
                        <div class="form-group box_button text-center">
                            <button id="save" class="btn btn-info btnSave">Lưu</button>&nbsp;
                            <button id="cancel" class="btn btn-danger">Hủy</button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    </body>
</html>
