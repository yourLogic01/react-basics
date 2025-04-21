type User = {
  username: string;
  email: string;
  password: string;
  age: number;
};

const UserCard = ({ user }: { user: User }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "12px", marginTop: "10px" }}>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
    </div>
  );
};

export default UserCard;
