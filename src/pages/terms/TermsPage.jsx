import React from "react";

const Terms = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        FKF Electoral Board Terms of Service
      </h1>

      <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
      <p className="mb-6">
        Welcome to the FKF Electoral Board Services. These Terms of Service
        govern your use of our services, which are designed to facilitate the
        electoral process of the Football Kenya Federation (FKF).
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
      <p className="mb-6">
        By accessing or using our Services, you agree to be bound by these
        Terms. If you disagree with any part of these Terms, please do not use
        our Services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
      <p className="mb-4">To use our Services, you must:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Be a member of the FKF in good standing.</li>
        <li>Adhere to the FKF Constitution and Electoral Code.</li>
        <li>Comply with all applicable laws and regulations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Use of Services</h2>
      <p className="mb-4">
        You agree to use our Services only for lawful purposes and in accordance
        with these Terms. You may not:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Misrepresent your identity or affiliation.</li>
        <li>Interfere with or disrupt the Services.</li>
        <li>Violate any applicable laws or regulations.</li>
        <li>
          Use the Services in a way that could harm the reputation of the FKF or
          the Electoral Board.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        5. Data Privacy and Security
      </h2>
      <p className="mb-6">
        We are committed to protecting your personal information. We will
        collect, process, and store your personal data in accordance with
        applicable data protection laws, including the Data Protection Act, 2019
        (as amended).
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          Data Collection: We may collect personal information such as your
          name, contact details, and voting preferences.
        </li>
        <li>
          Data Use: We will use your personal data to facilitate the electoral
          process, including verifying your identity, processing votes, and
          communicating with you.
        </li>
        <li>
          Data Security: We implement appropriate security measures to protect
          your personal data from unauthorized access, disclosure, alteration,
          or destruction.
        </li>
        <li>
          Your Rights: You have the right to access, correct, and delete your
          personal data, as well as the right to object to certain processing
          activities.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
      <p className="mb-6">
        All intellectual property rights in and to the Services, including but
        not limited to trademarks, copyrights, and trade secrets, are owned by
        the FKF Electoral Board.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        7. Disclaimer of Warranties
      </h2>
      <p className="mb-6">
        The Services are provided "as is" without warranty of any kind, express
        or implied. We do not guarantee the accuracy, completeness, or
        reliability of the information provided through the Services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        8. Limitation of Liability
      </h2>
      <p className="mb-6">
        To the maximum extent permitted by law, we shall not be liable for any
        direct, indirect, incidental, consequential, or punitive damages arising
        out of or in connection with your use of the Services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
      <p className="mb-6">
        These Terms shall be governed by and construed in accordance with the
        laws of Kenya.
      </p>

      <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
      <p className="mb-6">
        We may modify these Terms at any time. Any changes will be effective
        immediately upon posting on our website. Your continued use of the
        Services after such changes constitutes your acceptance of the modified
        Terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
      <p>
        For any questions or concerns, please contact us at{" "}
        <a href="mailto:info@eb.footballkenya.org" className="text-primary font-semibold">
          info@eb.footballkenya.org
        </a>
        .
      </p>
      <p className="mt-6 font-medium">
        By using our Services, you acknowledge that you have read, understood,
        and agreed to these Terms of Service.
      </p>
    </div>
  );
};

export default Terms;
