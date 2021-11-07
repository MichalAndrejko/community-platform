import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { getAvailablePageList } from 'src/pages/PageList'
import theme from 'src/themes/styled.theme'
import { Flex } from 'rebass/styled-components'
import styled from 'styled-components'
import MenuCurrent from 'src/assets/images/menu-current.svg'
import { zIndex } from 'src/themes/styled.theme'
import { AuthWrapper } from 'src/components/Auth/AuthWrapper'

const MenuLink = styled(NavLink).attrs(() => ({
  activeClassName: 'current',
}))`
  padding: 0px ${theme.space[4]}px;
  color: ${'black'};
  position: relative;
  > div {
    z-index: ${zIndex.default};
    position: relative;
    &:hover {
      opacity: 0.7;
    }
  }
  &.current {
    &:after {
      content: '';
      width: 70px;
      height: 20px;
      display: block;
      position: absolute;
      bottom: -6px;
      background-image: url(${MenuCurrent});
      z-index: ${zIndex.level};
      background-repeat: no-repeat;
      background-size: contain;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

export class MenuDesktop extends Component {
  state = {
    menuItems: null,
  }

  componentDidMount() {
    getAvailablePageList().then(menuItems => {
      this.setState({menuItems});
    })
  }

  render() {
    return this.state.menuItems ? (
      <>
        <Flex alignItems={'center'}>
          {((this.state.menuItems || []) as any[]).map((page :any) => {
            const link = (
              <Flex key={page.path}>
                <MenuLink to={page.path} data-cy="page-link">
                  <Flex>{page.title}</Flex>
                </MenuLink>
              </Flex>
            )
            return page.requiredRole ? (
              <AuthWrapper roleRequired={page.requiredRole} key={page.path}>
                {link}
              </AuthWrapper>
            ) : (
              link
            )
          })}
        </Flex>
      </>
    ) : (
      'Loading'
    )
  }
}

export default MenuDesktop
