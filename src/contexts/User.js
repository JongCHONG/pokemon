import { createContext, useState } from "react"

const UserContext = createContext({})

const UserContextProvider = props => {
  const [isLogged, setIsLogged] = useState(false)

  const value = {
    isLogged: isLogged,
    setIsLogged: setIsLogged
  }

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContextProvider, UserContext } 