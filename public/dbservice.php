<?php
include('dbconfig.inc.php');

	try {
		//start connection with database. $CONF is in dbconfig.inc.php file
		$db = new PDO ("mysql:host=".$CONF['servername'].";dbname=".$CONF['dbname'],$CONF['username'],$CONF['password']);
		
		//set attributes to allow throwing exceptions whenn error
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
		
		
		//check if 'add' is set
		if(isset($_GET['add'])) {
			header("Access-Control-Allow-Origin: *");
			if(isset($_GET['backgroundColor'])&&isset($_GET['width'])&&
				isset($_GET['height'])&&isset($_GET['borderRadius'])) {
					
				$query="INSERT INTO rect (backgroundColor, width, height, borderRadius) ".
						"VALUES ('".$_GET['backgroundColor']."',".$_GET['width'].",".$_GET['height'].",".$_GET['borderRadius'].")";
			
				$db->exec($query);
				exit('success');
			} else
				exit('wrong data');
		} 
		
		
		//check if 'get' is set
		else if(isset($_GET['get'])) {
			
			$query = "SELECT * FROM rect ";
				
			if(isset($_GET['id'])) {
				$query = $query."WHERE ID =".$_GET['id'];
			}
				
			$stmt = $db->query($query);
				
			while($row = $stmt->fetchObject()) {
				$rowObject['id'] = $row->ID;
				unset($row->ID);
				$rowObject['style'] = $row;
				
				$rowObject['style']->width = intval($rowObject['style']->width);
				$rowObject['style']->height = intval($rowObject['style']->height);
				$rowObject['style']->borderRadius = intval($rowObject['style']->borderRadius);
				
				$rows[] = $rowObject;
			}
			$stmt->closeCursor();
			
			$jsonRows = json_encode($rows);
			header("Access-Control-Allow-Origin: *");
			header("Content-Type: application/json");
			echo $jsonRows;
		}
		
		
		//check if 'update' is set
		else if(isset($_GET['update'])) {
			header("Access-Control-Allow-Origin: *");
			
			$query = "UPDATE rect SET ";
			
			if(isset($_GET['backgroundColor'])) {
				$query.="backgroundColor = '".$_GET['backgroundColor']."', ";
			}
			if(isset($_GET['width'])) {
				$query.="width = ".$_GET['width'].", ";
			}
			if(isset($_GET['height'])) {
				$query.="height = ".$_GET['height'].", ";
			}
			if(isset($_GET['borderRadius'])) {
				$query.="borderRadius = ".$_GET['borderRadius']." ";
			}
			if(isset($_GET['id'])) {
				$query.="WHERE ID = ".$_GET['id'];
			}
			else
				exit("wrong data");
			
			$db->exec($query);
			
			exit("success");
		}
		
		
		//check if 'delete' is set
		else if(isset($_GET['delete'])) {
			header("Access-Control-Allow-Origin: *");
			
			if(isset($_GET['id'])) {
			
				$query = "DELETE FROM rect WHERE ID=".$_GET['id'];
				
				$db->exec($query);
				exit('success');
			} else
				exit('wrong data');
		}
		
		
		//below is two experimental functions; it will be added at the end
		else if(isset($_GET['check'])) {
			$stmt=$db->query("SHOW DATABASES LIKE '".$CONF['dbname']."'");
			
			foreach($stmt as $row) {
				if(!empty($row))
					exit(true);
				else
					exit(false);
			}
		}
		
		else if(isset($_GET['setup'])) {
			
		}
	}
	catch(PDOException $e) {
		echo $query." ".$e->getMessage();
	}
	
	$db = null;
?>