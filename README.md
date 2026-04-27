# Site Institucional - Advogado Dr. Rafael Monteiro

Este é um site one-page moderno para o advogado Dr. Rafael Monteiro, desenvolvido em HTML, CSS e JavaScript puros. O projeto é otimizado para deploy direto na Vercel via GitHub.

## Estrutura do Projeto

```
/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS com BEM
├── js/
│   └── script.js       # JavaScript para interações
├── assets/
│   ├── images/         # Imagens (placeholders)
│   └── icons/          # Ícones SVG
└── README.md           # Este arquivo
```

## Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. Abra o `index.html` em um navegador web. Não há necessidade de servidor local, pois é um projeto estático.

## Deploy na Vercel

1. Faça push do código para um repositório no GitHub.

2. Acesse [Vercel](https://vercel.com) e conecte seu repositório GitHub.

3. Configure o deploy: selecione o branch principal e defina a pasta raiz como `/` (padrão).

4. O site será automaticamente deployado. A Vercel detectará que é um projeto estático e não requer build.

## Funcionalidades

- **Responsivo**: Design mobile-first, otimizado para dispositivos móveis e desktop.
- **Acessível**: Estrutura semântica HTML, atributos ARIA, foco visível.
- **SEO Otimizado**: Meta tags, Open Graph, título e descrição adequados.
- **Animações**: Fade-in on scroll, hover effects, scroll suave.
- **Contato**: Links para WhatsApp e e-mail.

## Personalização

- **Nome e Informações**: Edite o `index.html` para alterar nome, descrição e links.
- **Cores**: Modifique as variáveis CSS em `:root` no `styles.css`.
- **Imagens**: Substitua os placeholders em `assets/images/` por imagens reais.
- **Ícones**: Adicione ou substitua SVGs em `assets/icons/`.

## Tecnologias Utilizadas

- HTML5 Semântico
- CSS3 com Custom Properties e BEM
- JavaScript ES6+ (IntersectionObserver para animações)
- Google Fonts (Montserrat e Roboto)

## Próximos Passos (Opcionais)

- Adicionar GSAP via CDN para animações avançadas.
- Implementar formulário de contato com validação.
- Adicionar modo escuro/claro.

## Contribuição

Desenvolvido por Laura Fradique. Para sugestões, envie um e-mail ou abra uma issue no GitHub.