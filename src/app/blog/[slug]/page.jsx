// import BlogSingleMain from '@/components/Blogs/BlogSingleMain'
// import RelatedBlog from '@/components/Blogs/RelatedBlog'
// import ContactForm from '@/components/ContactForm'
// import ContactSection from '@/components/ContactSection'
// import React from 'react'

// const blogsingle = ({ params }) => {
//     const slug = params.slug
//     return (
//         <>
//             <BlogSingleMain slug={slug} />
//             <RelatedBlog slug={slug} />
//             <ContactSection />
//             <ContactForm />
//         </>
//     )
// }

// export default blogsingle
// app/blog/[slug]/page.jsx
// app/blog/[slug]/page.jsx
import BlogSingleMain from '@/components/Blogs/BlogSingleMain';
import RelatedBlog from '@/components/Blogs/RelatedBlog';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';

// Fetch all blog slugs at build time
export async function generateStaticParams() {
  const res = await fetch('https://trupeakhealth.in/masterlogin/wp-json/wp/v2/posts', {
    cache: 'no-store', // fetch fresh data at build time
  });

  const posts = await res.json();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogSinglePage({ params }) {
  const { slug } = params;

  return (
    <>
      <BlogSingleMain slug={slug} />
      <RelatedBlog slug={slug} />
      <ContactSection />
      <ContactForm />
    </>
  );
}
