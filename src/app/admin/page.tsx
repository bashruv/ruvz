import { Header } from "@/components/header";
import { getAll } from "@/lib/kv";

export default async function DashboardPage() {
  const data = await getAll();

  return (
    <main>
      <Header pageName="Dashboard" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Path</th>
              <th>Dest</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((value) => (
              <tr key={value[0]}>
                <td>{value[0]}</td>
                <td>{value[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
