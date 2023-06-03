import { createContext, useState, useEffect } from 'react';
import { Modal, Button, Space, Input, Form } from '@arco-design/web-react';

const ConfigContext = createContext({});
const FormItem = Form.Item;


function EditVariable({ record }) {
    const [modal, contextHolder] = Modal.useModal();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(true);
    }, [visible]);

    function onOk() {
        setVisible(false);

        console.log("test:部门名称" + record.departmentName);
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
                <FormItem label='变量名称' field='variableDescription' initialValue={name.variableDescription}>
                    <Input placeholder='请输入变量名称' />
                </FormItem>
                <FormItem label='变量名称' field='variableName' initialValue={name.variableName}>
                    <Input placeholder='请输入变量名称' />
                </FormItem>
                <FormItem label='变量路径' field='variablePath' initialValue={name.variablePath}>
                    <Input placeholder='请输入变量路径' />
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
        okText: '确认',
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

export default EditVariable;
