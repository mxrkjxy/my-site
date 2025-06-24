import { useEffect } from 'react';

import blogPosts from '@/contents/blogPosts';

export const BlogPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <section className="snap-start min-h-screen pt-24 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Welcome to my Blog!
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                Read More →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
