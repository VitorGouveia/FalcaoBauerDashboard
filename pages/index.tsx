import {useRouter} from "next/router"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function SimpleCard() {
  const session = useSession()
  const router = useRouter()
  const supabase = useSupabaseClient()
  const color = useColorModeValue('gray.50', 'gray.800')
  const color2 = useColorModeValue('white', 'gray.700')
  
  if(session) {
    router.push("/dashboard")
    return null
  }
  
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
    />
    // <Flex
    //   minH={'100vh'}
    //   align={'center'}
    //   justify={'center'}
    //   bg={color}>
    //   <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    //     <Stack align={'center'}>
    //       <Heading fontSize={'4xl'}>Sign in to your account</Heading>
    //       <Text fontSize={'lg'} color={'gray.600'}>
    //         to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
    //       </Text>
    //     </Stack>
    //     <Box
    //       rounded={'lg'}
    //       bg={color2}
    //       boxShadow={'lg'}
    //       p={8}>
    //       <Stack spacing={4}>
    //         <FormControl id="email">
    //           <FormLabel>Email address</FormLabel>
    //           <Input borderWidth={2} borderColor={"gray.500"} type="email" />
    //         </FormControl>
    //         <FormControl id="password">
    //           <FormLabel>Password</FormLabel>
    //           <Input borderWidth={2} borderColor={"gray.500"} type="password" />
    //         </FormControl>
    //         <Stack spacing={10}>
    //           <Stack
    //             direction={{ base: 'column', sm: 'row' }}
    //             align={'start'}
    //             justify={'space-between'}>
    //             <Checkbox>Remember me</Checkbox>
    //             <Link color={'blue.400'}>Forgot password?</Link>
    //           </Stack>
    //           <Button
    //             bg={'blue.400'}
    //             color={'white'}
    //             _hover={{
    //               bg: 'blue.500',
    //             }}>
    //             Sign in
    //           </Button>
    //         </Stack>
    //       </Stack>
    //     </Box>
    //   </Stack>
    // </Flex>
  );
}