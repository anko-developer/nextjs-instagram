'use client'

import { SimplePost } from '@/model/post'
import useSWR from 'swr'
import PostListCard from '../PostListCard/PostListCard'
import GridSpinner from '../ui/GridSpinner'

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR<SimplePost[]>('/api/posts');

  return (
    <section>
      {loading && (
        <div className='flex justify-center mt-32'>
          <GridSpinner color='red' />
        </div>
      )}
      {posts && (
        <ul className='flex flex-col gap-4'>
          {posts && posts.map((post, index) => <li key={post.id}><PostListCard post={post} priority={index < 2} /></li>)}
        </ul>
      )}
    </section>
  )
}
