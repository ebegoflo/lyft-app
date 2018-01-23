// var btnReturn = $(".btn-return");
// var btnNext = $(".btn-next");
var $phoneNewUser = $("#phone_inpunt");
var $VerifierCode = $('#code_input');
var $VerifierFirst= $("#first_name");
var $VerifierlastName = $("#last-name");
var $Verifieremail = $("#email");

var changeScreen = function () {
  $("#sing_Up").click(SignUp);

  function SignUp() {
    $('.screen2').hide();
    $('.screen3').show();
  }
 $phoneNewUser.keyup(ValidateInputPhone);
 $VerifierCode.keyup(ValidateInputPhone);
 // $VerifierFirst.keyup(validateInputInfo); a resolver para que se active boton next cuando suceda el evento
 // $VerifierlastName.keyup(validateInputInfo);
 // $Verifieremail.keyup(validateInputInfo);
 $("#valid_Phone").click(verifyNumberPhone);
 $("#valid_code").click(newCode);
 $("#resend_code").click(otherCoder);
 $("#complete_registration").click(welcomeLyft);
 $("#return_sing_up").click(returnInit);
 $("#return_enter_phone").click(returnPhone);
 $("#return_code").click(returnScreenCode);


}

var ValidateInputPhone = function () {
  // En esta funcion vamos a validar que se ingrese un numero de telefono, (investigar para poder filtrar por pais)
  //   var exclusiveNumber = /^[0-9]+$/; estudiar como poder utilizar esa expresión adecuadamente
  //   var phoneAndCode = $(this).val();
  // //
 if ($(this).val().trim().length > 0) {
    $(".btn-next").removeAttr('disabled');
  } else {
    $(".btn-next").attr('disabled',true);
  }
};

// función a resolver para que esten deshabilitados los botones next
// var validateInputInfo = function() {
//   if ($(this).val().trim().length > 0) {
//     $(".btn-next").removeAttr('disabled');
//   } else {
//     $(".btn-next").attr('disabled',true);
//   }
// };


// funciones que manda alert y cambia de vistas
var verifyNumberPhone = function () {
  alert("Your code is " );

  $('.screen3').hide();
  $('.screen5').show();

};

var newCode = function(){
  $('.screen5').hide();
  $('.screen6').show();

};

var welcomeLyft = function(){
  $('.screen6').hide();
  $('.screen7').show();

};

// funcion que envia nuevamente el codigo
var otherCoder = function () {

  alert("Your new code is ");

}

// botones return regresar entre las vistas
var returnInit = function (e) {
  e.preventDefault();
  $('.screen3').hide();
  $('.screen2').show();
}

var returnPhone = function (e) {
  e.preventDefault();
  $('.screen5').hide();
  $('.screen3').show();
}

var returnScreenCode = function (e) {
  e.preventDefault();
  $('.screen6').hide();
  $('.screen5').show();
}


  $(document).ready(changeScreen);
