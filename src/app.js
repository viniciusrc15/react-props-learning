'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import LikeButton from './like-button'
import SearchButton from './search-button'
import Button from './button'
import Timer from './timer'

class App extends Component {
    constructor() {
        super()
        this.state = {
            text: 'João',
            color: 'purple',
            showTimer: true,
            time: 10,
            value: 'Input React',
            check: false
        }
    }
    render() {
        return (
            // onClick={() => {
            //     alert('clicou');
            // }}
            <div className="container">
                {this.state.showTimer && <Timer time={this.state.time} />}
                <Button handleClick={() => {
                    this.setState({ showTimer: !this.state.showTimer })
                }}>
                    Show/HideTimer
                </Button>
                <Button handleClick={() => this.setState({ time: 10 + this.state.time })}> Change time </Button>
                <Square color={this.state.color} />
                {
                    ['blue', 'red', 'green'].map((color, index) => (
                        <Button
                            key={index}
                            handleClick={() => {
                                return this.setState({ color })
                            }}>
                            {color}
                        </Button>
                    ))
                }

                <div onClick={() => { this.setState({ text: `${this.state.text === 'Vinicius' ? 'Joao' : 'Vinicius'}` }) }}>{this.state.text}</div>


                <form>
                    <input type="text" value={this.state.value} onChange={(e) => { // defaultValue='teste' se nao quiser passar value nem onChange
                        this.setState({ value: e.target.value })
                    }} />
                    <label>
                        <input type="checkbox" value="my-checkbox" checked={this.state.check} //defaultChecked mesmo de cima
                            onChange={(e) => {
                                this.setState({ check: e.target.checked })
                            }}
                        />
                        Meu checkbox
                    </label>
                    <input type="radio" name="rd" value="1" defaultChecked/> Radio 1
                    <input type="radio" name="rd" value="2"/> Radio 1
                </form>

                <LikeButton />
                <SearchButton />
                <Title name='Vinicius' lastname='R Castro' />
                {
                    ['blue', 'red', 'green'].map((square, index) => (
                        <Square key={index} color={square} />
                    ))
                }

            </div >
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