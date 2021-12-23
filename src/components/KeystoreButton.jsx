import React from "react"
import styled from "styled-components"
import {useLocation} from 'wouter'

import colors from '../colors'

const Keystore = styled.div`
  width: 106px;
  height: 32px; 
  border-radius: 16px;
  border: 1px solid ${colors.lighterGray};
  border-color: ${props => 
    props.isActive ? colors.brightPrimary : colors.lighterGray
  };
  
  padding: 8px 16px;

  display: flex;
  flex-direction: raw;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  & > span {
    font-size: 12px;
    font-weight: 500;
    color: ${props => 
      props.isActive ? colors.brightPrimary : colors.mainText
    };
  }

  & > svg > path {
    fill: ${props => 
      props.isActive ? colors.brightPrimary : colors.mainText
    };
  }

  &:hover {
    border-color: ${colors.brightPrimary};
  }

  &:hover > span {
    color: ${colors.brightPrimary};
  }

  &:hover > svg > path {
    fill: ${colors.brightPrimary};
  }
`;

export default function KeystoreButton() {
  const [location, setLocation] = useLocation()
  const isActive = location === '/keystore'
  return (
    <Keystore isActive={isActive} onClick={e => setLocation('keystore')}>
      <svg width="14" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6 8a3.001 3.001 0 01-2 2.83V15a1 1 0 11-2 0v-4.171a3.001 3.001 0 010-5.658V1a1 1 0 012 0v4.17C5.165 5.583 6 6.695 6 8zM4 8a1 1 0 10-2 0 1 1 0 002 0zm10 5a3 3 0 11-4-2.829V1a1 1 0 112 0v9.17c1.165.412 2 1.524 2 2.83zm-2 0a1 1 0 10-2 0 1 1 0 002 0z" fill="#1A1B29"/>
      </svg>
      <span>Keystore</span>
    </Keystore>
  )
}
