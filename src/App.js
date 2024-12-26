//入口页面
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom'
import router from './router'

//显示的router下第一个页面，也就是main
function App() {
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
