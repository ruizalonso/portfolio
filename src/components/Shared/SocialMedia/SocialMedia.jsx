import {
  chakra,
  useColorModeValue,
  VisuallyHidden,
  Stack,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { appContext } from '../../../App/AppContext'

export const SocialButton = ({ children, label, href }) => {
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
      target={'_blank'}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export const SocialMedia = () => {
  const { contact } = appContext()
  const { github, linkedin } = contact
  return (
    <Stack direction={'row'} spacing={6}>
      <SocialButton label={'Github'} href={github.url}>
        <FaGithub />
      </SocialButton>
      <SocialButton label={'Linkedin'} href={linkedin.url}>
        <FaLinkedin />
      </SocialButton>
    </Stack>
  )
}
