import React from 'react';

const blogPosts = [
{
    title: "Why Should I Introduce Contract Testing?",
    link: "https://medium.com/@sakthikannan.subramanian/why-should-i-introduce-contract-testing-ad931dc359d3?source=user_profile---------0----------------------------",
    description: "This blog post explores the benefits of implementing contract testing in software development. It discusses how contract testing helps improve communication between teams, reduces integration issues, and enhances overall code quality." 
},
{
    title: "Discovering Japanese Wisdom",
    link: "https://medium.com/@sakthikannan.subramanian/discovering-japanese-wisdom-d9c7568cd528?source=user_profile---------1----------------------------",
    description: "This blog post delves into the fascinating world of Japanese wisdom, highlighting key principles and philosophies that can be applied to personal and professional life. It explores concepts like mindfulness, respect, and the importance of finding harmony." 
},
{
    title: "Paradigm Shift of a QA",
    link: "https://medium.com/@sakthikannan.subramanian/paradigm-shift-of-a-qa-595aa3f501af?source=user_profile---------2----------------------------",
    description: "This blog post examines the evolving role of Quality Assurance (QA) professionals in the modern software development landscape. It discusses the shift towards proactive testing, automation, and collaboration with developers to ensure high-quality software delivery." 
}
];
  

const Blog = () => {
  return (
    <section id="blog" className="section">
      <h2>Blog</h2>
      <ul>
        {blogPosts.map((post, index) => (
          <li key={index}>
            <strong><a href={post.link}>{post.title}</a></strong>: {post.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
