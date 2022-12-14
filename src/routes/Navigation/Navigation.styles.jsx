import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Logo = styled(Link)`
    color:#48dbfb;
    font-family : Lato;
    font-size:1rem;
    padding: 0 1.11111rem;
`

export const NavItem = styled(Logo)`
    color: white;
    font-size:0.77778rem;
`

export const NavWrapper = styled.header`
    position:fixed;
    width:100vw;
    top:0;
    // background-color:black;
    display:flex;
    height:2.77778rem;
    line-height:2.77778rem;
    padding: 0 1.11111rem;
    z-index:100;
`