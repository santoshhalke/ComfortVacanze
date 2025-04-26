// data/testimonials.ts

export interface Testimonial {
    id: number;
    name: string;
    comment: string;
    rating: number;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alice Johnson",
      comment: "This app is amazing! Super clean UI and easy to use.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ravi Kumar",
      comment: "Great experience overall. A few bugs, but support was quick!",
      rating: 4,
    },
    {
      id: 3,
      name: "Fatima Ali",
      comment: "User-friendly and fast. Would love to see more features!",
      rating: 4,
    },
    {
        id: 4,
        name: "Fatima Ali",
        comment: "User-friendly and fast. Would love to see more features!",
        rating: 4,
      },
  ];
  