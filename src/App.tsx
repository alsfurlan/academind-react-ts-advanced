import { useRef } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';

function App() {
  const input = useRef(null);
  return (
    <main>
      <Input id='name' label='Your name' type='text' ref={input} />
      <Input id='age' label='Your age' type='number' />
      <p>
        <Button>Button</Button>
      </p>
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
