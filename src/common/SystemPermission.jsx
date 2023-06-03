import { useState } from 'react';
import { Table, Button, Input,Message,Space,Modal,Form } from '@arco-design/web-react';
import { IconPlus, IconSearch } from '@arco-design/web-react/icon';
import SystemPermissionData from '../mock/SystemPermissionData.ts';
import AddPermission from '../components/AddPermission.jsx';
import EditPermission from '../components/EditPermission.jsx';

const columns = [
  {
    title: '权限名称',
    dataIndex: 'permissionName',
    sorter: (a, b) => a.permissionName.length - b.permissionName.length,
  },
  {
    title: '权限CODE',
    dataIndex: 'permissionCode',
    sorter: (a, b) => a.permissionCode - b.permissionCode,
  },
  {
    title: '修改时间',
    dataIndex: 'updateTime',
    sorter: (a, b) => a.updateTime - b.updateTime,
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
        <EditPermission record={record}/>
      </div>
    )
  },
];

const allData = SystemPermissionData;


function SystemPermission() {
  
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
      <AddPermission />
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
          </div>
        )}
      />
    </div>

  );
}

export default SystemPermission;
