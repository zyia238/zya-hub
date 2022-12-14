import { Outlet , Link } from "react-router-dom"

import { Logo ,NavItem ,NavWrapper} from './Navigation.styles'

const Navigation = () => {
    return (
        <>
            <NavWrapper>
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
            <Outlet />
        </>
    )
}

export default Navigation