# 🎄 Amigo Invisible El Descontrol — Guía del Organizador

> Una app estática (HTML + CSS + JS puro) para hacer el sorteo de Amigo Invisible y que cada participante descubra su asignación de forma espectacular. ¡Sin registros, sin servidores, sin complicaciones!

---

## 🚀 Paso a paso: cómo poner en marcha el sorteo

### 1. Prepara la lista de participantes

Abre el archivo **`admin.html`** con doble clic en tu explorador de archivos (o arrástralo al navegador). No necesitas servidor: funciona directamente desde tu disco.

### 2. Rellena el formulario

- **Título del evento**: ponle el nombre que quieras (ej. *"Amigo Invisible Familia 2025 🎄"*).
- **Participantes**: escribe uno por línea con el formato:

  ```
  Nombre Apellido,contraseña
  ```

  Ejemplo real:
  ```
  Ana García,navidad25
  Carlos López,regalos99
  Marta Ruiz,hohoho22
  Javi Martínez,nieve2025
  ```

  - El nombre puede tener espacios y acentos.
  - La contraseña es **sensible a mayúsculas** — elige algo fácil de recordar y comunícasela a cada participante de forma privada (WhatsApp, email…).
  - Necesitas **mínimo 2 participantes**.

### 3. Genera el sorteo

Pulsa el botón **"🎲 Generar sorteo"**. El algoritmo usa una permutación aleatoria garantizada (derangement): nadie se asigna a sí mismo. Puedes pulsar **"🔄 Regenerar"** si quieres un resultado diferente.

Verás una vista previa de quién regala a quién (¡solo tú la ves!) y el JSON listo para copiar.

### 4. Copia el JSON

Pulsa **"📋 Copiar al portapapeles"**. El contenido copiado tiene este aspecto:

```json
{
  "locked": true,
  "titulo": "Amigo Invisible El Descontrol 🎄",
  "participantes": [
    { "nombre": "Ana García", "password": "navidad25", "asignado": "Carlos López" },
    { "nombre": "Carlos López", "password": "regalos99", "asignado": "Marta Ruiz" },
    ...
  ]
}
```

### 5. Actualiza `data.js`

Abre **`data.js`** con cualquier editor de texto (Notepad, VS Code, Sublime Text…). Verás algo así:

```js
const SORTEO_DATA = {
  locked: false,
  titulo: "Amigo Invisible El Descontrol 🎄",
  participantes: []
};
```

**Selecciona todo el contenido** del archivo (`Ctrl+A`), bórralo, y escribe:

```js
const SORTEO_DATA = [PEGA AQUÍ EL JSON COPIADO];
```

El resultado final debe quedar así (ejemplo):

```js
const SORTEO_DATA = {
  "locked": true,
  "titulo": "Amigo Invisible El Descontrol 🎄",
  "participantes": [
    { "nombre": "Ana García", "password": "navidad25", "asignado": "Carlos López" },
    ...
  ]
};
```

> ⚠️ **Importante**: asegúrate de que la línea acaba en `;` y de que no queda nada del texto original.

### 6. Sube los archivos a GitHub Pages

Sube estos archivos a tu repositorio de GitHub (o cualquier servicio de hosting estático):

```
index.html
revelar.html
data.js         ← ¡Este es el que acabas de editar!
style.css
app.js
```

> 🚫 **No subas `admin.html`** — contiene las asignaciones en texto plano. Solo es para tu uso local.

Para GitHub Pages:
1. Ve a tu repositorio → **Settings** → **Pages**.
2. En *Source*, selecciona la rama `main` y la carpeta raíz `/`.
3. Guarda. En unos minutos tendrás una URL tipo `https://tuusuario.github.io/amigo-invisible/`.

### 7. Comparte la URL

Envía la URL a todos los participantes junto con su **contraseña personal** (de forma privada, uno a uno). Ellos podrán entrar, introducir su nombre y contraseña, y ver la animación de revelación de su amigo invisible.

---

## 🎁 ¿Cómo funciona la app para los participantes?

1. El participante abre la URL en su móvil o navegador.
2. Introduce su nombre (sin distinguir mayúsculas) y su contraseña secreta.
3. Se reproduce una animación espectacular de 3 fases:
   - **Fase 1** – Suspense con barra de progreso.
   - **Fase 2** – Una caja de regalo temblando de emoción.
   - **Fase 3** – Confetti y el nombre del amigo invisible con efecto de zoom dorado.
4. Si recarga la página, el resultado aparece directamente (sin repetir la animación) mientras tenga la sesión activa.

---

## 📁 Estructura de archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Página de login para los participantes |
| `revelar.html` | Página con la animación de revelación |
| `admin.html` | Panel del organizador (solo uso local) |
| `data.js` | Datos del sorteo — **el archivo que editas** |
| `style.css` | Estilos navideños con glassmorphism y animaciones CSS |
| `app.js` | Lógica compartida (nieve, sesión) |
| `README.md` | Este archivo |

---

## 🛡️ Seguridad y privacidad

- Las contraseñas y asignaciones están en `data.js`, que **sí es público** si subes el repositorio a GitHub. Cualquiera que lo inspeccione verá el JSON.
- Para la mayoría de los sorteos familiares o de amigos esto no supone ningún problema.
- Si necesitas privacidad total, considera hacer el repositorio **privado** y usar GitHub Pages con un repo privado (requiere plan GitHub Pro o superior).

---

## ❓ Preguntas frecuentes

**¿Puedo cambiar el sorteo después de publicarlo?**
Sí: vuelve al paso 2, regenera, copia el nuevo JSON, edita `data.js` y vuelve a subir.

**¿Y si un participante olvida su contraseña?**
Tú, como organizador, tienes la lista en `admin.html`. Puedes recordársela sin revelar su asignación.

**¿Funciona sin internet?**
Sí, puedes abrirlo directamente desde tu disco (salvo las fuentes de Google Fonts, que requieren conexión solo para cargar la tipografía navideña — el resto funciona offline).

**¿Mínimo de participantes?**
2. El algoritmo de derangement garantiza que nadie se asigna a sí mismo con cualquier número ≥ 2.

---

¡Feliz Navidad y que empiece el descontrol! 🎅🎉

