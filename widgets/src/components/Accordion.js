import React, {useState} from 'react'



const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null)
    const onTitleClick = (index) => {
        setActiveIndex(index)
    }
    const cards = items.map((card, index) => {
        const active = index === activeIndex ? 'active' : ''
        return (
            <React.Fragment key={card.question}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className={"dropdown icon"}/>
                    {card.question}
                </div>
                <div className={`content ${active}`}>
                    <p>{card.answer}</p>
                </div>
            </React.Fragment>
        )
    })
    return (
        <div className={"ui styled accordion"}>{cards}</div>
    )
}

export default Accordion