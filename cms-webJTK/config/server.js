module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('BASE_URL', `http://localhost:${env.int('PORT', 1337)}`),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'dba4ce323c2a2a421cb3c0a4bae21042'),
    },
  },
});