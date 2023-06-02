import { createContext, useState, useEffect } from 'react';
import { Modal, Button, Space, Input, Form } from '@arco-design/web-react';

const ConfigContext = createContext({});
const FormItem = Form.Item;


function PreOrder({ record },) {
    const [modal, contextHolder] = Modal.useModal();
    const [visible, setVisible] = useState(true);
    // const [confirmLoading, setConfirmLoading] = useState(false);
    // const [form] = Form.useForm();
    useEffect(() => {
        setVisible(true);
    }, [visible]);

    function onOk() {
        setVisible(false);

        console.log("test:部门名称" + record.deptName);
    }

    function removeRow(key) {
        console.log(key + "------------")
        AllData.splice(key, 1);
        console.log("---------")
        console.log(AllData.splice(key, 1))
        console.log("-----------996")
    }


    console.log(record);

    //编辑弹窗
    const config = {
        title: '修改',
        content: <ConfigContext.Consumer>{(name) =>
            <Form>
                <FormItem label='部门名称' field='deptName' initialValue={name.deptName}>
                    <Input placeholder='请输入部门名称' />
                </FormItem>
                <FormItem label='部门密码' field='orderNo' initialValue={name.orderNo}>
                    <Input placeholder='请输入部门名称' />
                </FormItem>
            </Form>
        }
        </ConfigContext.Consumer>,
        onOk: onOk,
        alignCenter: false,
        confirmLoading: false,
        okText: '保存',
        cancelText: '取消',
        closable: true,
        simple: false,
        unmountOnExit: true,
    };
    //删除 
    const deleteCom = {
        title: '删除',
        content: <ConfigContext.Consumer>{(name) => `确定要删除${name.departmentName}吗？`}
        </ConfigContext.Consumer>,
        alignCenter: false,
        confirmLoading: false,
        okText: '删除',
        cancelText: '取消',
        closable: true,
        simple: false,
        unmountOnExit: true,
    };
    return (
        <Space>
            <ConfigContext.Provider value={record}>
                {contextHolder}
                <Button
                    style={{ marginRight: "10px", marginRight: 8, }}
                    onClick={() => modal.confirm(config)}
                    type='text'
                    status='default'
                >预览</Button>
                <Button
                   onClick={(e) => { modal.confirm(deleteCom); console.log(e); }}
                    type='primary'
                    status='danger'
                >
                    退款
                </Button>

            </ConfigContext.Provider>
        </Space>
    );
}

export default PreOrder;
