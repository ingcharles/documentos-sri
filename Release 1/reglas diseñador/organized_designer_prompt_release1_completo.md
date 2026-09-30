# Prompt: Desarrollo del Sistema Diseñador de Formularios Dinámicos

Este documento sintetiza los requerimientos para construir una herramienta administrativa de diseño de anexos y formularios. El desarrollo debe ser exclusivamente **Frontend** utilizando **datos mock** para todas las integraciones.

---

## Módulo 1: Gestión de Plantillas (Dashboard Administrativo)
**Objetivo:** Administrar el ciclo de vida de los anexos (plantillas).
- **Búsqueda y Filtros:** Listado de anexos con filtros por nombre, tipo y estado.
- **Acciones de Fila:** 
  - `Ingresar`: Crear nueva estructura.
  - `Actualizar`: Editar (solo en estado EN CONSTRUCCIÓN).
  - `Duplicar`: Clonar estructura existente.
  - `Ver`: Previsualización en modo lectura.
  - `Solicitar Revisión`: Cambia estado a EN REVISIÓN y dispara notificación mock.
  - `Publicar`: Despliegue final (solo si está APROBADO).
- **Gestión de Estados:** Flujo de estados: EN CONSTRUCCIÓN -> EN REVISIÓN -> APROBADO -> PUBLICADO.
- **Buscador Global:** Búsqueda rápida de conceptos, etiquetas o secciones dentro de la plantilla activa.

## Módulo 2: Diseñador y Estructura del Formulario (Niveles y Secciones)
**Objetivo:** Definir la jerarquía y organización visual del anexo.
- **Estructura Jerárquica:** Configuración de Niveles y Subniveles (relación Padre/Hijo) sin permitir ciclos infinitos, en tablas permitir la creación de niveles y subniveles con relación Padre/Hijo mediante poppup para ingresar datos den el formularios.
- **Organización por Secciones:**
  - Creación de Secciones y Subsecciones (Unidades de Información).
  - Títulos personalizables y descripciones con formato básico.
  - Funcionalidad `Drag & Drop` libreria vuedraggable para arrastar/reordenar secciones y casilleros.
- **Navegación:** 
  - Vista de "Mapa Visual" para navegar por la estructura compleja.
  - Secciones colapsables (Expandir/Contraer) por defecto.
  - Navegación entre pantallas/paginas (Siguiente/Atrás) si el formulario es multi-página y validar al completar el formulario.
- **Pestañas de Vista y Validación:** El diseñador debe contar con las siguientes pestañas para visualizar datos y estructura:
  - `Diseñador/Estructura del formulario`: Interfaz gráfica de construcción.
  - `Pantalla previsualización`: Renderizado real del formulario tal como lo verá el usuario.
  - `JSON de la estructura del formulario y valores`: Vista del código fuente JSON.
  - `JSON Schema de la estructura del formulario y valores`: Vista del esquema de validación JSON.
  - `XML de validación de valores`: Vista de validaciones en formato XML.
  - `XSD de validación de valores`: Esquema de validación XSD.

## Módulo 3: Definición de Casilleros y Componentes
**Objetivo:** Configurar los elementos de entrada de datos al seleccionar cualquier de los elementos con los atributos del componente inteligente en funcionalidad datos generales, atributos y validaciones.
- **Atributos del Componente inteligente:** para cada tipo de elemento de entrada de datos los atributos deben ser diferentes Código único, Etiqueta, Descripción (Tooltip), Estado (Activo/Inactivo), solo lectura, obligatorio, tipo de dato, longitud mínima, longitud máxima, máscara de formato, patterns, valores por defecto, reglas de validación, valores posibles (manualmente/api)  para listas desplegables radio, buttons  y checkbox, Tablas (columnas/filas).
- **Tipos de Datos:** Texto, Números (con/sin decimales, negativos), Fechas, Listas desplegables, Checkbox, Radio buttons, Tablas, Botones, Mascara Otros.
- **Configuración Avanzada:**
  - Longitudes mínimas/máximas y máscaras de formato.
  - Valores por defecto (estáticos o resultados de reglas).
  - Marca de `Primary Key` en una agrupacion de elementos/campos para control de duplicados de informacion en registros múltiples.
  - Definición de casilleros de "Ingreso" vs "Muestra" (solo lectura).

## Módulo 4: Catálogos y Dependencias Dinámicas
**Objetivo:** Gestionar listas de valores y filtrar datos en cascada.
- **Administrador de Catálogos:** CRUD de catálogos (Ubicaciones, Países, Monedas, etc.) con opción de Importar/Exportar (Mock).
- **Vinculación cascada:** 
  - Relacionar casilleros con catálogos.
  - Implementar dependencias tipo "Filtro": Si se selecciona País 'Ecuador', el casillero 'Provincia' solo muestra provincias de Ecuador.
- **Relaciones:** Un catálogo puede estar asociado a múltiples anexos o múltiples casilleros.

## Módulo 5: Motor de Reglas, Fórmulas y Visibilidad
**Objetivo:** Dotar de inteligencia al formulario.
- **Editor de Fórmulas liberia formulajs:** Interfaz para construir cálculos (Sumar, Restar, Promedios, Redondeos) usando operadores y casilleros.
- **Lógica de Visibilidad (Perfilamiento):** 
  - Mostrar/Ocultar secciones o campos según condiciones (Ej: Si 'Persona Natural' es 'SI', ocultar sección 'Datos Societarios').
- **Validaciones de Negocio:** Reglas tipo "Si campo A > B, mostrar mensaje de error" con alertas parametrizables (íconos y textos).

## Módulo 6: Exportación, Preview y Auditoría
**Objetivo:** Verificación y entrega de resultados.
- **Live Preview:** Ver cómo luce el anexo en diferentes dispositivos (Responsive: Web, Tablet, Mobile).
- **Exportación Estructural:** Generar el esquema del formulario en formatos `JSON` o `XML` según el canal (Web, FTP, etc.).
- **Trazabilidad:** Registro mock de quién creó, modificó o aprobó la plantilla, permitiendo comparación de versiones (Valor anterior vs. Valor actual).

---

## Directrices de Desarrollo (Core UX/UI)
- **Feedback Constante:** Ventanas de confirmación para acciones críticas (Guardar, Eliminar, Cancelar).
- **Persistencia:** Guardado automático o manual con validaciones previas al envío a revisión.
- **Estética Premium:** Uso de componentes modernos, micro-animaciones en transiciones y diseño orientado a la usabilidad (Accesibilidad).
- **Datos Mocks:** Centralizar todos los datos de prueba en un directorio de mocks para facilitar pruebas y prototipado rápido.


---

## Módulo 7: Gestión de Roles y Permisos
**Objetivo:** Controlar el acceso y las acciones disponibles según el perfil del usuario (Mock).
- **Perfiles:** Administrador, Revisor, Aprobador, Consulta.
- **Restricción de Acciones:**
  - Edición solo para Administrador.
  - Revisión solo para Revisor.
  - Aprobación solo para Aprobador.
  - Publicación solo para Administrador/Aprobador.
- **Vista por Perfil:** Renderizado en modo solo lectura según permisos.
- **Auditoría por Rol:** Registro mock de acciones realizadas por cada perfil.

## Módulo 8: Versionado de Plantillas
**Objetivo:** Mantener control histórico y trazabilidad de cambios.
- Versionado automático (v1, v2, v3…).
- Duplicación como nueva versión.
- Bloqueo de edición en versiones PUBLICADAS.
- Comparador visual entre versiones (antes / después).
- Selección de versión activa.

## Módulo 9: Validaciones Previas a Publicación
**Objetivo:** Garantizar integridad funcional antes del despliegue.
- Checklist automático:
  - Campos obligatorios sin configurar.
  - Reglas incompletas o inválidas.
  - Catálogos no vinculados.
- Panel centralizado de errores.
- Bloqueo de publicación hasta corrección.

## Módulo 10: UX Avanzado del Diseñador
**Objetivo:** Mejorar la experiencia de edición.
- Deshacer / Rehacer (Undo / Redo).
- Copiar / Pegar:
  - Casilleros
  - Secciones completas
- Duplicación rápida de componentes.
- Confirmaciones visuales de cambios.

## Módulo 11: Importación de Estructuras
**Objetivo:** Reutilizar configuraciones existentes.
- Importación desde JSON.
- Importación desde XML.
- Validación de estructura importada.
- Uso de plantillas base.

## Módulo 12: Internacionalización (i18n)
**Objetivo:** Soportar múltiples idiomas (Mock).
- Etiquetas por idioma.
- Textos de ayuda traducibles.
- Cambio dinámico de idioma en preview.

## Módulo 13: Accesibilidad (A11Y)
**Objetivo:** Cumplir buenas prácticas de accesibilidad.
- Navegación completa por teclado.
- Labels accesibles y descriptivos.
- Contraste mínimo de colores.
- Mensajes de error accesibles.

## Módulo 14: Impresión y Exportación Visual
**Objetivo:** Facilitar revisión y distribución.
- Vista imprimible del formulario.
- Exportación a PDF (Mock).
- Configuración de encabezados y pies de página.

## Módulo 15: Manejo de Errores y Estados Técnicos
**Objetivo:** Controlar estados del sistema.
- Estados globales:
  - Cargando
  - Sin datos
  - Error
- Mensajes de error técnicos y funcionales.
- Fallback visual ante fallos de renderizado.

