import { Collapse } from '@arco-design/web-react';
const CollapseItem = Collapse.Item;

const Fengqing = () => {
  return (
    <Collapse accordion style={{ maxWidth: 1180 }}>
      <CollapseItem header='Beijing Toutiao Technology Co., Ltd.' name='1'>
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>
      <CollapseItem header='Beijing Toutiao Technology Co., Ltd.' name='2'>
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>
      <CollapseItem header='Beijing Toutiao Technology Co., Ltd.' name='3'>
        Beijing Toutiao Technology Co., Ltd.
      </CollapseItem>
    </Collapse>
  );
};

export default Fengqing;
