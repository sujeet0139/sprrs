export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917054272888?text=Hello, I want to inquire about admission."
      aria-label="Chat with SRPSS on WhatsApp"
      className="fixed bottom-20 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <span className="text-2xl">💬</span>
    </a>
  );
}