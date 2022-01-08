module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aeee7d97e297dd9c92004eb402063abe'),
  },
});
