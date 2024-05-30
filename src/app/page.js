import { getSession } from '@auth0/nextjs-auth0';

import Image from "next/image";

export default async function Home() {
  const user = await getSession();
  console.log(user);
  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-gray-50">
      <div className="p-8 border border-gray-300 rounded-lg shadow-lg w-full max-w-4xl text-center bg-white">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Bienvenidos a MoneyMingle</h1>
        <div className="flex justify-center">
          <Image
            src="/LogoMoneyMingle.png" // Reemplaza esto con la ruta de tu imagen
            alt="Bienvenidos a MoneyMingle"
            width={900} // Ajusta el tamaño según tus necesidades
            height={600} // Ajusta el tamaño según tus necesidades
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
