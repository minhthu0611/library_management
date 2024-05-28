import './App.css';
import "./sb-admin-2.min.css";
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './Components/Portal';
import BookDetailsList from './Components/BookDetailsList';
import BookView from './Components/BookView';
import LibrarianBookEdit from './LibrarianComponents/LibrarianBookEdit';
import LibrarianBookCreate from './LibrarianComponents/LibrarianBookCreate';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/librarian-portal' element={<Portal isLibrarian={true} />} >
          <Route path='librarian-book-list' element={<BookDetailsList />} />
          <Route path='book-view/:id' element={<BookView isLibrarian={true} />} />
          <Route path='book-edit/:id' element={<LibrarianBookEdit />} />
          <Route path='add-new-book' element={<LibrarianBookCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
