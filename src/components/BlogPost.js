import posts from '../data'
import Post from './Post'

const post = posts.map((element, index) => {
  return (
    <Post key={index}
    {...element}
    />
  )
})

export default function BlogPost (props) {
  return (
    <>
    <article>
    {post}
    </article>
    </>
  )
}