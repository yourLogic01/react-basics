import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useCreateEmployee = () => {
  const [createEmployeeIsLoading, setCreateEmployeeIsLoading] = useState(false);
  const [createEmployeeError, setCreateEmployeeError] = useState("");

  const createEmployee = async (payload: { name: string; email: string }) => {
    try {
      setCreateEmployeeIsLoading(true);
      await axiosInstance.post("/employees", { name: payload.name, email: payload.email });
    } catch (error) {
      setCreateEmployeeError((error as TypeError).message);
      alert("Gagal membuat employee");
    } finally {
      setCreateEmployeeIsLoading(false);
    }
  };

  return { createEmployeeIsLoading, createEmployeeError, createEmployee };
};
