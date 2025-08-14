"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://trupeakhealth.in/masterlogin/wp-json/custom-api/v1/blogs")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.post_type === "post");
        setBlogs(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  const SkeletonCard = () => (
    <div className="flex flex-col animate-pulse">
      <div className="w-full h-60 bg-gray-300 rounded-lg"></div>
      <div className="mt-4 h-5 bg-gray-300 rounded w-3/4"></div>
      <div className="mt-2 h-4 bg-gray-200 rounded w-full"></div>
      <div className="mt-1 h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="flex gap-4 mt-3">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
        <div className="h-4 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">BLOGS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)
          : blogs.map((blog, index) => (
              <div key={index} className="flex flex-col">
                {/* Image with slug link */}
                <Link href={`/blog/${blog.slug}`} className="overflow-hidden rounded-lg block">
                  <img
                    src={blog.image_url || "/fallback-image.jpg"}
                    alt={blog.title}
                    className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                {/* Content */}
                <div className="mt-4 flex flex-col flex-grow">
                  {/* Title with slug link */}
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

export default BlogSection;
