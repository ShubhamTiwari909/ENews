import React from 'react'
import './Waaducss.css'
function About() {
    return (
        <div className="grid place-content-center pt-10 pb-20">
            <div className="w-purple-claymorphism mx-8">
                <h1 className="text-center text-2xl w-black-gradient w-gradient-text my-6">About</h1>
                <p className="mt-5 mb-10">
                    This news website is created with the <a href="https://newsapi.org/" target="_blank" rel="noreferrer"
                        className="text-purple-700">newsapi.org</a> by using their api to fetch the data
                </p>
                <div className="grid place-content-center">
                    <p className="text-slate-200 bg-neutral-900 rounded-md p-5">Created by - Shubham Tiwari </p>
                </div>
            </div>
        </div>
    )
}

export default About