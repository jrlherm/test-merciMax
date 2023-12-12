import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <Box bg="gray.100">
        <Flex as="nav" maxWidth="8xl" p="20px" mx="auto" alignItems="center">
          <Link href="/" textDecoration="none">
            <Heading>Mes Activités</Heading>
          </Link>
          <Spacer />
          <HStack gap="20px">
            <Link href="/">
              <Button>Voir tout</Button>
            </Link>

            <Link href="/meeting/create">
              <Button variant="solid" colorScheme="teal" leftIcon={<AddIcon />}>
                Ajouter
              </Button>
            </Link>
          </HStack>
        </Flex>
        {/* </Container> */}
      </Box>
    </>
  );
};

export default Navbar;
