import logo from './logo.svg';
import './App.css';
import { addCommentThunk } from './store/modules/user/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

function App() {

  const dispatch = useDispatch()

  const typedText = useSelector((store) => store.user)

  const [ text, setText] = useState()
  

  return (
    <div className="App">
      <header className="App-header">
       <div>
         <section>
           <input onChange={(e) => setText(e.target.value)}/>
         </section>
         <section>
           <button onClick={() => dispatch(addCommentThunk(text)) }>New comment</button>
         </section>
         <section>
           {console.log(typedText)}
           {typedText.comments.map((comment) => <p> {comment}</p>)}
         </section>
       </div>
      </header>
    </div>
  );
}

export default App;
