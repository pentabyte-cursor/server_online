// ===============================
// Sistema de Marcação de Exames - Prefeitura de Maquiné
// Backend: Node.js + Express + SQLite
// ===============================

const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./database/database"); // conexão com o banco (se já estiver configurado)
const examesRoutes = require("./routes/examesRoutes"); // rotas da API

// Inicializa o servidor
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas principais da API
app.use("/api/exames", examesRoutes);

// Endpoint para testar se o servidor está online
app.get("/api", (req, res) => {
  res.json({ status: "Servidor de marcação de exames ativo 🚑" });
});

// Servir o front-end (index.html, se existir)
app.use(express.static(path.join(__dirname)));

// Porta dinâmica para o Render (ou 3000 localmente)
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
