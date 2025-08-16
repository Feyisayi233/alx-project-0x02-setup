// Add your TypeScript interfaces here

export interface CardProps {
  title: string;
  content: string;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
