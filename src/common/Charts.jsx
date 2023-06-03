import { Statistic } from '@arco-design/web-react';
import { IconArrowRise, IconArrowFall } from '@arco-design/web-react/icon';

const Charts = () => {

  return (
    <div>
    <Statistic
      title='New Users'
      value={192393}
      suffix={<IconArrowRise style={{ color: '#ee4d38' }} />}
      style={{ marginRight: 60, marginBottom: 20 }}
    />
    <Statistic
      title='Active Users'
      value={934230}
      suffix={<IconArrowFall style={{ color: '#0fbf60' }} />}
      style={{ marginRight: 60, marginBottom: 20 }}
    />
    <Statistic
      title='User Growth Rate'
      value={50.32}
      precision={2}
      prefix={<IconArrowRise style={{ color: '#ee4d38' }} />}
      suffix='%'
      styleValue={{ color: '#ee4d38' }}
      style={{ marginRight: 60, marginBottom: 20 }}
    />
  </div>
  );
};

export default Charts;
