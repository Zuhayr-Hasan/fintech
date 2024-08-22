export interface LoginPayload {
  uid: string;
  email: string;
}

export interface AuthState {
  token: string | null;
  email: string | null;
  pin: string | null;
  uid: string | null;
  isAuthenticated: boolean;
}

export interface Fund {
  id: string;
  name: string;
  annualReturn: number;
}