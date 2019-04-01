'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import LikeButton from './like-button'
import SearchButton from './search-button'
import Button from './button'
import Timer from './timer'
import { runInThisContext } from 'vm';

class App extends Component {
    constructor() {
        super()
        this.state = {
            text: 'João',
            color: 'purple',
            showTimer: true,
            time: 10,
            value: 'Input React',
            check: false,
            showContet: false,
            checked: false,
            valueSelect: 2
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


                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        console.log(e)
                    }}

                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                >
                    <input type="text" value={this.state.value} onChange={(e) => { // defaultValue='teste' se nao quiser passar value nem onChange
                        this.setState({ value: e.target.value })
                    }} />
                    <label>
                        <input type="checkbox" value="my-checkbox" checked={this.state.check} //defaultChecked mesmo de cima
                            onChange={(e) => {      // checkbox e radio funciona onClick
                                this.setState({ check: e.target.checked })
                            }}
                        />
                        Meu checkbox
                    </label>
                    <input type="radio" name="rd" value="1" defaultChecked /> Radio 1
                    <input type="radio" name="rd" value="2" /> Radio 1

                    <select value={this.state.valueSelect} onChange={(e) => { // multiple
                        this.setState({ valueSelect: e.target.value })
                    }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <textarea defaultValue={'teste\nteste'} />
                    <button type="submit">enviar</button>
                </form>

                <LikeButton />
                <SearchButton />
                <Title name='Vinicius' lastname='R Castro' />
                {
                    ['blue', 'red', 'green'].map((square, index) => (
                        <Square key={index} color={square} />
                    ))
                }

                <div>
                    <label>
                        <input type="checkbox" checked={this.state.checked} onChange={() => {
                            this.setState({ checked: !this.state.checked }, () => {
                                this.setState({ showContet: !this.state.checked })
                            })
                        }
                        } />
                    </label> Meu cheque
                    {this.state.showContet && <div>Meu Conteudo</div>}
                </div>

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