import { useState } from "react";
import { axiosInstance } from "../lib/axios";

type EmployeeResponse = {
  id: string;
  name: string;
  email: string;
};

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
  const [employeesIsLoading, setEmployeesIsLoading] = useState(false);
  const [employeesError, setEmployeesError] = useState("");
  const fetchEmployees = async () => {
    try {
      setEmployeesIsLoading(true);
      //   const response = await fetch("http://localhost:2000/employees", {
      //     method: "GET",
      //   });

      //   const responseJson = (await response.json()) as EmployeeResponse[]; // array of objects
      const response = await axiosInstance.get<EmployeeResponse[]>("/employees");
      setEmployees(response.data);
    } catch (error) {
      setEmployeesError((error as TypeError).message);
      // setEmployeesError("Gagal mendapatkan data employee");
      alert("Gagal mendapatkan data employee");
    } finally {
      setEmployeesIsLoading(false);
    }
  };

  return { employees, employeesIsLoading, employeesError, fetchEmployees };
};
