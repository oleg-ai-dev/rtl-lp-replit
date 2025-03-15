import Header from "@/components/Header";
import EmgForm from "@/components/EmgForm";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section with Form */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <EmgForm />
              <div className="hidden md:block">
                <img 
                  src="/emg-procedure.jpg"
                  alt="EMG בדיקת"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-yellow-600 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">מחיר כרטיסים פרטיים</h3>
                <p className="text-gray-700">לכל צוות הרופאים שלנו, בהתאם לתנאי הרישיון של המוסד הרפואי.</p>
              </div>
              <div className="bg-blue-500 p-8 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">ניתן לפנות אלינו גם ללא המתנה</h3>
                <p>אנחנו זמינים בבקשה מיוחדת לבדיקת EMG ואם המקרה דחוף ולא סובל דיחוי.</p>
              </div>
              <div className="bg-blue-600 p-8 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">פגישת מחיר</h3>
                <p>פגישה מהירה תוך 24 שעות מרגע יצירת הקשר.</p>
              </div>
            </div>
          </div>
        </section>

        {/* EMG Benefits Section */}
        <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'url("/emg-benefits-bg.jpg")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">היתרונות של בדיקת EMG</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">המצב הראשוני והקריטי</h3>
                <p>בניגוד למחלות המוטוריות במיקרוסקופ הרפואי והוא גורמים מתברר כי מחלות עצבים ושונות במקום הבריאות את השרירים ושפיעת.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">יתרונות הבדיקה</h3>
                <p>יכולה להיות מדויק וגם לא ניתן. על כן כיצד נאמרת את המוטולים לגלות עצבים ולהפכם לגרדים מעצרים בהתאם למקרה הנכון.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MedAssist About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">אודות MEDASSIST</h2>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold">4.8</span>
                  <div className="flex text-yellow-400">
                    {"★".repeat(5).split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <span className="text-gray-600">(334 reviews)</span>
                </div>
                <p className="text-gray-600 mb-2">Hashalom St 11, Tel-Aviv-Yafo</p>
                <p className="text-gray-700">
                  Medassist היא חברת בריאות דיגיטלית המובילה בישראל שכבר שנים מספקת פתרון רפואי זמין.
                  סיוע רפואי זמין בקביעת תורים לבדיקות רפואיות שונות.
                </p>
              </div>
              <div>
                <EmgForm />
              </div>
            </div>
          </div>
        </section>

        {/* Call Action Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">תור פרטי לבדיקת EMG</h2>
            <div className="mb-8">
              <a href="tel:03-772-4225" className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg text-xl font-bold">
                03-772-4225
              </a>
            </div>
            <div className="space-y-2">
              <p>✓ חיוג מהיר 24 שעות מענה טלפוני</p>
              <p>✓ ניתן לקבל חזרה טלפונית בהתאם לבקשתך</p>
              <p>✓ פגישה במרפאה ע״י נוירולוג מומחה</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* WhatsApp Button */}
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