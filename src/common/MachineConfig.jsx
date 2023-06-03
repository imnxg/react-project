import { useState } from 'react';
import { Table, Button, Input,Message,Space,Modal,Form } from '@arco-design/web-react';
import { IconPlus, IconSearch } from '@arco-design/web-react/icon';
import MachineConfigData from '../mock/MachineConfigData.ts';
import AddMachineConfig from '../components/AddMachineConfig.jsx';
import EditMachineConfig from '../components/EditMachineConfig.jsx';

const columns = [
  {
    title: '终端编号',
    dataIndex: 'terminalNumber',
    sorter: (a, b) => a.terminalNumber.length - b.terminalNumber.length,
  },
  {
    title: '支付方式',
    dataIndex: 'paymentMethod',
    sorter: (a, b) => a.paymentMethod - b.paymentMethod,
  },
  {
    title: '显示名称',
    dataIndex: 'displayName',
    sorter: (a, b) => a.displayName - b.displayName,
  },
  {
    title: '状态',
    dataIndex: 'status',
    sorter: (a, b) => a.status - b.status,
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
        <EditMachineConfig record={record}/>
      </div>
    )
  },
];

const allData = MachineConfigData;


function MachineConfig() {
  
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
      <AddMachineConfig />
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

export default MachineConfig;
