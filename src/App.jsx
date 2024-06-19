import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post author="Osmar Roncasalia" content="Lorem Ipsum" />
      <Post author="Osmar Roncasalia" content="Lorem Ipsum" />
    </div>
  )
}
