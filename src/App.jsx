import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import "./App.css";
import ReactionImg from "./assets/icon-reaction.svg";
import MemoryImg from "./assets/icon-memory.svg";
import VerbalImg from "./assets/icon-verbal.svg";
import VisualImg from "./assets/icon-visual.svg";

function App() {
  const Summaries = [
    {
      id: 1,
      name: "Reaction",
      mark_Secured: 80,
      icon: ReactionImg,
      textColor: "Lightred",
      bg: "hsla(0, 100%, 67%,.05)",
    },
    {
      id: 2,
      name: "Memory",
      mark_Secured: 92,
      icon: MemoryImg,
      textColor: "Orangeyellow",
      bg: "hsla(39, 100%, 56%,.05)",
    },
    {
      id: 3,
      name: "Verbal",
      mark_Secured: 61,
      icon: VerbalImg,
      textColor: "Greenteal",
      bg: "hsla(166, 100%, 37%,.05)",
    },
    {
      id: 4,
      name: "Visual",
      mark_Secured: 72,
      icon: VisualImg,
      textColor: "Cobaltblue",
      bg: "hsla(234, 85%, 45%,.05)",
    },
  ];
  return (
    <>
      <Flex
        minH="100vh"
        justify="center"
        align={["start", "center"]}
        bg={"Paleblue"}
      >
        {/* Card */}
        <Flex
          direction={["column", "row"]}
          bg="White"
          w="45rem"
          maxW={"45rem"}
          h="auto"
          rounded={["none", "1.5rem"]}
          overflow={["auto", "hidden"]}
          boxShadow={"10px 10px 20px hsla(234, 85%, 45%,.1)"}
        >
          {/* left */}
          <Stack
            direction={"column"}
            align={"center"}
            justify={"center"}
            spacing={"2"}
            bgGradient="linear(to-b,Lightslateblue 10%,Cobaltblue)"
            p="7"
            pb="10"
            rounded={["0 0 2rem 2rem", "1.5rem"]}
            flexBasis={"50%"}
          >
            <Heading
              as="h1"
              fontSize="1.2rem"
              fontWeight={"bold"}
              color="Lightlavender"
            >
              Your Result
            </Heading>

            {/* Circle  */}
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              bgGradient={"linear(to-b,Violetblue,Persianblue)"}
              p={"3"}
              w={"9rem"}
              rounded={"full"}
              my={"5"}
              sx={{ aspectRatio: "1" }}
            >
              <Heading
                fontSize={"3.5em"}
                fontWeight={"extraBold"}
                color={"White"}
              >
                76
              </Heading>
              <Text color={"Lightlavender"}>of 100</Text>
            </Flex>

            <Heading fontSize={"1.4rem"} fontWeight={"bold"} color="Paleblue">
              Great
            </Heading>
            <Text align={"center"} maxW={"18rem"} color={"Lightlavender"}>
              You scored highier than 65% of the people who have taken these
              rests.
            </Text>
          </Stack>
          {/* right */}
          <Stack spacing={"4"} flexBasis={"50%"} p={"1.5rem"} bg={"White"}>
            <Heading fontSize={"1.2rem"} mb={"1"}>
              Summary
            </Heading>
            {Summaries &&
              Summaries.map((summary) => (
                <Flex
                  key={summary.id}
                  justify={"space-between"}
                  bg={summary.bg}
                  p="4"
                  rounded={"lg"}
                >
                  <Flex align={"center"} gap={"3"}>
                    <img
                      src={summary.icon}
                      alt={summary.name}
                      width="20"
                      height="20"
                    />
                    <Heading
                      fontSize={"1rem"}
                      fontWeight={"normal"}
                      color={summary.textColor}
                    >
                      {summary.name}
                    </Heading>
                  </Flex>
                  <Flex align={"center"} gap={"3"}>
                    <Text fontWeight={"bold"}>{summary.mark_Secured}</Text>
                    <Text>/ 100</Text>
                  </Flex>
                </Flex>
              ))}
            <Button
              bg="Darkgrayblue"
              color={"White"}
              rounded={"60px"}
              mt={"2"}
              fontSize={"1.1rem"}
              fontWeight={"normal"}
              sx={{ padding: "1.7rem", transition: "all .5s ease" }}
              _hover={{
                bgGradient: "linear(to-b,Lightslateblue 10%,Cobaltblue)",
              }}
            >
              Continue
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
