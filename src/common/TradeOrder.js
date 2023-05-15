import { useState, useEffect,useRef} from 'react';
import { Table, Space, Button,Input,} from '@arco-design/web-react';
import { IconPlus, IconDelete,IconSearch } from '@arco-design/web-react/icon';
import SelectDemo from './SelectDemo';

const columns = [
  {
    title: '终端编号',
    dataIndex: 'departmentName',
    sorter: (a, b) => a.departmentName.length - b.departmentName.length,
  },
  {
    title: '订单号',
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
    title: '交易单号',
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
    title: '支付方式',
    dataIndex: 'payType',
    sorter: (a, b) => a.payType.length - b.payType.length,
  },
  {
    title: '交易类型',
    dataIndex: 'tradeType',
    sorter: (a, b) => a.tradeType.length - b.tradeType.length,
  },
  {
    title: '商品价格',
    dataIndex: 'commodityPrice',
    sorter: (a, b) => a.commodityPrice.length - b.commodityPrice.length,
  },
  {
    title: '支付金额',
    dataIndex: 'payPrice',
    sorter: (a, b) => a.payPrice.length - b.payPrice.length,
  },
  {
    title: '商品名称',
    dataIndex: 'commodityName',
    sorter: (a, b) => a.commodityName.length - b.commodityName.length,
  },
  {
    title: '订单状态',
    dataIndex: 'orderStatus',
    sorter: (a, b) => a.orderStatus.length - b.orderStatus.length,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: (a, b) => a.createTime.length - b.createTime.length,
  },
  {
    title: '操作',
    dataIndex: 'operate',
    // sorter: (a, b) => a.email.length - b.email.length,
    render: (_, record) => (
        <div>
    <Button
        // onClick={() => removeRow(record.key)}
        type='text'
        status='default'
      >预览</Button>
      <Button
        // onClick={() => removeRow(record.key)}
        type='primary'
        status='danger'
      >
        退款
      </Button>
        </div>
       
    )
  },
];
const allData = Array(200)
  .fill('')
  .map((_, index) => ({
    key: `${index}`,
    departmentName: `Kevin Sandra ${index}`,
    departmentCode: 22000,
    updateTime: `${index} Park Road, London`,
    modifyPerson: `kevin.sandra_${index}@example.com`,
  }));

function TradeOrder() {
  const myRef  = useRef(null);

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
    <div ref={myRef}>
      {/* TODO: 加一个搜索框 */}
      <div className="header" style={{marginBottom:"15px"}}>
      <SelectDemo />
      </div>
      
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

export default TradeOrder;
