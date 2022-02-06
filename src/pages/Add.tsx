import Title from '../components/Title'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import NowNumber from '../components/NowNumber'
import NavButtonsWrap from '../components/NavButtonsWrap'
import { useEffect } from 'react'
import { calPlus } from '../store/modules/number'

export default function Add() {
  const name = useSelector((state: RootState) => state.number.name)
  const { num } = useParams<{ num: string }>()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calPlus({ number: Number(num) }))
  }, [num, dispatch])

  return (
    <>
      <Title text={`${name}님의 숫자에 더하기 ${num} 했어요.`} />
      <NowNumber />
      <NavButtonsWrap />
    </>
  )
}
