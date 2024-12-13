"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import login from "../actions/login";

export default function LoginPage() {
  const [formState, setFormState] = useState<{ success?: boolean; errors?: any }>({});
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const result = await login(formData);

    if (result.success) {
      router.push("/"); // Redirect to home page upon successful login
    } else {
      setFormState(result);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-screen-sm mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Log ind</h2>
        {formState.errors?.general && (
          <div className="text-red-500 mb-4">{formState.errors.general}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="identifier" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="identifier"
              name="identifier"
              className="p-2 border border-gray-300 rounded-lg"
            />
            {formState.errors?.identifier && (
              <span className="text-red-500">{formState.errors.identifier}</span>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Adgangskode
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2 border border-gray-300 rounded-lg"
            />
            {formState.errors?.password && (
              <span className="text-red-500">{formState.errors.password}</span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Log ind
          </button>
        </form>
      </div>
    </section>
  );
}
