"use client";
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/Blog/BlogData';
import { useRouter } from 'next/navigation';

const BlogCards = () => {
  const router = useRouter();

  const handleCardClick = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  // Function to truncate text to a certain number of words
  const truncateText = (text: string, maxWords: number) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="mx-auto lg:mx-[6vw] px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <h2 className="text-3xl font-bold text-center mb-16 relative z-10">
        Comfort Vacanze Blogs
        <motion.span 
          className="absolute left-1/2 -bottom-2 h-1 bg-[#EB7C19]"
          initial={{ width: 0 }}
          whileInView={{ width: '280px', x: '-50%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            onClick={() => handleCardClick(post.slug)}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col h-full"
          >
            <div className="relative h-48 w-full overflow-hidden">
  <img
    src={post.featuredImage}
    alt={post.cardtitle}
    loading="lazy"
    className="w-full h-full object-cover"
  />
</div>
            <div className="p-4 flex-grow">
              <h3 className="text-lg font-semibold mb-2 hover:text-[#EB7C19] transition-colors">
                {post.cardtitle}
              </h3>
              <p className="text-gray-600 mb-3 text-sm text-justify">
                {truncateText(post.intro, 20)}
                {post.intro.split(' ').length > 20 && (
                  <span 
                    className="text-[#EB7C19] font-medium ml-1 hover:underline"
                  >
                    Read more
                  </span>
                )}
              </p>
            </div>
            <div className="px-4 pb-4">
              {post.date && <p className="text-xs text-gray-500">Published: {post.date}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;