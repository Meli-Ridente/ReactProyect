import { Container } from "react-bootstrap";
import MultiPostsComponent from '../components/MultiPostsComponent/MultiPostsComponent'

export default function Posts () {
  return (
    <Container>
      <h1>Posts</h1>
      <MultiPostsComponent></MultiPostsComponent>
    </Container>
  )
}