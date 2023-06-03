import { useState } from 'react';
import { Modal, Button, Form, Input, Select, Message, Space } from '@arco-design/web-react';
import { IconPlus, IconSearch } from '@arco-design/web-react/icon';
const FormItem = Form.Item;

function AddMachineConfig() {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    const formItemLayout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 20,
        },
    };
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

    
    const Option = Select.Option;
    const options = ['现金', '支付宝', '微信', 'POS通', '闪付', 'POS通C扫码', '银联二维码', '会员余额支付'];
    const Option2 = Select.Option;
    const options2 = ['启用', '禁用'];

    return (
        <Space size='large' align='baseline' style={{ float: 'inherit' }}>
            <center style={{ marginRight: -20, marginBottom: 10 }} >搜索：</center><Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入终端号' />
            <Button type='primary' style={{ width: 130, marginRight: 0, marginBottom: 10 }} icon={<IconSearch />}>搜索</Button>
            <Button onClick={() => setVisible(true)} type='primary' style={{ width: 130, marginRight: 0, marginBottom: 10 }} icon={<IconPlus />}  >添加</Button>
            <br />
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
                    <FormItem label='终端号' field='terminalNumber' rules={[{ required: true }]}>
                        <Input placeholder='请输入终端号' />
                    </FormItem>
                    <FormItem label='支付方式' required field='paymentMethod' rules={[{ required: true }]}>
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
                            {options.map((option, index) => (
                                <Option key={option} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </FormItem>
                    <FormItem label='配置序号' field='configOrder' rules={[{ required: true }]}>
                        <Input placeholder='请输入配置序号' />
                    </FormItem>
                    <FormItem label='显示名称' required field='displayName' rules={[{ required: true }]}>
                        <Input placeholder='请输入显示名称' />
                    </FormItem>
                    <FormItem label='状态' field='status' rules={[{ required: true }]}>
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
                                <Option2 key={option} value={option}>
                                    {option}
                                </Option2>
                            ))}
                        </Select>
                    </FormItem>
                </Form>
            </Modal>
        </Space>
    );
}

export default AddMachineConfig;
