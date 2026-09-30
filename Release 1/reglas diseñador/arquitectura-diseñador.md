## 🧩 Estructura del Proyecto diseñador

```txt
src/
├── api/                # Definición de Endpoints (interacción con el backend de Quarkus)
├── services/           
│   ├── interfaces/     # Contratos de servicios (ITemplateService.ts)
│   ├── implementacion/ # Consumo real de Quarkus (API)
│   └── mocks/          # Implementación estática (MockTemplateService.ts)
├── components/
│   └── common/         # Componentes comunes reutilizables
│       ├── TablaPaginada.vue
│       ├── DialogoAlerta.vue
│       └── InputBase.vue
├── modulos/            
│   ├── generador/      # Componentes para la creación y visualización de plantillas
│   │   ├── PanelPropiedades.vue
│   │   └── LienzoCanvas.vue
│   ├── flujo/          # Componentes de flujo de trabajo
│   │   ├── PaginaAprobacion.vue
│   │   └── HistorialEstados.vue
├── stores/             # Pinia Store (estado global)
│   └── plantillaStore.ts
└── types/              # Tipos de negocio (interfaces, enums)
    └── interfaces.ts```