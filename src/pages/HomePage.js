import { Container } from "react-bootstrap";
import PerroImagen from '../assets/images/cocker-spaniel-cara-640x853.jpg'

export default function HomePage () {
  return (
    <Container>
      <h1>HomePage</h1>
      <img src={PerroImagen}></img>
    </Container>
  )
}