import { Container, Heading } from '@chakra-ui/react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { VisibilityFilter } from './components/VisibilityFilter';

function App() {
  return (
    <Container maxW="container.sm">
      <Heading my="4">Todo List</Heading>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
    </Container>
  );
}

export default App;
