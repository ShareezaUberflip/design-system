import { useState, useEffect } from "react";
import axios from 'axios';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const getData = async() => {
        const response = await axios.get(url);
        setData(response.data);
      }

    useEffect(()=> {
      getData();
    }, []);

    return data
}