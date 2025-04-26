"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setStatus({ submitting: true, success: false, error: false, message: "" });

    // try {
    //   const res = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (res.ok) {
    //     setFormData({ name: "", email: "", subject: "", message: "" });
    //     setStatus({
    //       submitting: false,
    //       success: true,
    //       error: false,
    //       message: "Message sent successfully!",
    //     });
    //   } else {
    //     throw new Error("Something went wrong");
    //   }
    // } catch (error) {
    //   setStatus({
    //     submitting: false,
    //     success: false,
    //     error: true,
    //     message: "Failed to send message.",
    //   });
    // }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:px-16 py-20 lg:my-7"
    >
      <div className="space-y-6 mt-16 ml-10 lg:ml-30">
        <motion.h1
          className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight ml-15 relative inline-block"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Contact us
          <motion.span
            className="absolute left-0 -bottom-2 w-full h-1 bg-orange-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1.2, // Starts after the heading animation
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        </motion.h1>
        <div className="flex items-start space-x-4 mt-10">
          <div className="p-3">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Our Location</h3>
            <p className="text-gray-600 text-justify">
              Rucha Building, Office number 1 and 2, Aundh - Ravet BRTS Rd,
              Punawale, Pune, Maharashtra 411033
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email Us</h3>
            <p className="text-gray-600">support@comfortvacanze.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Call Us</h3>
            <p className="text-gray-600">+91 9405393360</p>
          </div>
        </div>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-15"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Send Us a Message
        </h2>

        <div className="space-y-4">
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full lg:w-3/4 px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#d1af35] focus:border-[#d1af35] transition-all"
            placeholder="Your Name"
          />

          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full lg:w-3/4 px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#d1af35] focus:border-[#d1af35] transition-all"
            placeholder="Email Address"
          />

          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full lg:w-3/4 px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#d1af35] focus:border-[#d1af35] transition-all"
            placeholder="Subject"
          />

          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full lg:w-3/4 px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#d1af35] focus:border-[#d1af35] transition-all"
            placeholder="Your Message"
          />

          <motion.button
            type="submit"
            disabled={status.submitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full lg:w-3/4 bg-[#d1af35] hover:bg-[#d1af35] text-white font-medium py-3 px-4 transition-colors flex items-center justify-center space-x-2"
          >
            <Send className="h-5 w-5" />
            <span>{status.submitting ? "Sending..." : "Send Message"}</span>
          </motion.button>

          {status.message && (
            <p
              className={`mt-2 text-sm ${status.success ? "text-green-600" : "text-red-600"}`}
            >
              {status.message}
            </p>
          )}
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
