import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contact", form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
