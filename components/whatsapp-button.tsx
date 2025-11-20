import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/573133945995?text=Hola%20Mykenjos,%20quisiera%20más%20información"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Link>
  )
}
