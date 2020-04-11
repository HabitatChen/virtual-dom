const React =  {
    // 创建DOM描述对象 即虚拟DOM
    createElement(tag, attrs, ...children) {
      let vnode = {
        type: tag,
        props: {
          ...attrs,
          children,
        }
      };
  
      return vnode;
    }
};

export default React