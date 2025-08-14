"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

const RelatedBlog = ({ slug }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`https://trupeakhealth.in/masterlogin/wp-json/custom-api/v1/blog-related/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching related blogs:", err);
        setLoading(false);
      });
  }, [slug]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col animate-pulse">
                <div className="bg-gray-300 h-60 w-full rounded-lg"></div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            ))
          : blogs.map((blog) => (
              <div key={blog.slug} className="flex flex-col">
                {/* Image with slug link */}
                <Link href={`/blog/${blog.slug}`}>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={blog.image_url || "/fallback-image.jpg"}
                      alt={blog.title}
                      className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="mt-4 flex flex-col flex-grow">
                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="text-lg md:text-xl font-bold hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mt-1 flex-grow">
                    {blog.short_content}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-gray-500 text-sm mt-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {blog.post_date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {blog.read_time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default RelatedBlog;
