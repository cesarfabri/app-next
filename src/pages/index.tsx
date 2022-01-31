import { Button, Flex, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import { Input } from "../components/Form/Input";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DI Adm</title>
      </Head>
      <Flex width="100vw" h="100vh" align="center" justify="center">
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
            <Input name="email" type="email" label="E-mail" />
            <Input name="password" type="password" label="Senha" />
          </Stack>

          <Button type="submit" mt="6" colorScheme="pink">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
