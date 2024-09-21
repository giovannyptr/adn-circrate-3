import React from 'react';

const ContactForm = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={infoSectionStyle}>
          <h2 style={headingStyle}>NEED MORE INFORMATION?</h2>
          <p style={subHeadingStyle}>LET'S DISCUSS TOGETHER!</p>
          <p style={descriptionStyle}>
            Send us a message about your concern and how we could assist you as soon as possible.
          </p>
        </div>
        <div style={formSectionStyle}>
          <form style={formStyle}>
            <div style={formGroupStyle}>
              <div style={inputWrapperStyle}>
                <label htmlFor="name" style={labelStyle}>FULL NAME *</label>
                <input type="text" id="name" placeholder="Enter Your Name Here" style={inputStyle} />
              </div>
              <div style={inputWrapperStyle}>
                <label htmlFor="email" style={labelStyle}>EMAIL ADDRESS *</label>
                <input type="email" id="email" placeholder="Enter Your Email Here" style={inputStyle} />
              </div>
            </div>
            <div style={formGroupStyle}>
              <div style={inputWrapperStyle}>
                <label htmlFor="phone" style={labelStyle}>PHONE *</label>
                <input type="tel" id="phone" placeholder="Enter Your Phone Here" style={inputStyle} />
              </div>
              <div style={inputWrapperStyle}>
                <label htmlFor="subject" style={labelStyle}>SUBJECT *</label>
                <input type="text" id="subject" placeholder="Enter Your Subject Here" style={inputStyle} />
              </div>
            </div>
            <div style={{ ...formGroupStyle, flexDirection: 'column' }}>
              <label htmlFor="message" style={labelStyle}>MESSAGE *</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Enter Your Message Here"
                style={textareaStyle}
              ></textarea>
            </div>
            <div style={formGroupStyle}>
              <button type="submit" style={buttonStyle}>SEND NOW</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Inline Styles
const sectionStyle = {
  backgroundColor: '#F1F5EB',
  padding: '60px 0',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
};

const infoSectionStyle = {
  width: '45%',
};

const formSectionStyle = {
  width: '50%',
};

const headingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const subHeadingStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const descriptionStyle = {
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '40px',
  color: '#666',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const formGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
};

const inputWrapperStyle = {
  flex: '1',
  marginRight: '20px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxSizing: 'border-box',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  resize: 'vertical',
  minHeight: '150px', // Adjust the height to make it taller
  boxSizing: 'border-box',
};

const labelStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  display: 'block',
};

const buttonStyle = {
  backgroundColor: '#87C540',
  color: '#fff',
  padding: '12px 20px',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px',
  width: '100%',
};

export default ContactForm;
