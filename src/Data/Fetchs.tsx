import { useEffect, useState } from "react";

export const useFetch = (url: string): any => {
    const [data, setData] = useState<any>();
    const [isPending, setIsPending] = useState<any>(true);
    const [error, setError] = useState<any>();

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching users data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);
    }, [url]);

    return { data, isPending, error };
}


export const getFlightById = (url: string, id:any): any => {
    const [data, setData] = useState<any>();
    const [isPending, setIsPending] = useState<any>(true);
    const [error, setError] = useState<any>();

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching users data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data.find((flight: any) => flight.id === id));
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);
    }, [url]);

    return { data, isPending, error };
}


