import {
  Box,
  Text,
  Image,
  SimpleGrid,
  Container,
  Flex,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { appContext } from '../../../App/AppContext'

const HardSkills = () => {
  const { hardSkills } = appContext()
  let [Skills, setSkills] = useState(hardSkills)

  const MainSkills = () =>
    Skills.map(({ id, name, img, color }) => (
      <Box key={id} align={'center'}>
        <Flex boxSize="100px" key={id} align={'center'}>
          <Image objectFit="cover" src={img} alt={name} />
        </Flex>
        <Text
          color={color}
          fontWeight={600}
          fontSize={'sm'}
          letterSpacing={1.1}
          pt={2}
        >
          {name}
        </Text>
      </Box>
    ))
  return (
    <Container maxW="6xl" py={12} id='Skills'>
      <Text
        mb={'36px'}
        fontWeight="bold"
        fontSize={{ base: '28px', md: '4xl' }}
        textAlign={'center'}
      >
        Skills
      </Text>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <MainSkills />
      </SimpleGrid>
    </Container>
  )
}

export default HardSkills
