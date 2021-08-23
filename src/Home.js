import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('Mario');

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
            });
    }, []);

    return (
        <div className="home">
            {/* Conditional Rendering
            if blogs is null/false, the right hand side of && is never rendered 
            */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;