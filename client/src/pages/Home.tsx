import Header from "@/components/Header";
import EmgForm from "@/components/EmgForm";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import { ChevronLeft } from "lucide-react";

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

        {/* Procedure Steps Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">מהלך הבדיקה</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full">
                  <ChevronLeft className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">בדיקת EMG היא בדיקה אלקטרופיזיולוגית של העצבים שבודקת את המהירות</h3>
                  <p className="text-gray-600">המושפעת מבעיות בתוך השריר ומבעיות בתוך העצבים המוליכים אותו</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full">
                  <ChevronLeft className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">בדיקה נעשית בהתאם לתקנות הבטיחות</h3>
                  <p className="text-gray-600">הבדיקה מתואמת עם מומחי נוירולוגיה ומתבצעת תחת פיקוח רפואי מלא</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full">
                  <ChevronLeft className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">בחינות מדוקדקות ובדיקות נוספות</h3>
                  <p className="text-gray-600">נבצע את כל הבדיקות הנדרשות כדי להבטיח את בריאותך ולספק מידע מדויק</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About MedAssist Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">אודות MEDASSIST</h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <FaGoogle className="w-6 h-6 text-blue-600" />
                    <span className="text-2xl font-bold mx-2">4.8</span>
                  </div>
                  <div className="flex">
                    {"★".repeat(5).split("").map((star, i) => (
                      <span key={i} className="text-yellow-400">
                        {star}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600">(334 reviews)</span>
                </div>
                <p className="text-gray-600 mb-4">Hashalom St 11, Tel-Aviv-Yafo</p>
                <p className="text-gray-700">
                  Medassist היא חברת בריאות דיגיטלית המובילה בישראל שכבר שנים מספקת פתרון רפואי זמין סיוע רפואי זמין בקביעת תורים לבדיקות רפואיות שונות. כיום אנחנו מציעים פתרון למטופלים רבים בתחום המיקרוביולוגיה קבע ובדיקות שגרתיות שהם צורכי שירות מיידי.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
                  alt="Medical Facility"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Appointment Call Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white -mx-4">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">תור פרטי לבדיקת EMG</h2>
              <div className="mb-8">
                <a href="tel:03-772-4225" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold">
                  03-772-4225
                </a>
              </div>
              <div className="space-y-2 text-lg">
                <p>✓ חיוג מהיר 24 שעות מענה טלפוני</p>
                <p>✓ ניתן לקבל חזרה טלפונית בהתאם לבקשתך</p>
                <p>✓ פגישה במרפאה ע״י נוירולוג מומחה</p>
              </div>
            </div>
          </div>
        </section>

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