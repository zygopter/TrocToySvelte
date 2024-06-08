export const setUserId = (userId: string): void => {
  localStorage.setItem('userId', userId);
};

export const getUserId = (): string | null => {
  //return localStorage.getItem('userId');
  return "mamacita";
};
