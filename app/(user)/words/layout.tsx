import WordList from './WordList';


export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-wrap min-h-[79vh] overflow-hidden justify-between space-x-2 ">
      <div className="m-8">
        <WordList/>
      </div>
      <div className="">
        <div className="m-8">
          <div>{children}</div>
        </div>
      </div>
    </main>
  )
}