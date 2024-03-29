import { useRef } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import Form from './components/Form';

function App() {
  const input = useRef<HTMLInputElement>(null);

  function handleSubmit(data: unknown): void {
    const extractedData = data as { name: string; age: number };
    console.log(extractedData);
  }

  return (
    <main>
      <Form onSave={handleSubmit}>
        <Input id='name' label='Your name' type='text' ref={input} />
        <Input id='age' label='Your age' type='number' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
      <hr />
      <p>
        <Button href='google'>Anchor</Button>
      </p>
      <p>
        <Container as={Button}>Container</Container>
      </p>
    </main>
  );
}

export default App;
