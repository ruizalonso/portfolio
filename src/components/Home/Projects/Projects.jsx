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
  Box,
  Badge,
} from '@chakra-ui/react'
import { appContext } from '../../../App/AppContext'
import { SocialButton } from '../../Shared/SocialMedia/SocialMedia'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  const { projects, hardSkills } = appContext()

  let [Projects, setProjects] = useState(projects)
  let [Stacks, setStacks] = useState([])

  const Project = () =>
    Projects.map(({ id, img, name, description, stack, github }) => {
      return (
        <Card
          key={name}
          variant="elevated"
          maxW="sm"
          boxShadow={'2xl'}
          bg={useColorModeValue('gray', 'rgba(0, 0, 0, 0.30)')}
        >
          <CardBody>
            <Box align={'center'}>
              <Image src={img} alt={name} boxSize="100px" objectFit="cover" />
            </Box>
            <Stack mt="6" spacing="3" textColor={'gray.200'}>
              <Heading size="md">
                <Flex align={'center'}>
                  <Text pr={2}>{name}</Text>
                  {github && (
                    <SocialButton label={'Github'} href={github}>
                      <FaGithub />
                    </SocialButton>
                  )}
                </Flex>
              </Heading>
              <Text>{description}</Text>
              <Stack align={'center'} justify={'center'}>
                <Text fontSize={'2xl'} fontWeight={800}></Text>
                <br />
              </Stack>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            {stack.map(({ name, color }, i) => (
              <Flex key={i}>
                <Badge mx={1} colorScheme={color.split('.')[0]}>
                  {name}
                </Badge>
              </Flex>
            ))}
          </CardFooter>
        </Card>
      )
    })
  return (
    <Container maxW="6xl" py={12} id='Projects'>
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
        <Text align={'center'}>
          <small>
            *Due to company copyrights, the source code of some projects cannot
            be shared.
          </small>
        </Text>
      </Stack>
    </Container>
  )
}
