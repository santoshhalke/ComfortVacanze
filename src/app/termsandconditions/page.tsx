
const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-8 text-gray-600"><em>Last Updated: May 29, 2025</em></p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Website Usage Agreement</h2>
        <p className="mb-6 text-justify">
          By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. 
          Please read them carefully before using our website.
        </p>
      </div>

      <div className="space-y-8">
        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Website Purpose
          </h3>
          <p className='text-justify'>
            This website is owned and operated by Comfort Vacanze as an informational platform about our travel and tourism services. 
            It serves solely to provide general information to potential customers.
          </p>
        </div>

        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            No Transaction Features
          </h3>
          <p className='text-justify'>
            This website does not include any login systems, user accounts, or payment processing functionality. 
            It is designed exclusively for informational purposes.
          </p>
        </div>

        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Contact Methods
          </h3>
          <p>
            Visitors may contact us through:
            <ul className="list-disc pl-8 mt-2 space-y-1">
              <li>The contact form available on the website</li>
              <li>WhatsApp via the provided icon/link</li>
            </ul>
          </p>
        </div>

        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Data Privacy
          </h3>
          <p className='text-justify'>
            Any personal information you provide (including name, email address, or phone number) will be used exclusively to respond to your inquiries. 
            We maintain a strict no-sharing policy and never sell your data to third parties.
          </p>
        </div>

        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Intellectual Property
          </h3>
          <p className='text-justify'>
            All content on this website (including text, images, graphics, and logos) is either the property of Comfort Vacanze or used with proper authorization. 
            Unauthorized reproduction, distribution, or modification of any content is strictly prohibited without prior written consent.
          </p>
        </div>

        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Information Accuracy
          </h3>
          <p className='text-justify'>
            we strive to maintain accurate and current information. Comfort Vacanze guarantee reliability, accuracy of all website content at all times.
          </p>
        </div>

        

        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Policy Updates
          </h3>
          <p className='text-justify'>
            We reserve the right to modify these terms at any time. Any changes will be posted on this page with an updated revision date. 
            Continued use of the website after changes constitutes acceptance of the modified terms.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <p className="mb-2"><strong>Company:</strong> Comfort Vacanze</p>
        <p className="mb-2"><strong>Email:</strong> enquiry@comfortvacanze.com</p>
        <p className="mb-2"><strong>Phone:</strong> +91 8177888020</p>
        <p><strong>Address:</strong> Rucha Building, Office 1 & 2, Aundh-Ravet BRTS Rd, Punawale, Pune, Maharashtra – 411033, India</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;