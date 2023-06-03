import { useState } from 'react';
import { Table, Space, Button, Input, Select, Message } from '@arco-design/web-react';
import { IconSearch } from '@arco-design/web-react/icon';
import PreOrder from '../components/PreOrder';
import RandomUpdateDate  from '../utils/RandomUpdateDate';

const columns = [
  {
    title: '终端编号',
    dataIndex: 'deptName',
    sorter: (a, b) => a.deptName.length - b.deptName.length,
  },
  {
    title: '订单编号',
    dataIndex: 'orderNo',
    sorter: (a, b) => a.orderNo - b.orderNo,
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
  },
  {
    title: '交易单号',
    dataIndex: 'tradeNo',
    sorter: (a, b) => a.tradeNo - b.tradeNo,
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
    onFilter: (value, row) => row.tradeNo.indexOf(value) > -1,
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
    dataIndex: ' ',
    // sorter: (a, b) => a.email.length - b.email.length,
    render: (_, record) => (
      // <Space>
      //   <Button
      //     // onClick={() => removeRow(record.key)}
      //     type='text'
      //     status='default'
      //     style={{ marginRight: 8 ,}}
      //   >预览</Button>
      //   <Button
      //     // onClick={() => removeRow(record.key)}
      //     type='primary'
      //     status='danger'
      //   >
      //     退款
      //   </Button>
      // </Space>
      <div>
        <PreOrder record={record} />
      </div>

    )
  },
];

 
const allData = Array(200)
  .fill('')
  .map((_, index) => ({
    key: `${index}`,
    deptName: `kaiven ${index}`,
    orderNo: `${Math.floor(Math.random() * 1000000) + 1}`,
    tradeNo: `${Date.now()+Math.floor(Math.random() * 10000)}`,
    payType: `${Math.floor(Math.random() * 100) + 1}`,
    tradeType: `${index % 2 === 0 ? '退款' : '消费'}`,
    commodityPrice: `${Math.floor(Math.random() * 100) + 1}`,
    payPrice: `${Math.floor(Math.random() * 100) + 1}`,
    commodityName: `可乐${Math.floor(Math.random() * 100) + 1}`,
    orderStatus: `${Math.floor(Math.random() * 100) + 1}`,
    // createTime: `${(Math.floor(Math.random() * (new Date().getFullYear() - 2019 + 1)) + 2019)+'-'+(Math.floor(Math.random() * 12) + 1)+'-'+(Math.floor(Math.random() * 30) + 1)+'-'+(Math.floor(Math.random() * 24))+':'+Math.floor(Math.random() * 60)+':'+Math.floor(Math.random() * 60)}`,
    createTime: `${RandomUpdateDate(new Date(2018, 0, 1), new Date())}`,
  }));

/**
 * 
 * @returns 交易订单
 */
function TradeOrder() {

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

  const Option = Select.Option;
  const Option2 = Select.Option;
  const options = ['现金', '支付宝', '微信', 'POS通', '闪付', 'POS通C扫码', '银联二维码', '会员余额支付'];
  const options2 = ['初始化', '已支付', '出货成功', '出货失败', '订单超时', '退款初始化', '退款进行中', '退款成功', '退款失败', '订单处理中', '订单完成', '订单取消'];
  return (
    <div>
      <Space size='large'>

        <center style={{ marginRight: -20, marginBottom: 10 }} >搜索：</center><Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入部门名称' />
        <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入订单号' />
        <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入交易号' />
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
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
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
          {options2.map((option, index) => (
            <Option2 key={option} value={option}>
              {option}
            </Option2>
          ))}
        </Select>
        <Button type='primary' style={{ marginBottom: 10 }} icon={<IconSearch />}>搜索</Button>
      </Space>

      <Table
        loading={loading}
        columns={columns}
        data={data}
        scroll={{ x: true, y: true }}
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

export default TradeOrder;
