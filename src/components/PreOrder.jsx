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
            <Space wrap>
                <Form layout="inline">
                    <FormItem label='终端编号' field='deptName' disabled initialValue={name.deptName}>
                        <Input placeholder='请输入部门名称' />
                    </FormItem>
                    <FormItem label='订单编号' field='orderNo' disabled initialValue={name.orderNo}>
                        <Input placeholder='请输入部门名称' />
                    </FormItem>
                    <FormItem label='交易单号' field='tradeNo' disabled initialValue={name.tradeNo}>
                        <Input placeholder='请输入部门名称' />
                    </FormItem>
                    <FormItem label='支付方式' field='payType' disabled initialValue={name.payType}>
                        <Input placeholder='请输入部门名称' />
                    </FormItem>
                    <FormItem label='交易类型' field='tradeType' disabled initialValue={name.tradeType}>
                        <Input placeholder='请输入部门名称' />
                    </FormItem>
                    <FormItem label='商品价格' field='commodityPrice' disabled initialValue={name.commodityPrice}>
                        <Input placeholder='请输入部门名称' />
                    </FormItem>
                    <FormItem label='支付金额' field='payPrice' disabled initialValue={name.payPrice}>
                        <Input placeholder='请输入部门名称' />
                    </FormItem>
                    <FormItem label='商品名称' field='commodityName' disabled initialValue={name.commodityName}>
                        <Input placeholder='请输入部门名称' />
                    </FormItem>
                    <FormItem label='订单状态' field='orderStatus' disabled initialValue={name.orderStatus}>
                        <Input placeholder='请输入部门名称' />
                    </FormItem>
                    <FormItem label='创建时间' field='createTime' disabled initialValue={name.createTime}>
                        <Input placeholder='请输入部门名称' />
                    </FormItem>
                </Form>
            </Space>
        }
        </ConfigContext.Consumer>,
        onOk: onOk,
        alignCenter: false,
        confirmLoading: false,
        // okText: '保存',
        // cancelText: '取消',
        escToExit: false,
        closable: true,
        simple: false,
        unmountOnExit: true,
        style: { width: 600 },
    };
    //删除 
    const deleteCom = {
        title: '退款',
        content: <ConfigContext.Consumer>{(name) => `确定要退${name.deptName}吗？`}
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
