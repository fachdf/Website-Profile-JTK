module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env("DATABASE_URI"),
        ssl: {rejectUnauthorized: false}
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
