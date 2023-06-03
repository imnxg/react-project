import { createContext, useState, useEffect } from 'react';
import { Modal, Button, Space, Input, Form, Select, Radio,Empty,Message} from '@arco-design/web-react';
import AllData from '../mock/commodity.ts';

const ConfigContext = createContext({});
const FormItem = Form.Item;


function EditUser({ record },) {
    const [modal, contextHolder] = Modal.useModal();
    const [visible, setVisible] = useState(true);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    useEffect(() => {
        setVisible(true);
    }, [visible]);

    function onOk() {
        setVisible(false);
    }

    function removeRow(key) {
        console.log(key + "------------")
        AllData.splice(key, 1);
        console.log("---------")
        console.log(AllData.splice(key, 1))
        console.log("-----------996")
    }

    console.log(record);

    const formItemLayout = {
        labelCol: {
            span: 5,
        },
        wrapperCol: {
            span: 20,
        },
    };
    const Option2 = Select.Option;
    const options2 = ['公司管理员', '普通用户'];

    //编辑弹窗
    const config = {
        title: '修改用户',
        content: <ConfigContext.Consumer>{(name) =>
            <Form
                {...formItemLayout}
                form={form}
                confirmLoading={confirmLoading}
                labelCol={{
                    style: { flexBasis: 90 },
                }}
                wrapperCol={{
                    style: { flexBasis: 'calc(100% - 90px)' },
                }}
            >
                <FormItem label='用户名' field='userName' rules={[{ required: true }]} initialValue={name.userName}>
                    <Input placeholder='请输入用户名' />
                </FormItem>
                <FormItem label='姓名' required field='name' rules={[{ required: true }]} initialValue={name.name}>
                    <Input placeholder='请输入姓名' />
                </FormItem>
                <FormItem label='角色' required field='role' rules={[{ required: true }]} >
                    <Select
                        placeholder='请选择'
                        style={{ marginRight: 0, marginBottom: 10 }}
                        onChange={(value) =>
                            Message.info({
                                content: `You select ${value}.`,
                                showIcon: true,
                            })
                        }
                    >
                        {options2.map((option, index) => (
                            <Option2 key={option} value={option} defaultActiveFirstOption={true}>
                                {option}
                            </Option2>
                        ))}
                    </Select>
                </FormItem>
                <FormItem label='手机号' required field='phone' rules={[{ required: true }]} initialValue={name.phone}>
                    <Input placeholder='请输入手机号' />
                </FormItem>
                <FormItem label='邮件' required field='email' rules={[{ required: true }]} initialValue={name.email}>
                    <Input placeholder='请输入邮件地址' />
                </FormItem>
                <FormItem
                    label='性别'
                    field='gender'
                    rules={[{
                        required: true,
                    },
                    {
                        validator: (value, callback) => {
                            if (value !== '0') {
                                callback('');
                            }
                        },
                    },
                    ]}
                >
                    <Radio.Group defaultValue="0">
                        <Radio value='0'>男</Radio>
                        <Radio value='1'>女</Radio>
                    </Radio.Group>
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
        content: <ConfigContext.Consumer>{(name) => `确定要删除${name.userName}吗？`}
        </ConfigContext.Consumer>,
        alignCenter: false,
        confirmLoading: false,
        okText: '确认',
        cancelText: '取消',
        closable: true,
        simple: false,
        unmountOnExit: true,
    };
    const resetPassword = {
        title: '信息',
        content: <ConfigContext.Consumer>{(name) => `确定要重置吗？`}
        </ConfigContext.Consumer>,
        alignCenter: false,
        confirmLoading: false,
        okText: '确认',
        cancelText: '取消',
        closable: true,
        simple: false,
        unmountOnExit: true,
    };
    const downUser = {
        title: '信息',
        content: <ConfigContext.Consumer>{(name) => `确定要让${name.userName}吗？`}
        </ConfigContext.Consumer>,
        alignCenter: false,
        confirmLoading: false,
        okText: '确认',
        cancelText: '取消',
        closable: true,
        simple: false,
        unmountOnExit: true,
    };
    
    const dataPermissions = {
        title: '数据权限',
        content: <ConfigContext.Consumer>{(name) => <Empty/>}
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
                    type='text'
                    status='default'
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
                <Button
                    onClick={() => modal.confirm(resetPassword)}
                    type='text'
                    status='default'
                >
                    重置密码
                </Button>
                <Button
                    onClick={() => modal.confirm(dataPermissions)}
                    type='text'
                    status='default'
                >
                    数据权限
                </Button>
                <Button
                    onClick={() => modal.confirm(downUser)}
                    type='text'
                    status='default'
                >
                    下线
                </Button>
                <Button
                    type='text'
                    status='default'
                >
                    刷新缓存
                </Button>


            </ConfigContext.Provider>
        </Space>
    );
}

export default EditUser;
