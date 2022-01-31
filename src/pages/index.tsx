import { Button, Flex, Input, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DI Adm</title>
      </Head>
      <Flex
        width="100vw"
        h="100vh"
        align="center"
        justify="center"
      >
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDirection="column"
        >
          <Stack spacing="4">
            <FormControl>
              <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  name='email'
                  id='email'
                  type="email"
                  focusBorderColor="pink.500"
                  bgColor="gray.900"
                  variant="filled"
                  _hover={{
                    bgColor:"gray.900"
                  }}
                  size="lg"
                />
            </FormControl>
            
            <FormControl>
              <FormLabel htmlFor='password'>Senha</FormLabel>
                <Input
                  name='password'
                  id='password'
                  type="password"
                  focusBorderColor="pink.500"
                  bgColor="gray.900"
                  variant="filled"
                  _hover={{
                    bgColor:"gray.900"
                  }}
                  size="lg"
                />
            </FormControl>
          </Stack>

          <Button type='submit' mt="6" colorScheme="pink">Entrar</Button>
        </Flex>
      </Flex>
    </>
  )
}

export default Home
