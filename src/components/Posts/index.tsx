import React, { useState } from 'react';

export interface Post {
  id: number,
  date: string;
  date_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  categories: number[];
  tags: number[];
  jetpack_featured_media_url: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [loadingPosts, setLoadingPost] = useState<boolean>(true);

  const loadPosts = async () => {
    const response = await fetch('https://www.garagemdigital.io/wp-json/wp/v2/posts?_fields=author,id,excerpt,title,link,date,categories,tags,jetpack_featured_media_url,slug');
    const data = await response.json();
    setPosts(data);
    setLoadingPost(false);
  }

  loadPosts();

  return (
    <div>
      {loadingPosts ? <p>Carregando postagens</p> : null}
      <ul>
        {posts?.map((post: Post) => (
          <li key={post.id}>
            {post.title.rendered}
            <a href={post.link} target="_blank">Ver</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts;