import { signOut } from "@/lib/auth";
import Link from "next/link";

export async function Header() {
  return (
    <div className="navbar border-b">
      <div className="flex-1">
        <Link className="btn btn-ghost" href="/admin">
          Dashboard
        </Link>
      </div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="btn btn-primary" type="submit">
          Logout
        </button>
      </form>
    </div>
  );
}
