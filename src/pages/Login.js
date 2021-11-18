import { useContext } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Input, Button } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control"
import { UserContext } from "../contexts/User"

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "Benoit",
      password: "yoyoyoyo"
    },
    onSubmit: values => {
      console.log(values)
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required("Username non renseigné")
        .max(15, "Username trop long"),
      password: Yup.string()
        .required("Password non renseigné")
        .min(6, "Password trop court")
    }),
    validateOnChange: false
  })

  const { isLogged, setIsLogged } = useContext(UserContext)
  
  const handleButtonClick = () => {
    if (isLogged === false) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }
  
  console.log(isLogged);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl id="username" w="300px" isInvalid={formik.errors.username}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
      </FormControl>

      <FormControl id="password" mt={5} w="300px" isInvalid={undefined}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>

      {isLogged === false ? 
          <Button onClick={handleButtonClick} type="submit" colorScheme="teal" variant="solid" w="100%" mt={5}>
            Submit
          </Button>
        :
          <Button onClick={handleButtonClick} type="button" colorScheme="teal" variant="solid" w="100%" mt={5}>
            Logout
          </Button>
      }
    </form>
  )
}

export default Login
