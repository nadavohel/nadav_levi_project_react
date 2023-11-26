export const RoleTypes = {
    none: 0,
    user: 1,
    business: 2,
    admin: 3,
};

export const checkPermissions = (permissions, userRoleType) => {
    return permissions.includes(userRoleType);
}

export const pages = [
    { route: '/', title: 'Welcome' },
    { route: '/moments', title: 'Moments' },
    { route: '/about', title: 'About' },
    { route: '/login', title: 'Login', permissions: [RoleTypes.none] },
    { route: '/signup', title: 'Signup', permissions: [RoleTypes.none] },
    { route: '/favorite', title: 'Favorite', permissions: [RoleTypes.user, RoleTypes.business, RoleTypes.admin] },
    { route: '/my-moments', title: 'My Moments', permissions: [RoleTypes.business, RoleTypes.admin] },
    { route: '/admin', title: 'User management', permissions: [RoleTypes.admin] },
];

export const settings = [
    { route: '/account', title: 'Account', permissions: [RoleTypes.user, RoleTypes.business, RoleTypes.admin] },
];