// 2335edea-1a0c-423b-aacc-66b5829bd179

const mail_btn = document.getElementById('mail_btn');

mail_btn.addEventListener('click',()=>{
    Email.send({
        SecureToken : "2335edea-1a0c-423b-aacc-66b5829bd179",
        To : 'rachitgaur3@gmail.com',
        From : "starlucifer808@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body work done!!"
    }).then(
      message => alert(message)
    ).catch(error => alert(error));

})
