import { useState } from 'react';
import { Table, Button, Input,Message,Space,Modal,Form } from '@arco-design/web-react';
import { IconPlus, IconSearch } from '@arco-design/web-react/icon';
import SystemVariableData from '../mock/SystemVariableData.ts';
import AddVariable from '../components/AddVariable.jsx';
import EditVariable from '../components/EditVariable.jsx';

const columns = [
  {
    title: '变量描述',
    dataIndex: 'variableDescription',
    sorter: (a, b) => a.variableDescription.length - b.variableDescription.length,
  },
  {
    title: '变量名称',
    dataIndex: 'variableName',
  },
  {
    title: '变量路径',
    dataIndex: 'variablePath',
    sorter: (a, b) => a.variablePath - b.variablePath,
  },
  {
    title: '修改时间',
    dataIndex: 'updateTime',
    sorter: (a, b) => a.updateTime - b.updateTime,
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'Paris',
        value: 'Paris',
      },
    ],
    onFilter: (value, row) => row.updateTime.indexOf(value) > -1,
    filterMultiple: false,
  },
  {
    title: '修改人',
    dataIndex: 'modifyPerson',
    sorter: (a, b) => a.modifyPerson.length - b.modifyPerson.length,
  },
  {
    title: '操作',
    dataIndex: 'operate',
    // sorter: (a, b) => a.email.length - b.email.length,
    render: (_, record) => (
      <div>
        {/* <Button
          style={{ marginRight: "10px" }}
          // onClick={() => removeRow(record.key)}
          onClick={() =>xiugai(record) }
          type='default'
          status='defult'
        >
          编辑
        </Button>
        <Button
          // onClick={() => removeRow(record.key)}
          type='primary'
          status='danger'
        >
          删除
        </Button> */}
        <EditVariable record={record}/>
      </div>
    )
  },
];

const allData = SystemVariableData;


function SystemVariable() {
  
  const [data, setData] = useState(allData);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
 
  const [pagination, setPagination] = useState({
    sizeCanChange: true,
    showTotal: true,
    total: allData.length,
    pageSize: 10,
    current: 1,
    pageSizeChangeResetCurrent: true,
  });
  const [loading, setLoading] = useState(false);

  function onChangeTable(pagination) {
    const { current, pageSize } = pagination;
    setLoading(true);
    setTimeout(() => {
      setData(allData.slice((current - 1) * pageSize, current * pageSize));
      setPagination((pagination) => ({ ...pagination, current, pageSize }));
      setLoading(false);
    }, 1000);
  }

  return (
    <div >

      {/* <Space size='large'>
     <center style={{ marginRight: -20, marginBottom: 10 }} >搜索：</center><Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入部门名称' />
        <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入部门代码' />
        <Button type='primary' style={{ width: 130, marginRight: 0, marginBottom: 10 }} icon={<IconSearch />}>搜索</Button>
        <Button type='primary' style={{ width: 130, marginRight: 0, marginBottom: 10 }} icon={<IconPlus />} >添加</Button> 
       
      </Space> */}
      <AddVariable />
      <Table
        loading={loading}
        columns={columns}
        data={data}
        pagination={pagination}
        onChange={onChangeTable}
        rowSelection={{
          selectedRowKeys,
          onChange: (selectedRowKeys, selectedRows) => {
            console.log('selectedRowKeys', selectedRowKeys);
            console.log('selectedRows', selectedRows);
            setSelectedRowKeys(selectedRowKeys);
          },
        }}
        renderPagination={(paginationNode) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            {paginationNode}
            {/* <Space>
              <span>Selected {selectedRowKeys.length}</span>
              <Button size='mini'>Save</Button>
              <Button size='mini'>Delete</Button>
            </Space> */}
             

          </div>
        )}
      />
    </div>

  );
}

export default SystemVariable;
