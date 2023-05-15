## arco-design

> arco-design官网：[快速上手 | ArcoDesign](https://arco.design/react/docs/start)

### 菜单（Menu）



获取onClickMenuItem中文本内容，再通过设置状态（setState），改变相应的属性值。

```
 onClickMenuItem={(key,event) =>
              Message.info({
                content: `You select ${key}, ${event.target.innerText}`,
                showIcon: true,
              }, 
              this.setState({  
                itemName: event.target.innerText,
                })
              
              )
  }
```









## 遇到的问题

> https://react.dev/reference/react-dom/findDOMNode#alternatives



问题1：

```
bundle.js:47133 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of ResizeObserverComponent which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
    at div
    at ResizeObserverComponent (http://localhost:3000/static/js/bundle.js:24684:43)
    at Trigger (http://localhost:3000/static/js/bundle.js:20491:24)
    at Tooltip (http://localhost:3000/static/js/bundle.js:19892:61)
    at div
```



解决办法：

这个警告是因为您在使用 `findDOMNode` 方法时，组件被包裹在 `StrictMode` 中。在 `StrictMode` 中，React 会执行额外的检查以帮助您发现潜在问题，其中一项检查是禁用了 `findDOMNode` 方法。您可以按照警告信息中提供的链接了解如何在 `StrictMode` 中使用 `ref`。

为了解决这个警告，您可以尝试将 `findDOMNode` 方法替换为使用 `ref` 属性直接引用组件中的元素。例如，如果您要引用一个 `div` 元素，可以使用以下代码：

```jsx
import React, { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  return (
    <div ref={myRef}>
      {/* ... */}
    </div>
  );
}
```

请注意，`ref` 属性的值应该是一个回调函数或 `useRef` 的返回值。在这个例子中，我们使用了 `useRef` 来创建一个可变的引用，然后将其传递给 `div` 元素的 `ref` 属性。

问题2：分页点击问题

```
ResizeObserver loop limit exceeded
at http://localhost:3000/static/js/bundle.js:84353:58
```



解决办法：

This error message usually occurs when you are using a `ResizeObserver` to detect changes in the size of an element, but the observer is triggering a loop that exceeds the maximum number of loops allowed by the browser. 

To fix this issue, you can try the following:

1. Check if you are observing the same element multiple times. If you are, try to remove the duplicate observers.

2. Check if you are changing the size of the observed element inside the observer callback function. If you are, try to avoid doing so.

3. If you are using a `setTimeout` or `setInterval` inside the observer callback function, try to remove them.

4. If you are observing a large number of elements, try to limit the number of elements you are observing at one time.

5. If none of the above solutions work, you can try to use a `debounce` function to limit the number of times the observer callback function is called. 

Here's an example of how to use a `debounce` function:

```js
import { debounce } from 'lodash';

const handleResize = debounce(() => {
  // your resize logic here
}, 100);

const observer = new ResizeObserver(handleResize);

observer.observe(element);
```

In this example, the `debounce` function limits the number of times the `handleResize` function is called to once every 100 milliseconds. This can help prevent the observer from triggering a loop that exceeds the maximum number of loops allowed by the browser.
