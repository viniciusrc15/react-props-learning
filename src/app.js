'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
    constructor() {
        super()
        this.state = {
            text: 'João'
        }
    }
    render() {
        return (
            // onClick={() => {
            //     alert('clicou');
            // }}
            <div className="container">
                <div onClick={() => { this.setState({ text: 'Vinicius' }) }}>{this.state.text}</div>
                <LikeButton />
                <SearchButton />
                <Title name='Vinicius' lastname='R Castro' />
                {['blue', 'red', 'green'].map((square, index) => (
                    <Square key={index} color={square} />
                ))}

            </div>
        )
    }
}

// const App = React.createClass({
//     render: function () {
//         return (
//             <div className="container">
//                 <Title name='Vinicius' lastname='Castro' />
//             </div>
//         )
//     }
// })

export default App