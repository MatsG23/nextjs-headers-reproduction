import { headers } from "next/headers";


export default function Home() {
  const headerList = headers();
  console.log("Headers available in page file: ", headerList);

  return null
}
