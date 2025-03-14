<div id='top'>

# Gerador de Senhas

</div>

<!-- prettier-ignore -->
|  |  |
| - | - |
| ✨ Nome       | **Gerador de senhas** |
| 🏷️ Tecnologias | JavaScript, HTML, Sass, CSS |
| 🚀 Live site         | **https://password-generator-main-ten.vercel.app/** |

![](./assets/img/og-image.png)

<div align="center">
  <img src="https://img.shields.io/badge/javascript-f7e025?style=for-the-badge&logo=javascript&logoColor=000">
  <img src="https://img.shields.io/badge/html-e5532d?style=for-the-badge&logo=html5&logoColor=fff">
  <img src="https://img.shields.io/badge/sass-dd6697?style=for-the-badge&logo=sass&logoColor=fff">
  <img src="https://img.shields.io/badge/css-137bc4?style=for-the-badge&logo=css3&logoColor=fff">
</div>

Diferenciais:

- Uso de Sass
- Boa documentação

Trata-se de um **gerador de senhas** com controle de número de caracteres, características da senha e força da senha.

O primeiro botão à direita do campo gerador de senha deve copiar a senha gerada e o outro botão deve gerar uma senha nova.

Por padrão, se nenhuma característica de senha foi selecionada, deve-se gerar senhas de apenas letras minúsculas.

Características definidoras da força da senha:

- Fraca: Nenhum campo selecionado, apenas letras maiúsculas selecionado, apenas
  letras minúsculas selecionado, ambos letras maiúsculas e minúsculas selecionado.
- Média: Letras maiúsculas, minúsculas e mais algum campo selecionado.
- Forte: Todos os campos selecionados.

## ⚙️ Como funciona

Ao acessar o **Gerador de Senhas**, a aplicação automaticamente criará uma senha de acordo com os critérios padrões:

- Número de caracteres: 12;
- Letras maiúsculas;
- Letras minúsculas;
- Números; e
- Símbolos.

![Configurações iniciais](./assets/img/initial-setup.png)

É possível alterar o número de caracteres deslizando o _slider_ para a esquerda ou para a direita, sendo 6 (seis) o valor **mínimo**, e 40 (quarenta) o valor **máximo**. O número de caracteres selecionado pode ser visualizado no campo abaixo do _slider_. Também é possível alterar o número de caracteres utilizando as teclas de setas do teclado quando o _slider_ estiver selecionado via `Tab`.

> _A senha gerada e a força da senha são atualizadas em tempo real sempre que qualquer uma das propriedades for alterada._

![reatividade](./assets/img/generator.gif)

Do lado direito do campo gerador de senha, temos dois botões. O primeiro botão copia a senha gerada para a área de transferência. Um _toast_ de confirmação deve aparecer no canto superior da tela.

Já o segundo botão gera uma nova senha com base nas características atualmente selecionadas.

![campo gerador de senha](./assets/img/password-field.png)

## 📝 Notas do desenvolvedor

O projeto possui responsividade com estilos no padrão _mobile first_ para as telas _mobile_ (até `767px`), _tablet_ (de `768px` a `1023px`) e _desktop_ (a partir de `1024px`).

Os arquivos JavaScript do projeto foram organizados seguindo uma premissa similar ao <abbr title="Model View Controller">MVC</abbr>, onde:

- `models.js`: contém as lógicas para as regras de negócio;
- `views.js`: lida com a visualização e atualização dos elementos no DOM;
- `controller.js`: lida com as interações do usuário e serve de intermediador entre `models` e `views`;
- `index.js`: _entry point_ onde importamos os métodos inicializadores da aplicação.

Os requisitos de projeto não indicam os valores mínimo e máximo para o número de caracteres. Portanto, inicialmente considerei um valor mínimo de 6 (seis) e máximo de 18 (dezoito) caracteres, considerando que, no Figma, o _slider_ na metade indica o valor 12 (doze). No entanto, após testes de usabilidade com alguns usuários, a maioria indicou que gostaria da possibilidade de criar senhas mais longas, o que levou à versão final com valor máximo de 40 (quarenta) caracteres.

Apesar de temos algumas definições de força de senha já indicadas nos requisitos de projeto, adicionei outras definições que pareceram deixar o projeto mais consistente. Cada nível de força de senha possui duas variantes, resultando nos níveis `weaker`, `weak`, `mediumLow`, `mediumHigh`, `strong` e `stronger`. Vejamos as condições para cada nível abaixo:

<!-- prettier-ignore -->
| Nível | Progresso | Cor | Definição |
| - | - | - | - |
| `weaker` | 15% | Vermelho | Nenhum ou apenas 01 campo selecionado; <br> 02 campos de letras com comprimento < 12; <br> 02 campos selecionados, sendo apenas 01 de letras |
| `weak` | 30% | Vermelho | 02 campos selecionados, sendo os dois de letras; <br> 03 campos selecionados, sendo apenas 01 de letras, com comprimento < 12 |
| `mediumLow` | 50% | Amarelo | 03 campos selecionados, sendo 02 de letras, com comprimento < 12; <br> 03 campos selecionados, sendo apenas 01 de letras, com comprimento >= 12 |
| `mediumHigh` | 70% | Amarelo | 03 campos selecionados, sendo 02 de letras, com comprimento >= 12;  |
| `strong` | 80% | Verde | 04 campos selecionados e comprimento < 12 |
| `stronger` | 100% | Verde | 04 campos selecionados e comprimento >= 12 |

<a href='#top'>🔼 Voltar ao topo</a>

---

# password-generator-main
