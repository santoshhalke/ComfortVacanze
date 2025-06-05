import { FaStar, FaQuoteRight } from "react-icons/fa";

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
    <div className="lg:w-[25vw] p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        {role && <p className="text-sm text-gray-500">{role}</p>}
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>

      <p className="text-gray-600 italic">&quot;{description}&quot;</p>

      <div className="mt-4 pt-4 flex justify-end">
        <FaQuoteRight className="h-6 w-6 text-gray-300" />
      </div>
    </div>
  );
};

export default TestimonialCard;