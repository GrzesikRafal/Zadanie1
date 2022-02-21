import { FC } from 'react'
import { useParams, Link } from 'react-router-dom'
import { posts, PostI } from '../../posts/posts';

const SinglePost: FC = () => {

    const { slug } = useParams();
    const desiredPost: PostI = posts.filter((item) => item.slug === slug)[0]


    // title: 'Lorem ipsum dolor',
    // slug: 'lorem-ipsum-dolor',
    // author: 'Adam Jakiś',
    // date: '21.11.2021',
    // entry: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem. Purus faucibus ornare suspendisse sed nisi.',
    // content: 

    return (
        <>
            <h1>{`Title :${desiredPost.title}`}</h1>
            <p>{`Slug: ${desiredPost.slug}`}</p>
            <h2>{`author: ${desiredPost.author}`}</h2>
            <h2>{`date: ${desiredPost.date}`}</h2>
            <p>{desiredPost.entry}</p>
            <Link to="/blog">Back to posts</Link>

        </>
    )
}

export default SinglePost