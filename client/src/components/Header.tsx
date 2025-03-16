import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img 
          src="/medassist-logo.svg" 
          alt="MEDASSIST" 
          className="h-10"
        />

        <a href="tel:03-772-4225">
          <Button 
            variant="secondary"
            className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            03-772-4225
          </Button>
        </a>
      </div>
    </header>
  );
}