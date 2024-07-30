import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import Footer from './components/Footer';
import Blog from './components/blog-components/Blog';
import Post from './components/blog-components/Post';
import './App.css';

function App() {
    return (
        <>
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route element={<MainLayout />} path="/">
                            <Route element={<Home />} index={true} />
                            <Route element={<Contacts />} path="contacts" />
                            <Route element={<Blog />} path="blog" />
                            <Route element={<Post />} path="blog/:id" />
                            <Route element={<NotFound />} path="*" />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
}

export default App;
