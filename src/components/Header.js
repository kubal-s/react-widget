import React from 'react';
import Link from './Link';

const Header = ()=>{
    return (
        // This causes a hard refresh and all pages included index.js are reloaded
        // hence heavy network requests
        // <div className="ui secondary pointing menu">
        //     <a className="item" href="/">
        //         Accordion
        //     </a>
        //     <a className="item" href="/dropdown">
        //         Dropdown
        //     </a>
        //     <a className="item" href="/translate">
        //         Translate
        //     </a>
        //     <a className="item" href="/list">
        //         Search
        //     </a>
        // </div>

        <div className="ui secondary pointing menu">
        <Link className="item" href="/">
            Accordion
        </Link>
        <Link className="item" href="/dropdown">
            Dropdown
        </Link>
        <Link className="item" href="/translate">
            Translate
        </Link>
        <Link className="item" href="/list">
            Search
        </Link>
    </div>
    )
}

export default Header;