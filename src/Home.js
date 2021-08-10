import { useState } from 'react';

const Home = () => {
    // let name = "Mario";
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(12);
    const handleClick = (e) => {
        setName("Luigi");
        setAge(30);
    };
    return (
        <div className="home">
            <h2>Homepage</h2>
            {/* Don't invoke the function, just set a reference by calling the name only */}
            <button onClick={handleClick}>Click me</button>
            <p>{name} is {age} years old</p>

        </div>
    );
}

export default Home;