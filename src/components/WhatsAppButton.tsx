import { whatsappLink } from "@/lib/site";
import Icon from "./Icon";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-40 grid h-[60px] w-[60px] place-items-center rounded-full bg-[#16A34A] text-white shadow-[0_12px_30px_-6px_rgba(22,163,74,0.55)] transition-transform hover:scale-105"
    >
      <Icon name="whatsapp" size={28} />
    </a>
  );
}
