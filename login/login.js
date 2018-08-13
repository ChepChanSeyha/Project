function pasuser() {
	event.preventDefault();
	var form = document.forms["login"];
	if (form.id.value=="seyha") { 
	if (form.pass.value=="seyha") {
		window.location.href ="../homestudent/Home.html"
	}
	else {
		alert("Invalid Password")
	}
	}
	else if (form.id.value=="sarakorn") { 
	if (form.pass.value=="sarakorn") {
		window.location.href ="../hometeacher/Home.html"
	}
	else {
		alert("Invalid Password")
	}
	}
	else {
		alert("Invalid UserID")
	
}
}

