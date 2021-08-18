// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog
  return (
    <div className="blog-container">
      <div className="blog-details-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-para">{description}</p>
    </div>
  )
}

export default BlogItem
