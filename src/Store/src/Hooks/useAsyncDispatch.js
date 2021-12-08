// import { useEffect, useState } from 'react'

// const useApi = (data = null) => {
//   const [localApiState, setLocalApiState] = useState({
//     isLoading: false,
//     isSuccess: null,
//     startCommunication: false,
//     data,
//     promise: null,
//     error: null
//   })

//   const fire = promise => {
//     setLocalApiState(prevState => ({
//       ...prevState,
//       promise,
//       isLoading: true
//     }))
//   }

//   useEffect(() => {

//     if(localApiState.startCommunication&&localApiState.promise){

      

//     }

//     // if (startCommunication) {
//     //   dispatch(thunk(apiPayload))
//     //     .then(res => {
//     //       onSuccess(res)
//     //       setIsSuccess(true)
//     //       setLocalApiState(prevState => ({ ...prevState, error: '' }))
//     //       if (successMsg && displaySuccessMsg) {
//     //         dispatch(
//     //           doCreateNotification({ message: successMsg, notifType: 'info' })
//     //         )
//     //       }
//     //       reset()
//     //     })
//     //     .catch(err => {
//     //       setIsSuccess(false)
//     //       setLocalApiState(prevState => ({ ...prevState, error: err }))
//     //       failureFunction(err)
//     //       reset()
//     //       const msg = errorMessage(err)
//     //       displayFailureMsg &&
//     //         dispatch(
//     //           doCreateNotification({
//     //             message: failureMsg || msg,
//     //             notifType: 'error'
//     //           })
//     //         )
//     //     })
//     // }
//   }, [])

//   return [localApiState, fire]
// }

// export default useApi
