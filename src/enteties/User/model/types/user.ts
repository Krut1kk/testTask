export interface UsersData {
  success: boolean;
  total_pages: number;
  total_users: number;
  count: number;
  page: number;
  links: {
    next_url: string;
    prev_url: string;
  };
  users: User[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  positionId: number;
  registrationTimestamp: number;
  photo: string;
}
