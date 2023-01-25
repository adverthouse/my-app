import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Blog() {

        return (
            <>
                <p>Blog sayfası içeriği burada </p> 
                <ul>
                    <li>
                        <NavLink to="/blog/post/deneme">Linke 2</NavLink></li>
                </ul>
            </>
         )
}

 