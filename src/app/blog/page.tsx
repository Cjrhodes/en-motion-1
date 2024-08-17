import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
  const blogPosts = [
    { 
      title: 'The Benefits of High-Intensity Interval Training', 
      slug: 'benefits-of-hiit'
    },
    { 
      title: '10 Tips for Better Sleep', 
      slug: '10-tips-for-better-sleep'
    },
    { 
      title: 'Nutrition Myths Debunked', 
      slug: 'nutrition-myths-debunked'
    },
  ];

  return (
    <div className="container mt-5">
      <h1>En Motion Fitness Blog</h1>
      <ul className="list-group mt-4">
        {blogPosts.map((post, index) => (
          <li key={index} className="list-group-item">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;