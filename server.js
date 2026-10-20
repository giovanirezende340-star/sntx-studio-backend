const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Rota de Teste para o Backend
app.get('/', (req, res) => {
    res.json({ status: 'SNTX Studio Backend a funcionar com sucesso!' });
});

// Rota para Geração de Arte via IA (Placeholder)
app.post('/api/generate', (req, res) => {
    const { prompt, style } = req.body;
    // Aqui integraras a API do Google Gemini
    res.json({ 
        success: true, 
        message: 'Conceito recebido com sucesso!',
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop' 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor SNTX a correr na porta ${PORT}`);
});
