# Portfólio — Albano Nongava Lopes Bartolomeu

Site estático feito só com **HTML, CSS e JavaScript** (sem React, Vite, Node ou build).

## Como abrir

Basta abrir o `index.html` no browser (duplo clique). Não é preciso instalar nada.

## Estrutura

```
index.html      → todo o conteúdo da página
css/styles.css  → estilos
js/main.js      → menu mobile e formulário de contacto
images/         → profile.jpg
```

## Onde editar

- Textos, projetos, cursos e competências: directamente em `index.html`.
- LinkedIn: procure `<a href="#">` na secção de contacto e ponha o seu link.
- Cores: variáveis `--accent`, `--accent-2`, etc. no topo de `css/styles.css`.

## Formulário de contacto

Como o site não tem servidor, o botão "Enviar mensagem" abre o programa de email do
visitante com a mensagem preenchida. Para receber mensagens directamente, pode ligar
o formulário a um serviço como Formspree ou Web3Forms.

## Publicação

Funciona em qualquer alojamento estático: GitHub Pages, Netlify, Vercel, ou qualquer
hospedagem tradicional (basta enviar a pasta).
