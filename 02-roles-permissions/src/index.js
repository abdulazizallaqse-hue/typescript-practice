//Record - Map each role to its allowed permissions
const rolePermissions = {
    admin: [
        "users:create",
        "users:read",
        "users:update",
        "users:delete",
        "reports:read"
    ],
    manager: [
        "users:read",
        "users:update",
        "reports:read"
    ],
    employee: [
        "users:read"
    ],
    guest: []
};
//function with Check whether a role has a specific permission
function hasPermission(role, permission) {
    const permissions = rolePermissions[role];
    return permissions.includes(permission);
}
//Usage examples
console.log(hasPermission("admin", "users:delete"));
console.log(hasPermission("employee", "users:delete"));
console.log(hasPermission("manager", "reports:read"));
export {};
//# sourceMappingURL=index.js.map