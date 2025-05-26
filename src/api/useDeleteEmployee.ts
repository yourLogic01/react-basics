import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useDeleteEmployee = () => {
  const [deleteEmployeeIsLoading, setDeleteEmployeeIsLoading] = useState(false);
  const [deleteEmployeeError, setDeleteEmployeeError] = useState("");

  const deleteEmployee = async (employeeId: string) => {
    try {
      setDeleteEmployeeIsLoading(true);
      await axiosInstance.delete(`/employees/${employeeId}`);
    } catch (error) {
      setDeleteEmployeeError((error as TypeError).message);
      alert("Gagal menghapus employee");
    } finally {
      setDeleteEmployeeIsLoading(false);
    }
  };

  return { deleteEmployeeIsLoading, deleteEmployeeError, deleteEmployee };
};
