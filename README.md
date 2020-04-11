# virtual-dom

## 步骤如下
1. jsx通过babel的转译，将其变成 React.createElement()的形式
2. React.createElement()返回一个虚拟dom的对象
3. ReactDOM.render() 将虚拟dom转换成真实的dom