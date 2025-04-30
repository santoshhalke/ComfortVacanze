"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("manoqlqd"); 

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8  py-20 lg:my-7 lg:ml-20"
    >
      <div className="space-y-6 mt-16 ml-10 mr-10">
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
            className="absolute left-0 -bottom-2 w-full h-1 bg-[#EB7C19]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1.2,
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
              Rucha Building, Office number 1 and 2, Aundh &ndash; Ravet BRTS Rd,
              Punawale, Pune, Maharashtra  &ndash; 411033, India
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email Us</h3>
            <p className="text-gray-600">enquiry@comfortvacanze.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Call Us</h3>
            <p className="text-gray-600">+91 8177888020</p>
          </div>
        </div>
      </div>

      {state.succeeded ? (
       <motion.div
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5 }}
       className="bg-white p-8 rounded-lg shadow-lg   mt-10 text-center mx-8 lg:mx-auto"
     >
       <motion.div
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
         className="mb-6"
       >
         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-12 w-12 text-green-500"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
             strokeWidth={2}
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M5 13l4 4L19 7"
             />
           </svg>
         </div>
       </motion.div>
       
       <motion.h2
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.4 }}
         className="text-3xl font-bold text-gray-800 mb-3"
       >
         Thank You!
       </motion.h2>
       
       <motion.p
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.5 }}
         className="text-gray-600 mb-6 text-lg"
       >
         Your message has been sent successfully. We&apos;ll get back to you soon.
       </motion.p>
       
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.8 }}
         className="flex justify-center"
       >
         <button
           onClick={() => window.location.reload()} // Optional: Add a button to send another message
           className="px-6 py-2 bg-[#EB7C19] text-white rounded-md hover:bg-orange-600 transition-colors"
         >
           Send Another Message
         </button>
       </motion.div>
     </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white mt-20 mx-8 lg:mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Send Us a Message
          </h2>

          <div className="space-y-4">
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full lg:w-3/4 px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#d1af35] focus:border-[#d1af35] transition-all"
              placeholder="Your Name"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm"
            />

            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full lg:w-3/4 px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#d1af35] focus:border-[#d1af35] transition-all"
              placeholder="Email Address"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm"
            />

            <input
              id="subject"
              type="text"
              name="subject"
              required
              className="w-full lg:w-3/4 px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#d1af35] focus:border-[#d1af35] transition-all"
              placeholder="Subject"
            />
            <ValidationError 
              prefix="Subject" 
              field="subject"
              errors={state.errors}
              className="text-red-500 text-sm"
            />

            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full lg:w-3/4 px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#d1af35] focus:border-[#d1af35] transition-all"
              placeholder="Your Message"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm"
            />

            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full lg:w-3/4 bg-[#EB7C19] hover:bg-orange-700 text-white font-medium py-3 px-4 transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
            </motion.button>
          </div>
        </motion.form>
      )}
    </motion.div>
  );
};

export default ContactForm;