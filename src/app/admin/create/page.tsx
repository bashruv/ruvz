"use client";

import { useFormState } from "react-dom";

import { createPath } from "@/lib/kv";
import { Header } from "@/components/header";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const initialState = {
  error: false,
  complete: false,
  message: "",
};

export default function CreatePage() {
  const router = useRouter();
  const [state, formAction] = useFormState(createPath, initialState);

  useEffect(() => {
    if (state.complete) {
      router.push("/admin");
    }
  }, [state.complete]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <main>
      <Header pageName="Create" disableAddBtn />
      <form action={formAction} className="flex flex-col gap-4 p-6">
        <label className="input input-bordered flex items-center gap-2">
          Path
          <input
            type="text"
            className="grow"
            placeholder="hey-yeah"
            name="path"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Dest
          <input
            type="text"
            className="grow"
            placeholder="https://hey-yeah.com/"
            name="dest"
          />
        </label>
        {state.error && <p className="text-error">{state.message}</p>}
        <button className="btn" type="submit">
          Add
        </button>
      </form>
    </main>
  );
}
