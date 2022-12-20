import {
  Box,
  Container,
  Stack,
  Flex,
  useColorModeValue,
  Text,
  Image,
} from '@chakra-ui/react'
import logo from '../../../assets/img/logo/logo-dev.png'
import { SocialMedia } from '../SocialMedia/SocialMedia'

export const Footer = () => {
  return (
    <Box
      py={10}
      bgGradient="linear(purple.900 20%, gray.800 80%, gray.800 20%)"
    >
      <Flex
        align={'center'}
        _before={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: 'gray.700',
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: 'gray.700',
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Image
          boxSize="50px"
          objectFit="cover"
          src={logo}
          alt="Jhonatan Ruiz"
        />
      </Flex>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text color={'gray.50'}>Made with ❤️ by. Jhonatan Ruiz</Text>
        <SocialMedia />
      </Container>
    </Box>
  )
}
