import { useState } from "react";
import Produto from "../../../models/Produto";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CadastrarProduto() {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [preco, setPreco] = useState(0);
  const navigate = useNavigate();

  function submeterForm(e: any) {
    e.preventDefault();
    enviarProdutoAPI();
  }

  async function enviarProdutoAPI() {
    try {
      const produto: Produto = { nome, quantidade, preco };
      const resposta = await axios.post(
        "http://localhost:5190/api/produto/cadastrar",
        produto
      );
      navigate("/");
    } catch (error) {
      console.log("Erro na requisição: " + error);
    }
  }

  return (
    <div>
      <h1>Cadastrar Produto</h1>
      <form onSubmit={submeterForm}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            onChange={(e: any) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Quantidade:</label>
          <input
            type="text"
            onChange={(e: any) => setQuantidade(e.target.value)}
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            type="text"
            onChange={(e: any) => setPreco(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarProduto;
