'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Title name='Vinicius' lastname='R Castro' />
                {['blue', 'red', 'green'].map((square) => (
                    <Square key={square} color={square}/>
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