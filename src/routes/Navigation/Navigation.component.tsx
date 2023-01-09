import * as React from 'react'
import { useContext } from "react"

import { Outlet , useLocation} from "react-router-dom"

import {HeroContext} from '../../context/Hero/Hero.context'

import Intro from '../../components/Intro/Intro.component'
import Hero from '../../components/Hero/Hero.component'


import { Logo ,NavItem ,NavWrapper , ContentWrapper ,MiddlePart} from './Navigation.styles'

const Navigation = () => {
    const { pathname } = useLocation()

    const {transparent} = useContext(HeroContext)


    return (
        <>
            <NavWrapper className={transparent ? 'transparent' : undefined}>
                <Logo to='/'>
                    <h3>
                        Zya's Hub
                    </h3>
                </Logo>
                <NavItem to='/'>
                    <span>
                        首页
                    </span>
                </NavItem>
                <NavItem to='/categories'>
                    <span>
                        分类
                    </span>
                </NavItem>
                <NavItem to='/about'>
                    <span>
                        关于我
                    </span>
                </NavItem>
            </NavWrapper>
            <section className='HomeWrapper'>
                {
                    pathname === '/' && (
                        <Hero />
                    )

                }
                <ContentWrapper>
                    <Intro />
                    <MiddlePart>
                        <Outlet />
                    </MiddlePart>
                    <Intro />
                </ContentWrapper>
                
            </section>
        </>
    )
}

export default Navigation