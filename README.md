# REINF - Situações Diversas

Apresentação técnica para capacitar a equipe de suporte no diagnóstico e resolução de cenários incomuns da EFD-REINF dentro do sistema Fortes Fiscal (AC).

## Sobre

O material aborda situações que fogem do fluxo padrão de atendimento e que, por sua raridade, frequentemente geram dúvidas no momento do atendimento ao cliente. Cada cenário é estruturado com causa raiz, sintomas visíveis no sistema, impacto para o cliente e passo a passo de resolução.

## Cenários Abordados

| # | Cenário | Sintoma Principal |
|---|---------|-------------------|
| 01 | CNPJ Matriz Divergente | Aviso ao abrir o painel — CNPJ do Fortes ≠ CNPJ no serviço REINF |
| 02 | Licença Incompatível | Banner vermelho "Licença Incompatível!!" no topo do painel |
| 03 | Recuperar Vínculo REINF | Base sem integração + licença divergente — erro ao tentar aderir |
| 04 | Mudança para Produção | "Já existe adesão para o contribuinte" ao migrar de Homologação |
| 05 | SOS no Painel REINF | Funcionalidades exclusivas do usuário de emergência no painel |
| 06 | Artefatos no Chamado | O que coletar e quando anexar em chamados de suporte REINF |

## Como Executar

A apresentação utiliza [Reveal.js](https://revealjs.com/) via CDN — basta abrir o `index.html` em um servidor local.

```bash
# Com Node.js
npx serve .

# Com Python
python -m http.server 5500
```

Acesse `http://localhost:5500/index.html` no navegador.

## Navegação

| Ação | Tecla |
|------|-------|
| Próximo slide | `→` ou `Space` |
| Slide anterior | `←` |
| Visão geral | `Esc` |
| Tela cheia | `F` |
| Zoom na imagem | Passar o mouse sobre a imagem |

## Estrutura de Arquivos

```
apresentacao-reinf-situacoes/
├── index.html                  # Apresentação principal
├── README.md                   # Este arquivo
├── css/
│   └── custom.css              # Design system (Oceanic Precision)
├── js/
│   ├── main.js                 # Inicialização Reveal.js + efeitos
│   ├── particles.js            # Partículas da capa
│   ├── starfield.js            # Campo de estrelas
│   └── section-cosmos.js      # Efeitos por seção
└── resources/
    └── images/
        ├── painel-imagem.png
        ├── cnpj-divergente.png
        ├── atualizar-matriz.png
        ├── licenca-incompativel.png
        ├── licenca-antiga.png
        ├── recuperar-vinculo-1.png
        ├── recuperar-vinculo-2.png
        ├── recuperar-vinculo-3.png
        ├── mudanca-producao.png
        ├── logAC.png
        ├── qrcode-frequencia.png
        └── qrcode-pesquisa.png
```

## Dependências (CDN)

- [Reveal.js 5.1.0](https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/)
- [Lucide Icons](https://unpkg.com/lucide@latest/)
- Google Fonts: Bebas Neue, DM Sans, JetBrains Mono, Exo 2

## Autor

**Berg Soares** — Suporte Técnico Fiscal · Abril 2026
