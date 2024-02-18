"use client"; 
// Permite que não seja tudo renderizado no servidor, fazendo com que o dados que vem do browser possam ser renderizados posteriormente

import { useParams } from 'next/navigation'
import React from 'react'

export default function produto() {
  const params = useParams(); // Hook para pegar os parametros da URL

  return (
    <div>Datalhes do produto {params.id}</div>
  )
}
