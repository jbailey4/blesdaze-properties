import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import AdminRoute from 'ember-admin/routes/admin';

export default AdminRoute.extend(AuthenticatedRouteMixin, {});
