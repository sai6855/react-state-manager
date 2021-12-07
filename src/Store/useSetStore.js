import { useContext } from 'react'
import { Context } from './StoreProvider'

const useSetStore = () => {
  const { setStore } = useContext(Context)

  return setStore
}

export default useSetStore
