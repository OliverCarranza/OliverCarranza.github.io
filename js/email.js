$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();
        const mailtoLink = `mailto:offiicialoliv@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
        window.location.href = mailtoLink;
    });
});