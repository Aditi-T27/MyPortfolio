import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_5twrj6e",
        "template_ovc0x3u",
        form.current,
        "hlMt6MPu-39jID5FS"
      )
      .then(() => {
        alert("Message sent!");
        form.current?.reset();
      })
      .catch((error) => {
        alert("Failed to send: " + error.text);
      });
  };

  return (
    <section
      className="py-16 px-6 text-white bg-gradient-to-b "
      style={{ fontFamily: "Poppins" }}
    >
      {/* Intro Section */}
      {/* Intro Section */}
<div className="mx-auto text-center mb-10 px-4 md:px-12">
  <h2 className="text-4xl font-bold mb-4 text-yellow-400">
    Bonjour et bienvenue! 👋
  </h2>
  <p className="text-lg text-gray-300 leading-relaxed max-w-5xl mx-auto">
    Have a project in mind, need a developer, or just want to brainstorm ideas?  
    I’m always excited to work on creative and impactful projects, let’s make
    something amazing together!
  
  </p>
  <br /><p>   Drop me a message and I shall get back as soon
    as possible :)</p>
</div>


      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto p-6 bg-[#1F1F1F] rounded-xl shadow-lg border border-[#292929]"
      >
        <h3 className="text-2xl font-semibold mb-6 border-b border-yellow-400 pb-2 text-center">
          Contact Me
        </h3>

        <label className="block mb-5">
          <span className="text-yellow-400 font-medium mb-1 block">
            Your Name
          </span>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full rounded-md bg-[#292929] border border-[#444] px-4 py-3 placeholder-gray-400 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
          />
        </label>

        <label className="block mb-5">
          <span className="text-yellow-400 font-medium mb-1 block">
            Your Email
          </span>
          <input
            type="email"
            name="user_email"
            placeholder="you@example.com"
            required
            className="w-full rounded-md bg-[#292929] border border-[#444] px-4 py-3 placeholder-gray-400 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
          />
        </label>

        <label className="block mb-6">
          <span className="text-yellow-400 font-medium mb-1 block">
            Your Message
          </span>
          <textarea
            name="message"
            placeholder="Sup?"
            required
            rows={5}
            className="w-full rounded-md bg-[#292929] border border-[#444] px-4 py-3 placeholder-gray-400 text-white resize-none focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-md transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
