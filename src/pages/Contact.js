import React from 'react';

const Contact = () => {
    return (
        <div className="container mt-5">
            <p><strong>College Address:</strong></p>
      <p>RGJ3+FCM, Anantapur Rd, Lakshmipuram,</p>
      <p>Hindupuram, Andhra Pradesh 515201</p>

      <p><strong>Phone:</strong> +91 123-456-7890</p>
      <p><strong>Email:</strong> info@college.edu</p>
      <br /><br /><br />
            <h3>Contact Us</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
