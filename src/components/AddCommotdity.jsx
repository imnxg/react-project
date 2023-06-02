import { useState } from 'react';
import { Modal, Button, Form, Input, Select, Message,Space } from '@arco-design/web-react';
import { IconPlus, IconSearch } from '@arco-design/web-react/icon';
const FormItem = Form.Item;

function AddCommotdity() {
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
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };
  return (
    <Space size='large' align='baseline' style={{float:'inherit'}}>
        <center style={{ marginRight: -20, marginBottom: 10 }} >搜索：</center><Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入部门名称' />
        <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入部门代码' />
        <Button type='primary' style={{ width: 130, marginRight: 0, marginBottom: 10 }} icon={<IconSearch />}>搜索</Button>
        <Button onClick={() => setVisible(true)}  type='primary' style={{ width: 130, marginRight: 0, marginBottom: 10 }} icon={<IconPlus />}  >添加</Button>
        <br />
      <Modal
        title='添加部门'
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
          <FormItem label='部门名称' field='name' rules={[{ required: true }]}>
            <Input placeholder='请输入部门名称' />
          </FormItem>
          <FormItem label='部门代码' required field='sex' rules={[{ required: true }]}>
            <Input placeholder='请输入部门代码' />
          </FormItem>
        </Form>
      </Modal>
      </Space>
  );
}

export default AddCommotdity;
