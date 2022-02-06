import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicBg = ({ color }: { color: string }) => {
  return css`
    background: ${color};
  `
}

export const NavButtonsWrapStyle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const NavButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 22px;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    transform: scale(1.2);
  }
  ${dynamicBg}
`
