import axios, { AxiosRequestHeaders } from 'axios';
import { useEffect, useState } from 'react';

interface Props {
    method: 'get' | 'post' | 'patch' | 'put';
    url: string | undefined;
    headers?: AxiosRequestHeaders | undefined;
}

/**
 * Wrapper hook for axios to make fetches act more like graphql / suspense patterns
 *
 * @param method get post patch or put
 * @param url the complete url to make a single fetch
 * @param headers any additional headers that you want to include
 *
 * @returns '{data, error, loading}' - states for the fetch
 */
const useAxios = ({ method, url, headers }: Props) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = () => {
        if ((method === 'get' || method === 'post' || method === 'put' || method === 'patch') && url) {
            setLoading(true);
            axios[method](url, headers)
                .then(({ data }) => {
                    setData(data);
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    /** handle all axios get and post calls from beginning to end */
    useEffect(() => {
        fetchData();
    }, [method, url, headers]);

    return { loading, error, data };
};

export default useAxios;
