// const PayConfigData = [
//   {
//     key: '1',
//     name: '支付宝',
//     paymentType: '2',
//     merchantNumber: '2088101126708402',
//     wechatSubMerchant: '2088101126708402',
//     applicationId: '2088101126708402',
//     encryptionType: 'RSA',
//     merchantSignatureKey: '2e3cdaf5aa051c16563c0b8916184d5d',
//     notificationCallback: 'r/pay/alipay/notify',
//     alipaySeller: '2088121360144859',
//     wechatCertificatePath: '/usr/local/tomcat_provider/webapps/machine-service-provider-0.0.1-SNAPSHOT/conf/apiclient_cert_1250856201.p12',
//   },
//   {
//     key: '2',
//     name: '微信',
//     paymentType: '1',
//     merchantNumber: '1250856201',
//     wechatSubMerchant: '1250856201',
//     applicationId: '1250856201',
//     encryptionType: 'MD5',
//     merchantSignatureKey: '2e3cdaf5aa051c16563c0b8916184d5d',
//     notificationCallback: 'r/pay/wechat/notify',
//     alipaySeller: '1250856201',
//     wechatCertificatePath: '/usr/local/tomcat_provider/webapps/machine-service-provider-0.0.1-SNAPSHOT/conf/apiclient_cert_1250856201.p12',
//   },
//   {
//     key: '3',
//     name: '银联',
//     paymentType: '3',
//     merchantNumber: '1250856201',
//     wechatSubMerchant: '1250856201',
//     applicationId: '1250856201',
//     encryptionType: 'MD5',
//     merchantSignatureKey: '2e3cdaf5aa051c16563c0b8916184d5d',
//     notificationCallback: 'r/pay/wechat/notify',
//     alipaySeller: '1250856201',
//     wechatCertificatePath: '/usr/local/tomcat_provider/webapps/machine-service-provider-0.0.1-SNAPSHOT/conf/apiclient_cert_1250856201.p12',
//   },
// ];

const PayConfigData = Array(200)
  .fill('')
  .map((_, index) => ({
    key: `${index}`,
    name: `微信301${index}`,
    paymentType: `${index}`,
    merchantNumber: `12719423${index}`,
    wechatSubMerchant: `1284797${index}`,
    applicationId: `wx3ef7713adf0a97${index}`,
    encryptionType: `NATIVE`,
    merchantSignatureKey: `2e3cdaf5aa051c16563c0b8916184d5d${index}`,
    notificationCallback: `http://180.166.211.210:8114/machine-pay-consumer/pay/wx/notify${index}`,
    webchatenCryptionpassword: `3112311${index}`,
    alipaySeller: `2088121360144${index}`,
    alipayKey: `2e3cdaf5aa051c16563c0b8916184d5d${index}`,
    wechatCertificatePath: `/usr/local/tomcat_provider/webapps/machine-service-provider-0.0.1-SNAPSHOT/conf/apiclient_cert_1250856${index}.p12`,
  }));

export default PayConfigData;