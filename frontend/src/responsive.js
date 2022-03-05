import { css } from "styled-components"

 const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `
}
export default mobile
//can do the same for other devices example 

/* export const tablet = (props) => {
    return css`
      @media only screen and (max-width: 768px) {
        ${props}
      }
    `
  } */

  
/* export const computerScreen = (props) => {
    return css`
      @media only screen and (max-width: 992px) {
        ${props}
      }
    `
  } */

  
/* export const hugeScreen = (props) => {
    return css`
      @media only screen and (max-width: 1280px) {
        ${props}
      }
    `
  } */