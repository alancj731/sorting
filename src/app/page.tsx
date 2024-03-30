import DataBoard from "@/components/DataBoard";

export default function Home() {
  return (
    <main className="bg-slate-300 flex flex-col h-screen w-screnn items-center justify-center pt-20">
      <div className="bground w-640 h-700 sm:w-380 sm:h-500 flex-col justify-center bg-slate-400 rounded-md text-center p-8">
        <h1 className="text-xl text-white font-bold mb-6">
          See How Sorting Works...
        </h1>
        <DataBoard />
      </div>
    </main>
  );
}
