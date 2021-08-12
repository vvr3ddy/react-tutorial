import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My First Blog', body: 'This is my first blog post', author: 'Mario', id: 1 },
        { title: 'My Second Blog', body: 'This is my second blog post', author: 'Luigi', id: 2 },
        { title: 'My Third Blog', body: 'This is my third blog post', author: 'Peach', id: 3 },
        { title: 'My Fourth Blog', body: 'This is my fourth blog post', author: 'Daisy', id: 4 },
        { title: 'My Fifth Blog', body: 'This is my fifth blog post', author: 'Mushroom', id: 5 },
        { title: 'My Sixth Blog', body: 'This is my sixth blog post', author: 'Luigi', id: 6 },
    ]);
    return (
        <div className="home">
            {blogs.map((blog) => (
                // Key Must be Unique
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default Home;