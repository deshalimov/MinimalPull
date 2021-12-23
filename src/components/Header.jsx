import React from "react"
import styled from "styled-components"
import {Link, useRoute} from 'wouter'

import KeystoreButton from "./KeystoreButton";

import colors from '../colors'
import typo from '../typo'

const HeaderContainer = styled.div`
  width: 1120px;
  height: 100%; 
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;  
  justify-content: space-between;
`

const Logo = () => (
  <svg width="83" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.059.469L5.25 6.656 7.43.47h2.308V9H7.975V6.668l.175-4.025L5.848 9H4.64L2.344 2.648l.176 4.02V9H.762V.469h2.297zM13.143 9h-1.758V.469h1.758V9zm8.572 0h-1.758l-3.422-5.613V9h-1.758V.469h1.758l3.428 5.625V.469h1.752V9zm3.404 0h-1.758V.469h1.758V9zM29.051.469l2.191 6.187L33.422.47h2.309V9h-1.764V6.668l.176-4.025L31.84 9h-1.207l-2.297-6.352.176 4.02V9h-1.758V.469h2.297zm13.137 6.773h-3.083L38.52 9h-1.87L39.826.469h1.63L44.647 9H42.78l-.592-1.758zM39.58 5.818h2.133L40.64 2.625l-1.06 3.193zm7.623 1.77h3.732V9h-5.49V.469h1.758v7.119zm8.772-2.063V9h-.721V.469h2.906c.887 0 1.586.226 2.098.68.515.453.773 1.076.773 1.869 0 .8-.248 1.42-.744 1.857-.492.434-1.207.65-2.144.65h-2.168zm0-.609h2.185c.7 0 1.233-.166 1.6-.498.367-.332.55-.795.55-1.389 0-.59-.183-1.058-.55-1.406-.363-.352-.881-.531-1.553-.539h-2.232v3.832zm12.978.281c0 .785-.137 1.475-.41 2.069-.27.593-.656 1.05-1.16 1.37-.504.321-1.086.481-1.746.481-.996 0-1.801-.355-2.414-1.066-.614-.715-.92-1.678-.92-2.889v-.879c0-.777.137-1.465.41-2.062.277-.602.668-1.063 1.172-1.383.504-.324 1.084-.486 1.74-.486.656 0 1.234.158 1.734.474.504.317.893.764 1.166 1.342.274.578.416 1.248.428 2.01v1.02zm-.72-.926c0-1.027-.233-1.832-.698-2.414-.465-.582-1.101-.873-1.91-.873-.793 0-1.426.293-1.898.88-.47.581-.704 1.396-.704 2.443v.89c0 1.012.235 1.815.704 2.408.468.59 1.105.885 1.91.885.816 0 1.453-.29 1.91-.873.457-.586.685-1.4.685-2.443V4.27zm3.263 4.12h4.213V9h-4.94V.469h.727V8.39zm6.328 0h4.213V9h-4.94V.469h.727V8.39z" fill="#1A1B29"/>
  </svg>
)

// hack to bypass this issue https://github.com/styled-components/styled-components/issues/135
const StyledLink = styled(
  ({ isActive, ...rest }) => <Link {...rest} />
)`
  ${typo.link};
  text-decoration: none;
  color: ${props => props.isActive ? colors.brightPrimary : colors.mainText};

  &:hover {
    color: ${colors.brightPrimary}
  }

  &:not(:first-child) {
    margin-left: 16px;
  }
`

const ActiveLink = props => {
  const [isActive] = useRoute(props.href)
  return (
    <StyledLink {...props} isActive={isActive}>
      {props.children}
    </StyledLink>
  )
}

const Menu = ({items}) => (
  <div>
    {items.map(({url, title}) => (
      <ActiveLink key={title} href={url}>{title}</ActiveLink>
    ))}
  </div>
)

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Menu items={[
        {title: "My polls", url: "/"},
        {title: "Visited polls", url: "/visited-polls"},
      ]} />
      <KeystoreButton />
    </HeaderContainer>
  )
}