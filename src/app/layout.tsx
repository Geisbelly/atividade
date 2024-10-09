import "./globals.css";
import Link from 'next/link';


export function Navegador() {
  return (
    <aside className='flex justify-between items-center p-4 bg-primary text-white border-b-2 border-tercedary' >
      <div>
        <h1 className='text-2xl font-bold'>Fullstack Blog</h1>
      </div>
      <nav className='flex space-x-6'>
        <Link href="" className='hover:text-tercedary'>Home</Link>
        <Link href="" className='hover:text-tercedary'>Sobre</Link>
        <Link href="" className='hover:text-tercedary'>Admin</Link>
        <Link href="" className='hover:text-tercedary'>Posts</Link>
        <Link href="" className='hover:text-tercedary'>Sair</Link>
      </nav>
    </aside>
  );
};


export function RodaPe() {
    return (
        
      <footer className='flex justify-between border-t-2 border-tercedary items-center p-4 bg-primary text-white '>
        
        <div>
          <h2 className='text-lg font-semibold'>Fullstack Blog</h2>
          <p>©2024</p>
        </div>
        <div>
          <h2 className='text-lg font-semibold'>Sobre</h2>
          <p>Sobre o blog</p>
        </div>
      </footer>
    );
  };
  


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-fundo">
        <div className="flex flex-col min-h-screen">
          <Navegador />
          <main className="flex-grow">
            {children}
          </main>
          <RodaPe />
        </div>
      </body>
    </html>
  );
}
