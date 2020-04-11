const ReactDOM = {
    // 渲染真实DOM
    render(vnode, container) {
        let realDOM = this.generateDOM(vnode);
        container.appendChild(realDOM);
    },
    // 获取真实DOM
    generateDOM(vnode) {
        let elem = document.createElement(vnode.type);
        // 特殊key值映射
        let specialKeyMap = {
            className: 'class',
            fontSize: 'font-size',
        };
        let { props } = vnode;

        // 设置DOM属性
        props && Object.keys(props).forEach(key => {
            if (key === 'children') {
                // 处理子结点
                props.children.forEach(child => {
                    if (typeof child === 'string') {
                        // 纯内容结点
                        elem.appendChild(document.createTextNode(child));
                    } else {
                        // DOM结点
                        elem.appendChild(this.generateDOM(child));
                    }
                });
            } else if (key === 'style') {
                // 设置样式属性
                let styleObj = props.style;
                let styleItems = [];

                Object.keys(styleObj).forEach(styleKey => {
                    styleItems.push(`${specialKeyMap[styleKey] || styleKey}:${styleObj[styleKey]}`);
                });

                elem.setAttribute('style', styleItems.join(';'));
            } else {
                // 设置其他属性
                elem.setAttribute(specialKeyMap[key] || key, props[key]);
            }
        });

        return elem;
    }
};
export default ReactDOM