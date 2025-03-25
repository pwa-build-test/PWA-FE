import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Button className="bg-red-400">
          button
        </Button>
        <Button className="bg-amber-200">
          button
        </Button>
        <Button className="bg-blue-300">
          button
        </Button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center" />
    </div>
  );
}
