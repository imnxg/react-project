import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback
} from 'react';
import { Button, Table, Input, Select, Form, Space } from '@arco-design/web-react';
import { IconPlus, IconSearch } from '@arco-design/web-react/icon';
const FormItem = Form.Item;
const EditableContext = React.createContext({});

function EditableRow(props) {
  const { children, record, className, ...rest } = props;
  const refForm = useRef(null);

  const getForm = () => refForm.current;

  return (
    <EditableContext.Provider
      value={{
        getForm
      }}
    >
      <Form
        style={{
          display: 'table-row'
        }}
        children={children}
        ref={refForm}
        wrapper='tr'
        wrapperProps={rest}
        className={`${className} editable-row`}
      />
    </EditableContext.Provider>
  );
}

function EditableCell(props) {
  const { children, className, rowData, column, onHandleSave } = props;
  const ref = useRef(null);
  const refInput = useRef(null);
  const { getForm } = useContext(EditableContext);
  const [editing, setEditing] = useState(false);
  const handleClick = useCallback(
    e => {
      if (
        editing &&
        column.editable &&
        ref.current &&
        !ref.current.contains(e.target) &&
        !e.target.classList.contains('js-demo-select-option')
      ) {
        cellValueChangeHandler(rowData[column.dataIndex]);
      }
    },
    [editing, rowData, column]
  );
  useEffect(() => {
    editing && refInput.current && refInput.current.focus();
  }, [editing]);
  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [handleClick]);

  const cellValueChangeHandler = value => {
    if (column.dataIndex === 'salary') {
      const values = {
        [column.dataIndex]: value
      };
      onHandleSave && onHandleSave({ ...rowData, ...values });
      setTimeout(() => setEditing(!editing), 300);
    } else {
      const form = getForm();
      form.validate([column.dataIndex], (errors, values) => {
        if (!errors || !errors[column.dataIndex]) {
          setEditing(!editing);
          onHandleSave && onHandleSave({ ...rowData, ...values });
        }
      });
    }
  };

  if (editing) {
    return (
      <div ref={ref}>
        {column.dataIndex === 'salary' ? (
          <Select
            onChange={cellValueChangeHandler}
            defaultValue={rowData[column.dataIndex]}
            options={[2000, 5000, 10000, 20000]}
          />
        ) : (
          <FormItem
            style={{
              marginBottom: 0
            }}
            labelCol={{
              span: 0
            }}
            wrapperCol={{
              span: 24
            }}
            initialValue={rowData[column.dataIndex]}
            field={column.dataIndex}
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input ref={refInput} onPressEnter={cellValueChangeHandler} />
          </FormItem>
        )}
      </div>
    );
  }

  return (
    <div
      className={column.editable ? `editable-cell ${className}` : className}
      onClick={() => column.editable && setEditing(!editing)}
    >
      {children}
    </div>
  );
}
/**
 * 
 * @returns 角色管理
 */
function RoleManagement() {
  const [count, setCount] = useState(5);
  const [loading,setLoading] = useState(false);

  const allData = [
    {
      key: '1',
      roleName: '超级管理员',
      roleCode: 'admin',
      updateTime: '2020-12-12 16:12:12',
      updateUser: 'root'
    },
    {
      key: '2',
      roleName: '公司管理员',
      roleCode: 'admin',
      updateTime: '2020-12-12 16:12:12',
      updateUser: 'user'
    },
    {
      key: '3',
      roleName: '普通用户',
      roleCode: 'common',
      updateTime: '2023-05-19 16:12:12',
      updateUser: 'user'
    },
    {
      key: '4',
      roleName: '演示角色',
      roleCode: 'demo',
      updateTime: '2023-05-22 16:12:12',
      updateUser: 'user'
    },
    {
      key: '5',
      roleName: '1',
      roleCode: 'demo',
      updateTime: '2023-05-22 16:12:12',
      updateUser: 'user'
    },
    {
      key: '6',
      roleName: '1',
      roleCode: 'demo',
      updateTime: '2023-05-22 16:14:12',
      updateUser: 'user'
    },
    {
      key: '7',
      roleName: '1',
      roleCode: 'demo',
      updateTime: '2023-05-25 16:14:12',
      updateUser: 'user'
    },
    {
      key: '8',
      roleName: '111',
      roleCode: 'demo',
      updateTime: '2023-05-22 16:18:12',
      updateUser: 'user'
    },
    {
      key: '9',
      roleName: '1',
      roleCode: 'demo',
      updateTime: '2023-05-22 16:14:12',
      updateUser: 'user'
    },
    {
      key: '10',
      roleName: '1',
      roleCode: 'demo',
      updateTime: '2023-05-23 16:16:12',
      updateUser: 'user'
    },
    {
      key: '11',
      roleName: '1',
      roleCode: 'demo',
      updateTime: '2023-05-23 17:14:12',
      updateUser: 'user'
    },
    {
      key: '12',
      roleName: '1',
      roleCode: 'demo',
      updateTime: '2023-05-22 16:14:16',
      updateUser: 'user'
    },
    {
      key: '13',
      roleName: '1',
      roleCode: 'demo',
      updateTime: '2023-05-22 10:14:12',
      updateUser: 'user'
    },
    {
      key: '14',
      roleName: '1',
      roleCode: 'demo',
      updateTime: '2023-05-22 19:14:12',
      updateUser: 'user'
    },
    {
      key: '15',
      roleName: '公司管理员',
      roleCode: 'admin',
      updateTime: '2020-12-12 20:12:12',
      updateUser: 'user'
    }
  ];
  const [data, setData] = useState(allData);
  const columns = [
    {
      title: '角色名称',
      dataIndex: 'roleName',
      editable: true
    },
    {
      title: '角色代码',
      dataIndex: 'roleCode',
      editable: true
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime'
    },
    {
      title: '修改人',
      dataIndex: 'updateUser'
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            onClick={() => { removeRow(record.key); console.log(record) }}
            type='primary'
            status='default'
          >
            编辑
          </Button>
          <Button
            onClick={() => { removeRow(record.key); console.log(record) }}
            type='primary'
            status='danger'
          >
            删除
          </Button>
          <Button
            onClick={() => { removeRow(record.key); console.log(record) }}
            type='primary'
            status='default'
          >
            菜单权限
          </Button>
        </Space>
      )
    }
  ];
  const [pagination, setPagination] = useState({
    sizeCanChange: true,
    showTotal: true,
    total: data.length,
    pageSize: 10,
    current: 1,
    pageSizeChangeResetCurrent: true,
  });
  function onChangeTable(pagination) {
    const { current, pageSize } = pagination;
    setLoading(true);
    setTimeout(() => {
      setData(allData.slice((current - 1) * pageSize, current * pageSize));
      setPagination((pagination) => ({ ...pagination, current, pageSize }));
      setLoading(false);
    }, 1000);
  }
  function handleSave(row) {
    const newData = [...data];
    const index = newData.findIndex(item => row.key === item.key);
    newData.splice(index, 1, { ...newData[index], ...row });
    setData(newData);
  }

  function removeRow(key) {
    setData(data.filter(item => item.key !== key));
  }

  function addRow() {
    setCount(count + 1);
    setData(
      data.concat({
        key: `${count + 1}`,
        roleName: 'Tom',
        roleCode: 'Administator',
        updateTime: '2020-12-12 12:12:12',
        updateUser: 'root'
      })
    );
  }

  return (
    <>
      <Space size='large'>
        <center style={{ width: 60, marginRight: -20, marginBottom: 10 }}>搜索：</center>
        <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入角色名称' />
        <Input style={{ width: 130, marginRight: 0, marginBottom: 10 }} allowClear placeholder='输入角色代码' />
        <Button type='primary' style={{ marginBottom: 10 }} icon={<IconSearch />}>搜索</Button>
        <Button type='primary' style={{ marginBottom: 10 }} icon={<IconPlus />}
          onClick={addRow}
        >添加</Button>
      </Space>

      <Table
        loading={loading}
        data={data}
        pagination={pagination}
        onChange={onChangeTable}
        pagePosition='bl'
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell
          }
        }}
        columns={columns.map(column =>
          column.editable
            ? {
              ...column,
              onCell: () => ({
                onHandleSave: handleSave
              })
            }
            : column
        )}
        className='table-demo-editable-cell'
      />
    </>
  );
}

export default RoleManagement;
