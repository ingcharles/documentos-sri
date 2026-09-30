# Reglas de diseño – Frontend

Sistema Generador de Plantillas de formularios dinámicos con enfoque **premium**, **minimalista** y **alta legibilidad**.  
Diseñado como una **single-page experience** rápida, clara.

---

## 🎯 Objetivo del proyecto

- Interfaz moderna, premium y muy limpia.
- Prioridad en:
  - Legibilidad
  - Jerarquía visual
  - Sensación de producto profesional
- Una sola página (sin navegación compleja).
- Interacciones rápidas y predecibles.

---

## 🎨 Lineamientos de diseño

### Estilo general
- Tema oscuro por defecto.
- Fondo muy oscuro con ligeras variaciones entre secciones.
- Uso del color **solo para acciones y estados**.
- Componentes consistentes en toda la app:
  - mismos radios
  - mismas sombras
  - mismos espaciados

---

## 🔤 Tipografía

- Fuente principal: **Roboto**
  - Fallback: system-ui
- Escalas:
  - **Títulos:** 18–20px · semibold
  - **Subtítulos / labels:** 12–14px · medium · opacidad ligera
  - **Texto normal:** 10–12px · regular
  - **Números clave:** grandes, claros, con separadores y símbolo $

---

## 📐 Layout y espaciados

- Grid de **12 columnas (responsive)**.
- Contenedor principal:
  - `max-width: 1200px`
  - centrado horizontalmente
- Sistema de espaciado base:
  - `8 / 16 / 24 / 32 px`
- Separación entre secciones:
  - `24–32px`
- Priorizar aire visual (evitar bloques apretados).

---

## 🧩 Componentes

### Cards
- Border-radius: `14–16px`
- Fondo ligeramente más claro que el fondo global
- **Borde sutil (1px) o sombra muy suave** (no ambos fuertes)
- Padding interno: `16–20px`
- Header de card:
  - título arriba a la izquierda
  - acciones (`...`) arriba a la derecha si aplica

---

## 🎨 Colores

### Base similar al sri https://srienlinea.sri.gob.ec/sri-en-linea/inicio/NAT
- --color-azul-principal: `#0000a4`;
- --color-rojo-logo: `#e2231a`;
- --color-azul-claro: `#6688cc`;
- --color-azul-informacion: `#4077ba`;

  /* Colores grises */
- --color-gris-medio: `#656d78`;
- --color-gris-fuerte: `#434a54`;
- --color-gris-tenue: `#f5f7fa`;
- --color-gris-claro: `#e7eaee`;
- --color-gris-neutro: `#aab2bd`;
- --color-blanco: `#fff`;
- --color-blanco-hueso: `#fcf8e4`;
- --color-blanco-piel: `#f1dede`;
- --color-negro: `#000`;

  /* Colores adicionales */
- --color-violeta-claro: `#a390c4`;
- --color-violeta-fuerte: `#7b6aaf`;
- --color-celeste: `#daeef6`;
- --color-turqueza-claro: `#d3e9e4`;
- --color-turqueza-fuerte: `#2f836e`;

- --color-cyan-claro: `#4fc1ea`;
- --color-cyan-fuerte: `#1d799a`;
- --color-verde-claro: `#a1c96a`;
- --color-verde-fuerte: `#597f2e`;

- --color-coral-claro: `#f3aab6`;
- --color-coral-fuerte: `#d73747`;

- --color-amarillo-claro: `#fece56`;
- --color-amarillo-fuerte: `#976707`;
- --color-naranja-claro: `#ffa424`;
- --color-naranja-fuerte: `#c82f1b`;
- Fondo principal: `#0000a4`
- Superficie (cards): `#fcf8e4`
- Texto principal: casi blanco (alta legibilidad)
- Texto secundario: gris con opacidad (no demasiado tenue)

### Acento
- Color de acento único:
  - azul / violeta elegante
  - usado para botones, highlights y foco

### Estados
- Positivo: verde suave
- Negativo: rojo suave
- Aviso: ámbar suave

> Los gráficos deben usar el color de acento + variaciones del mismo (evitar arcoíris).

---

## 🔘 Botones e Inputs

### Botones
- **Primario**
  - Fondo con color de acento
  - Altura: `40–44px`
  - Border-radius: `12px`
- **Secundario**
  - Borde sutil o fondo ligeramente distinto
  - Sin ruido visual

### Inputs
- Estilo oscuro
- Borde sutil
- Focus visible con color de acento

---

## ⌨️ Accesibilidad y teclado

La aplicación debe ser **keyboard-friendly**:

- Orden de tabulación lógico
- `Enter` → guardar / confirmar
- `Esc` → cerrar modales / cancelar
- Focus states visibles y consistentes

---

## 📊 Gráficos

- Estilo minimalista:
  - líneas finas
  - ejes discretos
  - sin grid agresivo
- Tooltips claros y legibles al hover

---

## 🛠️ Recomendaciones técnicas (opcional)

- Centralizar tokens de diseño:
  - colores
  - radios
  - sombras
  - spacing
- Evitar estilos inline.
- Reutilizar componentes.
- Mantener coherencia visual antes que creatividad excesiva.
