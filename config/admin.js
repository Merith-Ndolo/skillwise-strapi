module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9d28366bbcad162e61a67e72b09f25bb'),
  },
});
