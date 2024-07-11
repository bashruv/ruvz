"use client";

import { cp } from "@/utils/cp";
import { removePath } from "@/lib/kv";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const initialState = {
  error: false,
  complete: false,
};

export function TableBody(value: string[]) {
  const router = useRouter();
  const params = useSearchParams();
  const [state, formAction] = useFormState(removePath, initialState);

  useEffect(() => {
    if (state.complete) {
      router.refresh();
    }
  }, [state.complete]);

  useEffect(() => {
    const isOK = params.get("create");

    if (isOK) {
      router.refresh();
    }
  }, [params]);

  return (
    <tr>
      <td>
        <button
          onClick={() => cp(`https://ruvz.sh/${value[0]}`)}
          className="text-left"
        >
          {value[0]}
        </button>
      </td>
      <td>
        <button onClick={() => cp(value[1])} className="text-left">
          {value[1]}
        </button>
      </td>
      <td>
        <form action={formAction}>
          <input type="hidden" value={value[0]} name="path" />
          <button
            type="submit"
            className="btn btn-primary btn-xs hover:btn-error hover:text-primary-content"
          >
            Delete
          </button>
        </form>
      </td>
    </tr>
  );
}
