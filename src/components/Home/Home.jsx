import {
  Box,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import { appContext } from '../../App/AppContext'
import HardSkills from '../Home/HardSkills/HardSkills'
import Experience from '../Home/Experience/Experience'
import Projects from '../Home/Projects/Projects'

const Home = () => {

  const { profileData } = appContext()
  //   const data = appContext()
  // console.log(data)
  return (
    <Box px={4} bgGradient="linear(gray.900 0%, gray.800 25%, purple.900 80%)">
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '6xl', md: '96px' }}
          lineHeight={'110%'}
        >
          <Text as={'b'}>Backend & Full Stack </Text>
          <Text as={'b'} color={'purple.400'}>
            Developer
          </Text>
        </Heading>
        <Text as="b" fontSize={{ base: '3xl', md: '5xl' }}>
          Hi, I’m {profileData.name}. Nice to meet you.
        </Text>
        <Text fontSize={{ base: '20px', md: '2xl' }}>
          {profileData.description}
          <br />
          {profileData.complement}
        </Text>
      </Stack>
      <Experience />
      <HardSkills />
      <Projects />
    </Box>
  )
}

export default Home
