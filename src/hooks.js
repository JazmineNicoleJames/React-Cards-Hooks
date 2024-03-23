import axios from "axios";
import { useState} from "react";

const useFlip = () => {
    const [state, setState] = useState(true)
    const flipCard = () => {
        setState(state => !state)
    }
    return [state, flipCard]
}

const useAxios = (url) => {
    const [response, setResponse] = useState([])
    const fetchData = async(formatter = data => data, restOfUrl = "") => {
        try {
            const res = await axios.get(`${url}${restOfUrl}`);
            console.log('Request URL:', `${url}${restOfUrl}`);
            console.log('Response data:', res.data);
            setResponse(data => [...data, typeof formatter === 'function' ? formatter(res.data) : res.data])
        } catch (error) {
            console.error('axios error', error)
        }
    }
   return [response, fetchData]
}

export { useFlip, useAxios };