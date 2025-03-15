import Header from "@/components/Header";
import EmgForm from "@/components/EmgForm";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/images/EMG-General-1.jpg"
                  alt="EMG בדיקת"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <EmgForm />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4">המחיר כרטיסים פרטיים</h3>
                <p>לכל צוות הרופאים שלנו בהתאם לתנאי הרישיון של המוסד הרפואי</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4">ניתן לפנות אלינו גם ללא המתנה</h3>
                <p>אנחנו זמינים בבקשה מיוחדת לבדיקת EMG ואם המקרה דחוף ולא סובל דיחוי</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4">פגישת מחיר</h3>
                <p>פגישה מהירה תוך 24 שעות מרגע יצירת הקשר</p>
              </div>
            </div>
          </div>
        </section>

        {/* Procedure Steps */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">מהלך הבדיקה</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full shrink-0">
                  <Plus className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600">בדיקת EMG היא בדיקה אלקטרופיזיולוגית של העצבים שבודקת את המהירות המושפעת מבעיות בתוך השריר ומבעיות בתוך העצבים המוליכים אותו</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full shrink-0">
                  <Plus className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600">בדיקה נעשית בהתאם לתקנות הבטיחות והיא מתואמת עם מומחי נוירולוגיה ומתבצעת תחת פיקוח רפואי מלא</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full shrink-0">
                  <Plus className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600">הבדיקה נעשית בהתאם לתקנות הבטיחות. מתואמת עם מומחי נוירולוגיה ומתבצעת תחת פיקוח רפואי מלא</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full shrink-0">
                  <Plus className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600">בחינות מדוקדקות ובדיקות נוספות יבוצעו כדי להבטיח את בריאותך</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold mb-6">המלצת לקוחות בגוגל</h2>
                  <div className="text-center mb-8">
                    <div className="mb-4">
                      <span className="text-4xl font-bold">4.8</span>
                    </div>
                    <div className="flex justify-center text-yellow-400 text-2xl mb-2">
                      {"★".repeat(5).split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                    <span className="text-gray-600">334 reviews ©</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">אודות MEDASSIST</h2>
                <p className="text-gray-600 mb-2">Hashalom St 11, Tel-Aviv-Yafo</p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Medassist היא חברת בריאות דיגיטלית המובילה בישראל שכבר שנים מספקת פתרון רפואי זמין.
                  סיוע רפואי זמין בקביעת תורים לבדיקות רפואיות שונות בנוחות מירבית.
                  הרופאים והצוות שלנו בהתאם למיקרוביולוגיה קבע ובדיקות שגרתיות שהם צריכים שירות מיידי.
                  תקנותי כמו חיים.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-gray-600">לכל אחד מספק פתרון מהיר, פשוט אלינו מגדירים כמה טיפול מסייע.
                     נצרן מחלקות סטנד לישיר המשתמשי בצורה יעילה.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-right">
                <h2 className="text-3xl font-bold mb-8">EMG תור פרטי לבדיקת</h2>
                <div className="mb-8">
                  <a
                    href="tel:03-772-4225"
                    className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-xl font-bold transition-colors"
                  >
                    03-772-4225
                  </a>
                </div>
                <div className="space-y-2 text-lg">
                  <p>✓ חיוג מהיר 24 שעות מענה טלפוני</p>
                  <p>✓ ניתן לקבל חזרה טלפונית בהתאם לבקשתך</p>
                  <p>✓ פגישה במרפאה ע״י נוירולוג מומחה</p>
                </div>
              </div>
              <div>
                <EmgForm />
              </div>
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
        className="fixed bottom-8 left-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-colors"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
}