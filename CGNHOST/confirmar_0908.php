<?PHP

define('kOptional', true);
define('kMandatory', false);

error_reporting(E_ERROR | E_WARNING | E_PARSE);
ini_set('track_errors', true);

function DoStripSlashes($fieldValue)  { 
 if ( get_magic_quotes_gpc() ) { 
  if (is_array($fieldValue) ) { 
   return array_map('DoStripSlashes', $fieldValue); 
  } else { 
   return stripslashes($fieldValue); 
  } 
 } else { 
  return $fieldValue; 
 } 
}

function FilterCChars($theString) {
 return preg_replace('/[\x00-\x1F]/', '', $theString);
}

function CheckEmail($email, $optional) {
 if ( (strlen($email) == 0) && ($optional === kOptional) ) {
  return true;
 } elseif ( eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$", $email) ) {
  return true;
 } else {
  return false;
 }
}


function CheckValueList_banco($values, $valType, $optional) {

 $selCnt = 0;

 $valueList[] = 'Banco do Brasil';
 $valueList[] = 'Banco Bradesco';
 $valueList[] = 'Banco Original';
 $valueList[] = 'Banco Nubank';
  

 if (!is_array($values)) {
  if (strlen($values) > 0) {
   $values = array($values);
  } else {
   $values = array();
  }
 }

 foreach ($values as $valuesKey => $valuesVal) {
  foreach ($valueList as $valueListKey => $valueListVal) {  
   if ($valueListVal == $valuesVal) {
    $selCnt++;
    break;
   }
  } 
  reset($valueList);
 }

 if ((count($values) == 0) && ($optional === kOptional)) {
  return true;
 } elseif (($valType == 1) && ($selCnt > 0)) {
  return true;
 } elseif (($valType == 2) && ($selCnt == count($valueList))) {
  return true;
 } elseif (($valType == 3) && ($selCnt == 0)) {
  return true;
 } else {
  return false;
 }
 
}
function CheckValueList_deposito($values, $valType, $optional) {

 $selCnt = 0;

 $valueList[] = 'Depósito em Dinheiro';
 $valueList[] = 'Transferência Bancária';
 $valueList[] = 'Pagamento em Lotérica';
 $valueList[] = 'DOC Eletrônico';
  

 if (!is_array($values)) {
  if (strlen($values) > 0) {
   $values = array($values);
  } else {
   $values = array();
  }
 }

 foreach ($values as $valuesKey => $valuesVal) {
  foreach ($valueList as $valueListKey => $valueListVal) {  
   if ($valueListVal == $valuesVal) {
    $selCnt++;
    break;
   }
  } 
  reset($valueList);
 }

 if ((count($values) == 0) && ($optional === kOptional)) {
  return true;
 } elseif (($valType == 1) && ($selCnt > 0)) {
  return true;
 } elseif (($valType == 2) && ($selCnt == count($valueList))) {
  return true;
 } elseif (($valType == 3) && ($selCnt == 0)) {
  return true;
 } else {
  return false;
 }
 
}


if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
 $clientIP = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
 $clientIP = $_SERVER['REMOTE_ADDR'];
}

$FTGnome = DoStripSlashes( $_REQUEST['nome'] );
$FTGemail = DoStripSlashes( $_REQUEST['email'] );
$FTGbanco = DoStripSlashes( $_REQUEST['banco'] );
$FTGdeposito = DoStripSlashes( $_REQUEST['deposito'] );
$FTGdata = DoStripSlashes( $_REQUEST['data'] );
$FTGnumero = DoStripSlashes( $_REQUEST['numero'] );
$FTGfatura = DoStripSlashes( $_REQUEST['fatura'] );
$FTGvalor = DoStripSlashes( $_REQUEST['valor'] );
$FTGinformacoes = DoStripSlashes( $_REQUEST['informacoes'] );

# Fields Validations
        
$validationFailed = false;
if (!CheckEmail($FTGemail, kMandatory)) { $validationFailed = true; }

if (!CheckValueList_banco($FTGbanco, 1, kMandatory)) { $validationFailed = true; }

if (!CheckValueList_deposito($FTGdeposito, 1, kMandatory)) { $validationFailed = true; }



# Redirect user to the error page

if ($validationFailed === true) {

 header("Location: http://www.cgnhost.com/confirmar.php");
 exit;

}
# Email to Form Owner

$emailSubject = FilterCChars("CONFIRMAÇÃO DE DEPÓSITO - $FTGnome");

$emailBody = "CONFIRMAÇÃO DE DEPÓSITO\n"
 . "Dominio : $FTGnome\n"
 . "E-Mail : $FTGemail\n"
 . "\n"
 . "Banco : $FTGbanco\n"
 . "Forma de Pago : $FTGdeposito\n"
 . "Data : $FTGdata\n"
 . "Agência : $FTGnumero\n"
 . "\n"
 . "Fatura Número de Controle : $FTGfatura\n"
 . "Valor : R$$FTGvalor\n"
 . "\n"
 . "Outras Informações:  : $FTGinformacoes\n"
 . "\n"
 . "Confirmação recebida.\n"
 . "" . date('d/m/Y') . " - " . date('H:i:s') . "\n"
 . "\n"
 . "";
 $emailTo = 'ADMIN CGNhost <financesac@cgnhost.com>';
  
 $emailFrom = FilterCChars("$FTGemail");
  
 $emailHeader = "From: $emailFrom\n"
  . "MIME-Version: 1.0\n"
  . "Content-type: text/plain; charset=\"ISO-8859-1\"\n"
  . "Content-transfer-encoding: 8bit\n";
  
 mail($emailTo, $emailSubject, $emailBody, $emailHeader);


# Confirmation Email to User

# Redirect user to success page

header("Location: http://www.cgnhost.com/confirmar_deposito_done.php");
exit;
?>