import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import links from '../../utils/Links';
import styles from './Post.module.css';
import formatISODate from '../../utils/dateFormatter';

function Post() {
    const params = useParams();
    const id = params.id;
    const [post, setPost] = useState({ title: 'Post is loading' });
    useEffect(() => {
        console.log(links.BLOG_API_URL + id);
        fetch(links.BLOG_API_URL + id)
            .then((response) => response.json())
            .then((response) => {
                setPost(response);
            });
    }, [id]);
    return (
        <div className={styles.post}>
            <h1>{post['title']}</h1>
            {post.image ? <img src={post.image} alt="" /> : ''}
            {/* <img src={post['image']} alt="" /> */}
            <p className={styles.text}>{post['text']}</p>
            <p className={styles.editTime}>Змінено: {formatISODate(post['date_updated'])}</p>
        </div>
    );
}

export default Post;
