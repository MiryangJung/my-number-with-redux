import { Button, FormStyle, Input } from './Form.style'
import React, { useState } from 'react'
import { RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { setMyName, setMyNumber } from '../store/modules/number'

export default function Form() {
  const originName = useSelector((state: RootState) => state.number.name)
  const originNumber = useSelector((state: RootState) => state.number.number)

  const [name, setName] = useState<string>(originName)
  const [number, setNumber] = useState<string>(String(originNumber))

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setMyNumber({ number: Number(number) }))
    dispatch(setMyName({ name }))
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Input
        type="string"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
        autoFocus
      />
      <Input
        type="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Number"
        required
        autoFocus
      />
      <Button type="submit">저장</Button>
    </FormStyle>
  )
}
