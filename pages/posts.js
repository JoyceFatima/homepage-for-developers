import { useEffect, useState } from 'react';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';

import getPosts from '../services/PostService/getPosts';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Popular Posts
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {posts.map(post => (
              <GridItem
                key={post.id}
                title={post.title}
                thumbnail={post.thumbnail}
                href={post.url}
              />
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
export { getServerSideProps } from '../components/chakra'
