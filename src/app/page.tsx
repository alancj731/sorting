import DataBoard from '@/components/DataBoard'

export default function Home() {
  return (
    <main className=" flex flex-col min-h-screen items-center justify-center p-24">
      <div className="w-3/4 flex-col justify-center min-h-screen bg-slate-400 rounded-3xl text-center p-12 -m-10">
        <h1 className='text-2xl text-white font-bold mb-8'>See How Sorting Work...</h1>
        <DataBoard />
      </div>
    </main>
  );
}
