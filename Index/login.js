function pasuser() {
		 event.preventDefault();
  var form = document.forms["login"];
if (form.id.value=="Seyha") { 
if (form.pass.value=="seyha") {              
location="Home.html" 
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}