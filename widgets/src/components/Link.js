import React from "react";

const Link = ({className, href, children}) => {
    const onClick = (event) => {
        if (event.metaKey || event.crtlKey) {
            return
        }
        event.preventDefault()
        window.history.pushState({}, '', href)
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }
    return (
        <a
            className={className}
            href={href}
            children={children}
            onClick={onClick}
        >
            {children}
        </a>
    )
}
export default Link