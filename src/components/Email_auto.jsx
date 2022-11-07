import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';



const ContactUs_auto = ({
    userName,
    userEmail,
    minutesWasher,
    secondsWasher,
    sent,
    setSent,
}) => {


    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        console.log("sending email.");
        emailjs.sendForm('service_e3ipp7a', 'template_6gc7vdg', e.target, '3Hbnue0vyrZuDnIAW')
            .then((result) => {
                console.log(result);
                // window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
                setSent(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    useEffect(() => {
        if (minutesWasher > 0 && secondsWasher < 50 && sent === false) {
            document.getElementById("auto-submit").click();
        }
    }, [minutesWasher, secondsWasher])

    // console.log(sent);

    return (
        <form id="myform" className="contact-form" onSubmit={sendEmail}>
            <input name="to_name" value={userName} />
            <input name="to_email" value={userEmail} />
            <input style={{ display: 'none' }} id="auto-submit" type="submit" />
        </form>
    );
}

export default ContactUs_auto;