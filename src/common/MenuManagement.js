import { useRef, useEffect, useState } from 'react';
import {
  Form,
  AutoComplete,
  Input,
  Select,
  TreeSelect,
  Button,
  Checkbox,
  Switch,
  Radio,
  Cascader,
  Message,
  InputNumber,
  Rate,
  Slider,
  Upload,
  DatePicker,
  Modal,
  Space,
} from '@arco-design/web-react';
import { IconPlus, IconDelete, IconSearch } from '@arco-design/web-react/icon';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};
const noLabelLayout = {
  wrapperCol: {
    span: 17,
    offset: 7,
  },
};

/**
 * 菜单管理
 * @returns 
 */
function MenuManagement() {
  const formRef = useRef();

  useEffect(() => {
    formRef.current.setFieldsValue({
      rate: 5,
    });
  }, []);

  const onValuesChange = (changeValue, values) => {
    console.log('onValuesChange: ', changeValue, values);
  };

  return (
    <div style={{ maxWidth: 650 }}>
      <Space size="large">
        <p>用户管理</p>
      </Space>
      <Space size="large">
        <Button type="primary" onClick={() => { }}>全部展开</Button>
        <Button type="primary" onClick={() => { }}>全部压缩</Button>
        <Button type="primary" icon={<IconPlus />} onClick={() => { }}>添加</Button>
      </Space>
      <Form
        ref={formRef}
        autoComplete='off'
        {...formItemLayout}

        initialValues={{
          slider: 20,
          'a.b[0].c': ['b'],
        }}
        onValuesChange={onValuesChange}
        scrollToFirstError
      >
        <FormItem label='父级菜单' field='post' rules={[{ required: true }]}>
          <Select
            placeholder='请选择'
            options={[
              {
                label: 'one',
                value: 0,
              },
              {
                label: 'two',
                value: 1,
              },
              {
                label: 'three',
                value: 2,
              },
            ]}
            allowClear
          />
        </FormItem>
          <FormItem label='菜单名称' field='age' rules={[{  required: true }]}>
            <Input placeholder='please enter' />
          </FormItem>
          <FormItem label='图标' field='name' rules={[{ required: true }]}>
            <Input placeholder='' />
          </FormItem>
          <FormItem label='URL' field='urlName' rules={[{ required: true }]}>
            <Input placeholder='' />
          </FormItem>
          <FormItem label='顺序' field='orderName' rules={[{ required: true }]}>
            <Input placeholder='' />
          </FormItem>
          
        <FormItem {...noLabelLayout}>
          <Button
            onClick={async () => {
              if (formRef.current) {
                try {
                  await formRef.current.validate();
                  Message.info('校验通过，提交成功！');
                } catch (_) {
                  console.log(formRef.current.getFieldsError());
                  Message.error('校验失败，请检查字段！');
                }
              }
            }}
            type='primary'
            style={{ marginRight: 24 }}
          >
            保存
          </Button>
          <Button
            onClick={() => {
              formRef.current.resetFields();
            }}
          >
            Reset
          </Button>
          
        </FormItem>
      </Form>
    </div>
  );
}

export default MenuManagement;
