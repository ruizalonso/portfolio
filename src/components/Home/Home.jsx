import { Box, Heading, Text, Stack, Center } from '@chakra-ui/react'
import React from 'react'
import { appContext } from '../../App/AppContext'
import HardSkills from '../Home/HardSkills/HardSkills'
import Experience from '../Home/Experience/Experience'
import Projects from '../Home/Projects/Projects'

const Home = () => {
  const { profileData } = appContext()
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
          <Text as={'b'} color={'gray.50'}>
            {' '}
            Full Stack{' '}
          </Text>
          <Text as={'b'} color={'purple.400'}>
            Developer
          </Text>
        </Heading>
        <Text
          as="strong"
          color={'gray.50'}
          fontSize={{ base: '3xl', md: '5xl' }}
        >
          Hi, I’m {profileData.name}. Nice to meet you.
        </Text>
        <Center>
          <Text
            width={'50ch'}
            color={'gray.50'}
            fontSize={{ base: '20px', md: '2xl' }}
            lineHeight={'1.7rem'}
          >
            {profileData.description}
          </Text>
        </Center>
      </Stack>
      <Experience />
      <HardSkills />
      <Projects />
    </Box>
  )
}

export default Home
