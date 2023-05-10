import { useState, useEffect } from 'react';
import { Table, Space, Button,Input } from '@arco-design/web-react';
const columns = [
  {
    title: '部门名称',
    dataIndex: 'departmentName',
    sorter: (a, b) => a.departmentName.length - b.departmentName.length,
  },
  {
    title: '部门代码',
    dataIndex: 'departmentCode',
    sorter: (a, b) => a.departmentCode - b.departmentCode,
    filters: [
      {
        text: '> 20000',
        value: '20000',
      },
      {
        text: '> 30000',
        value: '30000',
      },
    ],
    defaultFilters: ['20000'],
    onFilter: (value, row) => row.departmentCode > value,
    sortDirections: ['ascend'],
    defaultSortOrder: 'ascend',
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
  },
];
const allData = Array(200)
  .fill('')
  .map((_, index) => ({
    key: `${index}`,
    name: `Kevin Sandra ${index}`,
    salary: 22000,
    address: `${index} Park Road, London`,
    email: `kevin.sandra_${index}@example.com`,
  }));

function CommodityManagement() {
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
      {/* TODO: 加一个搜索框 */}
      <div class="header">搜索框：<Input style={{ width: 120 }} allowClear placeholder='输入部门名称'/> 输入部门代码：<Input style={{ width: 120 }} allowClear placeholder='输入部门代码' /></div>
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
            <Space>
              <span>Selected {selectedRowKeys.length}</span>
              <Button size='mini'>Save</Button>
              <Button size='mini'>Delete</Button>
            </Space>

          </div>
        )}
      />
    </div>

  );
}

export default CommodityManagement;
