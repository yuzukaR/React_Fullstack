//入口页面
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom'
import router from './router'

//显示的router下第一个页面，也就是main
//函数组件 使用JSX语法
function App() {
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

//导出
export default App;
