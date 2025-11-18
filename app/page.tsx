export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Greetings />
    </main>
  );
}

function Greetings() {
  return (
    <section className="px-110 py-10 bg-neutral-50 w-screen h-screen flex flex-col">
      <h2 className="text-3xl mb-2 font-bold">Hey there. 👋</h2>
      <p className="text-xl">I&apos;m Nikita. I work in the Yandex Company.</p>
    </section>
  );
}
