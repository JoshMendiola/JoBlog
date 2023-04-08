import { useEffect, useState } from 'react';
import axios from 'axios';

const UsePost = (url, data, contentType, submit) => {
    const [responseData, setResponseData] = useState(null);
    const [dataPending, setDataPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (submit) {
            setDataPending(true )
            axios
                .post(url, data, {headers: {
                        'Content-Type': contentType
                    }})
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
