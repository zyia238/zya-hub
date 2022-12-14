import styled from 'styled-components'

import {BsArrowDownCircle} from "react-icons/bs";


export const Img = styled.img`
    width:110vw;
    height:100vh;
    position:absolute;
    transition:'all .2s ease'
`

export const HeroWrapper = styled.section`
    position:relative;
    width:100vw;
    height:100vh;
`

export const Wave = styled.img`
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:90px;
    z-index:20;
`

export const ShowMore = styled.div`
		position: absolute;
		width: 100px;
		bottom: 150px;
		left: 0;
		right: 0;
		margin: auto;
		font-size: 26px;
		z-index: 100;
`

export const Arrow = styled(BsArrowDownCircle)`
    font-size: 60px;
    opacity: 0.5;
    cursor: pointer;
    position: absolute;
    top: 55px;
    left: 20px;
    animation: opener .5s ease-in-out alternate infinite;
    transition: opacity .2s ease-in-out, transform .5s ease-in-out .2s;

    @keyframes opener {
		100% {
			top: 65px
		}
	}

    :hover{
        opacity:1
    }

`