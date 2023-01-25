import './Styles/App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import Blog from './Screens/Blog/Blog';
import BlogCategories from './Screens/Blog/BlogCategories';
import BlogPost from './Screens/Blog/BlogPost';
import BlogLayout from './Screens/Blog/BlogLayout';

function App() {
  const getDescr = (isActive) => {
    return <button>Evet</button>;
  };

  return (
      <>
      <nav>
        <NavLink to='/' className={({isActive}) => isActive ?  'altif' : "" }>Ana sayfa</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/contact'>
           {({ isActive }) => (
          <> Test
            {isActive  && 'Aktif' }
        </>
        )}
          </NavLink>
      </nav>
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/blog' element={ <BlogLayout /> }>
             <Route index={true} element={<Blog />} />
             <Route path='categories' element={ <BlogCategories /> } />
             <Route path='post/:url' element={ <BlogPost /> } />
          </Route>
      </Routes>
      </>
  );
}

export default App;
