import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    email: '',
    phone: '',
    message: '',
    contactMethod: 'phone', // Default contact method
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
    let formattedPhone = input;
  
    if (input.length > 0) {
      formattedPhone = '(' + input.substring(0, 3); // Add the opening parenthesis
    }
    if (input.length >= 4) {
      formattedPhone += ') ' + input.substring(3, 6); // Add the closing parenthesis and space
    }
    if (input.length >= 7) {
      formattedPhone += '-' + input.substring(6, 10); // Add the hyphen
    }
  
    setFormData({
      ...formData,
      phone: formattedPhone,
    });
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactMethodChange = (method) => {
    setFormData({
      ...formData,
      contactMethod: method,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        formData,
        'your_user_id' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setError(null);
        },
        (error) => {
          console.log(error.text);
          setError('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section className="py-12 text-center bg-white px-4">
      <h2 className="text-5xl font-header text-rustic-brown mb-8">Contact Us</h2>

      {isSubmitted ? (
        <div className="text-sage-green text-2xl">Thank you! Your message has been sent.</div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block text-left text-lg text-rustic-brown mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full p-3 border-2 border-sage-green rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-lg text-rustic-brown mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your Address"
              className="w-full p-3 border-2 border-sage-green rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-lg text-rustic-brown mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Enter your city"
              className="w-full p-3 border-2 border-sage-green rounded-lg"
            />
          </div>

                        <div className="mb-4">
                <label className="block text-left text-lg text-rustic-brown mb-2">State</label>
                <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border-2 border-sage-green rounded-lg"
                >
                    <option value="">Select your state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                </div>


          <div className="mb-4">
            <label className="block text-left text-lg text-rustic-brown mb-2">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              placeholder="Enter your zip code"
              className="w-full p-3 border-2 border-sage-green rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-lg text-rustic-brown mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="w-full p-3 border-2 border-sage-green rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-lg text-rustic-brown mb-2">Phone</label>
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => handlePhoneChange(e)}
                required
                placeholder="Enter your phone number"
                className="w-full p-3 border-2 border-sage-green rounded-lg"
            />
            </div>

          <div className="mb-4">
            <label className="block text-left text-lg text-rustic-brown mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Let us know what services you need!"
              className="w-full p-3 border-2 border-sage-green rounded-lg"
              rows="6"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-left text-lg text-rustic-brown mb-2">Preferred Contact Method</label>
            <div className="flex justify-start items-center space-x-4">
              <button
                type="button"
                onClick={() => handleContactMethodChange('phone')}
                className={`py-2 px-6 rounded-lg border-2 ${
                  formData.contactMethod === 'phone' ? 'bg-sage-green text-white' : 'bg-white text-sage-green'
                }`}
              >
                Phone
              </button>
              <button
                type="button"
                onClick={() => handleContactMethodChange('email')}
                className={`py-2 px-6 rounded-lg border-2 ${
                  formData.contactMethod === 'email' ? 'bg-sage-green text-white' : 'bg-white text-sage-green'
                }`}
              >
                Email
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-sage-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-deep-forest-green transition duration-300"
          >
            Send Message
          </button>

          {error && <div className="text-red-500 mt-4">{error}</div>}
        </form>
      )}
    </section>
  );
};

export default Contact;


