import React, {useEffect, useRef, useState} from 'react'


const Dropdown = ({statement, options, selected, onSelectedChanged}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()
    const renderedOptions = options.map(option => {
        if (option.value === selected.value) {
            return null
        }
        return (
            <div
                className={"item"}
                key={option.value}
                onClick={() => onSelectedChanged(option)}
            >
                {option.label}
            </div>
        )
    })
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener("click", onBodyClick, {
                capture: true,
            });
        };
    }, []);
    return (
        <div ref={ref} className={"ui form"}>
            <div className={"field"}>
                <label className={"label"}>{statement}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className={"dropdown icon"}></i>
                    <div className={"text"}>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>

        </div>
    )
}

export default Dropdown