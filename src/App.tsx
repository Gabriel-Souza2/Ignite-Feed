import style from'./App.module.css'
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'

import { data } from './utils/data.json';


export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <div>

          {
            data.map((value, index) => {
              return <Post key={value.post.id} data={value}/>
            }) 
          }
        </div>
      </div>
    </div>
  );
}

