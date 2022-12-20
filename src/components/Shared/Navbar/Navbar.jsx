import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { SocialMedia } from '../SocialMedia/SocialMedia'

const Links = ['Experience', 'Skills', 'Projects']
const NavLink = ({ children }) => (
  <Link
  px={2}
  py={1}
  rounded={'md'}
  color={'gray.50'}
  _hover={{
    textDecoration: 'none',
    bg: 'gray.700',
  }}
  href={`#${children}`}
  >
    {children}
  </Link>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const logo = 'https://raw.githubusercontent.com/ruizalonso/portfolio/master/src/assets/img/logo/logo-dev.png'
  
  return (
    <>
      <Box bg={'gray.900'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color={'gray.50'}
            bg={'gray.900'}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Image
              boxSize="50px"
              objectFit="cover"
              src={logo}
              alt="Jhonatan Ruiz"
            />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <SocialMedia />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
