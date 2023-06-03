import { useState } from 'react';
import { Modal, Button, Form, Input, Select, Message, Space, Radio, Empty } from '@arco-design/web-react';
import { IconPlus, IconSearch } from '@arco-design/web-react/icon';
const FormItem = Form.Item;

function AddRole() {
    const [visible, setVisible] = useState(false);
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
            <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入角色名称' />
            <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入角色代码' />
            <Button type='primary' style={{ marginBottom: 10 }} icon={<IconSearch />}>搜索</Button>
            <Button onClick={() => setVisible(true)} type='primary' style={{ marginBottom: 10 }} icon={<IconPlus />} >添加</Button>

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
                    <FormItem label='系统编号' field='key' >
                        <Input placeholder='请输入部门名称' />
                    </FormItem>
                    <FormItem label='角色名称' field='roleName'>
                        <Input placeholder='请输入角色名称' />
                    </FormItem>
                    <FormItem label='角色代码' field='roleCode'>
                        <Input placeholder='请输入角色代码' />
                    </FormItem>
                </Form>
            </Modal>

        </Space>
    );
}

export default AddRole;
