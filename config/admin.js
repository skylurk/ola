module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2d38ac780ce79fd472e250f3a129de16'),
  },
});
