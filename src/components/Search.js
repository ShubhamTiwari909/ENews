import {useState} from 'react'
import DataView from './Data'
import axios from 'axios'
import { FcSearch } from 'react-icons/fc'

function Search() {
    const [newsData, setNewsData] = useState([]);
    const [search, setSearch] = useState("");
    const [topic, setTopic] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const searchNews = () => {
        setTopic(search)
        axios.get(`https://newsapi.org/v2/everything?q=${topic}&pageSize=100&apiKey=d8ed80a139314f978fa03379413393d4`)
            .then(response => {
                setNewsData(response.data.articles)
                // console.log(response)
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="bg-slate-200 mt-10">
            <div className="flex mx-16 lg:mx-32">
                <input type="search" value={search} onChange={handleSearch}
                    className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                <button onClick={searchNews}><FcSearch size="2rem" color="blue" /></button>
            </div>
            <div className="text-xs flex justify-center mt-3 mb-8">
                Double click the search icon to search the news!!
            </div>
            <div>
                <DataView dataView={newsData} />
            </div>
        </div>
    )
}

export default Search