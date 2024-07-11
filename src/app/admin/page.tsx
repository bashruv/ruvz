import { getAll } from "@/lib/kv";
import { Header } from "@/components/header";
import { TableBody } from "@/components/table-body";

export default async function DashboardPage() {
  const data = await getAll();

  return (
    <main>
      <Header pageName="Dashboard" />
      <div className="mx-auto max-w-screen-sm overflow-x-auto">
        <table className="table table-xs">
          {/* head */}
          <thead>
            <tr>
              <th>Path</th>
              <th>Dest</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value) => (
              <TableBody key={value[0]} {...value} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
