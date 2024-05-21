import './App.css';
import "./sb-admin-2.min.css";
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LibrarianDashboard from './LibrarianComponents/LibrarianDashboard';
import Portal from './Components/Portal';
import BookDetailsList from './Components/BookDetailsList';
import CustomerDashboard from './CustomerComponents/CustomerDashboard';
import BookView from './Components/BookView';
import LibrarianBookEdit from './LibrarianComponents/LibrarianBookEdit';
import LibrarianBookCreate from './LibrarianComponents/LibrarianBookCreate';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/librarian-portal' element={<Portal isLibrarian={true} />} >
          <Route path='librarian-dashboard' element={<LibrarianDashboard />} />
          <Route path='librarian-book-list' element={<BookDetailsList isCustomer={false} />} />
          <Route path='book-view/:id' element={<BookView isLibrarian={true} />} />
          <Route path='book-edit/:id' element={<LibrarianBookEdit />} />
          <Route path='add-new-book' element={<LibrarianBookCreate />} />
        </Route>
        <Route path='/customer-portal' element={<Portal isLibrarian={false} />}>
          <Route path='customer-dashboard' element={<CustomerDashboard />} />
          <Route path='customer-book-list' element={<BookDetailsList isCustomer={true} />} />
          <Route path='book-read/:id' element={<BookView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
