import { useState } from "react";
import { useFetchEmployees } from "../api/useFetchEmployees";
import { useCreateEmployee } from "../api/useCreateEmployee";

import { useDeleteEmployee } from "../api/useDeleteEmployee";

const EmployeesPage = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const { employees, employeesIsLoading, employeesError, fetchEmployees } = useFetchEmployees();
  const { createEmployeeIsLoading, createEmployeeError, createEmployee } = useCreateEmployee();
  const { deleteEmployeeIsLoading, deleteEmployeeError, deleteEmployee } = useDeleteEmployee();

  const handleCreateEmployee = async () => {
    await createEmployee({ name: inputName, email: inputEmail });
    await fetchEmployees();
    setInputName("");
    setInputEmail("");
  };

  const handleDeleteEmployee = async (employeeId: string) => {
    await deleteEmployee(employeeId);
    await fetchEmployees();
  };

  return (
    <div>
      <h1>Employees Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>
                  <button disabled={deleteEmployeeIsLoading} onClick={() => handleDeleteEmployee(employee.id)}>
                    Delete
                  </button>
                </td>
                {deleteEmployeeError && (
                  <tr>
                    <td colSpan={3}>
                      <p style={{ color: "red" }}>{deleteEmployeeError}</p>
                    </td>
                  </tr>
                )}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <label htmlFor="name">Name:</label>
              <input onChange={(e) => setInputName(e.target.value)} type="text" id="name" style={{ width: "100%", boxSizing: "border-box" }} value={inputName} />
              <label htmlFor="email">Email:</label>
              <input onChange={(e) => setInputEmail(e.target.value)} type="email" id="email" style={{ width: "100%", boxSizing: "border-box" }} value={inputEmail} />
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <button disabled={createEmployeeIsLoading} onClick={() => handleCreateEmployee()}>
                Create Employees
              </button>
            </td>
          </tr>
          {createEmployeeError && (
            <tr>
              <td colSpan={3}>
                <p style={{ color: "red" }}>{createEmployeeError}</p>
              </td>
            </tr>
          )}
        </tfoot>
      </table>

      <button disabled={employeesIsLoading} onClick={fetchEmployees}>
        Fetch
      </button>
      {employeesIsLoading && <p>Loading...</p>}
      {employeesError && <p style={{ color: "red" }}>{employeesError}</p>}
      {/* {employeesIsLoading ? <p>Loading...</p> : null} */}
    </div>
  );
};

export default EmployeesPage;
