$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    console.log("Clicked button");

    var name = $(".name")
    var namestatusElm = $(".namestatus");

    var email = $(".email")
    var emailstatusElm = $(".emailstatus");
    
    var subject = $(".subject")
    var subjectstatusElm = $(".subjectstatus");

    var message = $(".message")
    var messagestatusElm = $(".messagestatus");

    namestatusElm.empty();
    emailstatusElm.empty();
    subjectstatusElm.empty();
    messagestatusElm.empty();




    if(name.length > 5 ) {
        namestatusElm.append('<div>Name Valid</div>');
      } else {
        namestatusElm.append('<div>Please enter a valid name</div>');
      }

    if(email.length > 5 && email.includes("@") && email.includes('.')) {
        $(".emailstatus").remove();
    } else {
        emailstatusElm.append('<div>Email is not valid</div>');
    }
    
    if (subject.length > 2) {
      subjectstatusElm.append("<div>Subject is valid</div>");
    } else {
      subjectstatusElm.append("<div>Subject is not valid</div>");
    }

    if (message.length > 20) {
      messagestatusElm.append("<div>Message is valid</div>");
    } else {
      messagestatusElm.append("<div>Message is not valid</div>");
    }
  });
});
