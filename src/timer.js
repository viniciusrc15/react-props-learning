'use strict'

import React, { Component } from 'react'

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time: 0
        }
        this.timer;
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ time: this.state.time + 1 })
        }, 1000)
    }

    componentWillReceiveProps(nextProps) {
        // momento ideal para atualizar o setState
        console.log('componentWillReceiveProps=>', this.state, nextProps)
        this.setState({time: this.state.time + nextProps.time})
    }

    componentDidUpdate(prevProps, prevStats) {
        console.log('componentDidUpdate', this.props, prevProps, prevStats)
    }

    shouldComponentUpdate(nextProps, nextStates) {
        console.log('shouldComponentUpdate=>', nextProps, nextStates, this.props)
        return this.props.time !== nextProps.time;
    }

    componentWillUpdate(nextProps, nextStates){
        // nunca atualizar o setState aqui
        console.log('componentWillUpdate=>', nextProps, nextStates, this.props)
    }

    render() {
        return <div>Timer: {this.state.time}</div>
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
}

export default Timer