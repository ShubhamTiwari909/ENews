import { useState, useEffect } from 'react'
import DataView from './Data'
import axios from 'axios'

function Headlines() {
    const [headlines, setHeadlines] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: { q: 'india', count: '100', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '57a099fbc9msh14d1195ebbaf26bp1159c0jsnfe005085f3f8',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };
    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data.value);
            setHeadlines(response.data.value);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div>
            <DataView dataView={headlines} />
        </div>
    )
}

export default Headlines