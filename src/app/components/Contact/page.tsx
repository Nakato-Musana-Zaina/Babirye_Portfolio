





"use client";


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaTwitter, FaFacebook, FaCalendarAlt, FaPaperPlane, FaEnvelope } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus({ submitting: true });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_6kb5aag',
        'template_iutv90e',
        templateParams,
        'H_iEeVh7SkmCGLCQK'
      );
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error('Error sending message:', error);
    } finally {
      setStatus({ submitting: false });
    }
  };

  const handleBookMeeting = () => {
    window.open("https://calendly.com/nakatozainamusana/30min", "_blank");
  };

  return (
    <section className="p-8 bg-gray-800 text-white flex flex-col lg:flex-row items-center justify-between mt-20 lg:mt-0"> 
      
      <div className="mb-8 lg:mb-0 lg:w-1/3 flex flex-col items-center lg:items-start">
        <button
          onClick={handleBookMeeting}
          className="flex items-center justify-center px-8 py-4 text-lg border border-yellow-300 rounded font-semibold hover:bg-gray-700 transition"
        >
          <FaCalendarAlt className="mr-2" size={24} />
          Book Meeting
        </button>
        
        <p className="mt-4 text-yellow-300 text-center lg:text-left">Kampala, Uganda</p>

        <div className="mt-6 flex space-x-4">
          <a href="https://www.linkedin.com/in/babirye-musana-8b4b82274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-yellow-300 rounded-full text-yellow-300">
            <FaLinkedin size={32} />
          </a>
          <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-yellow-300 rounded-full text-yellow-300">
            <FaTwitter size={32} />
          </a>
          <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-yellow-300 rounded-full text-yellow-300">
            <FaFacebook size={32} />
          </a>
        </div>
      </div>

      <div className="lg:w-2/3">
        <h2 className="text-4xl font-bold mb-4 text-center lg:text-left flex items-center justify-center lg:justify-start">
          <FaEnvelope className="mr-2" />
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-semibold">Name</label>
            <input
              id="name"
              className="p-2 border border-gray-300 rounded bg-gray-700 focus:border-yellow-300 focus:outline-none"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input
              id="email"
              className="p-2 border border-gray-300 rounded bg-gray-700 focus:border-yellow-300 focus:outline-none"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-sm font-semibold">Message</label>
            <textarea
              id="message"
              className="p-2 border border-gray-300 rounded bg-gray-700 focus:border-yellow-300 focus:outline-none"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status.submitting}
            className="flex items-center justify-center p-2 bg-yellow-300 text-gray-900 rounded font-semibold hover:bg-yellow-400 transition disabled:opacity-50"
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
            <FaPaperPlane className="ml-2" />
          </button>
        </form>

      
        <ToastContainer />

        <hr className="my-8 border-gray-600 w-full" />

        <div className="text-center lg:text-left text-gray-400">
          &copy; 2024 Babirye Musana Fatuma. All rights reserved.
        </div>
      </div>
    </section>
  );
}