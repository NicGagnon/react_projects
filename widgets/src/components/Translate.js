import React, {useEffect, useRef, useState} from 'react'
import googleTranslate from "../api/googleTranslate";
import Dropdown from "./Dropdown";

const options = [
    {
        "label": 'Afrikaans',
        "value": 'af'
    },
    {
        "label": 'Arabic',
        "value": 'ar'
    },
    {
        "label": 'Hindi',
        "value": 'hi'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)
    const [translatedText, setTranslatedText] = useState('')

    useEffect(() => {
        const translate = async () => {
            const {data} = await googleTranslate.post('', {}, {
                params: {
                    q: debouncedText,
                    target: language.value
                }
            })
            setTranslatedText(data.data.translations[0].translatedText)
        }
        translate()
    }, [debouncedText, language])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 500)

        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    return (
        <div>
            <div className={"ui form"}>
                <div className={"field"}>
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                statement={"Choose a Language"}
                options={options}
                selected={language}
                onSelectedChanged={setLanguage}
            />
            <hr />
            <div className={"ui header"}>Output</div>
            <div className={"ui header"}>{translatedText}</div>
        </div>
    )
}

export default Translate