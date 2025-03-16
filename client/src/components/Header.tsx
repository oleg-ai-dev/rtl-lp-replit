import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
 // Import Image component for better image handling

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-blue-500/20 before:to-transparent">
        <img 
          src="/medassist-logo.svg" 
          alt="MEDASSIST" 
          className="h-10"
        />

        <div className="flex items-center gap-4"> {/*Added div for better spacing */}
          <h1 className="text-xl font-bold text-blue-900">בדיקת EMG</h1> {/* Added header text */}
          <a href="tel:03-772-4225">
            <Button 
              variant="secondary"
              className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              03-772-4225
            </Button>
          </a>
          <img 
            src="/certification.svg" // Replace with actual image path
            alt="Professional Certification" 
            width={50} 
            height={50} 
            className="rounded-full" // Add styling as needed.  
          /> {/* Added image for certification. Adjust src, width, and height*/}
        </div>
      </div>
    </header>
  );
}