export type UserRoles = 'member' | 'district-pastor' | 'group-pastor';

export type AssertionCheck = {
  user: string;
  relation: string;
  object: string;
};

export type CreateUserDto = {
  name: string;
  role: UserRoles;
  districtId: string;
};

export type CreateDistrictDto = {
  name: string;
  groupId: string;
};

export type CreateGroupDto = {
  name: string;
};
