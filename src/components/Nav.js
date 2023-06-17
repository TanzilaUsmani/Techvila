import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function Nav(){
    return(
        <nav>
        
<h1>Techvilla</h1>
<main>
<Link to={"/"}>Home </Link>
<Link to={"/Contact"}>Contact </Link>
<HashLink to={"/#about"}>About </HashLink>
<HashLink to={"/#brands"}>Brands</HashLink>



</main>
</nav>
    );
}

export default Nav;