import NavButton from './NavButton'
import { NavButtonsWrapStyle } from './NavButton.style'

export default function NavButtonsWrap() {
  const data = [
    {
      text: '홈',
      height: 80,
      nav: '/',
    },
    {
      text: '+2',
      height: 55,
      nav: '/add/2',
    },
    {
      text: '+5',
      height: 70,
      nav: '/add/5',
    },
    {
      text: '+6',
      height: 90,
      nav: '/add/6',
    },
    {
      text: '+8',
      height: 65,
      nav: '/add/8',
    },
  ]
  return (
    <NavButtonsWrapStyle>
      {data.map(item => {
        return <NavButton key={item.text} text={item.text} height={item.height} nav={item.nav} />
      })}
    </NavButtonsWrapStyle>
  )
}
