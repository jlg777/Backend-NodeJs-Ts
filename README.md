<hr>
<div>
<p style = 'text-align:center'>
<img align="center" src="./public/programador.png" alt="JuveYell" width="300px">
</p>
</div>

<h2 align="center" style="color:#CD5C5C">JLG'777' <img
src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="22" /></h2>

<p align="center">
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=4000&pause=1000&multiline=true&random=false&width=435&lines=Un+proyecto+creado+por+J0RG1T0" alt="Typing SVG" /></a>
</p>
<hr>

## 📧 Connect with me:

[![GMAIL](https://img.shields.io/badge/Gmail-Gmail?style=white&logo=Gmail&logoColor=white&color=%23EA4335)](proyectojlg777@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-LinkedIn?style=white&logo=LinkedIn&logoColor=white&color=%230A66C2)](https://linkedin.com/in/)
[![Discord](https://img.shields.io/badge/Discord-Discord?style=white&logo=Discord&logoColor=white&color=%235865F2)](jorgeg777#9720)

# 🎫 API de Gestión de diario personal

_Este proyecto es una API desarrollada con **Node.js** y **TypeScript** que simula el manejo de entradas de diarios, incluyendo información sobre el clima y visibilidad. Permite realizar operaciones CRUD sobre las entradas de diarios, las cuales se almacenan en memoria._

## 🪢 Características

- **Operaciones CRUD**:
  - Crear una entrada de diario
  - Leer todas las entradas de diario o por ID
  - Actualizar una entrada de diario por ID
  - Eliminar una entrada de diario por ID
- **Valida entradas**:
  - Verifica el formato de la fecha, el clima y la visibilidad
  - Limita la longitud del comentario a 50 caracteres

## 🚀 Comenzando

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Requisitos previos

- Tener **Node.js** y **npm** instalados. Si no los tienes, puedes descargarlos [aquí](https://nodejs.org/).

### 🔧 Instalación

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

#### 🧍‍♂️🧍‍♂️ Clonar el repositorio

```
git clone https://github.com/jlg777/Backend-NodeJs-Ts.git
```

#### 🚢 Navegar al directorio del proyecto

```
cd nombre-del-proyecto
```

#### 🚨 Instalar dependencias

```
npm install
```

## 🚀 Estructura del proyecto

Dentro de tu proyecto verás las siguientes carpetas y archivos:

```text
/
/
├── public/
├── src/
│   └── mock/
│   └── services/
│   └── routes/
│   └── app.ts/
│   └── index.ts/
│   └── types.d.ts/
└── package.json

```

La estructura del proyecto sigue las mejores prácticas para proyectos de Node.js con Express, donde se encuentran los modelos, controladores y rutas organizadas por entidad.

Cualquier recurso estático, como imágenes, puede colocarse en el directorio `public/`.

## 🧞 Comandos

    Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `npm install`   | Installs dependencies                        |
| `npm run dev`   | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./dist/`      |
| `npm run start` | Preview your build locally, before deploying |

## 🚧 Uso

Una vez que el servidor esté en ejecución, puedes interactuar con la API a través de las siguientes rutas:

Rutas disponibles:
 - GET /
Devuelve un mensaje simple: "Hola".

 - GET /api/diaries
Devuelve todas las entradas de los diarios en formato JSON.

 - GET /api/diaries/:id
Devuelve la entrada de diario correspondiente al id proporcionado, excluyendo el comentario.

 - POST /api/diaries
Crea una nueva entrada de diario. Los datos deben incluir:

date: Fecha en formato YYYY-MM-DD
weather: Uno de los valores rainy, sunny, windy, cloudy
visibility: Uno de los valores good, ok, poor, bad
comment: Comentario de menos de 50 caracteres.

 - PUT /api/diaries/:id
Actualiza la entrada de diario con el id proporcionado. Debes enviar los mismos parámetros que en el POST.

 - DELETE /api/diaries/:id
Elimina la entrada de diario con el id proporcionado.

## 🛠️ Construido con

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express**: Framework web utilizado para construir la API RESTful.
- **TypeScript**: Tipado de datos.
- **Morgan**: para logging.

## ✒️ Autores

- **Jorge Grandía** - _Trabajo Inicial_ - [JLG777](https://github.com/jlg777)
- **Jorge Grandía** - _Documentación_ - [JLG777](#jlg777)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## 🎁 Expresiones de Gratitud

- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
- Da las gracias públicamente 🤓.
- Dona con cripto a esta dirección:
  - (btc) `16ApGFxMXfF8ktysSkmLBzLEJPHubtwKjp`
  - (btc-SegWit) `bc1q0v8fvv3gvga02h9xspcg7npghjfyny20lavc37`
  - (Ethereum) `0x1ee2842c194c95bc54473c6b27d602fc0bfc81a9`

---

⌨️ con ❤️ por [JLG777](https://github.com/jlg777) 😊

_Copyright (c) [2025] [jlg777]_
