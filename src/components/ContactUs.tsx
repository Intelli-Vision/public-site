import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import "../styles/ContactUs.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactUs(){
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData);
      if (response.status === 200) {
        setStatus("Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form on success
      }
    } catch (error) {
      console.log(error);
      setStatus("There was an error sending your message.");
    }
  };

  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
};