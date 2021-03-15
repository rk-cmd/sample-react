import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const doSomething = () => {
        console.log('click')
    }

    return (
        <header>
            <h1 style={headingStyle}>Task tracker {props.title}</h1>
            <Button color="green" text="Add" onClick={doSomething} />
            <Button color="red" text="Subtract" onClick={doSomething} />
            <Button color="blue" text="Multiply" onClick={doSomething} />
        </header>
    )
}

//default props are taken when the container is called
//without any props
Header.defaultProps = {
    title: 'No name'
}

//throws warning if title is anything other than
//a string, though it will render alright if an
//integer is passed for example.
//put PropTypes.string.isRequired if you definitely
//need that prop
Header.propTypes = {
    title: PropTypes.string
}

const headingStyle = {
    color : 'red', 
    backgroundColor : 'black' 
}

export default Header
