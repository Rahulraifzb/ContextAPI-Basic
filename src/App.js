import styled from 'styled-components';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import Nav from './Nav';


function App() {
  return (
    <MovieProvider>
      <AppContainer>
        <Nav />
        <MovieList />
      </AppContainer>
    </MovieProvider>
  );
}

export default App;

const AppContainer = styled.div`
  text-align:container;
`