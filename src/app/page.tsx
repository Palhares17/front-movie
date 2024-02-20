import { Header } from "@/components/header";
import { Movies } from "@/components/movies";

export default async function Home() {
  return (
    <>
      <Header />
      <Movies />
    </>
  );
}
