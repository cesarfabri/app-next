import { Flex, Text, Input, Icon, Center } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Header
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >

        <Input
          color={"gray.50"}
          variant={"unstyled"}
          px={"4"}
          mr={"4"}
          placeholder="Buscar na plataforma"
          _placeholder={{color: 'gray.400'}}
        />
        <Icon as={RiSearchLine} fontSize={"20"}/>
      </Flex>

      <Flex
        align={"center"}
        ml={"auto"}
      >
        <Icon as={RiNotificationLine} fontSize={"20"}/>
        <Icon as={RiUserAddLine} fontSize={"20"}/>
      </Flex>

    </Flex>
  );
}
