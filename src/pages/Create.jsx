import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormHelperText,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fr } from "date-fns/locale";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [imageUrl, setimageUrl] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiKey =
        "patGYrS498VmKZP0C.037f7821049c121a4a9ee2723656f27425d0e8e24c48d0573a74a0ecebffa6bb";
      const baseId = "appx6OQU8omRyNd19";
      const tableName = "events";

      const eventData = {
        records: [
          {
            fields: {
              name: title,
              description: description,
              date: selectedDate.toISOString(),
              imageUrl: imageUrl,
            },
          },
        ],
      };

      const response = await axios.post(
        `https://api.airtable.com/v0/${baseId}/${tableName}`,
        eventData,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Event created successfully:", response.data);
      window.location.href = "/";
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <Container maxW="2xl">
      <Heading my="32px">Ajouter une activité</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl my="24px">
          <FormLabel>
            Titre
            <Input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormHelperText>Entrez le nom de l'activité</FormHelperText>
          </FormLabel>
        </FormControl>

        <FormControl my="24px" w="100%">
          <FormLabel>Date</FormLabel>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            locale={fr}
            name="date"
            border="1px solid"
            customInput={<Input minW="100%" display="block" />}
          />
          <FormHelperText>
            Entrez la date et l'heure de l'activité
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>
            Description
            <Textarea
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Entrez la description de l'activité"
            />
            <FormHelperText></FormHelperText>
          </FormLabel>
        </FormControl>

        <FormControl my="24px">
          <FormLabel>
            Image URL
            <Input
              type="text"
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setimageUrl(e.target.value)}
            />
            <FormHelperText>
              Entrez l'URL de l'image de l'évènement
            </FormHelperText>
          </FormLabel>
        </FormControl>

        <Button type="submit" w="100%" mt="20px" colorScheme="green">
          Enregistrer
        </Button>
      </form>
    </Container>
  );
};

export default Create;
