import { useState , useEffect , useRef , useContext } from 'react'

import DancingTitle from '../DancingTitle/DancingTitle.component'

import {HeroContext} from '../../context/Hero/Hero.context'

import {Img ,HeroWrapper ,Wave , ShowMore ,Arrow} from './Hero.styles'


const Home = () => {
    const [percentage, setPercentage] = useState(0.5)
    const [isImageLoaded,setIsImageLoaded] = useState(false)
    const [hero,setHero] = useState<HTMLDivElement | null>(null)
    const heroContainer = useRef<HTMLDivElement>(null)
    const percentageContainer = useRef<string>("--percentage")

    const {setTransparent} = useContext(HeroContext)

    useEffect(()=>{
        let { current } = heroContainer
        let startingPoint:number

        if(current){
            setHero(current)
            current.addEventListener('mouseenter',(e)=>{
            startingPoint = e.clientX
            const mouseMoveHandler = (e:MouseEvent)=>{
                let percentage = (e.clientX - startingPoint) / document.body.clientWidth  + .5
                setPercentage(percentage)
            }
            if(current){
                current.addEventListener('mousemove',mouseMoveHandler)
            }
            
            if(current){
                current.addEventListener('mouseleave',()=>{
                    setPercentage(0.5)
                    if(current){
                        current.removeEventListener('mousemove',mouseMoveHandler)
                    }
                })
            }
            
        })
        }
           
    },[])

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > heroContainer.current!.clientHeight / 2){
                setTransparent(false)
            }else(
                setTransparent(true)
            )
        })
    },[setTransparent])


    const handleOnLoad = () => {
        setIsImageLoaded(true)
    }

    const handleShowMore = () => {
        window.scrollTo({
            top:hero!.clientHeight,
            behavior:'smooth'
        })
    }

    return (
        <>
            <HeroWrapper 
            style={{
                [percentageContainer.current]:percentage
            }}
            onLoad={handleOnLoad}
            ref={heroContainer}
            >
                <Img src={require('../../assets/background1.jpg')} style={{
                    opacity: `calc(1 - (${percentage} - 0.5) / 0.5)`,
                    transform:`translateX(${percentage * 20 - 50}px)`,
                }}
                />
                <Img src={require('../../assets/background2.png')} style={{
                    opacity: `calc(1 - (${percentage} - 0.25) / 0.25)`,
                    transform:`translateX(${percentage * 20 - 50}px)`,
                }}
                />
                {
                    isImageLoaded && (
                        <Img src={require('../../assets/background3.jpeg')} style={{
                            zIndex: '-1',
                            transform:`translateX(${percentage * 20 - 50}px)`,
                        }}/>
                    )
                }
                <DancingTitle />
                <ShowMore>
                    <Arrow onClick={handleShowMore}/>
                </ShowMore>
                <Wave src={require('../../assets/wave1.webp')}/>
                <Wave src={require('../../assets/wave2.webp')}/>
            </HeroWrapper>
        </>
    )
}

export default Home