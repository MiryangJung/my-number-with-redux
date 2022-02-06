import { NavButtonStyle } from './NavButton.style'
import { useNavigate } from 'react-router-dom'

export default function NavButton({
  color,
  text,
  nav,
}: {
  color: string
  text: string
  nav: string
}) {
  const navigate = useNavigate()
  return (
    <NavButtonStyle color={color} onClick={() => navigate(nav)}>
      {text}
    </NavButtonStyle>
  )
}
