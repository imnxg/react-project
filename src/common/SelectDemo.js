import { Select, Message, Space,Button,Input } from '@arco-design/web-react';
import { IconPlus, IconDelete,IconSearch } from '@arco-design/web-react/icon';
const Option = Select.Option;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Disabled'];


const SelectDemo = () => {
  return (
    <div>
    <Space size='large'>
  
        <center style={{marginRight: -20, marginBottom: 10 }} >搜索：</center><Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入部门名称'/> 
      <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入订单号' />
      <Select
        placeholder='请选择'
        style={{ width: 154, marginRight: 0, marginBottom: 10 }}
        onChange={(value) =>
          Message.info({
            content: `You select ${value}.`,
            showIcon: true,
          })
        }
      >
        {options.map((option, index) => (
          <Option key={option} disabled={index === 3} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <Select placeholder='请选择' style={{ width: 154, marginRight: 0, marginBottom: 10 }} defaultValue='Beijing'>
        {options.map((option, index) => (
          <Option key={option} disabled={index === 4} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <Button type='primary' style={{ marginBottom: 10 }} icon={<IconSearch />}>搜索</Button>
    </Space>

    {/* <Space size='large'>
      <Select
        status='error'
        placeholder='Please select'
        style={{ width: 154 }}
        onChange={(value) =>
          Message.info({
            content: `You select ${value}.`,
            showIcon: true,
          })
        }
      >
        {options.map((option, index) => (
          <Option key={option} disabled={index === 3} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <Select status='warning' placeholder='Select city' style={{ width: 154 }} defaultValue='Beijing' >
        {options.map((option, index) => (
          <Option key={option} disabled={index === 4} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Space> */}
    </div>
  );
};

export default SelectDemo;
