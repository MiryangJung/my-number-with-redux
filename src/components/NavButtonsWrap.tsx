import NavButton from './NavButton'
import { NavButtonsWrapStyle } from './NavButton.style'

export default function NavButtonsWrap() {
  return (
    <NavButtonsWrapStyle>
      <NavButton text="홈" color="whtie" nav={`/`} />
      <NavButton text="+2" color="yellow" nav={`/add/${2}`} />
      <NavButton text="+5" color="red" nav={`/add/${5}`} />
    </NavButtonsWrapStyle>
  )
}
