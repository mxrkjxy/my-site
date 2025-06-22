const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-8">Get In Touch</h2>
      <p className="text-xl text-gray-300 mb-12">
        Ready to create something amazing together? Let's start the
        conversation.
      </p>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-300">hello@mxrkjxy.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">(+63) 969-123-4567</p>
          </div>
        </div>
        <button className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
