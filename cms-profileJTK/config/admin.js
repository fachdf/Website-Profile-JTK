module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eedd152ee3634e8801604af6f987d63c'),
  },
});
