import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Set timeout is only for the sake of a demo to display loader
        setTimeout(() => { 
            fetch('http://localhost:8000/blogs')
                .then(response => {
                    if (response.ok)
                        return response.json();
                    else
                    // To Simulate, set the fetch url to something invalid
                        throw new Error('Bad response');
                })
                .then(data => {
                    console.log(data);
                    setIsPending(false);
                    setBlogs(data);
                    setError(null);
                })
                .catch((err) => {
                    // To Simulate, Stop the json server and refresh the main page
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000);

    }, []);

    return (
        <div className="home">
            {/* Conditional Rendering
            if blogs is null/false, the right hand side of && is never rendered 
            */}
            { error && <div> {error} </div> }
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;