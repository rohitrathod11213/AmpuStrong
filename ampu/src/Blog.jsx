import './stylecss/Home.css'
import img11 from './images/img11.jpeg'
import img12 from './images/img12.jpeg'
import img13 from './images/img13.jpeg'
import onli from './images/onli.jpg'
import { FaEllipsisV} from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa'
import axios from 'axios';
import { useState, useEffect } from 'react'
import Post from './Post.jsx'


export default function Blog(){

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async() => {
            const res = await axios.get('http://localhost:5000/api/posts');
            setBlogs(res.data);
        }
        fetchBlogs();
    }, [])

    return(
        <section className="blog-page">
            <div className="blog-page-cont">
            <h1>All Posts</h1>
            {blogs.map((p) => (
                <Post post={p} />
            ))}
            
            <footer style={{width:'100%'}}>
                <h1>AmpuStrong</h1>
            </footer>
            </div>
        </section>
    );
}