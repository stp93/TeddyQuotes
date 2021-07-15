import React, { Component } from 'react'
import './banner.css'
import TR from './teddyr-sas.jpeg'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <img src={TR} alt="" />
            </div>
        )
    }
}
