import { Select, Message, Space,Button,Input } from '@arco-design/web-react';
import { IconPlus, IconDelete,IconSearch } from '@arco-design/web-react/icon';
const Option = Select.Option;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Disabled'];

const SelectDemo = () => {
  return (
    <div>
    <Space size='large'>
  
        搜索框：<Input style={{ width: 120 }} allowClear placeholder='输入部门名称'/> 
      <Input style={{ width: 120 }} allowClear placeholder='输入订单号' />
      <Select
        placeholder='请选择'
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
      <Select placeholder='请选择' style={{ width: 154 }} defaultValue='Beijing'>
        {options.map((option, index) => (
          <Option key={option} disabled={index === 4} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <Button type='primary' icon={<IconSearch />}>搜索</Button>
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
