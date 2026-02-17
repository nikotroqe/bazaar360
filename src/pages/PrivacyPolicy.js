import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Bazaar 360°. We value your privacy and are committed to 
          protecting your personal information. This Privacy Policy explains 
          how we collect, use, and safeguard your data when you use our platform.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <ul>
          <li>Name and surname</li>
          <li>Email address</li>
          <li>Phone number (if provided)</li>
          <li>Billing and shipping address</li>
          <li>Payment information (processed securely by third-party providers)</li>
          <li>Usage data (IP address, browser type, device info)</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To create and manage your account</li>
          <li>To process transactions</li>
          <li>To improve our services</li>
          <li>To communicate updates and offers</li>
          <li>To ensure security and prevent fraud</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Protection</h2>
        <p>
          We implement appropriate security measures to protect your personal 
          data from unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section>
        <h2>5. Cookies</h2>
        <p>
          Bazaar 360° uses cookies to enhance user experience, analyze traffic, 
          and personalize content. You can disable cookies in your browser settings.
        </p>
      </section>

      <section>
        <h2>6. Third-Party Services</h2>
        <p>
          We may use third-party services such as payment processors and 
          analytics providers. These services have their own privacy policies.
        </p>
      </section>

      <section>
        <h2>7. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal data. 
          You may contact us at: support@bazaar360.com
        </p>
      </section>

      <section>
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be 
          posted on this page.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          support@bazaar360.com
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
