import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { NowNumberStyle } from './NowNumber.style'

export default function NowNumber() {
  const number = useSelector((state: RootState) => state.number.number)
  return (
    <>
      <NowNumberStyle>{number}</NowNumberStyle>
    </>
  )
}
