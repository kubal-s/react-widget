import React, { useState } from 'react';

const Accordion = ({items})=>{
    // its array destructuring same like below
    // const colors = ["red","green"]
    // const redColor = colors[0]
    // const greenColor = colors[1]
    // similarly activeIndex is just a name of the varible 
    // for state used in class like 
    // state = { activeIndex : null}
    // setActive index acts like setState
    // for multiple values do the below again with required names
    const [activeIndex,setActiveIndex] = useState(null);

    const onTitleClick = (index) =>{
        console.log('Title clicked',index)
        // it rerenders the Accordion component but 
        // useState now uses the new updates value for
        //  activeIndex
        setActiveIndex(index)
    }
    const renderedItemList = items.map((item,index)=>{
        const active = index === activeIndex ? "active" :"";
        return (
            // we use react fragment if we dont want one more div but just 
            // want to tell that it encloses JSX elements
            <React.Fragment key={item.title}>
                {/* below we call with arrow function because
                 else it gets executed on page load itself */}
                <div className={`title ${active}`} onClick={()=>onTitleClick(index)}> 
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    {item.content}
                </div>
            </React.Fragment>
        )
    })
    return (
        <div className="ui styled accordion"> 
            {renderedItemList}
        </div>
    );
}

export default Accordion;