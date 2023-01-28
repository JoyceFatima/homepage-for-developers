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

const FigmaJam = () => (
  <Layout title="Figma Jam">
    <Container>
      <Title>
        Figma Jam <Badge>2023</Badge>
      </Title>
      <P>
        Created to discover an interactive library and develop my creativity. It was a lot of fun to build this Layout and learn more new things.
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
          <Link href="https://github.com/JoyceFatima/ui-figma-jam" target="_blank">
            github code link here
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Youtube Video:</Meta>
          <Link href="https://youtu.be/J3vbTM21uDs" target="_blank">
            youtube video link here
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
        <ListItem>Tailwindcss</ListItem>
      </UnorderedList>
      <Center my={6}>
        <Image src="/images/works/thumbFigmaJam.png" alt="icon" />
      </Center>
    </Container>
  </Layout>
)

export default FigmaJam
export { getServerSideProps } from '../../components/chakra'
