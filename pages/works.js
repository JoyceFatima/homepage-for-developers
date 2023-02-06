import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbHabits from '../public/images/works/thumbHabits.png'
import thumbTodo from '../public/images/works/thumbTodoWeb.png'
import thumbFeed from '../public/images/works/thumbIgniteFeedWeb.png'
import thumbFigmaJam from '../public/images/works/thumbFigmaJam.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="todo-list"
            title="Todo List"
            thumbnail={thumbTodo}
          >
            Project realized for notes of tasks.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ignite-feed"
            title="Ignite Feed"
            thumbnail={thumbFeed}
          >
            Made to represent a feed.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="habits"
            title="Habits"
            thumbnail={thumbHabits}
          >
            The project is for time management and day-to-day usability.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="figma-jam"
            title="Figma Jam"
            thumbnail={thumbFigmaJam}
          >
            I used figma-jam as inspiration to create a simpler model using the React flow library to enhance interactive and custom diagrams.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
