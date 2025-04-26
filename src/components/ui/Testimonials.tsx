// // components/ui/TestimonialCard.tsx
// import { Testimonial } from "@/data/testimonials";
// import { Star } from "lucide-react"; // Optional: for rating stars

// interface Props {
//   testimonial: Testimonial;
// }

// const TestimonialCard = ({ testimonial }: Props) => {
//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition-all mx-4 min-w-[300px]">
//       <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
//       <p className="text-gray-600 mb-4">{testimonial.comment}</p>
//       <div className="flex gap-1 text-yellow-500">
//         {Array.from({ length: testimonial.rating }, (_, i) => (
//           <Star key={i} className="w-4 h-3 fill-yellow-400" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;


// components/TestimonialCard.tsx
import { Star } from 'lucide-react'; // or any other icon library

interface TestimonialCardProps {
  name: string;
  rating: number;
  description: string;
  role?: string;
}

const TestimonialCard = ({
  name,
  rating,
  description,
  role = "Customer",
}: TestimonialCardProps) => {
  return (
    <div className="max-w-md p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        {role && <p className="text-sm text-gray-500">{role}</p>}
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic">
        "{description}"
      </p>
      
      <div className="mt-4 pt-4 flex justify-end">
        <svg 
          className="h-6 w-6 text-gray-300" 
          fill="currentColor" 
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
    </div>
  );
};

export default TestimonialCard;