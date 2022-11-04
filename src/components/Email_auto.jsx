import React from 'react';
import emailjs from 'emailjs-com';



const ContactUs_auto = () => {


    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_2le5hw2', 'template_qlj3k0q', e.target, 'pvEv9i6LAkDg3kq9y')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form id="myform" className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="to_name" value={"123"} />
            <input type="hidden" name="to_email" value={"tianzeliu518@gmail.com"} />
            <input style={{ display: 'none' }} type="submit" />
        </form>
    );
}

export default ContactUs_auto;