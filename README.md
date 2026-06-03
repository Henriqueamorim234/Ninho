# ⚛️ React Hooks Training Site

Site desenvolvido para praticar **React**, **Tailwind CSS** e **React Router**, com foco especial nos **React Hooks**.

---

## 🎯 Objetivo

Aprender na prática os principais conceitos de:

- **React Hooks** — `useState`, `useEffect`, `useContext`, `useRef`, `useMemo`, `useCallback`, `useReducer` e hooks customizados
- **React Router v6** — rotas, rotas aninhadas, navegação programática, parâmetros de rota
- **Tailwind CSS** — utilitários, responsividade, tema customizado

A proposta é errar, revisar e corrigir — o aprendizado acontece no processo, não na entrega pronta.

---

## 🛠️ Tecnologias

| Tecnologia   | Versão | Uso                          |
| ------------ | ------ | ---------------------------- |
| React        | ^18    | UI e gerenciamento de estado |
| React Router | ^6     | Navegação entre páginas      |
| Tailwind CSS | ^3     | Estilização utilitária       |
| Vite         | ^5     | Bundler e dev server         |

---

## 🎨 Paleta de Cores

O projeto usa variáveis CSS customizadas integradas ao Tailwind:

```css
/* Fundos */
--color-background-main: #dde9fb;
--color-background-card: #99c4f4;

/* Marca */
--color-primary: #4b9fe5;
--color-primary-hover: #3779af;

/* Estruturas */
--color-sidebar-background: #25557d;
--color-header-background: #14344e;
--color-footer-background: #051523;

/* Textos */
--color-text-primary: #14344e;
--color-text-secondary: #25557d;
--color-text-on-dark: #dde9fb;

/* Botões */
--color-button-primary: #4b9fe5;
--color-button-primary-hover: #3779af;

/* Bordas */
--color-border-light: #99c4f4;
--color-border-dark: #25557d;
```

---

## 📁 Estrutura de Pastas

```
src/
├── components/        # Componentes reutilizáveis (Header, Sidebar, Footer...)
├── pages/             # Páginas do site (uma por rota)
├── hooks/             # Hooks customizados criados durante o treinamento
├── context/           # Contexts da aplicação
├── routes/            # Configuração das rotas com React Router
└── main.jsx           # Ponto de entrada
```

---

## 🚀 Como Rodar

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

---

## 📚 Roteiro de Hooks

O site cobre os hooks na seguinte ordem de complexidade:

1. `useState` — estado simples, formulários
2. `useEffect` — efeitos colaterais, fetch de dados
3. `useRef` — referência ao DOM, valores persistentes
4. `useContext` — consumo de contexto global
5. `useMemo` — memoização de valores calculados
6. `useCallback` — memoização de funções
7. `useReducer` — estado complexo com reducer
8. **Hooks customizados** — compondo os anteriores

---

## 📝 Regras do Projeto

- O mentor **aponta o erro**, você **descobre e corrige**
- Código entregue pronto só quando explicitamente pedido
- Cada página do site representa um conceito diferente
- Commits frequentes com mensagens descritivas

---

## 📄 Licença

Projeto de uso educacional.
