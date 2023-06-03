import { createContext, useState, useEffect } from 'react';
import { Modal, Button, Space, Input, Form } from '@arco-design/web-react';
const ConfigContext = createContext({});
const FormItem = Form.Item;


function EditPayconfig({ record },) {
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
                <FormItem label='名称' field='name' initialValue={name.name}>
                    <Input placeholder='请输入名称' />
                </FormItem>
                <FormItem label='支付类型' field='paymentType' initialValue={name.paymentType}>
                    <Input placeholder='请输入部门名称' />
                </FormItem>
                <FormItem label='商户号' field='merchantNumber' initialValue={name.merchantNumber}>
                    <Input placeholder='请输入商户号' />
                </FormItem>
                <FormItem label='微信子商户' field='wechatSubMerchant' initialValue={name.wechatSubMerchant}>
                    <Input placeholder='请输入wechatSubMerchant' />
                </FormItem>
                <FormItem label='应用ID' field='applicationId' initialValue={name.applicationId}>
                    <Input placeholder='请输入应用ID' />
                </FormItem>
                <FormItem label='加密类型' field='encryptionType' initialValue={name.encryptionType}>
                    <Input placeholder='请输入加密类型' />
                </FormItem>
                <FormItem label='商户签名密钥' field='merchantSignatureKey' initialValue={name.merchantSignatureKey}>
                    <Input placeholder='请输入商户签名密钥' />
                </FormItem>
                <FormItem label='通知回调' field='notificationCallback' initialValue={name.notificationCallback}>
                    <Input placeholder='请输入通知回调' />
                </FormItem>
                <FormItem label='支付宝卖家' field='alipaySeller' initialValue={name.alipaySeller}>
                    <Input placeholder='请输入支付宝卖家' />
                </FormItem>
                <FormItem label='微信证书路径' field='wechatCertificatePath' initialValue={name.wechatCertificatePath}>
                    <Input placeholder='请输入微信证书路径' />
                </FormItem>
                <FormItem label='微信证书密码' field='webchatenCryptionpassword' initialValue={name.webchatenCryptionpassword}>
                    <Input placeholder='请输入微信证书密码' />
                </FormItem>
                <FormItem label='支付宝私钥' field='alipayKey' initialValue={name.alipayKey}>
                    <Input placeholder='请输入支付宝私钥' />
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
        style: { width: 580 },
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

export default EditPayconfig;
