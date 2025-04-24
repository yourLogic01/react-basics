import { useState } from "react";

type Employee = {
  id: number;
  name: string;
  email: string;
};

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employeesIsLoading, setEmployeesIsLoading] = useState(false);
  const fetchEmployees = async () => {
    try {
      setEmployeesIsLoading(true);
      const response = await fetch("http://localhost:2000/employees", {
        method: "GET",
      });

      const responseJson = (await response.json()) as Employee[]; // array of objects

      setEmployees(responseJson);
    } catch (error) {
      alert("Gagal mendapatkan data employee");
    } finally {
      setEmployeesIsLoading(false);
    }
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
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button disabled={employeesIsLoading} onClick={fetchEmployees}>
        Fetch
      </button>
      {employeesIsLoading && <p>Loading...</p>}
      {/* {employeesIsLoading ? <p>Loading...</p> : null} */}
    </div>
  );
};

export default EmployeesPage;
