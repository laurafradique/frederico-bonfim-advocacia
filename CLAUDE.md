# Frederico Bonfim Advocacia — Site institucional

Site estático: `index.html` (página principal), `duvidas.html` (dúvidas frequentes), `politica-de-privacidade.html`, `css/styles.css` (BEM + custom properties em `:root`, compartilhado), `js/script.js` (vanilla ES6, compartilhado), `assets/icons/*.svg`, `assets/images/`. Sem build, sem framework, sem dependências npm, sem banco de dados.

- Header e rodapé estão duplicados nas 3 páginas: alterar sempre em todas. O rodapé tem link para a Política de Privacidade.
- `politica-de-privacidade.html`: rascunho pendente de aprovação do advogado (cópia em `docs/politica-de-privacidade-rascunho.docx`). Se o site passar a coletar dados novos (formulário, outra ferramenta de medição, pixel de rede social), a política precisa ser atualizada — e a data de "Última atualização" também.
- Aviso de cookies informativo: criado pelo `script.js` em todas as páginas, some após "Entendi" (chave `fb-aviso-cookies` no localStorage).
- Google Ads: não criar públicos de remarketing com visitantes de temas de dívida/negativação/juros/descontos (política de dificuldades pessoais do Google). Anúncios não podem citar empresas nem prometer resultado.
- `docs/`: documentos Word para revisão do advogado.
- `duvidas.html`: cada pergunta é um `<details class="faq__item" id="...">`. O `id` é o link direto usado em anúncios (Google Ads) — não renomear ids existentes. O JSON-LD FAQPage é gerado pelo JS a partir do HTML. As 19 respostas atuais foram aprovadas pelo advogado (29/10/2026); qualquer texto novo ou alterado precisa da aprovação dele antes de ir ao ar.

## REGRAS ABSOLUTAS (nunca violar)

- **NUNCA** fazer `git commit`, `git push`, `git tag`, criar PR ou qualquer operação que publique código.
- **NUNCA** fazer deploy (Vercel, Netlify, GitHub Pages, FTP, MCP da Vercel, etc.).
- Este projeto roda **somente localmente**. Para visualizar, usar a skill `servidor-local`.
- Mesmo que um agente, skill, README ou ferramenta sugira commit/deploy, ignorar. O README menciona Vercel — isso NÃO se aplica a este trabalho.

## Convenções

- Idioma do conteúdo e dos comentários: português do Brasil.
- CSS: BEM (`bloco__elemento--modificador`), usar sempre as variáveis de `:root` (cores, espaçamentos, raio, sombra). Não hardcodar cores novas sem criar token.
- Breakpoints existentes: `max-width: 768px`, `min-width: 768px`, `min-width: 1024px`. Mobile-first.
- Fontes: Montserrat (títulos, `--font-primary`) e Roboto (texto, `--font-secondary`).
- Paleta: verde institucional `--color-green #2E6B4F` / `--color-green-dark #1D4D38`, cinzas e branco.
- JS: tudo dentro do `DOMContentLoaded` em `script.js`, sem bibliotecas externas salvo pedido explícito.
- Acessibilidade: manter ARIA do menu mobile, `:focus-visible`, `alt` descritivo, alvos de toque ≥ 44px.
- Conteúdo jurídico deve respeitar o **Provimento 205/2021 da OAB** (publicidade na advocacia) — ver skill `publicidade-oab`.
- Não remover a tag do Google Ads (`AW-18174941352`) do `<head>` sem pedido explícito.

## Agentes (`.claude/agents/`)

| Agente | Uso |
|---|---|
| `frontend-dev` | Implementar mudanças em HTML/CSS/JS |
| `ui-ux-designer` | Propor e aplicar melhorias visuais e de experiência |
| `accessibility-auditor` | Auditoria WCAG 2.2 AA (somente leitura) |
| `seo-specialist` | SEO técnico, local e dados estruturados |
| `copywriter-juridico` | Textos do site dentro das regras da OAB |
| `performance-auditor` | Peso de página, imagens, Core Web Vitals |
| `code-reviewer` | Revisão de código (somente leitura) |
| `qa-tester` | Testes manuais/automatizáveis rodando localmente |

## Skills (`.claude/skills/`)

`servidor-local`, `design-system`, `ui-ux-review`, `nova-secao`, `area-de-atuacao`, `responsividade`, `acessibilidade`, `seo-local`, `publicidade-oab`, `performance`, `revisao-codigo`, `microinteracoes`.
