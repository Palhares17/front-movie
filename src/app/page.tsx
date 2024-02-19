import { Header } from "@/components/header"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-16 py-16">
        <h1 className="text-3xl font-bold">Todos os filmes </h1>

        <ul className="grid grid-cols-3">
          <li>
            <div>
              <Image
                src="https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/177685234/poster-os-vingadores-ultimato-e-e845a7aa.jpg"
                alt="Os Vingadores: Ultimato"
                width={200}
                height={200}
                className="mt-6 border- rounded-xl"
              />
              <p className="font-bold text-base mt-3">Vingadores</p>
            </div>
          </li>

          <li>
            <div>
              <Image
                src="https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/177685234/poster-os-vingadores-ultimato-e-e845a7aa.jpg"
                alt="Os Vingadores: Ultimato"
                width={200}
                height={200}
                className="mt-6 border- rounded-xl"
              />
              <p className="font-bold text-base mt-3">Vingadores</p>
            </div>
          </li>

          <li>
            <div>
              <Image
                src="https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/177685234/poster-os-vingadores-ultimato-e-e845a7aa.jpg"
                alt="Os Vingadores: Ultimato"
                width={200}
                height={200}
                className="mt-6 border- rounded-xl"
              />
              <p className="font-bold text-base mt-3">Vingadores</p>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`https://...`)
  const data = await response.json()

  return { props: { data } }
}