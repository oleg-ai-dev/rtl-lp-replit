
import { Check } from "lucide-react";

const benefits = [
  {
    title: "פענוח מהיר",
    description: "פענוח תוצר הבדיקה על ידי ה EMG על ידי נוירולוג מומחה",
    icon: "⚡"
  },
  {
    title: "ניתן לקבוע אלינו תור ללא הפניה",
    description: "אנחנו יכולים לסייע בקבלת הפניה ל EMG מרופא המשפחה לאחר תיאום התור",
    icon: "📋"
  },
  {
    title: "התור מתואמים תוך זמן קצר",
    description: "זמן המתנה קצר של 24 שעות עד תיאום אלינו",
    icon: "⏱️"
  }
];

export default function Benefits() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50/80 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">היתרונות של בדיקת EMG</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-xl hover-lift group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{benefit.icon}</div>
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
