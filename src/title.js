'use strict'

import React from 'react'

const Title = ({ name, lastname }) => <h1>Olá {`${name} ${lastname}`}</h1>

Title.defaultProps = {
    name: 'Desconhecido',
    lastname: 'Sem sobrenome'
}
// const Title = React.createClass({
//     getDefaultProps: function () {
//         return {
//             name: 'Desconhecido',
//             lastname: 'Sem sobrenome'
//         }
//     },
//     render: function () {
//         return <div>Olá {this.props.name + ' ' + this.props.lastname}</div> //default name || desconhecido
//     }
// })

export default Title