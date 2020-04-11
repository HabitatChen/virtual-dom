import { parseJSX } from './utils/parseJSX.js'
import { transform } from './utils/transform.js'
import React from './utils/easy-react.js'
import ReactDOM from './utils/easy-react-dom.js'

~(function () {
    const style = { color: 'red' };

    function greet(name) { return `hello ${name}`; }

    const App = (
        `<div className="container">
        <p style={style}>saying {greet('scott')} hah</p>
        <div>
            <p>this is jsx-like code</p>
            <i className="icon" />
            <p>parsing it now</p>
            <img className="icon" />
        </div>
        <input type="text" value="i am a button" />
        <em />
    </div>`
    );

    // 目标 将 App 渲染到页面上去

    // 第一步，通过babel将App转换成 React.createElement()包装的对象
    const app1 = transform(parseJSX(App))
    console.log('app1', app1);

    // 第二步，通过编写的简易的react.createElement 生成虚拟dom
    let app2 = eval(app1)
    console.log('app2', app2);

    // 第三步，最后将虚拟dom挂载到页面上去
    ReactDOM.render(app2, document.body)
})()


