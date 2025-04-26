import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BlogCards = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Discover the Magic of Bali',
      imageUrl: '/images/Blog/bali1.jpg',
      description: 'Bali is a dream island with beautiful beaches, lush rice fields, and stunning temples. Whether you are surfing in Kuta or watching sunsets in Uluwatu, theres always something to love. The local food is delicious, and the people are warm and friendly. Bali is perfect for both adventure and relaxation.'
     
    },
    {
      id: 2,
      title: ' Explore Kandy – The Cultural Heart of Sri Lanka',
      description: 'Kandy is a peaceful city surrounded by hills and greenery. It’s home to the famous Temple of the Tooth and beautiful botanical gardens. You can enjoy a calm walk around Kandy Lake or visit traditional dance shows. It’s a great place to experience Sri Lanka’s rich culture.',
      imageUrl: '/images/Blog/kandy1.jpg',
      date: 'June 2, 2023'
    },
    {
      id: 3,
      title: 'Sigiriya – Climb the Lion Rock Fortress',
      description: 'Sigiriya is one of Sri Lanka’s most famous landmarks. Climbing the ancient rock fortress gives you amazing views and a look into royal history. The gardens, frescoes, and sky palace at the top are incredible. Its a must-visit for anyone who loves history and nature.',
      imageUrl: '/images/Blog/sigiriya.jpg',
      date: 'June 18, 2023'
    }
 
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mt-20 mb-10">Latest Blog Posts</h2>
      
      <div className="grid grid-cols-1  gap-8">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 lg:flex"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ duration: 4 }}
             whileHover={{ scale: 1.2 }}
          >
            <div className="relative h-48 w-full lg:w-1/4">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6  w-full lg:w-3/4">
              <h3 className="text-xl font-semibold  mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;