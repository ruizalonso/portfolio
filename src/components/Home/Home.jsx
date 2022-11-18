import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Container,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Center,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { appContext } from '../../App/AppContext';
import log from '../../assets/img/icons/angular.svg'

const EQLanguages = ['JavaScript', '.NET Framework', 'C#', 'SQL Server']
const TPLanguages = [
  'React',
  'Angular',
  'JavaScript',
  '.NET Framework',
  'C#',
  'SQL Server',
]

const Home = () => {

  const { profileData, hardSkills } = appContext();

  let [skills, setSkills] = useState(hardSkills)
  let [TPLang, setTPLanguajes] = useState(TPLanguages)
  let [EQLang, setEQLanguajes] = useState(EQLanguages)

  TPLang = skills.filter((h) => {
    return TPLanguages.find((tp) => {
      return tp === h.name
    })
  })

  EQLang = skills.filter((h) => {
    return EQLanguages.find((eq) => {
      return eq === h.name
    })
  })
  const DevIcon = () =>
    skills.map(({ id, name, img }) => (
      <Box key={id} pt={10} align={'center'}>
        <Image boxSize="160px" objectFit="cover" src={log} alt={name} />
        <Text fontSize={'sm'}>{name}</Text>
      </Box>
    ))
  const Card = ({ company, responsabilities, date }) => (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'rgba(255, 255, 255, 0.16)')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
          textAlign={'center'}
        >
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}
          >
            Hobby
          </Text>
          <Stack align={'center'} justify={'center'}>
            <Text fontSize={'2xl'} fontWeight={800}>
              Frontend Devolper
            </Text>
            <br />
            <Text color={'gray.50'}>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List spacing={3}>
            {TPLang.map((e) => {
              <ListItem>
                <ListIcon as={e.icon} color="yellow.300" />
                {e.name}
              </ListItem>
            })}
          </List>
        </Box>
      </Box>
    </Center>
  )
  return (
    <Box px={4} bgGradient="linear(gray.900 0%, gray.800 25%, purple.900 80%)">
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading fontWeight={600} fontSize="6xl" lineHeight={'110%'}>
          <Text as={'b'}>Full Stack </Text>
          <Text as={'b'} color={'purple.400'}>
            Developer
          </Text>
        </Heading>
        <Text as="b" fontSize="3xl">
          Hi, I’m {profileData.name}. Nice to meet you.
        </Text>
        <Text>
          {profileData.description}
          <br />
          {profileData.complement}
        </Text>
      </Stack>
      <Stack
        as={Box}
        direction={{ base: 'column', md: 'row' }}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 2, md: 4 }}
      >
        <Container maxW="6xl">
          <SimpleGrid minChildWidth="120px" spacing="40px">
            {DevIcon()}
          </SimpleGrid>
        </Container>
      </Stack>
      <Stack
        as={Box}
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 2, md: 4 }}
      >
        <Container maxW="6xl">{Card('tp', 'i', '2')}</Container>
      </Stack>
    </Box>
  )
}

export default Home