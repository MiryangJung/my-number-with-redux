import { NavButtonStyle, Line, Round } from './NavButton.style'
import { useNavigate } from 'react-router-dom'

export default function NavButton({
  height,
  text,
  nav,
}: {
  height: number
  text: string
  nav: string
}) {
  const navigate = useNavigate()
  return (
    <NavButtonStyle height={height}>
      <Line />
      <Round onClick={() => navigate(nav)}>{text}</Round>
    </NavButtonStyle>
  )
}
