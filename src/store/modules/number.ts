const SET_NUM = 'number/SET_NUM'
const SET_NAME = 'number/SET_NAME'
const CAL_PLUS = 'number/CAL_PLUS'

// 액션 생성 함수
export function setMyName({ name }: { name: string }) {
  return {
    type: SET_NAME,
    payload: { name },
  }
}

export function setMyNumber({ number }: { number: number }) {
  return {
    type: SET_NUM,
    payload: { number },
  }
}

export function calPlus({ number }: { number: number }) {
  return {
    type: CAL_PLUS,
    payload: { number },
  }
}

// 초기 데이터
const initialState: { number: number; name: string } = {
  number: 0,
  name: '',
}

// 리듀서
export default function number(state = initialState, action: any) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload.name,
      }
    case SET_NUM:
      return {
        ...state,
        number: action.payload.number,
      }
    case CAL_PLUS:
      return {
        ...state,
        number: state.number + action.payload.number,
      }
    default:
      return state
  }
}
