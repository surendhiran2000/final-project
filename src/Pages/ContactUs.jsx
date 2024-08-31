import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the backend)
    console.log('Form submitted', formData);
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>

      <p>
        We are here to help you! If you have any questions, concerns, or need
        assistance with your ticket bookings, please feel free to reach out to
        us using the information or form below.
      </p>

      {/* Contact Information */}
      <div className="contact-info">
        <p><strong>Address:</strong> 123 Main Street, City Name, Country</p>
        <p><strong>Phone:</strong> +123-456-7890</p>
        <p><strong>Email:</strong> support@yourdomain.com</p>
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <input
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {/* Additional Information */}
      <div className="additional-info">
        <p><strong>Working Hours:</strong> Monday to Friday, 9 AM to 6 PM</p>
        <p>Follow us on social media for the latest updates!</p>
        <ul>
          <li><a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>

      {/* Optional Map Section */}
      <div className="map">
        <h2>Find us on the map below!</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631537535!3d-37.81720944202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773a7b918d97b!2s123+Main+St%2C+Melbourne+VIC%2C+Australia!5e0!3m2!1sen!2sus!4v1510245014801"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Company Location"
        ></iframe>
      </div>

      {/* FAQ Link */}
      <div className="faq-link">
        <p>For more information, check out our <a href="https://yourwebsite.com/faqs">Frequently Asked Questions (FAQs)</a> page.</p>
      </div>
    </div>
  );
}

export default ContactUs;
