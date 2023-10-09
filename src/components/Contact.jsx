import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false); 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');

    const formSubmissionUrl = "https://getform.io/f/717c3e28-7e23-4000-9383-4cc6813b4844";

    const MAX_RETRIES = 3;
    let retryCount = 0;

    const makeSubmissionRequest = async () => {
      try {
        const response = await fetch(formSubmissionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          
          console.log('Form submitted successfully');
          setSubmitting(false);
          setSubmissionSuccess(true); 
        } else if (response.status === 429 && retryCount < MAX_RETRIES) {
          
          const delay = Math.pow(2, retryCount) * 1000;
          retryCount++;
          setTimeout(makeSubmissionRequest, delay);
        } else {
          
          console.error('Form submission failed');
          setSubmitting(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setSubmitting(false);
      }
    };

    setSubmitting(true);
    makeSubmissionRequest();
  };

  useEffect(() => {
  
  }, [submitting]);

  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-slate-50">Let's Create Something!</p>
          <p className="py-6">Submit the form to get in contact with me:</p>
          {submissionSuccess ? ( 
            <div className="text-white text-lg pb-3">
              Thank you for submitting the form! We'll be in touch soon.
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <form
                action="https://getform.io/f/717c3e28-7e23-4000-9383-4cc6813b4844"
                method="POST"
                className="flex flex-col w-full md:w-1/2"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className={`my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                    emailError ? 'border-red-500' : ''
                  }`}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {emailError && (
                  <p className="text-white text-sm pb-3">{emailError}</p>
                )}
                

                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />

                <button
                  type="submit"
                  className="text-white bg-gradient-to-b from-blue-950 to-blue-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-125 duration-300"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Let\'s Talk!'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;