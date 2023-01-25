import React from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
    const { url } = useParams();

    return (
        <p> Blog post will be here <strong>{ url }</strong></p>
    );
}

 