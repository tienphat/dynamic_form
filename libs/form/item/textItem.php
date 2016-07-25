<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class textItem extends abstractItem {
    
    public function renderDetails(){
        $base_html = parent::renderDetails();
        ob_start();
        ?>
        <form class="form-horizontal" id="frmTextItem" name="frmTextItem" action="" method="POST">
            <?php echo $base_html?>
        </form>
        <?php
        $html = ob_get_clean();
        
        return $html;
    }
    
    public function renderView(){
        
    }
    
    public function setItemName(){
        $this->ItemName = 'Textbox';
        return $this;
    }
    
    public function getItemName(){
        return $this->ItemName;
    }
}