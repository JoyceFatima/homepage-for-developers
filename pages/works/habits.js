import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Habits">
    <Container>
      <Title>
        Habits <Badge>2023</Badge>
      </Title>
      <P>
        Habits is a project I developed during Rocketseat NLW SETUP event
        in early 2023, using Typescript, React, React Native, Tailwindcss,
        Node, Fastify, Prisma, animations and much more. The project is for
        time management and day-to-day usability.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, React Native, NodeJS</span>
        </ListItem>
        <ListItem>
          <Meta>Github:</Meta>
          <Link href="https://github.com/JoyceFatima/nlw-setup" target="_blank">
            github code link here
          </Link>
        </ListItem>
      </List>

      <P style={{ marginTop: 30 }}>
        Technologies used:
      </P>

      <UnorderedList ml={4} my={4}>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>Typecript</ListItem>
        <ListItem>React</ListItem>
        <ListItem>React Native</ListItem>
        <ListItem>Tailwindcss</ListItem>
        <ListItem>Expo</ListItem>
        <ListItem>Node</ListItem>
        <ListItem>Fastify</ListItem>
        <ListItem>Prisma-orm</ListItem>
        <ListItem>ESlint</ListItem>
        <ListItem>Prettier</ListItem>
      </UnorderedList>
      <Center my={6}>
        <Image src="/images/works/thumbHabits.png" alt="icon" />
      </Center>
      <Center my={6}>
        <Image src="/images/works/nlwSetup.png" alt="icon" />
      </Center>
      <Center my={6}>
        <Image src="/images/works/habitsForPhone.png" alt="icon" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
