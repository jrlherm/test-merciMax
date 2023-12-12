import {
  Button,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";

import { EditIcon } from "@chakra-ui/icons";

import { format } from "date-fns";

const ActivityCard = ({ id, date, title, description, imageUrl }) => {
  const formattedDate = format(new Date(date), "dd/MM/yyyy à HH:mm");

  return (
    <Card>
      <CardHeader p="0" position="relative">
        <Link href={`/meeting/${id}/update`}>
          <IconButton
            aria-label="Modifier l'évènement"
            icon={<EditIcon />}
            size="sm"
            position="absolute"
            top="2"
            right="2"
            zIndex="1"
            variant="solid"
          />
        </Link>
        <Image
          src={imageUrl}
          alt="event Image"
          borderRadius="lg"
          borderBottomRadius="0"
          h="190px"
          w="100%"
          objectFit="cover"
        />
        <Box p="20px">
          <Heading as="h2" size="sm">
            {title}
          </Heading>
          <Text size="xs" color="gray.600" pt="8px" fontStyle="italic">
            Le {formattedDate}
          </Text>
        </Box>
      </CardHeader>
      <CardBody pt="0" pb="5">
        <Text>{description}</Text>
      </CardBody>
    </Card>
  );
};

export default ActivityCard;
