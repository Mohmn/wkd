import { useState, useEffect, useRef } from 'react';

interface PaginationResult<T> {
    data: T[];
    loading: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any;
    loadMore: () => void;
    resetPagination: () => void;
}

// Define the ApiResponse to enforce that apiCall returns an object with a data field that is an array of T.


export default function usePagination<T>(apiCall: (offset: number, limit: number) => Promise<ApiResponse<T>>, limit = 10): PaginationResult<T> {
    const [offset, setOffset] = useState<number>(1);
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [error, setError] = useState<any>(null);
    const totalRes = useRef(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await apiCall(limit,offset);
                totalRes.current = response.totalCount;
                setData(prevData => [...prevData, ...response.data]);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [offset, apiCall, limit]);

    const loadMore = () => {
        if(data.length === totalRes.current) return;
        setOffset(prevOffset => prevOffset + 1);
    };

    const resetPagination = () => {
        setOffset(1);
        setData([]);
        setError(null);
    };

    return { data, loading, error, loadMore, resetPagination };
}
