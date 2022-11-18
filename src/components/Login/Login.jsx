import React from 'react'
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

const Login = () => {

  const formBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <Flex
      flexDirection="column"
      bg={formBackground}
      p={12}
      borderRadius={8}
      boxShadow="lg"
    >
      <Heading mb={6}>Log In</Heading>
      <Input
        placeholder="johndoe@gmail.com"
        type="email"
        variant="filled"
        mb={3}
      />
      <Input placeholder="**********" type="password" variant="filled" mb={6} />
      <Button bg="#9200FF" mb={8}>
        Log In
      </Button>
    </Flex>
  )
}

export default Login
