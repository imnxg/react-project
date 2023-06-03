import {
  Form,
  Input,
  Select,
  Button,
  Message,
  Space,
  Grid, Divider, Empty
} from '@arco-design/web-react';
import { IconPlus } from '@arco-design/web-react/icon';
const Row = Grid.Row;
const Col = Grid.Col;
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

  const onValuesChange = (changeValue, values) => {
    console.log('onValuesChange: ', changeValue, values);
  };

  return (
    <div style={{ width: '100%' }}>
      <Row className='grid-gutter-demo' gutter={24}>
        <Col span={12}>
          <div style={{ width: 600 }}>
            <Space size='large' align='baseline' style={{ width: 700 }}>
              <center style={{ marginLeft: "65px", marginBottom: 10 }} >菜单管理:</center>

              <Button type='primary' style={{ width: 125, marginRight: 0, marginBottom: 10 }} >全部展开</Button>
              <Button type='primary' style={{ width: 130, marginRight: 0, marginBottom: 10 }} >全部压缩</Button>
              <Button type='primary' style={{ width: 130, marginRight: 0, marginBottom: 10 }} icon={<IconPlus />}  >添加</Button>
              <br />
            </Space>

            <Form
              autoComplete='off'
              {...formItemLayout}

              initialValues={{
                slider: 20,
                'a.b[0].c': ['b'],
              }}
              onValuesChange={onValuesChange}
              scrollToFirstError
              style={{ width: 580 }}
            >
              <FormItem label='父级菜单' field='post' rules={[{ required: true }]}>
                <Select
                  placeholder='请选择'
                  options={[
                    {
                      label: 'user',
                      value: 0,
                    },
                    {
                      label: 'adminstrator',
                      value: 1,
                    },
                    {
                      label: 'root',
                      value: 2,
                    },
                  ]}
                  allowClear
                />
              </FormItem>
              <FormItem label='菜单名称' field='age' rules={[{ required: true }]}>
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
        </Col>
        <Col span={2}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{float:"left",marginTop:"100px",marginLeft:"100px"}}/>
        </Col>
      </Row>
    </div>
  );
}

export default MenuManagement;
