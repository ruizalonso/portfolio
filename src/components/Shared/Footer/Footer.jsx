import {
  Box,
  chakra,
  Container,
  Stack,
  Flex,
  useColorModeValue,
  Text,
  VisuallyHidden,
  Image
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import logo from '../../../assets/img/logo/logo-3.png'

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function LargeWithLogoCentered() {
  return (
    <Box py={10} bgGradient='linear(purple.900 20%, gray.800 80%, gray.800 20%)'>
      <Flex
        align={'center'}
        _before={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Image boxSize="50px" objectFit="cover" src={logo} alt="Mr. X" />
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
        <Text>Made with ❤️ by. Jhonatan Ruiz</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Github'} href={'#'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'#'}>
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
