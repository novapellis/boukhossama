function SendMail() {
  var params = {
    from_name: document.getElementById("name_id").value,
    email_id: document.getElementById("email_id").value,
    subject: document.getElementById("subject_id").value,
    message: document.getElementById("message_id").value,
  };
  emailjs.send("service_agm3h4h", "template_jucu7pq", params).then(function (res){
    alert("votre message est envoye!" + res.status);
  })
}
