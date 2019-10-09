<?php
include("include/connection.php");

require "jwt/vendor/autoload.php";

use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

session_start();
// header('Content-Type: application/json');





if (isset($_SERVER['HTTP_ORIGIN'])) {
	header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    // header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Credentials: true');    
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); 
}   
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
		header("Access-Control-Allow-Headers:{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

	exit(0);
}





function folderSize($dir){
	$count_size = 0;
	$count = 0;
	$dir_array = scandir($dir);
	foreach($dir_array as $key=>$filename){
		if($filename!=".." && $filename!="."){
			if(is_dir($dir."/".$filename)){
				$new_foldersize = foldersize($dir."/".$filename);
				$count_size = $count_size+ $new_foldersize;
			}else if(is_file($dir."/".$filename)){
				$count_size = $count_size + filesize($dir."/".$filename);
				$count++;
			}
		}
	}
	return $count_size;
}


// Generate token
// function getToken(){
// 	$token = mt_rand(5, 15);

//  return $token;
// }


//added for axios post request nuxt.js app
// $_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_REQUEST['Sign_in']) && $_REQUEST['Sign_in']=="Sign_in"){
	$data=array();
	$query=mysql_query("SELECT * FROM signup_user_data WHERE Email_ID='".$_POST['email']."' and Password='".$_POST['password']."'") or die(mysql_error());

	$dirname = dirname(__FILE__) . '/uploads/Storage/115/';


	$data['sss'] = "sss";





  $secretKey = "6Lf9C6sUAAAAAKBmwxRXphqfzfby23rZkMk0wnso";

  $ip = $_SERVER['REMOTE_ADDR'];
        // post request to server
  $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($_POST['captcha']);
  $response = file_get_contents($url);
  $responseKeys = json_decode($response,true);
  $data['capthh'] = $responseKeys["success"];
        // should return JSON with success as true
  if($responseKeys["success"]) {
     $data['captcha'] = '<h2>Thanks for posting comment</h2>';


    $secret_key = "YOUR_SECRET_KEY";
        $issuer_claim = "THE_ISSUER"; // this can be the servername
        $audience_claim = "THE_AUDIENCE";
        $issuedat_claim = time(); // issued at
        $notbefore_claim = $issuedat_claim + 10; //not before in seconds
        $expire_claim = $issuedat_claim + 60; // expire time in seconds
        $token = array(
        	"iss" => $issuer_claim,
        	"aud" => $audience_claim,
        	"iat" => $issuedat_claim,
        	"nbf" => $notbefore_claim,
        	"exp" => $expire_claim,
        	"data" => array(
        		"id" => $id,
        		"firstname" => $firstname,
        		"lastname" => $lastname,
        		"email" => $email
        	));

        http_response_code(200);



        $jwt = JWT::encode($token, $secret_key);
        $data['val'] =  json_encode(
        	array(
        		"message" => "Successful login.",
        		"jwt" => $jwt,
        		"email" => $_POST['email'],
        		"expireAt" => $expire_claim
        	));


		 // $f = $dirname;
   //  $io = popen ( '/usr/bin/du -sk ' . $f, 'r' );
   //  $size = fgets ( $io, 4096);
   //  $size = substr ( $size, 0, strpos ( $size, "\t" ) );
   //  pclose ( $io );

        $size=folderSize($dirname);










        $data['xxx'] = "SELECT * FROM signup_user_data WHERE Email_ID='".$_POST['email']."' and Password='".$_POST['password']."'";
        $data['size'] = $size;
        $data['email']= $_POST['email'];	
        $data['password']= $_POST['password'];	
        if(mysql_num_rows($query)>0){
        	$row=mysql_fetch_assoc($query);

        	$data['iddd']= $row['id'];	
        	$curdate=date("Y-m-d H:i:s");
        	if($row['Status']== 1){
				// $data['error']='error';
				// $data['Message']="Your account suspended, please contact your Admin!!!";


        		$data['success']='success';
        		session_regenerate_id();
        		$_SESSION['userid']=$data['iddd'];
        		$_SESSION['isLogged']= 1 ;
        		$_SESSION['SESSIONID']= session_id();
        		$_SESSION['CURRENTUSER']=$data['iddd'];
        		$data['sess'] = $_SESSION;
        		$_SESSION['User_Type']=$row['User_Type'];
        		$data['succeuseridss']= $_SESSION['userid'];
        		$data['User_id']=$row['id'];



        		// $token = $jwt;

        		// $data['$_SESSION[token]'] = $_SESSION['token'];


        		// $result_token = mysql_query("select * from user_token where username='".$_SESSION['userid']."'");


        		// if(mysql_num_rows($result_token)>0){
        		// 	while($row = mysql_fetch_assoc($result_token)){


        		// 		$data['sssTOken'] = $row['token'];


        		// 		if($_SESSION['token'] == $row['token']){

        		// 			$data['yy'] = "same user";

        		// 			mysql_query("update user_token set token='".$token."' where username='".$_SESSION['userid']."'");

        		// 			$_SESSION['token'] = $token;

        		// 		}else{

        		// 			$data['error']='error';
        		// 			$data['Message']="다른기기에서 로그인 되어있습니다. 하나의 기기에서만 이용이 가능합니다";	

        		// 			$data['yy'] = "multi";


        		// 			$res = json_encode($data);
        		// 			echo $res;	
        		// 			exit;



        		// 		}


        		// 	}

        		// }else{
        		// 	mysql_query("insert into user_token(username,token) values('".$_SESSION['userid']."','".$token."')");

        		// 	$_SESSION['token'] = $token;
        		// }







        		$data['Plan_Type']=$row['Plan_Type'];
        		$data['Company_Name']=$row['Company_Name'];
        		$_SESSION['Company_Name']=$row['Company_Name'];

        		$data['User_Type']=$row['User_Type'];
        		if($row['User_Type']=='DialogggAdmin'){
        			$data['Admin_id']=$row['id'];				
        			$_SESSION['Admin_id']=$row['id'];
        		}else if($row['User_Type']=='Admin' || $row['User_Type']=='Demo'){
        			$data['Admin_id']=$row['id'];				
        			$_SESSION['Admin_id']=$row['id'];
        		}else{
        			$data['Admin_id']=$row['Admin_id'];				
        			$_SESSION['Admin_id']=$row['Admin_id'];				
        		}
        	}else if($row['Status']==0){
        		$data['error']='error';
        		$data['Message']="이용정지된 회원계정입니다. 사용할 수 없습니다'";	
        	}
        }else{

            if($row['login_attempts'] < 3){


                    $query=mysql_query("UPDATE signup_user_data SET login_attempts = login_attempts + 1 WHERE Email_ID='".$_POST['email']."' and Password='".$_POST['password']."'") or die(mysql_error());

            }else{


                    $query=mysql_query("UPDATE signup_user_data SET Status = -3 WHERE Email_ID='".$_POST['email']."' and Password='".$_POST['password']."'") or die(mysql_error());



            }




            


        	$data['error']='error';
        	$data['Message']="이메일주소나 비밀번호가 일치하지 않습니다. 확인 후 다시 시도하여 주세요";	
        }



    } else {
        $data['captcha'] =  '<h2>You are spammer ! Get the @$%K out</h2>';
    }





    $res = json_encode($data);
    echo $res;	
    exit;
}else if(isset($_REQUEST['superadmin']) && $_REQUEST['superadmin']=="superadmin"){
   $query=mysql_query("SELECT * FROM super_admin WHERE Email_ID='".$_REQUEST['email']."' and Password='".$_REQUEST['password']."'") or die(mysql_error());

   $dirname = dirname(__FILE__) . '/uploads/Storage/115/' ;

		 // $f = $dirname;
   //  $io = popen ( '/usr/bin/du -sk ' . $f, 'r' );
   //  $size = fgets ( $io, 4096);
   //  $size = substr ( $size, 0, strpos ( $size, "\t" ) );
   //  pclose ( $io );

   $size=folderSize($dirname);


   $data=array();
   $data['size'] = $size;
   $data['email']= $_REQUEST['email'];	
   $data['email']= $_REQUEST['email'];	
   if(mysql_num_rows($query)>0){
      $row=mysql_fetch_assoc($query);
      $data['iddd']= $row['id'];	
      $curdate=date("Y-m-d H:i:s");
      if($row['Status']==0 || $row['Status']== 1){
				// $data['error']='error';
				// $data['Message']="Your account suspended, please contact your Admin!!!";


         $data['success']='ggg';
         session_regenerate_id();
         $_SESSION['userid']=$data['iddd'];
         $_SESSION['isLogged']= 1 ;
         $_SESSION['SESSIONID']= session_id();
         $_SESSION['CURRENTUSER']=$data['iddd'];
         $_SESSION['User_Type']=$row['User_Type'];
         $data['succeuseridss']= $_SESSION['userid'];
         $data['User_id']=$row['id'];

         $data['Plan_Type']=$row['Plan_Type'];
         $data['Company_Name']=$row['Company_Name'];
         $_SESSION['Company_Name']=$row['Company_Name'];

         $data['User_Type']=$row['User_Type'];
         if($row['User_Type']=='DialogggAdmin'){
            $data['Admin_id']=$row['id'];				
            $_SESSION['Admin_id']=$row['id'];
        }else if($row['User_Type']=='Admin' || $row['User_Type']=='Demo'){
            $data['Admin_id']=$row['id'];				
            $_SESSION['Admin_id']=$row['id'];
        }else{
            $data['Admin_id']=$row['Admin_id'];				
            $_SESSION['Admin_id']=$row['Admin_id'];				
        }
    }
}else{
  $data['error']='error';
  $data['Message']="Please enter a correct username and password!!!";	
}
$res = json_encode($data);
echo $res;
exit;	
}else if(isset($_REQUEST['Sign_OUT']) && $_REQUEST['Sign_OUT']=="Sign_OUT"){		
   $data=array();	



   $result_token = mysql_query("select * from user_token where username='".$_SESSION['userid']."'");


   if(mysql_num_rows($result_token)>0){


     mysql_query("DELETE FROM user_token WHERE username='".$_SESSION['userid']."'")or die(mysql_error());

 }


 unset($_SESSION);
 session_unset();
 session_destroy(); 
 $data['success']='success';




 $_SESSION['isLogged']= 0;
 $res = json_encode($data);
 echo $res;	
}else if(isset($_REQUEST['checkSigninStatus']) && $_REQUEST['checkSigninStatus']=="checkSigninStatus"){		
   $data=array();	

   $data['isLogged'] = 1;

	// if(	$_SESSION['isLogged'] == 0){

	// 		$data['isLogged'] = 0;
	// }
	// else if($_SESSION['isLogged'] == 1){

	// 	$data['isLogged'] = 1;

	// }


   $res = json_encode($data);
   echo $res;	
   exit;
}
else if(isset($_REQUEST['user_Detail']) && $_REQUEST['user_Detail']=="user_Detail"){
   $query=mysql_query("SELECT First_Name, Last_Name, Status, UserProfileImage, id, Plan_Type,Job_Position,Company_Name,User_Type,Email_ID, Password FROM signup_user_data WHERE id='".$_REQUEST['userID']."'") or die(mysql_error());
   $data=array();		
   if(mysql_num_rows($query)>0){
      while($row = mysql_fetch_assoc($query)){
         $data[] = $row;
     }
 }
 $res = json_encode($data);
 echo $res;	
 exit;
}
?>
