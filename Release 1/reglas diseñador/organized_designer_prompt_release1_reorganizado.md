# Desarrollo del Sistema Diseñador de Formularios Dinámicos – Release 1

Este documento sintetiza los requerimientos funcionales y transversales para construir un Sistema Generador de Plantillas de formularios dinámicos. El desarrollo es **Frontend (Vue, pinia, vuedraggable, formulajs, composition api)** con **datos mock**.

---

## MÓDULOS FUNCIONALES PRINCIPALES

## Módulo 1: Gestión de Plantillas (Dashboard Administrativo)
**Objetivo:** Administrar el ciclo de vida de las plantillas.
- Búsqueda y filtros por nombre, tipo y estado.
- Acciones: Crear, Editar, Duplicar, Ver, Solicitar Revisión, Publicar.
- Flujo de estados: EN CONSTRUCCIÓN → EN REVISIÓN → APROBADO → PUBLICADO.
- Buscador global dentro de la plantilla.

---

## Módulo 2: Diseñador y Estructura del Formulario
**Objetivo:** Construir la jerarquía visual y lógica del formulario.
- Niveles y subniveles Padre/Hijo (sin ciclos).
- Secciones y subsecciones.
- Drag & Drop con vuedraggable.
- Navegación por páginas.
- Mapa visual del formulario.
- Pestañas:
  - Diseñador
  - Preview
  - JSON
  - JSON Schema
  - XML Validación
  - XSD

---

## Módulo 3: Componentes y Casilleros
**Objetivo:** Definir los elementos de entrada y al seleccionar cualquier de los elementos con los atributos del componente inteligente mostrar panel de funcionalidad datos generales, atributos y validaciones.
- Tipos: paginas, pestañas, niveles, subniveles, secciones, Texto, Número, Fecha, Listas, Checkbox, Radio, Tabla, Botón, otros.
- Atributos: código, etiqueta, tooltip, obligatorio, solo lectura, máscaras, otros.
- Validaciones técnicas y de negocio.
- Primary Key lógica de agrupacion de campos.
- Campos de ingreso vs muestra.

---

## Módulo 4: Catálogos y Dependencias
**Objetivo:** Gestionar listas de valores.
- CRUD de catálogos (Mock).
- Importar / Exportar catálogos.
- Dependencias en cascada.
- Reutilización entre formularios.

---

## Módulo 5: Reglas, Fórmulas y Visibilidad
**Objetivo:** Dotar de inteligencia al formulario.
- Editor de fórmulas (formulajs).
- Cálculos automáticos.
- Lógica condicional de visibilidad.
- Validaciones de negocio con mensajes.

---

## Módulo 6: Preview, Exportación y Versionado
**Objetivo:** Verificación y salida de información.
- Preview responsive (Web / Tablet / Mobile).
- Exportación JSON / XML.
- Versionado automático.
- Comparador de versiones.
- Bloqueo de versiones publicadas.

---

## Módulo 7: Seguridad y Control de Acceso
**Objetivo:** Restringir acciones según rol.
- Roles: Administrador, Revisor, Aprobador, Consulta.
- Permisos por estado.
- Vista solo lectura según perfil.
- Auditoría mock por rol.

---

## FUNCIONALIDADES TRANSVERSALES (NO SON MÓDULOS)

## Validaciones Pre-Publicación
- Checklist automático de errores.
- Bloqueo de publicación si hay inconsistencias.
- Panel centralizado de validaciones.

## UX Avanzado del Diseñador
- Undo / Redo.
- Copiar / Pegar secciones y casilleros.
- Duplicación rápida.
- Confirmaciones visuales.

## Importación de Estructuras
- Importar formularios desde JSON.
- Importar desde XML.
- Validación de estructura importada.

## Internacionalización (i18n)
- Etiquetas por idioma.
- Textos de ayuda traducibles.
- Cambio de idioma en preview.

## Accesibilidad (A11Y)
- Navegación por teclado.
- Labels accesibles.
- Contraste adecuado.
- Mensajes accesibles.

## Impresión y Exportación Visual
- Vista imprimible.
- Exportación PDF (Mock).

## Manejo de Errores y Estados Técnicos
- Estados: cargando, sin datos, error.
- Mensajes técnicos y funcionales.
- Fallback visual.

---

## DIRECTRICES TRANSVERSALES
- Componentizar componentes mínimos reutilizables.
- Feedback constante.
- Guardado manual y automático.
- Estética premium.
- Centralización de mocks.
