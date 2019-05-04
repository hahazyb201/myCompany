import React, { Component } from 'react';
import { Main } from './Main';
import sky from '../assets/nicholas.jpg';

export class Home extends React.Component {
    render(){
        return (
        <div>
            <img src={sky} alt="asd" className="bkim"/>
            <Main/>
        </div>
        );
    }
}