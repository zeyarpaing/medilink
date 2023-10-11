declare global {
  interface DefaultSession {
    user: {
      id: string;
      name: string;
      image: string;
      email: string;
      role: 'ADMIN' | 'USER' | 'DOCTOR';
    };
  }
}
