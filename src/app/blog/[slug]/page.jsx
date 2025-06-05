import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/data/Blog/BlogData'

export default function BlogPost({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className=" mx-auto lg:mx-[20vw] px-4 py-12 mt-16">
      <Link 
        href="/blog" 
        className="mb-6 inline-flex items-center text-[#EB7C19] hover:underline"
      >
        ← Back to Blog
      </Link>
      
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-50 md:h-[500px] w-full">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h1>
          {post.date && <p className="text-gray-500 mb-6">Published on {post.date}</p>}
          
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700">{post.intro}</p>
          </div>
          
          {post.sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-[#EB7C19]">
                {section.title}
              </h2>
              
              <div className="space-y-10">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col gap-6">
                    {item.image && (
                      <div className="w-full h-60 md:h-100 min-h-[12rem]">
                        <img
                          src={item.image}
                          alt={item.heading}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    )}
                    
                    <div className="w-full">
                      <h3 className="text-xl font-medium mb-3 text-gray-800">
                        {item.heading}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-[#EB7C19]">
              {typeof post.conclusion === 'object' ? post.conclusion.title : 'Conclusion'}
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {typeof post.conclusion === 'object' ? post.conclusion.content : post.conclusion}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Your Blog Name`,
    description: post.intro,
    openGraph: {
      title: post.title,
      description: post.intro,
      images: [post.featuredImage],
    },
  }
}