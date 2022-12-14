import { useState , useEffect , useRef } from 'react'

import DancingTitle from '../DancingTitle/DancingTitle.component'

import Bg1 from '../../assets/background1.jpg'
import Bg2 from '../../assets/background2.png'
import Bg3 from '../../assets/background3.jpeg'
import Wave1 from '../../assets/wave1.webp'
import Wave2 from '../../assets/wave2.webp'

import {Img ,HeroWrapper ,Wave , ShowMore ,Arrow} from './Hero.styles'


const Home = () => {
    const [percentage, setPercentage] = useState(0.5)
    const [isImageLoaded,setIsImageLoaded] = useState(false)

    const heroContainer = useRef(null)

    useEffect(()=>{
        let { current } = heroContainer
        let startingPoint
        current.addEventListener('mouseenter',(e)=>{
            startingPoint = e.clientX
            const mouseMoveHandler = (e)=>{
                let percentage = (e.clientX - startingPoint) / document.body.clientWidth  + .5
                setPercentage(percentage)
                }
            current.addEventListener('mousemove',mouseMoveHandler)
            
            current.addEventListener('mouseleave',()=>{
                setPercentage(0.5)
                current.removeEventListener('mousemove',mouseMoveHandler)
            })
        })
    },)
    const handleOnLoad = () => {
        setIsImageLoaded(true)
    }

    const handleShowMore = () => {
        console.log('haha')
    }

    return (
        <>
            <HeroWrapper 
            style={{
                '--percentage':percentage
            }}
            onLoad={handleOnLoad}
            ref={heroContainer}
            >
                <Img src={Bg1} style={{
                    opacity: `calc(1 - (${percentage} - 0.5) / 0.5)`,
                    transform:`translateX(${percentage * 20 - 50}px)`,
                }}
                />
                <Img src={Bg2} style={{
                    opacity: `calc(1 - (${percentage} - 0.25) / 0.25)`,
                    transform:`translateX(${percentage * 20 - 50}px)`,
                }}
                />
                {
                    isImageLoaded && (
                        <Img src={Bg3} style={{
                            zIndex: '-1',
                            transform:`translateX(${percentage * 20 - 50}px)`,
                        }}/>
                    )
                }
                <DancingTitle />
                <ShowMore>
                    <Arrow onClick={handleShowMore}/>
                </ShowMore>
                <Wave src={Wave1}/>
                <Wave src={Wave2}/>
            </HeroWrapper>
        </>
    )
}

export default Home