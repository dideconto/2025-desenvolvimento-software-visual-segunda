import React from "react";
import ListarProdutos from "./components/pages/produto/ListarProduto";
import CadastrarProduto from "./components/pages/produto/CadastrarProduto";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Lista de Produtos</Link>
            </li>
            <li>
              <Link to="/produto/cadastrar">Cadastro de Produto</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ListarProdutos />} />
          <Route
            path="/produto/cadastrar"
            element={<CadastrarProduto />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
