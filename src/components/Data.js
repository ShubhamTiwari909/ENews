import React from 'react';
import './Waaducss.css'
function Data(props) {
    return (
        <div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 my-6 lg:my-12">
                {props.dataView?.map(result => {
                    return (
                        <div key={result.url} className="grid rounded overflow-hidden w-shadow-medium font-sans pb-5 lg:mx-7 my-16">
                            <img className="w-full" src={result.urlToImage} alt="No news cover pic" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-sm lg:text-xl mb-5">{result.title}</div>
                                <p className="text-gray-700 text-xs lg:text-lg" dangerouslySetInnerHTML={{ __html: result.description }}>

                                </p>
                            </div>
                            <div className="self-end mt-5">
                                <div className="px-6 py-4 bg-slate-900 rounded-md text-slate-200 text-sm">
                                    <p className="mb-1 p-1">Author - {result.author}</p>
                                    <p className="text-sm p-1">Published At - {result.publishedAt}</p>
                                </div>
                                <div className="px-6 mt-10 text-center">
                                    <span className="inline-block bg-gradient-to-r from-sky-400 to-indigo-900 text-slate-200 rounded-full px-3 py-2 text-sm font-semibold mr-2" >
                                        <a href={result.url} target="_blank" rel="noreferrer">Read More...</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Data
