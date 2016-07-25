<?php

abstract class abstractItem{

    public function __construct() {
    }
    
    public function renderDetails(){
        $html = '';
        ob_start();
        ?>
            <div class="form-group">
                <label class="col-md-2 control-label">Nhãn đối tượng: <i class="require">(*)</i></label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="txtLabel" name="txtLabel" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-2 control-label">Id: <i class="require">(*)</i></label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="txtId" name="txtId" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-2 control-label">Cho phép để trống:</label>
                <div class="col-lg-10">
                    <input type="checkbox" class="form-control" id="chkRequire" name="chkRequire" value="1" />
                </div>
            </div>
        <?php
        $html = ob_get_clean();
        return $html;
    }
    
    abstract public function renderView();
    abstract public function setItemName();
    abstract public function getItemName();
}