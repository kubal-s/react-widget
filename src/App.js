import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';

export default ()=>{
    
    const items = [
        {
            title : "what is react?",
            content : "react is javascript framework"
        },
        {
            title : "why react?",
            content : "react is favorite javascript library among engineers"
        },
        {
            title : "how to use react?",
            content : "react is build use components"             
        }
    ]

    const options = [
        {
            label:"The color is red",
            value:"red"
        },
        {
            label:"The color is blue",
            value:"blue"
        },
        {
            label:"The color is yellow",
            value:"yellow"
        }
    ]
    const [selectedOption,setSelectedOption] = useState(options[0]);

    // const showAccordion = ()=>{
    //     if(window.location.pathname === "/")
    //         return <Accordion items = {items}/>
    // }

    // const showList = ()=>{
    //     if(window.location.pathname === "/list")
    //         return <Search/>
    // }
    // const showAccordion = ()=>{
    //     if(window.location.pathname === "/translate")
    //         return <Translate/>
    // }
    // const showAccordion = ()=>{
    //     if(window.location.pathname === "/dropdown")
    //         return <Dropdown/>
    // }
    // const [showDropdown,toggleShowDropdown] = useState(false);
    return (
        <div>
            <Header/>
            {/* <button onClick={()=>toggleShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
            {/* <Accordion items = {items}/> */}
            {/* <Search/> */}
            {/* {showDropdown?
            <Dropdown 
                options={options}
                selectedOption={selectedOption}
                onSelectedOptionChange ={setSelectedOption}
            />:null
            } */}

            {/* <Translate/> */}

            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="select color"
                    options={options}
                    selectedOption={selectedOption}
                    onSelectedOptionChange ={setSelectedOption}
                />  
            </Route>
        </div>
    )
}