import {
  Text,
  Stack,
  Container,
  List,
  ListItem,
  useColorModeValue,
  Card,
  CardBody,
  CardFooter,
  Divider,
  ListIcon,
  UnorderedList,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import { appContext } from '../../../App/AppContext'
import {
  DiAngularSimple,
  DiReact,
  DiJsBadge,
  DiNodejsSmall,
  DiDotnet,
  DiMsqlServer,
  DiMysql,
  DiPostgresql,
  DiMongodb,
  DiGit,
  DiJqueryLogo,
  DiScrum,
  DiWindows,
  DiCode,
  DiBootstrap,
  DiBitbucket,
} from 'react-icons/di'

const Experience = () => {
  const { experience } = appContext()

  let [Experiences, setExperiences] = useState(experience)

  const PrintIcons = ({ name, color }) => {
    switch (name) {
      case 'JavaScript':
        return <ListIcon as={DiJsBadge} color={color} />
        break
      case 'Node.js':
        return <ListIcon as={DiNodejsSmall} color={color} />
        break
      case '.NET Framework':
        return <ListIcon as={DiDotnet} color={color} />
        break
      case 'C#':
        return <ListIcon as={DiDotnet} color={color} />
        break
      case 'SQL Server':
        return <ListIcon as={DiMsqlServer} color={color} />
        break
      case 'React.js':
        return <ListIcon as={DiReact} color={color} />
        break
      case 'Angular':
        return <ListIcon as={DiAngularSimple} color={color} />
        break
      case 'Metodologías ágiles SCRUM':
        return <ListIcon as={DiScrum} color={color} />
        break
      case 'Git':
        return <ListIcon as={DiGit} color={color} />
        break
      case 'Azure Cloud':
        return <ListIcon as={DiWindows} color={color} />
        break
      case 'MySQL':
        return <ListIcon as={DiMysql} color={color} />
        break
      case 'Postgres':
        return <ListIcon as={DiPostgresql} color={color} />
        break
      case 'Mongodb':
        return <ListIcon as={DiMongodb} color={color} />
        break
      case 'JQuery':
        return <ListIcon as={DiJqueryLogo} color={color} />
        break
      case 'ASP.NET MVC 5':
        return <ListIcon as={DiDotnet} color={color} />
        break
      case 'Bootstrap':
        return <ListIcon as={DiBootstrap} color={color} />
        break
      case 'Bitbucket':
        return <ListIcon as={DiBitbucket} color={color} />
        break
      default:
        return <ListIcon as={DiCode} color={'white:500'} />
        break
    }
  }
  const Experience = () =>
    Experiences.map(({ rol, responsabilities, stack }, i) => {
      return (
        <Card
          key={rol}
          variant="elevated"
          boxShadow={'2xl'}
          maxW="sm"
          bg={'rgba(255, 255, 255, 0.08)'}
          color={'gray.50'}
        >
          <CardBody>
            <Stack align={'center'} textAlign={'center'}>
              <Text
                fontSize={'2xl'}
                fontWeight={500}
                p={2}
                px={3}
                color={'white.200'}
              >
                <FaLaptopCode />
              </Text>
              <Stack>
                <Text fontSize={'2xl'} fontWeight={700}>
                  {rol}
                </Text>
                <br />
                <UnorderedList spacing={3}>
                  {responsabilities.map((e, i) => {
                    return (
                      <ListItem
                        textAlign={'start'}
                        key={e}
                        ml={6}
                      >
                        {e}
                      </ListItem>
                    )
                  })}
                </UnorderedList>
              </Stack>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <List spacing={3}>
              {stack.map(({ icon, color, name }, i) => {
                return (
                  <ListItem key={i}>
                    <PrintIcons name={name} color={color} />
                    {name}
                  </ListItem>
                )
              })}
            </List>
          </CardFooter>
        </Card>
      )
    })
  return (
    <Container maxW="6xl" alignItems={'center'} py={12} id='Experience'>
      <Text
        mb={'36px'}
        fontWeight="bold"
        fontSize={{ base: '28px', md: '4xl' }}
        textAlign={'center'}
        color={'gray.50'}
      >
        Experience
      </Text>
      <Stack
        spacing={{ base: 8, md: 8 }}
        justify={'center'}
        direction={{ base: 'column', md: 'row' }}
      >
        <Experience />
      </Stack>
    </Container>
  )
}

export default Experience
