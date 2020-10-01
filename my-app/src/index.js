import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ***********************************************************************
// ReactDOM.render(
//   <h1><h2>Hello React!</h2></h1>, //element
//   document.getElementById('root') //container
// );

// ReactDOM.render是一個方法(method),會接收兩個參數,
// [1] element : 為需要展示的東西, 這邊的語法稱為JSX, 大意為用JS來寫HTML
//   **element只能包含一個副節點, 例如<h1></h1><h1></h1>這樣包含了兩個副節點則會報錯
//   **可以在根結點內添加副節點, 但必須確保根節點只有唯一一個
// [2] container : 為DOM上的一個節點, 可在指定節點上加載想要的東西
// render做的事情就是把 element 加載到 container

// JSX = JavaScript XML, const element = <h1>Hello, world!</h1>, 這個函數會返回html

// ***********************************************************************

// ReactDOM.render(
//   <form>
//     <input name="username" type="test" />
//     <input name="password" type="password" />
//     <button className="btn" type="submit">Sign in</button>
//     <p style={{ fontStyle: "italic"}}>Message</p>
//   </form>,
//   document.getElementById('root')
// );
// 在react中, 勿遺漏closing tag, 尤其在使用input tag 時
// 增加CSS class時使用 className
// 引用style時, 使用兩層大括號

// ***********************************************************************

  // ReactDOM.render(
  //   <div>
  //     <h1>It is {new Date().toLocaleTimeString()}.</h1>
  //   </div>,
  //   document.getElementById('root')
  // );
// 練習new Date這個API, 同時這個API有幾種不同方式獲取時間參數

// ***********************************************************************

// function cb() {
//   ReactDOM.render(
//     <div>
//       <h1>It is {new Date().toLocaleTimeString()}.</h1>
//     </div>,
//     document.getElementById('root')
//   );
// }
// setInterval(cb, 1000)
// 每1000毫秒(1秒)更新頁面一次
// 這種每秒更新頁面的方式十分占用資源, 不推薦
// 往後會介紹利用react的解決方法

// ***********************************************************************

// function Welcome(props) {
//   console.log(props)
// return <h1>Hello Welcome {props.name}</h1> //JSX
// }

// ReactDOM.render(
//   <Welcome name="foo" gender="male"/>,
//   document.getElementById('root')
// );
//functional components例子
// 定義function的時候, 首字母需大寫
// function回傳的是一個JSX

// ***********************************************************************

// function StudentCard(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <div>Age: {props.age}</div>
//     </div>
//   );
// }

// ReactDOM.render(
//   <div>
//     <StudentCard name="foo" age={12} />
//     <StudentCard name="bar" age={13} />
//   </div>,
//   document.getElementById('root')
// );
// React中, 人和functional component必須是pure function, 不能為impure function
// React的基本邏輯: 任何function and component 必須是 pure
// props屬性是read only(唯讀), 不能用props.age=12 這樣的方式賦值

// ***********************************************************************

//functional component
//pure function
//pure component
// function StudentCard(props) {
//   console.log(typeof props.age)
//   return (
//     <div>
//       <h1>{props.name}</h1>
//   <div>Age: {props.age}</div>
//     </div>
//   );
// }

// ReactDOM.render(
//   <div>
//     <StudentCard name="foo" age={12} />
//     <StudentCard name="bar" age={13} />
//   </div>,
//   document.getElementById('root')
// );


serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

