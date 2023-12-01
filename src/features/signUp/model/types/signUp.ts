export interface PositionsData {
  success: boolean;
  positions: Position[];
}

export interface Position {
  id: number;
  name: string;
}

export interface UserData {
  username: string;
  email: string;
  phone: string;
  positionId: string;
  photo: string;
}

export interface TokenData {
  success: boolean;
  token: string;
}
