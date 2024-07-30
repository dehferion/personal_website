import React, { useEffect } from 'react';
import links from '../../utils/Links';
import styles from './Blog.module.css';
import { Link } from 'react-router-dom';
import formatISODate from '../../utils/dateFormatter';

function Blog() {
    const [postList, setPostList] = React.useState([]);

    useEffect(() => {
        fetch(links.BLOG_API_URL)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setPostList(response);
            });
    }, []);

    let content = <h2> Blog is loading... </h2>;
    if (postList.length > 0) {
        content = (
            <div className={styles.blog}>
                {postList.map((post) => {
                    return (
                        <div key={post.id} className={styles.post}>
                            <Link to={`/blog/${post.id}`}>
                                <div className={styles.postTitle}>{post.title}</div>
                                {post.image ? <img src={post.image} alt="" /> : ''}
                                <p className={styles.editTime}>{formatISODate(post['date_created'])}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
    return content;
}

export default Blog;
