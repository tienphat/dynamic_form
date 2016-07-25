<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class textAreaItem extends abstractItem {
    
    public function renderDetails(){
        $base_html = parent::renderDetails();
        ob_start();
        ?>
        <form class="form-horizontal" id="frmTextAreaItem" name="frmTextAreaItem" action="" method="POST">
            <?php echo $base_html?>
        </form>
        <?php
        $html = ob_get_clean();
        
        return $html;
    }
    
    public function renderView(){
        
    }
    
    public function setItemName(){
        $this->ItemName = 'Text Area';
        return $this;
    }
    
    public function getItemName(){
        return $this->ItemName;
    }
}