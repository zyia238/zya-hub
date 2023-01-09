import styled from 'styled-components'

export const Line = styled.div`
    position: absolute;
    width: 160px;
    left: -1px;
    height: 1px;
    background: #000;
    z-index: 50;
    animation: lineMove 5s ease-out infinite;   

    @keyframes lineMove {
		9% {
			top: 38px;
		}
		14% {
			top: 8px;
		}
		18% {
			top: 42px;
		}
		22% {
			top: 1px;
		}
		32% {
			top: 32px;
		}
		34% {
			top: 12px;
		}
		40% {
			top: 26px;
		}
		43% {
			top: 7px;
		}
		99% {
			top: 30px;
		}
	}
`

export const TitleWrapper = styled.div`
    position: absolute;
    top: 40%;
    left: 55.5%;
    transform: translate(-50%, -50%) scale(2.5);
    width: 220px;
    font-size: 34px;
    font-family: sans-serif;
    color: transparent;
    z-index:20;

    :before, :after {
		content: attr(data-word);
		position: absolute;
		top: 0;
		height: 36px;
        line-height:36px;
		overflow: hidden;
		filter: contrast(200%);
	}
    
    :before {
		left: 0;
		color: red;
		text-shadow: 1px 0 0 red;
		z-index: 30;
		animation: malfunctionAni 0.95s infinite;
	}
	
    :after {
		left: -1px;
		color: cyan;
		text-shadow: -1px 0 0 cyan;
		z-index: 40;
		mix-blend-mode: lighten;
		animation: malfunctionAni 1.1s infinite 0.2s;
	}

    @keyframes malfunctionAni {
		10% {
			top: -0.4px;
			left: -1.1px;
		}
		20% {
			top: 0.4px;
			left: -0.2px;
		}
		30% {
			left: .5px;
		}
		40% {
			top: -0.3px;
			left: -0.7px;
		}
		50% {
			left: 0.2px;
		}
		60% {
			top: 1.8px;
			left: -1.2px;
		}
		70% {
			top: -1px;
			left: 0.1px;
		}
		80% {
			top: -0.4px;
			left: -0.9px;
		}
		90% {
			left: 1.2px;
		}
		100% {
			left: -1.2px;
		}
	}
`
