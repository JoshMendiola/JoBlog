import { useEffect, useState } from 'react';
import axios from 'axios';

const UsePost = (url, data, submit) => {
    const [responseData, setResponseData] = useState(null);
    const [dataPending, setDataPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (submit) {
            axios
                .post(url, data)
                .then((response) => {
                    setResponseData(response.data);
                    setDataPending(false);
                    setError(null);
                })
                .catch((error) => {
                    setDataPending(false);
                    setError(error.message);
                });
        }
    }, [url, data, submit]);

    return { responseData, dataPending, error };
};

export default UsePost;
