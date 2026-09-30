# Prompt: Desarrollo del Backend - Sistema Gestor de Anexos

Este documento sintetiza los requerimientos técnicos y de infraestructura para el soporte del Diseñador de Formularios, enfocado en integraciones, seguridad y persistencia.

---

## Módulo 1: Seguridad e Integraciones (IAM)
**Objetivo:** Gestionar el acceso seguro y la autenticación.
- **Integración SSO (Internet):** Implementar mecanismos de autenticación para usuarios externos (Contribuyentes) mediante integración con el proveedor de identidad institucional.
- **Integración SSO (Intranet):** Implementar mecanismos de autenticación para usuarios internos (Funcionarios) con soporte para roles y perfiles.
- **Contexto de Sesión:** Asegurar que los servicios backend validen el token de sesión en cada petición.

## Módulo 2: Canales de Recepción y Procesamiento
**Objetivo:** Soportar la ingesta de información desde múltiples fuentes.
- **Gestión de Canales:** Lógica para procesar anexos provenientes de:
  - **Canal Web:** Carga directa (JSON/Payload).
  - **Canal Archivo:** Procesamiento batch de archivos planos o XML.
  - **Web Service / FTP:** Listeners o Jobs automáticos para ingesta programada.
- **Validaciones de Canal:** Aplicar reglas específicas por canal (ej. límites de tamaño para archivos, throttling para WS).

## Módulo 3: Motor de Persistencia y Parametrización
**Objetivo:** Almacenamiento eficiente de configuraciones y datos transaccionales.
- **mapeo de Datos:** Definir la correspondencia entre los casilleros del diseñador y los nombres de columnas físicas en Base de Datos (`Nombre Columna Bdd`) cuando sea necesario.
- **Servicios de Parametrización:** Exponer endpoints que sirvan configuraciones vigentes (ej. Periodos fiscales activos) para que el Frontend los consuma y valide entradas.
- **Persistencia de Versiones:** Guardado histórico de las versiones de las plantillas (Control de cambios).

## Módulo 4: Auditoría y Trazabilidad (Compliance)
**Objetivo:** Registro inmutable de operaciones críticas.
- **Pistas de Auditoría Transaccionales:** 
  - Registrar eventos de aprobación, rechazo y carga de archivos.
  - Datos obligatorios: Usuario, IP, Fecha, Acción, Valores Antes/Después (Diff).
- **Reportes de Auditoría:**
  - Generación de reportes de "Talón Resumen" y "Archivo Cargado" incluyendo la metadata de auditoría correspondiente de la descarga.

---

## Directrices Técnicas
- **Arquitectura:** Servicios RESTful o Microservicios (según estándar institucional).
- **Base de Datos:** Diseño de modelo de datos relacional para soportar estructuras jerárquicas (Anexos -> Secciones -> Casilleros).
- **Performance:** Optimización de queries para la carga de catálogos volumétricos.
- **Estándares:** Uso de contratos de interfaz (Swagger/OpenAPI) para documentación de APIs.
