// import { send } from 'emailjs-com';
import emailjs from 'emailjs-com';
import React from 'react';
import { init } from '@emailjs/browser';
init('zhsSepZTmXYrbzKnW');

function Contact() {


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t3srert', 'template_138kf25', e.target, 'zhsSepZTmXYrbzKnW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (

    <div className="container" style={{paddingBottom:'2.5rem'}}>
      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input type="text" className="form-control" placeholder='Name' name='name' />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder='Email Address' name='email' />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder='Subject' name='subject' />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea className="form-control" cols='30' rows='8' placeholder='Your message' name='message' />
          </div>
          <div className='col-8 pt-3 mx-auto'>
            <input type='submit' className='btn btn-info' value='Send Message'></input>
          </div>
        </div>
      </form>

    </div>

  );
};

export default Contact;