import { createContext, useState, useEffect } from 'react';
import { Modal, Button, Space, Input, Form, Message } from '@arco-design/web-react';

const ConfigContext = createContext({});
const FormItem = Form.Item;


function EditPermission({ record },) {
    const [modal, contextHolder] = Modal.useModal();
    const [visible, setVisible] = useState(true);
    // const [confirmLoading, setConfirmLoading] = useState(false);
    // const [form] = Form.useForm();
    useEffect(() => {
        setVisible(true);
    }, [visible]);

    function onOk() {
        setVisible(false);
        Message.success('Success !');
        console.log("test:部门名称" + record.permissionName);
    }

    function removeRow(key) {
        console.log(key + "------------")
    }


    console.log(record);

    //编辑弹窗
    const config = {
        title: '修改',
        content: <ConfigContext.Consumer>{(name) =>
            <Form>
                <FormItem label='权限名称' field='permissionName' initialValue={name.permissionName}>
                    <Input placeholder='请输入部门名称' />
                </FormItem>
                <FormItem label='权限CODE' field='permissionCode' initialValue={name.permissionCode}>
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
        content: <ConfigContext.Consumer>{(name) => `确定要删除${name.permissionName}吗？`}
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
                    style={{ marginRight: "10px" }}
                    onClick={() => modal.confirm(config)}
                    type='default'
                    status='defult'
                >
                    编辑
                </Button>
                <Button
                    onClick={(e) => { modal.confirm(deleteCom); console.log(e); }}
                    type='primary'
                    status='danger'
                >
                    删除
                </Button>

            </ConfigContext.Provider>
        </Space>
    );
}

export default EditPermission;
