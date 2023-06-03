import { useState } from 'react';
import { Modal, Button, Form, Input, Select, Message, Space, Radio, Empty } from '@arco-design/web-react';
import { IconPlus, IconSearch } from '@arco-design/web-react/icon';
const FormItem = Form.Item;

function AddUser() {
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

  const formItemLayout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 20,
    },
  };
  const Option = Select.Option;
  const options = ['全部', '正常', '已锁定'];
  const Option2 = Select.Option;
  const options2 = ['公司管理员', '普通用户'];
  return (
    <Space size="large" align='baseline'>
      <center style={{ marginRight: -20, marginBottom: 10 }} >搜索：</center>
      <Select
        placeholder='全部'
        style={{ width: 154, marginRight: 0, marginBottom: 10 }}
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
      <Input style={{ width: 130, marginRight: "10px", marginBottom: 10 }} allowClear placeholder='输入用户名' />
      <Input style={{ width: 130, marginRight: "10px", marginBottom: 10 }} allowClear placeholder='输入手机号' />
      <Button type='primary' style={{ marginRight: "10px", marginBottom: 10 }} icon={<IconSearch />}>搜索</Button>
      <Button onClick={() => setVisible(true)} type='primary' style={{ marginRight: "10px", marginBottom: 10 }} icon={<IconPlus />} >添加</Button>
      <Button onClick={() => setVisibleTwo(true)} type='primary' style={{ marginRight: "10px", marginBottom: 10 }} >部门设置</Button>
      <Modal
        title='添加用户'
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
          <FormItem label='用户名' field='userName' rules={[{ required: true }]}>
            <Input placeholder='请输入用户名' />
          </FormItem>
          <FormItem label='姓名' required field='name' rules={[{ required: true }]}>
            <Input placeholder='请输入姓名' />
          </FormItem>
          <FormItem label='角色' required field='role' rules={[{ required: true }]}>
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
          <FormItem label='手机号' required field='phone' rules={[{ required: true }]}>
            <Input placeholder='请输入手机号' />
          </FormItem>
          <FormItem label='邮件' required field='email' rules={[{ required: true }]}>
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
            <Radio.Group>
              <Radio value='0'>男</Radio>
              <Radio value='1'>女</Radio>
            </Radio.Group>
          </FormItem>
        </Form>
      </Modal>
      {/*  */}
      <Modal
        title='所属单位'
        visible={visibleTwo}
        onOk={() => setVisibleTwo(false)}

        onCancel={() => setVisibleTwo(false)}
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
          <Empty />
        </Form>
      </Modal>
    </Space>
  );
}

export default AddUser;
