import React, {useEffect, useState} from 'react';

const UseFetchAll = (url) => {
    const [data, setData] = useState(null)
    const [dataPending, setDataPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect((() => {
            fetch(url)
                .then(res => {
                    if(!res.ok)
                    {
                        throw Error('Could not fetch that resource!')
                    }
                    return res.json()
                })
                .then((response) => {
                    setData(response);
                    setDataPending(false);
                    setError(null)})
                .catch(err => {
                    setDataPending(false)
                    setError(err.message)}
                )
        }
    ), [url])

    return {data, dataPending, error}
};

export default UseFetchAll;