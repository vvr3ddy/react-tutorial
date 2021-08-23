import { useState, useEffect } from "react";

// use is important before a custom hook in react
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Set timeout is only for the sake of a demo to display loader
        setTimeout(() => {
            fetch(url)
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
                    setData(data);
                    setError(null);
                })
                .catch((err) => {
                    // To Simulate, Stop the json server and refresh the main page
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000);

    }, [url]);
    // url is the dependency for useFetch, which means it will re render when url is changed

    return { data, isPending, error };
}

export default useFetch;