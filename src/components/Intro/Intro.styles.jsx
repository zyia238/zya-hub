import styled from 'styled-components'

export const IntroWrapper = styled.div`
    flex:1;
    border-radius:.28571429rem;
    box-shadow: 0 1px 3px 0 #d4d4d5;
`

export const AvatarWrapper = styled.div`
    img{
        width:100%;
        height:auto;
    }
`

export const IntroContent = styled.div`
    .name{
        text-align:center;
        font-weight:700;
        padding:.2rem;
    }
    #rollText {
		font-size: 15px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
        min-height:1.5rem;
	}
    .code{
        padding:.2rem;
        text-align:center;
    }
    .Links{
        display:flex;
        padding:.6667rem 0.8899rem;
        justify-content:center;
        align-items:center;
        border-top:var(--borderColor);

        >a{
            margin:0 .2rem;
        }
    }
`

export const IconButton = styled.a`
    display:inline-block;
    text-align:center;  
    width:38px;
    height:38px;
    line-height:38px;
    border-radius:50%;
    background: #e0e1e2 none;
    color: rgba(0,0,0,.6);
`