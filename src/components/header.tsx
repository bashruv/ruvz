import Link from "next/link";

import { signoutAction } from "@/utils/login";

interface HeaderProps {
  pageName: string;
  disableAddBtn?: boolean;
}

export function Header({ pageName, disableAddBtn }: HeaderProps) {
  return (
    <header className="border-b">
      <div className="navbar mx-auto max-w-screen-sm">
        <div className="flex-1">
          <Link className="btn btn-ghost" href="/admin">
            {pageName}
          </Link>
        </div>
        <div className="flex flex-none gap-2">
          {!disableAddBtn && (
            <Link className="btn" href="/admin/create">
              <svg
                width={24}
                height={24}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M810.005333 554.005333l-256 0 0 256-84.010667 0 0-256-256 0 0-84.010667 256 0 0-256 84.010667 0 0 256 256 0 0 84.010667z"
                  fill="white"
                />
              </svg>
              Add
            </Link>
          )}
          <form action={signoutAction}>
            <button className="btn btn-primary" type="submit">
              Logout
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
