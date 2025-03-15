export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <img 
            src="/medassist-logo.svg" 
            alt="MEDASSIST" 
            className="h-6"
          />
        </div>
        
        <div className="mt-6 text-center text-gray-600">
          <a href="https://wa.me/972533015074" className="hover:text-blue-600">
            WhatsApp: 053-301-5074
          </a>
          <span className="mx-2">|</span>
          <a href="tel:03-301-5074" className="hover:text-blue-600">
            טלפון: 03-301-5074
          </a>
        </div>
      </div>
    </footer>
  );
}
