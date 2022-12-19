import React, { useState, useEffect } from 'react'
import {
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Container,
  Card,
  CardBody,
  CardFooter,
  Divider,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react'
import { appContext } from '../../../App/AppContext'

export default function Projects() {
  const { projects } = appContext()

  let [Projects, setProjects] = useState(projects)
  let [Stacks, setStacks] = useState([])
  // let [StackColor, setStackColor] = useState('')

  const StackProject = (d) => {
    setStacks(d)
    Stacks.map((e, i) => {
      return (
        <Flex>
          <Text
            color={'green.500'}
            key={e}
            fontWeight={600}
            fontSize={'12px'}
            letterSpacing={1}
            pt={2}
            mx={1}
          >
            {e}
          </Text>
        </Flex>
      )
    })
  }

  const Project = () => 
    Projects.map(({ id, img, name, description, stack }) => {
      return (
        <Card
          key={name}
          variant="elevated"
          maxW="sm"
          boxShadow={'2xl'}
          bg={useColorModeValue('gray', 'rgba(0, 0, 0, 0.30)')}
        >
          <CardBody>
            <Image src={img} alt={name} borderRadius="lg" />
            <Stack mt="6" spacing="3" textColor={'gray.200'}>
              <Heading size="md">{name}</Heading>
              <Text>{description}</Text>
              <Stack align={'center'} justify={'center'}>
                <Text fontSize={'2xl'} fontWeight={800}></Text>
                <br />
              </Stack>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            {stack.map((item, i) => (
              <Flex key={i}>
                <Text
                  // color={() => setStackColor(StackColor)}
                  fontWeight={600}
                  fontSize={'12px'}
                  letterSpacing={1}
                  pt={2}
                  mx={1}
                >
                  {item}
                </Text>
              </Flex>
            ))}
            {/* <StackProject d={stack}> </StackProject> */}
          </CardFooter>
        </Card>
      )
    })
  return (
    <Container maxW="6xl" py={{ base: 20, md: 12 }}>
      <Text
        mb={'36px'}
        fontWeight="bold"
        fontSize={{ base: '28px', md: '4xl' }}
        textAlign={'center'}
      >
        Projects
      </Text>
      <Stack spacing={{ base: 8, md: 8 }} justify={'center'}>
        <SimpleGrid
          spacing={10}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Project />
        </SimpleGrid>
      </Stack>
    </Container>
  )
}
