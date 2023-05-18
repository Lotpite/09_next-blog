'use client'

import { useState, useEffect} from 'react'

import NoteCard from './NoteCard'

const NoteCardList = ({ data, handleTagClick }) => {
  return (
    <div
      className='mt-16 
        prompt_layout'>
      {data.map(post => 
        <NoteCard 
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}/>
      )}
    </div>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const searchPost = (searchQuery) => {
    const searchedPosts = posts.filter(post => {
      if(post.note.includes(searchQuery) || post.author.username.includes(searchQuery) || post.tag.includes(searchQuery)) {
        return true
      } 

      return false 
    })
    setFilteredPosts(searchedPosts)

  }

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value)
    searchPost(e.target.value)
  }

 

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/note')
      const data = await response.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <section 
      className='feed'>
      <form
        className='relative
          w-full
          flex-center'>
            <input type="text" 
              placeholder='Search for notes or username'
              value={searchText}
              onChange={handleSearchChange}
              required
              className='search_input peer'/>
      </form>

      <NoteCardList 
        data={searchText ? filteredPosts : posts}
        handleTagClick={() => {}}/>
    </section>
  )
}

export default Feed