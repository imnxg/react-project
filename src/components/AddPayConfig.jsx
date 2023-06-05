import { useState } from 'react';
import { Modal, Button, Form, Input, Select, Message, Space } from '@arco-design/web-react';
import { IconPlus, IconSearch } from '@arco-design/web-react/icon';
const FormItem = Form.Item;

function AddPayConfig() {
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
  return (
    <Space size='large' align='baseline' style={{ float: 'inherit' }}>
      <center style={{ marginRight: -20, marginBottom: 10 }} >搜索：</center><Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入名称' />
      <Select
        placeholder='请选择'
        style={{ width: 130, marginRight: 0, marginBottom: 10 }}
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
      <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入商户号' />
      <Button type='primary' style={{ width: 130, marginRight: 0, marginBottom: 10 }} icon={<IconSearch />}>搜索</Button>
      <Button onClick={() => setVisible(true)} type='primary' style={{ width: 130, marginRight: 0, marginBottom: 10 }} icon={<IconPlus />}  >添加</Button>
      <br />
      <Modal
        title='添加'
        visible={visible}
        onOk={onOk}
        confirmLoading={confirmLoading}
        onCancel={() => setVisible(false)}
        style={{ width: "450px" }}
        alignCenter={false}
        okText='保存'
        cancelText='取消'
        closable={true}
        simple={false}
        unmountOnExit={true}
      >
        <Form
          {...formItemLayout}
          form={form}
          labelCol={{
            style: { flexBasis: 100 },
          }}
          wrapperCol={{
            style: { flexBasis: 'calc(100% - 100px)' },
          }}
        >
          <FormItem label='名称' field='name' style={{ width: "400px" }}>
            <Input placeholder='请输入名称' />
          </FormItem>
          <FormItem label='支付类型' field='paymentType' style={{ width: "400px" }}>
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
          <FormItem label='商户号' field='merchantNumber' style={{ width: "400px" }}>
            <Input placeholder='请输入商户号' />
          </FormItem>
          <FormItem label='微信子商户' field='wechatSubMerchant' style={{ width: "400px" }}>
            <Input placeholder='请输入wechatSubMerchant' />
          </FormItem>
          <FormItem label='应用ID' field='applicationId' style={{ width: "400px" }} >
            <Input placeholder='请输入应用ID' />
          </FormItem>
          <FormItem label='加密类型' field='encryptionType' style={{ width: "400px" }} >
            <Input placeholder='请输入加密类型' />
          </FormItem>
          <FormItem label='商户签名密钥' field='merchantSignatureKey' style={{ width: "400px" }}>
            <Input placeholder='请输入商户签名密钥' />
          </FormItem>
          <FormItem label='通知回调' field='notificationCallback' style={{ width: "400px" }}>
            <Input placeholder='请输入通知回调' />
          </FormItem>
          <FormItem label='支付宝卖家' field='alipaySeller' style={{ width: "400px" }}>
            <Input placeholder='请输入支付宝卖家' />
          </FormItem>
          <FormItem label='微信证书路径' field='wechatCertificatePath' style={{ width: "400px" }}>
            <Input placeholder='请输入微信证书路径' />
          </FormItem>
          <FormItem label='微信证书密码' field='webchatenCryptionpassword' style={{ width: "400px" }}>
            <Input placeholder='请输入微信证书密码' />
          </FormItem>
          <FormItem label='支付宝私钥' field='alipayKey' style={{ width: "400px" }}>
            <Input placeholder='请输入支付宝私钥' />
          </FormItem>
        </Form>
      </Modal>
    </Space>
  );
}

export default AddPayConfig;
