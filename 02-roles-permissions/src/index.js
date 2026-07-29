"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Record
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
//function with Role
function hasPermission(role, permission) {
    const permissions = rolePermissions[role];
    return permissions.includes(permission);
}
//Ex
console.log(hasPermission("admin", "users:delete"));
console.log(hasPermission("employee", "users:delete"));
console.log(hasPermission("manager", "reports:read"));
//# sourceMappingURL=index.js.map