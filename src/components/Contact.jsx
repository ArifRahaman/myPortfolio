import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:arifrahaman2606@gmail.com?subject=Message from ${form.name}&body=Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className=" bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col items-center justify-between py-16" id="contact">
      {/* Upper Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
        <p className="text-gray-300 text-lg mx-auto max-w-2xl">
          Whether you want to ask a question, start a project, or just say hi, feel free to reach out! 
          I'm always happy to connect and explore new opportunities.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit} 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
