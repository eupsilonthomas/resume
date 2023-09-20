import WordList from "./WordList";

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-[90vh]">
      <div className="">
        <WordList/>
        <div>{children}</div>
      </div>
    </main>
  )
}