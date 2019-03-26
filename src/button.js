'use strict'

import React from 'react'

const Button = ({ children, margin, handleClick }) => (
    <button style={{ margin: margin }} className="main-button" onClick={handleClick}>
        {children}
    </button>
)

Button.defaultProps = {
    margin: '10px'
}

Button.protoTypes = {
    handleClick: React.PropTypes.func.isRequired // define os tipos e parametros de props
}

export default Button
