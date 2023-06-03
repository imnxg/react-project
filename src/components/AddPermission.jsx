import { useState } from 'react';
import { Modal, Button, Form, Input, Select, Message, Space, Radio, Empty } from '@arco-design/web-react';
import { IconPlus, IconSearch } from '@arco-design/web-react/icon';
const FormItem = Form.Item;

function AddPermission() {
    const [visible, setVisible] = useState(false);
    const [visibleTwo, setVisibleTwo] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();

    function onOk() {
        form.validate().then((res) => {
            setConfirmLoading(true);
            setTimeout(() => {
                Message.success('Success !');
                setVisible(false);
                setConfirmLoading(false);
            }, 1500);
        });
    }

    function configPermission() {
        setTimeout(() => {
        Message.warning('请选择角色!');
        setVisibleTwo(true);
        }, 1000);
    }
    const formItemLayout = {
        labelCol: {
            span: 5,
        },
        wrapperCol: {
            span: 20,
        },
    };

    return (
        <Space size="large" align='baseline'>
            <center style={{ width: 60, marginRight: -20, marginBottom: 10 }}>搜索：</center>
            <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入权限名称' />
            <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入权限CODE' />
            <center style={{ width: 60, marginRight: -20, marginBottom: 10 }}>角色：</center>
            <Select style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='选择角色' />
            <Button type='primary' style={{ marginBottom: 10 }} icon={<IconSearch />}>搜索</Button>
            <Button onClick={() => setVisible(true)} type='primary' style={{ marginBottom: 10 }} icon={<IconPlus />} >添加</Button>
            <Button onClick={() => configPermission()} type='primary' style={{ marginBottom: 10 }} icon={<IconPlus />} >配置权限</Button>

            <Modal
                title='添加'
                visible={visible}
                onOk={onOk}
                confirmLoading={confirmLoading}
                onCancel={() => setVisible(false)}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    labelCol={{
                        style: { flexBasis: 90 },
                    }}
                    wrapperCol={{
                        style: { flexBasis: 'calc(100% - 90px)' },
                    }}
                >
                    <FormItem label='权限名称' field='permissionName' >
                        <Input placeholder='请输入权限名称' />
                    </FormItem>
                    <FormItem label='权限CODE' field='permissionCode'>
                        <Input placeholder='请输入权限CODE' />
                    </FormItem>
                </Form>
            </Modal>
            {/* <Modal
                title='添加'
                visible={visible}
                onOk={onOk}
                confirmLoading={confirmLoading}
                onCancel={() => setVisible(false)}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    labelCol={{
                        style: { flexBasis: 90 },
                    }}
                    wrapperCol={{
                        style: { flexBasis: 'calc(100% - 90px)' },
                    }}
                >
                    <FormItem label='权限名称' field='permissionName' >
                        <Input placeholder='请输入权限名称' />
                    </FormItem>
                    <FormItem label='权限CODE' field='permissionCode'>
                        <Input placeholder='请输入权限CODE' />
                    </FormItem>
                </Form>
            </Modal> */}

        </Space>
    );
}

export default AddPermission;
