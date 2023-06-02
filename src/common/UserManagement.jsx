import { useState } from 'react';
import { Table, Space, Button,Input,Switch } from '@arco-design/web-react';
import { IconPlus,IconSearch } from '@arco-design/web-react/icon';

const columns = [
  {
    title: '公司',
    dataIndex: 'companyName',
    sorter: (a, b) => a.companyName.length - b.companyName.length,
  },
  {
    title: '用户名',
    dataIndex: 'userName',
    sorter: (a, b) => a.userName.length - b.userName.length,
    
  },
  {
    title: '姓名',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    sorter: (a, b) => a.phone.length - b.phone.length,
  },
  {
    title: '性别',
    dataIndex: 'gender',
    sorter: (a, b) => a.gender.length - b.gender.length,
  },
  {
    title: '邮件',
    dataIndex: 'email',
    sorter: (a, b) => a.email - b.email,
    // filters: [
    //   {
    //     text: '> 20000',
    //     value: '20000',
    //   },
    //   {
    //     text: '> 30000',
    //     value: '30000',
    //   },
    // ],
  },
  {
    title: '修改时间',
    dataIndex: 'updateTime',
    sorter: (a, b) => a.updateTime.length - b.updateTime.length,
  },
  {
    title: '状态',
    dataIndex: 'status',
    // sorter: (a, b) => a.status.length - b.status.length,
    render: (_, record) => (
      <div>
        <Switch  checked />
      </div>
    )
  },
  {
    title: '操作',
    dataIndex: 'operate',
    // sorter: (a, b) => a.email.length - b.email.length,
    render: (_, record) => (
      <Space align='baseline' wrap={true} size="mini" direction="horizontal">
        <Button
        // onClick={() => removeRow(record.key)}
        type='text'
        status='default'
      >
        编辑
      </Button>
      <Button
        // onClick={() => removeRow(record.key)}
        type='primary'
        status='danger'
      >
        删除
      </Button>
      <Button
        // onClick={() => removeRow(record.key)}
        type='text'
        status='default'
      >
        重置密码
      </Button>
      <Button
        // onClick={() => removeRow(record.key)}
        type='text'
        status='default'
      >
        数据权限
      </Button>
      <Button
        // onClick={() => removeRow(record.key)}
        type='text'
        status='default'
      >
        下线
      </Button>
      <Button
        // onClick={() => removeRow(record.key)}
        type='text'
        status='default'
      >
        刷新缓存
      </Button>
        </Space>
    )
  },
];
const allData = Array(200)
  .fill('')
  .map((_, index) => ({
    key: `${index}`,
    companyName: `xx公司 ${index}`,
    userName: `user_${index}`,
    name: `张三_${index}`,
    phone: `1380013800${index}`,
    gender: `${index % 2 === 0 ? '男' : '女'}`,
    email: `kevin.sandra_${index}@example.com`,
    updateTime: `${(Math.floor(Math.random() * (new Date().getFullYear() - 2019 + 1)) + 2019)+'-'+(Math.floor(Math.random() * 12) + 1)+'-'+(Math.floor(Math.random() * 30) + 1)+'-'+(Math.floor(Math.random() * 24))}`,
    status: `${index % 2 === 0 ? '启用' : '禁用'}`,

    // updateTime: `${index} `,
    
  }));

/**
 * 用户管理
 * @returns 
 */
function UserManagement() {

  const [data, setData] = useState(allData);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pagination, setPagination] = useState({
    sizeCanChange: true,
    showTotal: true,
    total: 96,
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
    <div>
      <Space size="large">
      <center style={{ marginRight: -20, marginBottom: 10 }} >搜索：</center><Input style={{ width: 130 ,marginRight: "10px",marginBottom: 10 }} allowClear placeholder='输入部门名称'/> 
      <Input style={{ width: 130 ,marginRight: "10px",marginBottom: 10 }} allowClear placeholder='输入部门代码' />
      <Button type='primary' style={{ marginRight: "10px",marginBottom: 10 }} icon={<IconSearch />}>搜索</Button>
      <Button type='primary' style={{marginRight: "10px",marginBottom: 10 }} icon={<IconPlus />} >添加</Button>
      <Button type='primary' style={{marginRight: "10px",marginBottom: 10 }} >部门设置</Button>
      </Space>
      <Table
        loading={loading}
        columns={columns}
        data={data}
        pagination={pagination}
        onChange={onChangeTable}
        hover={true}
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

export default UserManagement;
