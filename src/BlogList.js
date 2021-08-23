const BlogList = ({blogs, title}) => {
    // const BlogList = (blogs, title) => {
    // Receiving the props from Home.js
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (

                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default BlogList;