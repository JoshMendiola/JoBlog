import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [dataPending, setDataPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
                setDataPending(false);
                setError(null);
            })
            .catch(error => {
                setDataPending(false);
                setError(error.message);
            });
    }, [url]);

    return { data, dataPending, error };
};

export default UseFetch;
