import { createContext, useState, useEffect } from 'react';
import { Modal, Button, Space, Input, Form,Select,Message  } from '@arco-design/web-react';

const ConfigContext = createContext({});
const FormItem = Form.Item;


function EditMachineConfig({ record },) {
    const [modal, contextHolder] = Modal.useModal();
    const [visible, setVisible] = useState(true);
    // const [confirmLoading, setConfirmLoading] = useState(false);
    // const [form] = Form.useForm();
    useEffect(() => {
        setVisible(true);
    }, [visible]);

    function onOk() {
        setVisible(false);
    }

    function removeRow(key) {
        console.log(key + "------------")
    }

    const [form] = Form.useForm();
    const formItemLayout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 20,
        },
    };
    const Option = Select.Option;
  const Option2 = Select.Option;
  const options = ['现金', '支付宝', '微信', 'POS通', '闪付', 'POS通C扫码', '银联二维码', '会员余额支付'];
  const options2 = ['启用','禁用'];

    //编辑弹窗
    const config = {
        title: '修改',
        content: <ConfigContext.Consumer>{(name) =>
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
            <FormItem label='终端号' field='terminalNumber' rules={[{ required: true }]} initialValue={name.terminalNumber}>
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
            <FormItem label='配置序号' field='configOrder' rules={[{ required: true }]} initialValue={name.configOrder}>
                <Input placeholder='请输入配置序号' />
            </FormItem>
            <FormItem label='显示名称' required field='displayName' rules={[{ required: true }]} initialValue={name.displayName}>
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
        content: <ConfigContext.Consumer>{(name) => `确定要删除吗？`}
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

export default EditMachineConfig;
