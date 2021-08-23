import { useEffect, useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {    
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    // data:blogs means data is aliased as blogs in this case
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