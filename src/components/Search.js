import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () =>{
    const [term, setTerm] = useState('');
    const [debounceTerm, setDebounceTerm] = useState(term);
    const [results, setResults] = useState([]);
    // never use lifecycle methods like componentdidmount inside function they are used only inside class

    //Second arguement in useEffect can be 
    // nothing remove the , execute for initial render and for every  rerender
    // [] empty array execute for initial render only
    // [a,b,c] execute for initial render and every rerender when any one of a b or c changes
    // do not put async in callabck of use effect instead use .then , helper function or (()=>{code})();
    

    // To remove nasty warning making us include the used prop
    // ie results.length in usestate array we create debounceTerm
    // useEffect(()=>{
    //     const searchWiki = async () => {
    //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
    //              params :{
    //                  action : 'query',
    //                  list : 'search',
    //                  origin : '*',
    //                  format : 'json',
    //                  srsearch : term
    //              }
    //          })
    //         setResults(data.query.search) 
    //     }
    //     if(term && !results.length){
    //         searchWiki()
    //     }else{
    //         const timeoutId = setTimeout(()=>{
    //             if(term){
    //                 searchWiki();
    //             }
    //         },5000)
    //         return (()=>{
    //             clearTimeout(timeoutId);
    //         })
    //     }
    // },[term]); 

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setDebounceTerm(term)
        },1000)
        return (()=>{
            clearTimeout(timeoutId)
        })
    },[term]);

    useEffect(()=>{
        const searchWiki = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
                 params :{
                     action : 'query',
                     list : 'search',
                     origin : '*',
                     format : 'json',
                     srsearch : debounceTerm
                 }
             });
            if(debounceTerm)
            setResults(data.query.search) 
        }
        searchWiki();
    },[debounceTerm])

    const renderedList =  results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className = "ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* never ever use  dangerouslySetInnerHTML unless you trust 
                    the sender as there are potential possiblity of XSS attack*/}
                    <span dangerouslySetInnerHTML={{__html : result.snippet}}></span>
                    {/* {result.snippet} */}
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedList}
            </div>
        </div>
    )
}

export default Search;