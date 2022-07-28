import React, { Component } from 'react'

export default class BuyClass extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        const {name} = this.props
        function showAlert() {
            alert(name)
        }
        function handelClick() {

            // setTimeout( showAlert, 2000);
        }
        return (
            <div>
                <span className='badge' onClick={handelClick}>Buy</span>
                <p>class</p>
            </div>
        )
    }
}
