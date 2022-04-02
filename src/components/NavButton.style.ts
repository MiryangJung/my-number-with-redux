import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicHeight = ({ height }: { height: number }) => {
  return css`
    height: ${height}%;
  `
}

export const NavButtonsWrapStyle = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: start;
  justify-content: center;
  height: 100vh;
  width: 100%;
  z-index: 10;
`

export const NavButtonStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0 50px;
  ${dynamicHeight}
`

export const Line = styled.div`
  height: 90%;
  border-left: 1px solid #ffda77;
  box-shadow: 0 0 5px #ffda77, 0 0 10px #ffda77, 0 0 15px #ffda77, 0 0 20px #ffda77;
`

export const Round = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  font-weight: 500;
  font-size: 26px;
  cursor: pointer;
  outline: none;
  color: #ff9d72;
  background: #ffda77;
  border: none;
  font-family: 'KOTRAHOPE', sans-serif;
  box-shadow: 0 0 5px #ffda77, 0 0 15px #ffda77, 0 0 25px #ffda77, 0 0 50px #ffda77;
  border-radius: 50%;
  &:hover {
    transform: scale(1.2);
  }
`
