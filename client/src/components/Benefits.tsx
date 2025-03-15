import { Check } from "lucide-react";

const benefits = [
  {
    title: "פענוח מהיר",
    description: "פענוח תוצר הבדיקה על ידי ה EMG על ידי נוירולוג מומחה"
  },
  {
    title: "ניתן לקבוע אלינו תור ללא הפניה",
    description: "אנחנו יכולים לסייע בקבלת הפניה ל EMG מרופא המשפחה לאחר תיאום התור"
  },
  {
    title: "התור מתואמים תוך זמן קצר",
    description: "זמן המתנה קצר של 24 שעות עד תיאום אלינו"
  }
];

export default function Benefits() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">היתרונות של בדיקת EMG</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
