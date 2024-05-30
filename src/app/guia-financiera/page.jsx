import { getSession } from '@auth0/nextjs-auth0';

export default async function GuiaFinanciera() {
  
  const user = await getSession();
  console.log(user);
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="mt-8 p-4 border border-gray-300 rounded-lg shadow-lg w-full max-w-6xl h-[90vh]">
        <p className="mb-4 text-lg text-center">Ver guía financiera aquí:</p>
        <div className="border-2 border-gray-400 rounded-lg overflow-hidden w-full h-full flex justify-center items-center">
          <embed
            src="/GUÍA_FINANCIERA.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            className="w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}
