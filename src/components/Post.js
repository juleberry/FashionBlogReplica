export default function Posts (props) {
  return (
    <>
    <p id="date">{props.blogDate}</p>
    <p id="blogTitle">{props.blogTitle}</p>
    <img src={props.mainImg} alt={props.mainImgTags} />
      <p id="entry">{props.blogEntry}</p>
      <p id="continue"><a href={props.postLink}>Continues ...</a></p>
    </>
  )
}