import React from 'react';
import {Link} from 'react-router-dom';
import ERROR_IMG from './error.png';

export default function() {
    return(
        <div>
            <Link to='/'> <img src={ERROR_IMG} style={ { height: '100%', width: '100%', marginTop: 20 } } alt='Page Not Found'/> </Link> 
        </div>
    );
} 