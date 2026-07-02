// app/materiais/page.tsx
"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { type Database } from "@interfaces/supabase";
import { Edit, Trash, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Material {
  id: number;
  nome: string;
  quantidade: number;
  created_at: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default function MateriaisPage() {
  const [materiais, setMateriais] = useState<Material[]>([]);
  const [novoNome, setNovoNome] = useState("");
  const [novaQuantidade, setNovaQuantidade] = useState<number>(0);

  // Estado para modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Material | null>(null);
  const [editNome, setEditNome] = useState("");
  const [editQuantidade, setEditQuantidade] = useState<number>(0);

  useEffect(() => {
    const fetchMateriais = async () => {
      const { data, error } = await supabase.from("materiais").select("*");
      if (error) {
        console.error(error);
      } else {
        setMateriais(data as Material[]);
      }
    };
    fetchMateriais();
  }, []);

  const adicionarMaterial = async () => {
    if (!novoNome || novaQuantidade <= 0) return;

    const { data, error } = await supabase
      .from("materiais")
      .insert([{ nome: novoNome, quantidade: novaQuantidade }])
      .select();

    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      setMateriais([...materiais, ...(data as Material[])]);
    }
    setNovoNome("");
    setNovaQuantidade(0);
  };

  const removerMaterial = async (id: number) => {
    const { error } = await supabase.from("materiais").delete().eq("id", id);
    if (error) {
      console.error(error);
      return;
    }
    setMateriais(materiais.filter((m) => m.id !== id));
  };

  const abrirModalEdicao = (material: Material) => {
    setEditItem(material);
    setEditNome(material.nome);
    setEditQuantidade(material.quantidade);
    setIsModalOpen(true);
  };

  const salvarEdicao = async () => {
    if (!editItem) return;

    const { data, error } = await supabase
      .from("materiais")
      .update({ nome: editNome, quantidade: editQuantidade })
      .eq("id", editItem.id)
      .select();

    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      setMateriais(
        materiais.map((m) =>
          m.id === editItem.id ? (data[0] as Material) : m,
        ),
      );
    }
    setIsModalOpen(false);
    setEditItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <header className="flex items-center gap-4 mb-6">
          <Link
            href="/"
            className="flex items-center bg-orange-600 text-white px-4 py-1 rounded hover:bg-orange-700 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Link>
          <h1 className="text-2xl font-bold text-orange-600">
            Gerenciamento de Materiais
          </h1>
        </header>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Nome do material"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <input
            type="number"
            placeholder="Quantidade"
            value={novaQuantidade}
            onChange={(e) => setNovaQuantidade(Number(e.target.value))}
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <button
            onClick={adicionarMaterial}
            className="bg-orange-600 text-white px-4 py-1 rounded hover:bg-orange-700 transition"
          >
            Adicionar
          </button>
        </div>

        <table className="rounded w-full border-collapse border border-gray-300 bg-white shadow-md">
          <thead>
            <tr className="bg-orange-600 text-white">
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Quantidade</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {materiais?.map((material) => (
              <tr
                key={material.id}
                className="hover:bg-gray-100 border border-gray-600"
              >
                <td className="px-1">{material.nome}</td>

                {/* Apenas o número na coluna de quantidade */}
                <td className="px-1">{material.quantidade}</td>

                {/* Todos os botões juntos na coluna de ações */}
                <td className="p-1 flex justify-end gap-3 items-center m-auto">
                  {/*<button
                    onClick={() => alterarQuantidade(material.id, -1)}
                    className="w-4 h-4 cursor-pointer text-orange-600 hover:text-orange-800 flex items-center"
                  >
                    <Minus className="" />
                  </button>
                  <button
                    onClick={() => alterarQuantidade(material.id, +1)}
                    className="w-4 h-4 cursor-pointer text-orange-600 hover:text-orange-800 flex items-center"
                  >
                    <Plus className="" />
                  </button>*/}
                  <button
                    onClick={() => abrirModalEdicao(material)}
                    className="w-4 h-4 cursor-pointer text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <Edit className="" />
                  </button>
                  <button
                    onClick={() => removerMaterial(material.id)}
                    className="w-4 h-4 cursor-pointer text-red-600 hover:text-red-800 flex items-center gap-1"
                  >
                    <Trash className="" />
                  </button>
                </td>
              </tr>
            ))}
            {materiais?.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center py-4 text-gray-500">
                  Nenhum material cadastrado
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Modal de edição */}
        {isModalOpen && (
          <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center">
            <div className="bg-white rounded shadow-lg p-6 w-96">
              <h2 className="text-xl font-bold mb-4">Editar Material</h2>
              <input
                type="text"
                value={editNome}
                onChange={(e) => setEditNome(e.target.value)}
                className="border rounded px-2 py-1 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <input
                type="number"
                value={editQuantidade}
                onChange={(e) => setEditQuantidade(Number(e.target.value))}
                className="border rounded px-2 py-1 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-1 rounded border cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  onClick={salvarEdicao}
                  className="bg-orange-600 text-white px-4 py-1 rounded hover:bg-orange-700 transition cursor-pointer"
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
