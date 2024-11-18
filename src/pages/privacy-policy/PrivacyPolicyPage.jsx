import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6">
        PLEASE READ THIS PRIVACY NOTICE CAREFULLY. IT SETS FORTH THE LEGALLY
        BINDING TERMS AND CONDITIONS FOR THE COLLECTION, SHARING, AND USE OF
        YOUR PERSONAL INFORMATION.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Introduction and Overview</h2>
      <p className="mb-6">
        This Privacy Notice ("Notice") explains how the FKF Electoral Board
        ("Board," "We," "Us," or "Our") collects, uses, and discloses
        information about you ("You") when you use our services, including our
        website and any related applications.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>

      <h3 className="text-xl font-medium mb-2">Information You Provide</h3>
      <p className="mb-4">
        We collect information you directly provide to us, such as:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Registration information: Name, email address, contact details</li>
        <li>Account information: Username, password (encrypted)</li>
        <li>Communication information: Inquiries, messages, feedback</li>
        <li>
          Information you submit for elections (subject to separate disclaimers)
        </li>
      </ul>

      <h3 className="text-xl font-medium mb-2">
        Information We Collect Automatically
      </h3>
      <p className="mb-4">
        We and our service providers automatically collect certain information
        when you use our services, such as:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          Device information: IP address, device identifier, browser type,
          operating system
        </li>
        <li>Usage information: Pages visited, time spent, clicks</li>
        <li>Location information (with your consent, if applicable)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use your information for various purposes, including:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Manage your account and provide you with requested services</li>
        <li>Improve our services and user experience</li>
        <li>
          Communicate with you about elections, updates, and announcements
        </li>
        <li>Process your inquiries and requests</li>
        <li>Comply with legal requirements and regulations</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        3. How We Share Your Information
      </h2>
      <p className="mb-4">We may share your information with:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          Service providers who help us operate our services (e.g., data
          storage, communication)
        </li>
        <li>
          Third parties in connection with elections, with appropriate
          safeguards and as permitted by law
        </li>
        <li>
          Law enforcement agencies or other government entities as required by
          law
        </li>
      </ul>
      <p className="mb-6">
        We will not share your information with third parties for marketing
        purposes without your consent.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Your Choices</h2>
      <p className="mb-4">
        You have choices regarding your information, such as:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Accessing and correcting your account information</li>
        <li>Opting out of receiving marketing communications from us</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">5. Children's Privacy</h2>
      <p className="mb-6">
        Our services are not intended for children under the age of 18. We do
        not knowingly collect personal information from children.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. International Transfer</h2>
      <p className="mb-6">
        Your information may be transferred to and processed in countries with
        different data protection laws than your country. We take steps to
        ensure adequate protection for your information.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
      <p className="mb-6">
        We take reasonable measures to protect your information from
        unauthorized access, disclosure, alteration, or destruction. However, no
        internet transmission is completely secure.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Changes to this Notice</h2>
      <p className="mb-6">
        We may update this Notice from time to time. We will notify you of any
        changes by posting the revised Notice on our website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
      <p>
        If you have any questions about this Notice, please contact us at{" "}
        <span className="font-semibold">[insert contact information]</span>.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
