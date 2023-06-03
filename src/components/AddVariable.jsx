import { useState } from 'react';
import { Modal, Button, Form, Input, Select, Message, Space } from '@arco-design/web-react';
import { IconPlus, IconSearch } from '@arco-design/web-react/icon';
const FormItem = Form.Item;

function AddVariable() {
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
    <Space size='large' align='baseline' style={{ float: 'inherit' }}>
      <center style={{ marginRight: -20, marginBottom: 10 }} >搜索：</center><Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入变量描述' />
      <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入变量名称' />
      <Button type='primary' style={{ width: 130, marginRight: 0, marginBottom: 10 }} icon={<IconSearch />}>搜索</Button>
      <Button onClick={() => setVisible(true)} type='primary' style={{ width: 130, marginRight: 0, marginBottom: 10 }} icon={<IconPlus />}  >添加</Button>
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
          <FormItem label='变量名称' field='variableDescription'>
            <Input placeholder='请输入变量名称' />
          </FormItem>
          <FormItem label='变量名称' field='variableName'>
            <Input placeholder='请输入变量名称' />
          </FormItem>
          <FormItem label='变量路径' field='variablePath'>
            <Input placeholder='请输入变量路径' />
          </FormItem>
        </Form>
      </Modal>
    </Space>
  );
}

export default AddVariable;
