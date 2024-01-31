import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <main>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />
      <p>
        <Button el='button'>Button</Button>
      </p>
      <p>
        <Button el='anchor'>Anchor</Button>
      </p>
    </main>
  );
}

export default App;
