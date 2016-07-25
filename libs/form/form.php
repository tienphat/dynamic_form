<?php
require SERVER_ROOT . DS . 'lib' . DS . 'form' . DS . 'abstract' . DS . 'abstractItem.php';

require SERVER_ROOT . DS . 'lib' . DS . 'form' . DS . 'item' . DS . 'checkboxItem.php';
require SERVER_ROOT . DS . 'lib' . DS . 'form' . DS . 'item' . DS . 'labelItem.php';
require SERVER_ROOT . DS . 'lib' . DS . 'form' . DS . 'item' . DS . 'radioItem.php';
require SERVER_ROOT . DS . 'lib' . DS . 'form' . DS . 'item' . DS . 'selectItem.php';
require SERVER_ROOT . DS . 'lib' . DS . 'form' . DS . 'item' . DS . 'textAreaItem.php';
require SERVER_ROOT . DS . 'lib' . DS . 'form' . DS . 'item' . DS . 'textItem.php';

class form {
    
    private $checkbox;
    private $label;
    private $radio;
    private $select;
    private $textarea;
    private $text;
    private $listItem;
    
    public function __construct() {
        $this->checkbox = new checkBoxItem();
        $this->label = new labelItem();
        $this->radio = new radioItem();
        $this->select = new selectItem();
        $this->textarea = new textAreaItem();
        $this->text = new textItem();
        
        $this->listItem = array(
            'checkbox' => array('name' => $this->checkbox->getItemName(), 
                                'object' => $this->checkbox),
            'label' => array('name' => $this->label->getItemName(), 
                                'object' => $this->label),
            'radio' => array('name' => $this->radio->getItemName(), 
                                'object' => $this->radio),
            'select' => array('name' => $this->select->getItemName(), 
                                'object' => $this->select),
            'textarea' => array('name' => $this->textarea->getItemName(), 
                                'object' => $this->textarea),
            'text' => array('name' => $this->text->getItemName(), 
                                'object' => $this->text),
        );
    }
    
    public function getListItem(){
        $arr_return = array();
        foreach($this->listItem as $key => $item)
        {
            $arr_return[$key] = $item['name'];
        }
                
        return $arr_return;
    }
    
    public function getView($type){
        if(isset($this->listItem[$type]))
        {
            return $this->listItem[$type]['object']->renderView();
        }
        return '';
    }
    
    public function getDetail($type){
        
        if(isset($this->listItem[$type]))
        {
            return $this->listItem[$type]['object']->renderDetails();
        }
        return '';
    }
}