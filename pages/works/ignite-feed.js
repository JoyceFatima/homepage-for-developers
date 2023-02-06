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
  <Layout title="ignite-feed">
    <Container>
      <Title>
        Ignite Feed <Badge>2023</Badge>
      </Title>
      <P>
        Made to represent a feed with a responsive layout and thought about user
        usability. Aren't just beautiful, but enjoyable to use.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React</span>
        </ListItem>
        <ListItem>
          <Meta>Github:</Meta>
          <Link
            href="https://github.com/JoyceFatima/rocketseat-feed"
            target="_blank"
          >
            github code link here
          </Link>
        </ListItem>
      </List>

      <P style={{ marginTop: 30 }}>Technologies used:</P>

      <UnorderedList ml={4} my={4}>
        <ListItem>ViteJs</ListItem>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>Typecript</ListItem>
        <ListItem>React</ListItem>
        <ListItem>Phosphor React</ListItem>
        <ListItem>Date Fns</ListItem>
      </UnorderedList>
      <Center my={6}>
        <Image src="/images/works/thumbIgniteFeedWeb.png" alt="icon" />
      </Center>
      <Center my={6}>
        <Image src="/images/works/thumbIgniteFeedMobile.png" alt="icon" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
