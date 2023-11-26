import { headers } from "next/headers";


export default function RootLayout({ children }) {
  const headerList = headers();
  console.log("Headers available in root layout: ", headerList);

  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
