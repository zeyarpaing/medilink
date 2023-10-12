export default async function Page() {
  return (
    <div className="mcontainer min-h-screen py-12">
      <div>
        <div className="h-[32rem] w-full">
          <div className="h-full w-full rounded-xl bg-gray-500 object-cover" />
        </div>
        <div className="[&>*]bg-gray-500 my-8 [&>*]:h-4 [&>*]:min-w-[5rem] [&>*]:bg-gray-500">
          <h1 className="mb-2 text-3xl font-black"> </h1>
          <p className="text-gray-600"> </p>
          <p className="mt-2 text-gray-700"> </p>
          <p className="mt-2 text-gray-700"> </p>
          <p className="mt-2 text-gray-700"> </p>
        </div>
      </div>
      <h2 className="mb-4 mt-6 text-2xl font-bold">Services Offered</h2>
    </div>
  );
}
