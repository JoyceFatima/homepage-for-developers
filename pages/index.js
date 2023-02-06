import NextLink from 'next/link'
import Image from 'next/image'

import { IoLogoCodepen, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'

import { BioSection, BioYear } from '../components/bio'
import { GridItem, WorkGridItem } from '../components/grid-item'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import thumbHabits from '../public/images/works/thumbHabits.png'
import thumbTodo from '../public/images/works/thumbTodoWeb.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        I’m a Software Engineer. I'm always learning. Passionate about creating
        solutions to real-world problems.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Joyce de Fátima Costa Santos
          </Heading>
          <p>
            Full Stack Engineer (JavaScript, TypeScript, React, React Native,
            Node)
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Profile.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;ve been a software developer for 1 year, with experience in
          frontend web, mobile and backend development, working most of my
          career with JavaScript/TypeScript.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in São Paulo, Brasil.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Beginning of the Faculty of Information Systems at Universidade
          Paulista
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Frontend Developer at Qodeless - Brasil;
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Beginning of studies at Rocketseat
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Going out, spending time with family, having fun with friends, games,
          coding.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://github.com/JoyceFatima"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoGithub />}
              >
                @JoyceFatima
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/joyce-de-f%C3%A1tima-b01566228/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoLinkedin />}
              >
                @JoyceFatima
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://codepen.io/JoyceFatima"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoCodepen />}
              >
                @JoyceFatima (Codepen.io)
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={2}>
          <Section>
            <WorkGridItem
              id="todo-list"
              title="Todo List"
              thumbnail={thumbTodo}
            ></WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="habits"
              title="Habits"
              thumbnail={thumbHabits}
            ></WorkGridItem>
          </Section>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home

export { getServerSideProps } from '../components/chakra'
