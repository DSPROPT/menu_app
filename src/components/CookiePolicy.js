import React from 'react';
import { useNavigate } from 'react-router-dom';

function CookiePolicy() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white p-6"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 100, 0, 0.6), rgba(0, 100, 0, 0.6)), url('https://wallpapers.com/images/hd/abstract-italy-flag-ggo2dh23l4nj8nrz.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-2xl font-bold mb-4">Cookie Policy</h1>
      <div className="text-left max-w-2xl">
        <p className="mb-4">
          This website uses cookies to enhance your browsing experience and to ensure compliance with GDPR and other privacy regulations.
          Here’s a summary of our cookie practices:
        </p>
        
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Our Cookie Policy is written in clear, concise language, explaining the reasons we use cookies and how they are managed.</li>
          <li>Cookies are inactive by default until you provide consent.</li>
          <li>Each consent instance is documented securely for compliance.</li>
          <li>Declining cookies will not prevent access to the website's content.</li>
          <li>Consent to cookies is not tied to other transactions or services.</li>
        </ul>

        <p className="mb-6">
          For more details on our use of cookies, please refer to our full Cookie Policy.
          If you have any questions, feel free to reach out to us.
        </p>
      </div>

      {/* Button to go back to the Welcome page */}
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-2 bg-white text-green-800 font-semibold rounded shadow hover:bg-green-100 transition duration-200"
      >
        Back to Welcome Page
      </button>
    </div>
  );
}

export default CookiePolicy;
