import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Link,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

import ActivityCard from "../components/ActivityCard";

const Meetings = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const apiKey =
          "patGYrS498VmKZP0C.037f7821049c121a4a9ee2723656f27425d0e8e24c48d0573a74a0ecebffa6bb";
        const baseId = "appx6OQU8omRyNd19";
        const tableName = "events";

        const response = await axios.get(
          `https://api.airtable.com/v0/${baseId}/${tableName}`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        setEvents(response.data.records);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Box
        backgroundImage="url('https://images.unsplash.com/photo-1638132704795-6bb223151bf7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  center/cover no-repeat')"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        justifyContent="start"
        alignItems="end"
        textShadow="0 0 30px black"
        color="white"
        h="250px"
        p="20px"
      >
        <Container maxWidth="6xl">
          <Heading size="2xl">Gestionnaire d'activités</Heading>
        </Container>
      </Box>

      <Container maxWidth="6xl" py="50px">
        <Heading as="h2" size="lg" mb="24px">
          Toutes les activités
        </Heading>

        {isLoading ? ( // Check if data is still loading
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt="20"
          >
            <Spinner size="xl" color="green.500" margin="0 auto" />{" "}
          </Box>
        ) : (
          <SimpleGrid spacing="24px" minChildWidth="240px">
            {events.map((event) => (
              <ActivityCard
                key={event.id}
                id={event.id}
                title={event.fields.name}
                date={event.fields.date}
                description={event.fields.description}
                imageUrl={event.fields.imageUrl}
              />
            ))}
            <Link href={`/meeting/create`}>
              <Card
                minH="100%"
                background="green.100"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                pt="12"
              >
                <CardHeader
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <AddIcon w={12} h={12} />
                </CardHeader>
                <CardBody>
                  <Heading size="xl" textAlign="center">
                    Ajouter un évènement
                  </Heading>
                </CardBody>
              </Card>
            </Link>
          </SimpleGrid>
        )}
      </Container>
    </>
  );
};

export default Meetings;
