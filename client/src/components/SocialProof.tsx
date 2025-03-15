
import { Star } from "lucide-react";

const reviews = [
  {
    name: "דוד כהן",
    text: "שירות מעולה ומקצועי. קיבלתי תור מהר מאוד והצוות היה אדיב ביותר.",
    rating: 5
  },
  {
    name: "רחל לוי",
    text: "הבדיקה בוצעה ברמה גבוהה מאוד. ממליצה בחום!",
    rating: 5
  },
  {
    name: "משה גולן",
    text: "מרפאה מתקדמת עם ציוד חדיש. מרוצה מאוד מהשירות.",
    rating: 5
  }
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">לקוחות ממליצים</h2>
          <div className="flex justify-center items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-xl text-gray-600">4.9 מתוך 5 כוכבים (334 ביקורות)</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover-lift">
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.text}</p>
              <p className="font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
