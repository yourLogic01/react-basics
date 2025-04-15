const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <h3>Contact Us here</h3>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="name" style={{ display: "block" }}>
            Name:
          </label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required style={{ padding: "8px", width: "100%", maxWidth: "400px" }} />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="email" style={{ display: "block" }}>
            Email:
          </label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required style={{ padding: "8px", width: "100%", maxWidth: "400px" }} />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="message" style={{ display: "block" }}>
            Message:
          </label>
          <textarea id="message" name="message" placeholder="Enter your message" required style={{ padding: "8px", width: "100%", maxWidth: "400px", minHeight: "100px" }}></textarea>
        </div>

        <button type="submit" style={{ padding: "8px 16px", backgroundColor: "blue", color: "white" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
