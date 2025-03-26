export default function Post({post}) {
    return (
        <div className="card">
            <h1>{post.id}</h1>
            <p> {post.title} </p>
            <p> {post.body} </p>
            
        </div>
    )
}