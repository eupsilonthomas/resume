import WordList from './WordList';


export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-[79vh]">
      <div>
        <WordList/>
      </div>  
      <div className="">
        <div>{children}</div>
      </div>
    </main>
  )
}