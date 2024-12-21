import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';

const BlogPost = () => {
  const { blog } = useContext(DataContext);
  const { id } = useParams();
  const post = blog.find(post => post.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen text-white pt-10">
      <img src={post?.image} alt={post?.title} className="w-full h-96 object-cover" />
      <div className="p-4">
        <h1 className="text-4xl font-semibold text-white mt-2">{post?.title}</h1>
        <p className="text-gray-400 mt-2">{post?.category} • {post?.date}</p>
        <p className="text-gray-400 mt-4">{post?.excerpt}</p>
        <div className="text-white mt-4">
          {/* Here you can add more details about the post */}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
