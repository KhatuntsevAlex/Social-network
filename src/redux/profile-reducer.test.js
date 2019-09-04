import profileReducer, { addPost, dellPost } from './profile-reducer'

const state = {
  posts: [
    {
      id: 1,
      message: 'Hello!',
      likesCount: 15,
      imgSrc: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg',
    },
    {
      id: 2,
      message: "It's my world!",
      likesCount: 30,
      imgSrc: 'https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg',
    },
    {
      id: 3,
      message: "It's my world!",
      likesCount: 30,
      imgSrc: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg',
    },
  ],  
}

it('length of posts should be incremented', () => {
  const action = addPost('New post added')
  const newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(4)
})

it('message of new post should be correct', () => {
  const action = addPost('New post added')
  const newState = profileReducer(state, action)
  expect(newState.posts[3].message).toBe('New post added')
})

it('length of posts should be decremented', () => {
  const action = dellPost(2)
  const newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(2)
})