$(document).ready(function() {

$("#register").click(function(e) {
e.preventDefault();

var name = $("#name").val();
var datepicker = $("#datepicker").val();
var storagetype = $("#storagetype").val();
var storagefeatures = $("#storagefeatures").val();
var dim = $("#dim").val();
var txtarea = $("#txtarea").val();
var rent = $("#rent").val();
if (name == '' || datepicker == '' || storagetype == '' || storagefeatures == '' || dim =='' || rent == '') {
alert("Please fill all fields...!!!!!!");
}  else {
$.post("register.php", {
name: name,
datepicker: datepicker,
storagetype:storagetype,
storagefeatures: storagefeatures,
dim: dim,
txtarea: txtarea,
rent:rent
}, function(data) {
if (data == 'You have Successfully Registered.....') {
$("#form").get(0).reset();
}
alert(data);
});
}
});
});