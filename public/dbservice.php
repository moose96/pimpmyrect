<?php
	//check if 'add' is set
	$fname = 'data/pimpmyrect.json';
	$jsonObject = file_get_contents($fname);
	$elements = json_decode($jsonObject);
	
	if(isset($_GET['add'])) {
		header("Access-Control-Allow-Origin: *");
		if(isset($_GET['backgroundColor'])&&isset($_GET['width'])&&
			isset($_GET['height'])&&isset($_GET['borderRadius'])) {
				$newElement = (object) array();
				$style = (object) array();
					
				$style = $_GET;
				unset($style['add']);
				
				$style['width'] = (int) $style['width'];
				$style['height'] = (int) $style['height'];
				$style['borderRadius'] = (int) $style['borderRadius'];
				
				$newElement->id=(string) (end($elements)->id+1);
				$newElement->style= $style;
					
				$elements[] = $newElement;
				
				$jsonString = json_encode($elements);
								
				file_put_contents($fname,$jsonString);
				exit('success');
			} else
				exit('wrong data');
		} 
		
		
	//check if 'update' is set
	else if(isset($_GET['update'])) {
		header("Access-Control-Allow-Origin: *");
			
		if(isset($_GET['id'])) {
			foreach($elements as $el) {
				if($el->id===$_GET['id']) {
					if(isset($_GET['backgroundColor'])) {
						$el->style->backgroundColor=$_GET['backgroundColor'];
					}
					if(isset($_GET['width'])) {
						$el->style->width=(int)$_GET['width'];
					}
					if(isset($_GET['height'])) {
						$el->style->height=(int)$_GET['height'];
					}
					if(isset($_GET['borderRadius'])) {
						$el->style->borderRadius=(int)$_GET['borderRadius'];
					}
				}
			}
		}
		else
			exit("wrong data");
		
		$jsonString =json_encode($elements);
		file_put_contents($fname,$jsonString);
		
		exit('success');
	}
		
		
	//check if 'delete' is set
	else if(isset($_GET['delete'])) {
		header("Access-Control-Allow-Origin: *");
		
		if(isset($_GET['id'])) {
			for($i=0;$i<count($elements);$i++) {
				if($elements[$i]->id===$_GET['id'])
					unset($elements[$i]);
			}
			
			$jsonString = json_encode($elements);
			file_put_contents($fname,$jsonString);
			
			exit('success');
		} else
			exit('wrong data');
	}
?>