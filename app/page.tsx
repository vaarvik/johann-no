import Button from '@/components/Button/Button';
import Container from '@/components/layout/components/Container/Container';
import Heading from '@/components/typography/components/Heading/Heading';

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <Heading level={2}>Home</Heading>
          <Button color="primary">Click me</Button>
          <Button color="primary" variant="outlined">
            Click me
          </Button>
          <a href="/about">Go to about</a>
        </Container>
      </main>
    </div>
  );
}
