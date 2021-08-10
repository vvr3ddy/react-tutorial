const Home = () => {
    const handleClick = (e) => {
        // To avoid page reload when the button is clicked, useful in form submissions
        e.preventDefault();
        //  e -> Event object
        console.log('Button Clicked', e);
    };
    const handleClickAgain = (name, e) => {
        // To avoid page reload when the button is clicked, useful in form submissions
        console.log('Hello ' + name, e.target);
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            {/* Don't invoke the function, just set a reference by calling the name only */}
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('VVR', e)}>Click Me Again</button>
            {/* The anonymous function gets the event object by default instead of handleClickAgain */}
        </div>
    );
}

export default Home;