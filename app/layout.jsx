import Navbar from '@components/Navbar'
import '@styles/global.css'

export const metadata = {
  title: 'Promptme',
  description: 'Discover $ Share AI Prompts',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
     
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
      <Navbar />
        {children}
      
      </main>
      </body>
    </html>
  )
}
