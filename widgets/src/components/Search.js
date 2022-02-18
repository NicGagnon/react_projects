import React, {useEffect, useState} from 'react'
import wikipedia from "../api/wikipedia";

const Search = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    useEffect( () => {
        const search = async () => {
            const {data}  = await wikipedia.get("", {
                params: {srsearch: term}
            })
            setResults(data.query.search)
        }
        if (term && !results.length) {
            search()
        } else {
            const timeOutId = setTimeout(() => {
                if (term) {
                    search()
                }
            }, 500)
            return () => {
                clearTimeout(timeOutId)
            }
        }
    }, [term])


    const descriptions = results.map((desc) => {
        return (
            <div className={"item"} key={desc.title}>
                <div className={"right float content"}>
                    <a
                        className={"ui button"}
                        href={`https://en.wikipedia.org?curid=${desc.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <h4>{desc.title}</h4>
                <span dangerouslySetInnerHTML={{__html:desc.snippet}}></span>
            </div>
        )
    })

    return (
        <div className={"search-bar ui sergment"}>
            <div className={"ui form"}>
                <div className={"field"}>
                    <label> Search Wikipedia </label>
                    <input
                        type={"text"}
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className={"ui celled list"}>{descriptions}</div>
        </div>
    )
}

export default Search