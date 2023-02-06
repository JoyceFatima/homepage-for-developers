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
  <Layout title="Todo-List">
    <Container>
      <Title>
        Todo List <Badge>2023</Badge>
      </Title>
      <P>
        Project realized for notes of tasks. It has the function of noting tasks
        to be done, identification of completion of tasks and removal of each
        task. Made with a responsive layout.
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
            href="https://github.com/JoyceFatima/rocketseat-todo-list"
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
        <ListItem>React Hook Form</ListItem>
        <ListItem>Yup</ListItem>
      </UnorderedList>
      <Center my={6}>
        <Image src="/images/works/thumbTodoWeb.png" alt="icon" />
      </Center>
      <Center my={6}>
        <Image src="/images/works/thumbTodoMobile.png" alt="icon" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
