import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import UserCard from "../components/UserCard";

const registerFormSchema = z.object({
  username: z.string().min(3).max(10),
  email: z.string().email(),
  password: z.string().min(8).regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[0-9]/, "Password must contain at least one number"),
  age: z.coerce.number().min(18),
});

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

const RHFPage = () => {
  const [users, setUsers] = useState<RegisterFormSchema[]>([]);
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegisterUser = (values: RegisterFormSchema) => {
    setUsers((prev) => [...prev, values]);
    form.reset();
  };

  return (
    <div>
      <h1>React Hook Form</h1>

      <form onSubmit={form.handleSubmit(handleRegisterUser)} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label>
          Username:
          <input type="text" {...form.register("username")} />
        </label>
        <span style={{ color: "red" }}>{form.formState.errors.username?.message}</span>

        <label>
          Email:
          <input type="email" {...form.register("email")} />
        </label>
        <span style={{ color: "red" }}>{form.formState.errors.email?.message}</span>

        <label>
          Password:
          <input type="password" {...form.register("password")} />
        </label>
        <span style={{ color: "red" }}>{form.formState.errors.password?.message}</span>

        <label>
          Age:
          <input type="number" {...form.register("age")} min={0} />
        </label>
        <span style={{ color: "red" }}>{form.formState.errors.age?.message}</span>

        <button style={{ width: "fit-content" }}>Register user</button>
      </form>

      {/* display card users */}
      <div style={{ marginTop: "24px" }}>
        <h2>Registered Users</h2>
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default RHFPage;
