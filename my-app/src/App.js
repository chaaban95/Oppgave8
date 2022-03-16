import { Route, Routes } from 'react-router-dom'
import Movies from './pages/Movies';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Navigation from './components/Navigation'

export default function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="movies" >
        <Route index element={<Movies />} />
        <Route path=":slug" element={<Movie />} />
      </Route>
    </Routes>
    </>
  );
}