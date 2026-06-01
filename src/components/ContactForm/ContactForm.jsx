import { useState } from "react";
import userIcon from "../../assets/contact/user-icon.webp";
import "./ContactForm.css";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz-Vx_EiRvf_OQLXHLVB5xNfUjsZ3KVtVVwcz5F8XZyVBnVWr_hN5Mh9qbb-t17EABd/exec";

const WHATSAPP_NUMBER = "27686825752";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phone: "",
    budget: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.companyName ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      company_name: formData.companyName,
      phone: formData.phone,
      budget: formData.budget,
      message: formData.message,
      consent: formData.consent ? "Yes" : "No",
      source: "Social Boost Website",
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(payload),
      });

      const whatsappMessage = `Hello Social Boost,

I would like a FREE proposal.

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.companyName}
Phone: ${formData.phone}
Budget: ${formData.budget || "Not specified"}

Project Details:
${formData.message}`;

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        "_blank"
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        phone: "",
        budget: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="proposal-form">
      <div className="contact-top-wave"></div>

      <div className="contact-inner">
        <div className="contact-left">
          <h2>
            Have Questions?
            <span>Contact Us Directly</span>
          </h2>

          <p>
            We’d love to learn about your business goals and growth plans.
            Reach out today and let’s build a strategy that delivers results.
          </p>

          <a
            href="mailto:hello@socialboost.in"
            className="contact-email"
          >
            HELLO@SOCIALBOOST.IN
          </a>

          <img
            src={userIcon}
            alt="Contact"
            className="contact-user-icon"
          />
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="companyName"
              placeholder="Company Name*"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">Select Budget</option>
            <option>₹10,000 - ₹25,000</option>
            <option>₹25,000 - ₹50,000</option>
            <option>₹50,000 - ₹1,00,000</option>
            <option>₹1,00,000+</option>
            <option>Not Sure Yet</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your project*"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <label className="checkbox-row">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />

            <span>
              I agree to receive communications from Social Boost regarding
              my inquiry.
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : "GET FREE PROPOSAL"}
          </button>
        </form>
      </div>

      <div className="contact-bottom-wave"></div>
    </section>
  );
}

export default ContactForm;