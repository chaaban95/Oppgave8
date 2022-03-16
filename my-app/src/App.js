import { Route, Routes } from 'react-router-dom'
import Movies from './pages/Movies';
import Home from './pages/Home';
import Movie from './pages/Movie';

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="movies" >
        <Route index element={<Movies />} />
        <Route path=":slug" element={<Movie />} />
      </Route>
    </Routes>
  );
}