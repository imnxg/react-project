import { useState } from 'react';
import { Table, Button, Input,Message,Space,Modal,Form } from '@arco-design/web-react';
import { IconPlus, IconSearch } from '@arco-design/web-react/icon';
import PayConfigData from '../mock/PayConfigData.ts';
import AddPayConfig from '../components/AddPayConfig.jsx';
import EditPayconfig from '../components/EditPayconfig.jsx';

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: '支付类型',
    dataIndex: 'paymentType',
    sorter: (a, b) => a.paymentType - b.paymentType,
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
    onFilter: (value, row) => row.paymentType > value,
    sortDirections: ['ascend'],
    defaultSortOrder: 'ascend',
  },
  {
    title: '商户号',
    dataIndex: 'merchantNumber',
    sorter: (a, b) => a.merchantNumber - b.merchantNumber,
  },
  {
    title: '微信子商户',
    dataIndex: 'wechatSubMerchant',
    sorter: (a, b) => a.wechatSubMerchant - b.wechatSubMerchant,
  },
  {
    title: '应用ID',
    dataIndex: 'applicationId',
    sorter: (a, b) => a.applicationId - b.applicationId,
  },
  {
    title: '加密类型',
    dataIndex: 'encryptionType',
    sorter: (a, b) => a.encryptionType - b.encryptionType,
  },
  {
    title: '商户签名密钥',
    dataIndex: 'merchantSignatureKey',
    sorter: (a, b) => a.merchantSignatureKey - b.merchantSignatureKey,
  },
  {
    title: '通知回调',
    dataIndex: 'notificationCallback',
    sorter: (a, b) => a.notificationCallback - b.notificationCallback,
  },
  {
    title: '支付宝卖家',
    dataIndex: 'alipaySeller',
    sorter: (a, b) => a.alipaySeller - b.alipaySeller,
  },
  {
    title: '微信证书路径',
    dataIndex: 'wechatCertificatePath',
    sorter: (a, b) => a.wechatCertificatePath - b.wechatCertificatePath,
  },
  {
    title: '微信证书路径',
    dataIndex: 'wechatCertificatePath',
    sorter: (a, b) => a.wechatCertificatePath - b.wechatCertificatePath,
  },
  {
    title: '操作',
    dataIndex: 'operate',
    // sorter: (a, b) => a.email.length - b.email.length,
    render: (_, record) => (
      <div>
        <EditPayconfig record={record}/>
      </div>
    )
  },
];

// const AllData = Array(200)
//   .fill('')
//   .map((_, index) => ({
//     key: `${index}`,
//     name: `支付配置${index}`,
//     paymentType: `${index}`,
//     merchantNumber: `${index}`,
//     wechatSubMerchant: `${index}`,
//     applicationId: `${index}`,
//     encryptionType: `${index}`,
//     merchantSignatureKey: `${index}`,
//     notificationCallback: `${index}`,
//     alipaySeller: `${index}`,
//     wechatCertificatePath: `${index}`,
//   }));

const allData = PayConfigData;


function PayConfig() {
  
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
      <AddPayConfig />
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

export default PayConfig;
