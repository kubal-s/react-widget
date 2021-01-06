import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({label,options,selectedOption,onSelectedOptionChange}) => {
    const [open, setOpen]= useState(false);
    const ref = useRef();
    useEffect(()=>{
        const onBodyClick = (event)=>{
            if(ref.current&&ref.current.contains(event.target)){
                return;
            }
            setOpen(false)
        };
        document.body.addEventListener('click',onBodyClick)

        return (()=>{
            document.body.removeEventListener('click',onBodyClick)
        })
    },[])
    const rendreredOptions =  options.map((option)=>{
        if(option.value === selectedOption.value)
            return null;
        return (
            <div key = {option.value} onClick={()=>onSelectedOptionChange(option)}> 
                {option.label} 
            </div>
        )
    })
    return (
        <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div className={`ui selection dropdown ${open?'visible active':''}`} onClick={()=>setOpen(!open)}>
            <i className="dropdown icon"></i>
            <div className="text">{selectedOption.label}</div>
            <div className={`menu ${open?'visible transition':''}`}>{rendreredOptions}</div>
          </div>
        </div>
        <div style={{color:`${selectedOption.value}`}}>The color is {selectedOption.value}</div>
        
      </div>
    )
}
 export default Dropdown;