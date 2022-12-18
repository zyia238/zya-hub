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
    display:flex;
    height:2.77778rem;
    line-height:2.77778rem;
    padding: 0 1.11111rem;
    z-index:100;
    background-color:black;
    transition:all .8s ease;

    &.transparent{
        background-color:transparent
    }
`

export const ContentWrapper = styled.section`
    display:flex;
    width:1400px;
    margin:1rem auto;
    align-items: flex-start;
`

export const MiddlePart = styled.section`
    width:62.5%;
    margin:0 1rem;
`