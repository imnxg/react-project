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





