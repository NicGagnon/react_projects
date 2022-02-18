import React, {useState} from 'react'
import Accordion from "./components/Accordion";
import Search from "./components/Search"
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route"
import Header from "./components/Header";

const items = [
    {
        question: "What is React?",
        answer: "It's a Javascript framework"
    },
    {
        question: "How many pokemons are in the first generation",
        answer: "There are 151 if you count Mew"
    },
    {
        question: "What's Nic's favorite band?",
        answer: "Blink 182"
    }
]

const options = [
    {
        label: "Color Red",
        value: "red"
    },
    {
        label: "Color Blue",
        value: "blue"
    },
    {
        label: "Lean Mean Green Machine",
        value: "green"
    }
]


const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header/>
            <Route path={"/"}>
                <Accordion items={items} />
            </Route>
            <Route path={"/list"}>
                <Search />
            </Route>
            <Route path={"/dropdown"}>
                <Dropdown
                statement={"Select a color"}
                options={options}
                selected={selected}
                onSelectedChanged={setSelected}/>
            </Route>
            <Route path={"/translate"}>
                <Translate />
            </Route>
        </div>
    )
}

export default App