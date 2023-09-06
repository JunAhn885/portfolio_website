import './globals.css'




export const metadata = {
  title: 'Work',
  description: 'Work page with previous projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/icons/initial.svg'/>
      </head>
      <body>{children}</body>
    </html>
  )
}
