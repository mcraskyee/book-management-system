import './App.css'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import BookFormPage from './pages/bookFormPage/bookFormPage';
import BookSearchPage from './pages/bookSearchPage/bookSearchPage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/book-search">Search Books</NavLink>
        <NavLink to="/book-form">Form A Book</NavLink>
      </nav>
      <Routes>
        <Route path="/book-search" element={<BookSearchPage />} />
        <Route path="/book-form" element={<BookFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
