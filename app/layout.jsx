import React from 'react'
import Navbar from '@components/Navbar'
import '@styles/global.css'
import Provider from '@components/Provider'

export const metadata = {
  title: 'Promptme',
  description: 'Discover $ Share AI Prompts',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
     <Provider>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
      <Navbar />
        {children}
      </main>
      </Provider>
      </body>
    </html>
  )
}
