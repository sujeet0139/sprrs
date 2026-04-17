export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917054272888?text=Hello, I want to enquire about admission at Shri Rama Prasad Singh Shiksha Sansthan."
      aria-label="Chat with SRPSS on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-3 py-3 text-white shadow-[0_20px_45px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1fb959] sm:right-5"
    >
      <span className="hidden max-w-[220px] rounded-full bg-white/16 px-3 py-2 text-xs font-semibold leading-5 text-white sm:block">
        Chat with us for admission enquiry
      </span>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#25D366] shadow-inner shadow-white/50">
        <i className="fab fa-whatsapp text-2xl"></i>
      </span>
    </a>
  );
}