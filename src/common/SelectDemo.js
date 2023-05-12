import { Select, Message, Space } from '@arco-design/web-react';
const Option = Select.Option;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Disabled'];

const SelectDemo = () => {
  return (
    <div>
    <Space size='large'>
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
    </Space>
    <br/>
    <br/>
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
