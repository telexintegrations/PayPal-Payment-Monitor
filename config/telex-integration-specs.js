const integrationSpecSettings = {
  data: {
    date: {
      created_at: '2025-02-19',
      updated_at: '2025-02-19',
    },
    descriptions: {
      app_name: 'Paypal-Payments-Notification',
      app_description:
        'An integration that polls the PayPal API for new transactions and posts payment alerts to a Telex channel.',
      app_logo:
        'https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png',
      app_url: 'https://paypal-payment-monitor.onrender.com',
      background_color: '#ffffff',
    },
    is_active: true,
    integration_category: 'Finance & Payments',
    integration_type: 'interval',
    key_features: [
      'Periodically polls PayPal for new transactions',
      'Formats transaction details into alert messages',
      'Posts payment notifications to a designated Telex channel',
      'Automatically handles access token refresh and error reporting',
      'Configurable polling intervals and channel settings.',
    ],
    author: 'Domfa Johnson',
    settings: [
      {
        label: 'paypalClientId',
        type: 'text',
        required: true,
        default:
          'AVt-1HO-kR5fqnDJwUf8r-fCBJ6_89hRy4-z-oWkVJh0mGXXPUl8s3-ENTPO8-z0YkZrh3SbHKYba6Oj',
      },
      {
        label: 'paypalSecret',
        type: 'text',
        required: true,
        default:
          'EKRGN6izTFBcCPTPWWZABIlRcmKsaDcPgLE91Z7ZyMTrp0ZsKXTklAzRJaHW36raA3dp_inEKxglnDZb',
      },
      {
        label: 'interval',
        type: 'text',
        required: true,
        default: '*/15 * * * *',
      },
    ],
    target_url: '',
    tick_url: 'https://paypal-payment-monitor.onrender.com/tick',
  },
};

module.exports = integrationSpecSettings;
