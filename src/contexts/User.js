import { createContext, useState } from "react"

const UserContext = createContext({})

const UserContextProvider = props => {
  const [isLogged, setisLogged] = useState(false)

  const value = {
    isLogged: isLogged,
    setisLogged: setisLogged
  }

  return (
    <UserContextProvider value={value}>
      {props.children}
    </UserContextProvider>
  )
}

export { UserContextProvider, UserContext } 