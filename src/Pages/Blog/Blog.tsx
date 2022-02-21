
import { FC } from 'react'
import { Link } from "react-router-dom";
import './Blog.css'
import { posts } from '../../posts/posts';

const Blog: FC = () => {
    return (
        <>
            <h1>Blog</h1>
            <div className='posts'>
                {posts.map((post, index) => (
                    <Link
                        to={`/blog/${post.slug}`}
                        key={index}
                    >
                        {post.title}
                    </Link>

                ))}
            </div>
        </>
    )

}

export default Blog