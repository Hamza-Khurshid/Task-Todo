import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ERROR_IMG from './error.png';

export default class PageNotFound extends Component {

    componentWillMount() {
        this.props.changeTitle('Page Not Exist!');
    }

    render() {
        return (
            <div>
                <Link to='/'> <img src={ERROR_IMG} style={ { height: '100%', width: '100%', marginTop: 20 } } alt='Page Not Found'/> </Link> 
            </div>
        )
    }
}
