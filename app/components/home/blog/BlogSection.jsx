"use client";
import BlogHeaderSticky from "./BlogHeaderSticky";
import BlogRowItem from "./BlogRowItem";

export default function BlogSection() {
  // Database array tracking live article configurations
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the world's most stunning beaches",
      date: "Mar 19, 2025",
      readTime: "5 Min",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Embracing the journey of self-discovery",
      date: "Mar 24, 2025",
      readTime: "5 Min",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Top thrilling travel experiences for explorers",
      date: "Mar 24, 2025",
      readTime: "5 Min",
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Navigating mountain passes with local experts",
      date: "Apr 02, 2025",
      readTime: "7 Min",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80"
    }
  ];

  return (
    /* Using 'relative' on the outer section guarantees a proper context boundary box
      so the sticky child understands exactly when to stop tracking the scroll window.
    */
    <section className="relative w-full bg-white px-6 py-16 sm:px-12 md:py-24 lg:px-20 xl:px-32 border-t border-orange-950/5">
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
        
        {/* ================= LEFT SIDEBAR COLUMN (Sticky) ================= */}
        <div className="lg:col-span-5 w-full">
          <BlogHeaderSticky />
        </div>

        {/* ================= RIGHT SCROLLABLE LIST COLUMN ================= */}
        <div className="lg:col-span-7 w-full flex flex-col">
          {blogPosts.map((post, index) => (
            <BlogRowItem 
              key={post.id} 
              post={post} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}