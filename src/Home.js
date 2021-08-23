import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    setIsPending(false);
                    setBlogs(data);
                });
        }, 1000);

    }, []);

    return (
        <div className="home">
            {/* Conditional Rendering
            if blogs is null/false, the right hand side of && is never rendered 
            */}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;