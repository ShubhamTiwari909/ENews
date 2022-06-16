import { useState, useEffect } from 'react'
import DataView from './Data'
import axios from 'axios'

function Headlines() {
    const [headlines, setHeadlines] = useState([]);
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=d8ed80a139314f978fa03379413393d4")
            .then(response => {
                setHeadlines(response.data.articles)
                console.log(response)
            })
            .catch(err => console.log(err));

    }, [])

    return (
        <div>
            <DataView dataView={headlines} />
        </div>
    )
}

export default Headlines