import React from 'react'
import Article from './Article'

function ArticleList({ posts }) {

    const loadPosts = posts.map((post) => (
            <Article
                key={post.id}
                minutes={post.minutes}
                title={post.title}
                date={post.date}
                preview={post.preview}
            />
    ))

    return (
            <main id="postList">{loadPosts}</main>
    )
}

export default ArticleList