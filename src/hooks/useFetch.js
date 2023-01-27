import React, { useState, useEfect} from 'react';
import axios from 'axios';

function useFetch(url) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const {data} = await axios.get(url);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEfect(() {
        fetchData();
    }, []);

    return {error, loading, data};
}

export default useEfect;