export type UserRoles = 'member' | 'district-pastor' | 'group-pastor';

export type CreateUserDto = {
  name: string;
  role: UserRoles;
};
