import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options =[
    {
        label:"Africaans",
        value:"af"
    },
    {
        label:"Arabic",
        value:"ar"
    },
    {
        label:"Hindi",
        value:"hi"
    }
]
const Translate = () =>{
    const [selectedLanguage, onSelectedLanguageChange]= useState(options[0])
    const [text,setText] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter a text</label>
                    <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
                </div>
            </div>
            <Dropdown
                options= {options}
                selectedOption= {selectedLanguage}
                onSelectedOptionChange= {onSelectedLanguageChange}
                label = "Select a language"
            />
            <hr/>
            <h3 className="ui header"> Output:</h3>
            <Convert 
            language={selectedLanguage}
            text={text}
            />
        </div>
    )
}

export default Translate;