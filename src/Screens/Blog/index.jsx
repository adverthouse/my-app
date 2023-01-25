import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';


class BlogLayout extends Component {
    
    render() {
        return (
            <>
                <p>Bu bir layout sayfası</p>
                <Outlet />
            </>
        );
    }
}

export default BlogLayout;