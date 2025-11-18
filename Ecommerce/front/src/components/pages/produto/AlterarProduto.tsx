import { useEffect, useState } from "react";
import Produto from "../../../models/Produto";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function AlterarProduto() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [preco, setPreco] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    buscarProdutoAPI();
  }, []);

  async function buscarProdutoAPI() {
    try {
      const resposta = await axios.get<Produto>(
        `http://localhost:5190/api/produto/buscar/${id}`
      );
      setNome(resposta.data.nome);
      setQuantidade(resposta.data.quantidade);
      setPreco(resposta.data.preco);
    } catch (error) {
      console.log("Erro na requisição: " + error);
    }
  }

  function submeterForm(e: any) {
    e.preventDefault();
    enviarProdutoAPI();
  }

  async function enviarProdutoAPI() {
    try {
      const produto: Produto = { nome, quantidade, preco };
      const resposta = await axios.patch(
        `http://localhost:5190/api/produto/alterar/${id}`,
        produto
      );
      navigate("/");
    } catch (error) {
      console.log("Erro na requisição: " + error);
    }
  }

  return (
    <div>
      <h1>Alterar Produto</h1>
      <form onSubmit={submeterForm}>
        <div>
          <label>Nome:</label>
          <input
            value={nome}
            type="text"
            onChange={(e: any) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Quantidade:</label>
          <input
            value={quantidade}
            type="text"
            onChange={(e: any) => setQuantidade(e.target.value)}
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            value={preco}
            type="text"
            onChange={(e: any) => setPreco(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default AlterarProduto;
