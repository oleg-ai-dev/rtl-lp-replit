import Header from "@/components/Header";
import EmgForm from "@/components/EmgForm";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4">
        {/* Top Form Section */}
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <EmgForm />
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                alt="EMG Procedure"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Medical Procedure Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 -mx-4 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">מהלך הבדיקה</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-lg">
                בדיקת EMG היא בדיקה אלקטרופיזיולוגית של השרירים והעצבים המספקת מידע על התפקוד החשמלי של המערכת העצבית ההיקפית. הבדיקה מסייעת בדיקות נוירולוגיות שונות.
              </p>
              <p className="text-lg">
                הבדיקה מאפשרת לגלות את הסיבה לכאבים, חולשה ותחושות חריגות בגפיים. כך מתקבל מידע מדויק על מצב העצבים והשרירים.
              </p>
            </div>
          </div>
        </section>

        <Benefits />

        {/* Bottom Form Section */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80"
                alt="Medical Consultation"
                className="rounded-lg shadow-lg"
              />
            </div>
            <EmgForm />
          </div>
        </section>
      </main>

      <Footer />

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/972533015074"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
}
