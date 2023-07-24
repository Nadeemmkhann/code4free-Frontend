import React from 'react';
import { Transition } from '@headlessui/react';
import axios from 'axios'


const ContactUs = () => {

    const [showAnimation, setShowAnimation] = React.useState(false);

    React.useEffect(() => {
      setShowAnimation(true);
    }, []);

    async function handleSubmit(e) {
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const message = e.target.message.value;
      console.log(e.target.name.value)
      console.log(e.target.email.value)
      console.log(e.target.message.value)


      try {
        // await axios.post('http://localhost:4000/send-email', {
        await axios.post('https://code4free.onrender.com/send-email', {
          name,
          email,
          message,
        });
        alert('Email sent');

        // Handle success or display a success message to the user
      } catch (error) {
        console.error('Error sending email:', error);
        // Handle error or display an error message to the user
      }

      // const from = e.target.name.value;
      // const user = "babubhaijkl@gmail.com";
      // const pass = "14145513";



      // const options = {
      //   from: `${from} <${user}>`,
      //   to: 'code44free@gmail.com',
      //   subject: "Query",
      //   html: `
      //   <div>
      //   <p>From: ${from}</p>
      //   <p>Email: ${e.target.email.value}</p>
      //   <p>${e.target.message.value}</p>
      // </div>
      // `
      //   };

      // let transpoter = nodemailer.createTransport({
      //   service: "Gmail",
      //   auth: { user, pass },
      // });

      // await transpoter.sendMail(options);
          
        }

  return (
    <div className="bg-gray-100 py-10">

<Transition
          show={showAnimation}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          delay={400}
        >
          
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <form className="p-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name='name'
                className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name='email'
                className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                name='message'
                className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
        </Transition>

    </div>
  );
};

export default ContactUs;
