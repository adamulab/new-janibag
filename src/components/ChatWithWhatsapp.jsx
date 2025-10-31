import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "+2348187050789"; // Replace with Janiba Ginger's WhatsApp number
  const message =
    "Hello Janiba Ginger! I’d love to know more about your products.";

  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition duration-300"
    >
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 32 32">
        <path d="M16.004 2.004a13.992 13.992 0 00-12.172 21.136L2 30l6.996-1.824A13.996 13.996 0 1016.004 2.004zm0 25.996a11.993 11.993 0 01-6.132-1.692l-.44-.26-4.144 1.08 1.112-4.04-.284-.444A11.994 11.994 0 1116.004 28zm6.884-8.74c-.376-.188-2.22-1.096-2.564-1.224-.344-.128-.596-.188-.848.188-.248.376-.976 1.224-1.196 1.472-.22.252-.44.284-.816.096-.376-.188-1.584-.584-3.016-1.864-1.112-.992-1.864-2.22-2.08-2.596-.22-.376-.024-.584.164-.772.168-.168.376-.44.564-.656.188-.22.248-.376.376-.624.124-.252.064-.472-.032-.66-.096-.188-.848-2.056-1.16-2.808-.304-.724-.612-.628-.848-.64l-.72-.012c-.248 0-.652.092-.996.436-.344.344-1.308 1.276-1.308 3.104 0 1.828 1.34 3.596 1.528 3.848.188.252 2.64 4.028 6.4 5.64.896.388 1.596.62 2.14.792.9.288 1.72.248 2.368.152.724-.108 2.22-.908 2.532-1.784.312-.876.312-1.624.22-1.784-.092-.16-.344-.252-.72-.44z" />
      </svg>
      <p className="sm:hidden">Chat with Us</p>
    </a>
  );
};

export default WhatsAppButton;
