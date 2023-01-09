import { useEffect } from 'react'

import DropdownTabs from '../../components/DropdownTabs/DropdownTabs.component'

import {IntroWrapper,AvatarWrapper,IntroContent,IconButton} from './Intro.styles'

import {rollText} from '../../utils/rollText'

const content = [
    {
        title:'最忘不了的动漫',
        emoji:'📺',
        content:'星际牛仔、强风吹拂、碧蓝之海、银魂、排球少年、CyberPunk:Edge Runner、乒乓、家庭教师、钢之炼金术师、俺物语、龙与虎、JOJO、MEGALOBOX、男子高中生的日常、齐木楠雄的灾难、幻界战线、四月是你的谎言'
    },
    {
        title:'DOTA2天梯最高分',
        emoji:'😎',
        content:'7060 no kidding'
    },
    {
        title:'最爱玩的游戏',
        emoji:'🎮',
        content:'Dota2、Elden Rings、Celeste、HearthStone、Tunic、Terraria'
    },
    
]

const Intro = () => {
    useEffect(()=>{
	    rollText()
    },[])
    return (
        <IntroWrapper className='m-box'>
            <AvatarWrapper>
                <img src={require('../../assets/avatar.jpeg')} alt="" />
            </AvatarWrapper>
            <IntroContent>
                <div className="name">
                    Yiang Zhou
                </div>
                <div className="code">

                    <div id='rollText'>

                    </div>
                </div>
                <div className="Links">
                    <IconButton href="https://github.com/zyia238">
						<svg style={{width: '14px',height: '14px'}} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6878" width="200" height="200">
							<path d="M0 520.886c0-69.368 13.51-135.697 40.498-199.02 26.987-63.323 63.322-117.826 109.006-163.51 45.65-45.65 100.154-81.985 163.51-109.006A502.289 502.289 0 0 1 512 8.92c69.335 0 135.663 13.477 198.986 40.497 63.356 26.988 117.86 63.323 163.51 109.007 45.684 45.65 82.02 100.154 109.006 163.51A502.289 502.289 0 0 1 1024 520.852c0 111.318-32.504 211.472-97.511 300.494-64.975 88.989-148.48 150.825-250.484 185.476-5.351 0-9.348-0.99-11.99-2.973-2.676-1.982-4.196-3.997-4.526-6.012a59.458 59.458 0 0 1-0.495-8.984 7.663 7.663 0 0 1-0.991-3.006v-128.99c0-40.63-14.336-75.314-43.008-103.986 76.667-13.345 134.011-41.819 171.999-85.487 37.987-43.669 57.013-96.52 57.013-158.522 0-58.005-18.663-108.346-56.022-150.99 13.345-42.678 11-87.668-6.97-135.003-18.697-1.322-39.011 1.85-61.01 9.513-22 7.663-38.318 14.831-49.02 21.47-10.637 6.673-20.316 13.016-28.97 19.027-38.68-10.669-81.854-16.02-129.486-16.02-47.7 0-90.509 5.351-128.529 16.02-7.333-5.35-15.855-11.164-25.5-17.507-9.68-6.342-26.493-14.005-50.507-22.99-23.982-9.018-45.65-12.85-65.008-11.495-18.663 47.996-20.645 93.646-5.979 136.984-36.665 42.678-54.998 92.986-54.998 150.99 0 62.002 18.663 114.689 55.99 157.994 37.326 43.339 94.67 72.01 171.998 86.016a142.303 142.303 0 0 0-39.969 70.029c-56.683 13.972-96.355 3.963-119.015-30.06-42.017-61.308-79.674-83.307-113.003-65.965-4.69 4.657-3.997 9.48 1.982 14.501 6.012 4.988 14.996 11.66 27.02 19.985 11.99 8.357 20.976 17.507 26.987 27.515 0.661 1.322 2.51 6.177 5.517 14.502a831.917 831.917 0 0 0 8.985 23.981c2.973 7.663 8.654 16.186 17.011 25.5 8.324 9.349 18.003 17.178 29.003 23.52 11 6.309 26.161 11 45.485 14.006 19.324 2.972 41.323 3.138 65.998 0.495v100.484c0 0.991-0.165 2.643-0.495 5.021-0.33 2.312-0.991 3.964-1.982 4.955-0.991 1.024-2.345 2.015-4.03 3.039a12.52 12.52 0 0 1-6.474 1.486c-2.676 0-6.012-0.33-10.009-0.99-101.343-35.345-183.825-97.182-247.51-185.51C31.842 731.037 0 631.577 0 520.92z" p-id="6879"></path>
						</svg>
					</IconButton>
                    <IconButton href="mailto:zhouyiang0629@hotmail.com">
						<svg style={{width: '14px',height: '14px'}} className="icon" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24547" width="200" height="200">
							<path d="M684.00064 607.733333L1282.005973 9.728A133.077333 133.077333 0 0 0 1232.00064 0h-1098.666667c-16.938667 0-33.205333 3.2-48.138666 8.938667l598.805333 598.794666z" p-id="24548"></path>
							<path d="M684.00064 728.394667l-664.533333-664.533334A132.48 132.48 0 0 0 0.00064 133.333333v757.333334C0.00064 964.266667 59.733973 1024 133.333973 1024h1098.666667c73.6 0 133.333333-59.733333 133.333333-133.333333v-757.333334a133.013333 133.013333 0 0 0-18.528-67.733333L684.00064 728.394667z" p-id="24549"></path>
						</svg>
					</IconButton>
                </div>
                <DropdownTabs {...content[0]}/>
                <DropdownTabs {...content[1]}/>
                <DropdownTabs {...content[2]}/>
            </IntroContent>
        </IntroWrapper>
    )
}

export default Intro