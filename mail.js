document.getElementById("send").addEventListener("click", function(event) {
	event.preventDefault();
	console.log("Clicked;")
	Email.send({
	Host: "smtp.gmail.com",
	Username : "rrk15012002@gmail.com",
	Password : "rohanraj123",
	To : 'rohanraj378@gmail.com',
	From : "rrk15012002@gmail.com",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		(message)=>{
			console.log(message)
		}
	);
})