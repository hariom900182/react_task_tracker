import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    return  <button onClick={props.onClick} style={{backgroundColor:props.color}} className='btn'>{props.text}</button>
}

Button.defaultProps = {
    color:'gray',
}
Button.propTypes = {
    color:PropTypes.string,
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
}

export default Button

