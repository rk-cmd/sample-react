import PropTypes from 'prop-types'
// import styled from 'styled-components'
import {StyledButton} from './Button.style'

const Button = ({ color, text, onClick}) => {
    // const ButtonStyle = {
    //     backgroundColor: color
    // } 



    // return <button onClick={onClick} style={ButtonStyle}>{text}</button>
    return <StyledButton bgcolor={color} onClick={onClick} >{text}</StyledButton>
}

//move big styled components to other js files
// const StyledButton = styled.a`
//     background-color: ${props => props.bgcolor};
//     font-size: 16px;
//     padding: 10px;
// `

Button.defaultProps = {
    color: "steelblue"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    doSomething: PropTypes.func
}

export default Button
