# sri-anexos-estructura-service

Microservicio REST reactivo desarrollado con **Quarkus** para la gestión de plantillas de estructura
(GAN Plantillas) dentro del sistema de Gestión de Anexos del SRI. Expone una API JSON sobre base de
datos Oracle de forma no-bloqueante mediante Hibernate Reactive + Mutiny.

---

## 📋 Tabla de contenidos

1. [Versión para principiantes](#-versión-para-principiantes)
2. [Versión nivel medio — Arquitecto](#-versión-nivel-medio--perspectiva-de-arquitecto)

---

# 🟢 Versión para principiantes

Esta sección te guía paso a paso desde cero: qué necesitas instalar, cómo configurar el entorno y
cómo ejecutar el proyecto por primera vez.

## ¿Qué hace este microservicio?

Este servicio se encarga de administrar las **plantillas de estructura (GAN Plantillas)** que
definen el esquema JSON de los anexos tributarios. Sus responsabilidades principales son:

- **Crear, consultar, actualizar y eliminar** plantillas de estructura.
- **Gestionar el ciclo de vida** de una plantilla: borrador → publicada → aprobada → etc.
- **Registrar el historial** de cambios de estado en el servicio de habilitación remoto.
- **Duplicar plantillas** para generar nuevas versiones.
- **Validar acceso** mediante tokens JWT emitidos por Keycloak.

## Versiones de herramientas requeridas

| Herramienta   | Versión mínima |
|---------------|----------------|
| Java (JDK)    | 21             |
| Maven         | 3.9.11         |
| Quarkus       | 3.33.0         |
| Oracle DB     | 12c o superior |
| Docker        | 20+ (opcional) |

## Paso 1 — Instalar Java 21

1. Descarga el JDK 21 desde: <https://adoptium.net/es/temurin/releases/?version=21>
2. Instala el paquete descargado siguiendo el asistente.
3. Verifica la instalación abriendo una terminal y ejecutando:

```bash
java -version
```

Deberías ver algo similar a:
```
openjdk version "21.x.x" ...
```

## Paso 2 — Instalar Maven 3.9.11

1. Descarga Maven desde: <https://maven.apache.org/download.cgi>
2. Descomprime el ZIP en una carpeta (ej. `C:\tools\maven`).
3. Agrega `C:\tools\maven\bin` a la variable de entorno `PATH`.
4. Verifica ejecutando:

```bash
mvn -version
```

Deberías ver: `Apache Maven 3.9.11 ...`

> **Tip:** Si tienes una versión anterior a 3.9.11 el proyecto fallará al compilar con el mensaje:
> *"Este proyecto requiere Maven 3.9.11"*.

## Paso 3 — Clonar el proyecto

```bash
git clone <URL_DEL_REPOSITORIO_GIT>
cd sri-anexos-estructura-service
```

## Paso 4 — Configurar las variables de entorno

El proyecto **no almacena credenciales en el código fuente**. Todas las conexiones se configuran
mediante variables de entorno. Crea un archivo `.env` (o configúralas en tu sistema operativo /
IDE) con los siguientes valores:

```properties
# Base de datos Oracle
GESTION_ANEXOS_JDBC_USERNAME=tu_usuario_oracle
GESTION_ANEXOS_JDBC_PASSWORD=tu_password_oracle
REACTIVE_JDBC_URL_ORACLE_INTRASRI=oracle:thin:@//localhost:1521/XEPDB1

# Servidor HTTP del microservicio
ESTRUCTURA_SERVICE_HOST=0.0.0.0
ESTRUCTURA_SERVICE_PORT=8780

# Keycloak / SSO
URL_SSO_INTRANET=https://keycloak.ejemplo.gob.ec

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:4200

# Servicios remotos
CATALOGOS_SERVICE_URL=http://localhost:8781
HABILITACION_SERVICE_URL=http://localhost:8782
```

> **¿Qué es REACTIVE_JDBC_URL_ORACLE_INTRASRI?**  
> Es la URL de conexión a Oracle en formato reactivo. Ejemplo local:
> `oracle:thin:@//localhost:1521/XEPDB1`

## Paso 5 — Compilar el proyecto

```bash
mvn clean package -DskipTests
```

Esto descarga todas las dependencias, compila el código y genera el artefacto en la carpeta
`target/quarkus-app/`.

> **¿Qué significa `-DskipTests`?**  
> Omite la ejecución de pruebas unitarias para hacer la compilación más rápida. En un entorno de
> integración continua (CI) NO debes usar esta opción.

## Paso 6 — Ejecutar en modo desarrollo (hot-reload)

```bash
mvn quarkus:dev
```

Quarkus iniciará en **modo dev** con recarga automática al guardar cambios. Verás en consola:

```
__  ____  __  _____   ___  __ ____  ______
 --/ __ \/ / / / _ | / _ \/ //_/ / / / __/
 -/ /_/ / /_/ / __ |/ , _/ ,< / /_/ /\ \
--\___\_\____/_/ |_/_/|_/_/|_|\____/___/
...
Listening on: http://0.0.0.0:8780
```

### Acceder a la documentación Swagger UI

Una vez iniciado, abre en tu navegador:

```
http://localhost:8780/estructuras/api/v1/q/swagger-ui
```

Aquí podrás ver y probar todos los endpoints disponibles.

## Paso 7 — Ejecutar las pruebas

```bash
mvn test
```

Ejecuta todas las pruebas unitarias. Al finalizar verás un resumen con los tests pasados y fallidos.

Para generar el reporte de cobertura de código (JaCoCo):

```bash
mvn verify
```

El reporte HTML queda en: `target/site/jacoco/index.html`

## Paso 8 — Empaquetar para producción

```bash
mvn clean package -DskipTests
```

El artefacto ejecutable queda en:

```
target/quarkus-app/quarkus-run.jar
```

Para ejecutarlo directamente (con las variables de entorno ya configuradas):

```bash
java -jar target/quarkus-app/quarkus-run.jar
```

## Estructura de carpetas (simplificada)

```
src/
├── main/
│   ├── java/ec/gob/sri/estructura/
│   │   ├── application/      ← Casos de uso / orquestación
│   │   ├── domain/           ← Entidades, repositorios y servicios de negocio
│   │   ├── infrastructure/   ← Implementaciones: REST, BD, clientes remotos, seguridad
│   │   └── shared/           ← Utilidades, constantes, excepciones comunes
│   ├── docker/               ← Dockerfiles para construir la imagen
│   ├── kubernetes/           ← Manifiestos YAML para despliegue en Kubernetes
│   └── resources/
│       └── application.properties  ← Configuración del microservicio
└── test/                     ← Pruebas unitarias
```

## Solución de problemas comunes

| Problema | Posible causa | Solución |
|---|---|---|
| `BUILD FAILURE: Maven 3.9.11 required` | Versión de Maven inferior | Actualiza Maven a 3.9.11+ |
| `Connection refused` al iniciar | BD Oracle no disponible | Verifica que Oracle esté corriendo y que la URL sea correcta |
| `401 Unauthorized` en los endpoints | Token JWT inválido o ausente | Obtén un token válido desde Keycloak y envíalo en el header `Authorization: Bearer <token>` |
| Puerto ya en uso | Otro proceso usa el puerto 8780 | Cambia `ESTRUCTURA_SERVICE_PORT` a otro valor |

---

# 🔵 Versión nivel medio — Perspectiva de Arquitecto

Esta sección describe la arquitectura, las decisiones de diseño, el modelo de resiliencia y los
procedimientos de compilación y despliegue para perfiles técnicos con experiencia en microservicios.

## Descripción Técnica

`sri-anexos-estructura-service` es un microservicio reactivo que implementa una **arquitectura
hexagonal (Ports & Adapters)** sobre Quarkus 3.33.0 / Java 21. Toda la E/S de red y base de datos
es **no-bloqueante** mediante el stack reactivo de Mutiny + Hibernate Reactive Panache contra una
base de datos Oracle.

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Runtime | Quarkus 3.33.0 (JVM mode) |
| Lenguaje | Java 21 |
| HTTP / REST | Quarkus REST (RESTEasy Reactive) + JSON-B |
| Persistencia | Hibernate Reactive Panache + Oracle Reactive Client |
| Programación reactiva | SmallRye Mutiny (`Uni<T>`) |
| Autenticación | Quarkus OIDC + Keycloak Authorization |
| Propagación de tokens | `quarkus-rest-client-oidc-token-propagation` |
| Resiliencia | MicroProfile Fault Tolerance (Retry, CircuitBreaker, Fallback) |
| Mapeo de objetos | MapStruct 1.6.3 |
| Validación | Hibernate Validator (Jakarta Validation) |
| Observabilidad | Micrometer + Prometheus + JSON metrics endpoint |
| API Docs | SmallRye OpenAPI + Swagger UI |
| Calidad | SonarQube + PMD + JaCoCo |
| Build | Maven 3.9.11 + Quarkus Maven Plugin |
| Contenerización | Docker (UBI8 OpenJDK 21 Runtime) |
| Orquestación | Kubernetes (Deployment + Service + Ingress + HPA) |

## Arquitectura hexagonal

```
┌─────────────────────────────────────────────────────┐
│                   INFRAESTRUCTURA                    │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐  │
│  │  REST Layer  │  │  Persistence │  │  Remote   │  │
│  │  (Resource)  │  │  (Panache)   │  │  Clients  │  │
│  └──────┬───────┘  └──────┬───────┘  └─────┬─────┘  │
│         │                 │                │        │
│  ┌──────▼─────────────────▼────────────────▼─────┐  │
│  │               APPLICATION LAYER                │  │
│  │         (Agregadores / Orquestadores)          │  │
│  └──────────────────────┬─────────────────────────┘  │
│                         │                            │
│  ┌──────────────────────▼─────────────────────────┐  │
│  │                  DOMAIN LAYER                   │  │
│  │  Entities · Value Objects · Domain Services     │  │
│  │  Repository Interfaces · Enums · Exceptions     │  │
│  └────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

- **Domain Layer**: Pure Java, sin dependencias de framework. Contiene `GanPlantilla`,
  `FiltrosGanPlantilla`, `EstadoPlantilla`, `GanPlantillaService` y la interfaz
  `GanPlantillaRepository`.
- **Application Layer**: Orquesta casos de uso coordinando repositorios y servicios remotos.
- **Infrastructure Layer**: Adaptadores concretos — `GanPlantillaResource` (REST),
  `GanPlantillaRepositoryImpl` (Panache), clientes REST remotos (catalog, habilitación),
  filtros de seguridad (XSS, auditoría).

## Modelo de resiliencia (MicroProfile Fault Tolerance)

Cada servicio remoto tiene configurada una cadena `Retry → CircuitBreaker → Fallback`
que se parametriza por perfil (`%dev`, `%test`, `%prod`) en `application.properties`:

```
Retry          → Reintenta N veces con delay configurable ante fallos transitorios.
CircuitBreaker → Abre el circuito al superar el failureRatio, protegiendo al downstream.
Fallback       → Retorna un resultado seguro o lanza excepción controlada si el circuito está abierto.
```

Servicios protegidos:
- `GanHistorialRemoteService` — registrar y consultar historial de estado.
- `GanOperativoRemoteService` — consultar nombre del operativo.
- `GanUsuarioAnexoRemoteService` — consultar códigos operativos por usuario.
- `JwtValidationService` — validación de token JWT contra el IdP.

## Integraciones remotas

| configKey | Microservicio | Descripción |
|---|---|---|
| `catalogos-api` | sri-anexos-catalogos-service | Operativos y usuarios-anexo |
| `habilitacion-api` | sri-anexos-habilitacion-service | Historial de estados de plantilla |

Los tokens de autenticación se propagan automáticamente mediante `@AccessToken` del cliente OIDC de
Quarkus (Bearer token forwarding).

## API REST

- **Base path:** `/estructuras/api/v1`
- **Seguridad:** Todos los endpoints bajo `/*` requieren token JWT válido (política `authenticated`).
  Los recursos de Swagger UI (`/q/*`) están permitidos sin autenticación.
- **Swagger UI:** `http://<host>:<port>/estructuras/api/v1/q/swagger-ui`

## Variables de entorno

| Variable | Descripción | Requerida |
|---|---|---|
| `GESTION_ANEXOS_JDBC_USERNAME` | Usuario de Oracle | ✅ |
| `GESTION_ANEXOS_JDBC_PASSWORD` | Contraseña de Oracle | ✅ |
| `REACTIVE_JDBC_URL_ORACLE_INTRASRI` | URL reactiva Oracle (`oracle:thin:@//host:port/sid`) | ✅ |
| `ESTRUCTURA_SERVICE_HOST` | Host de escucha (ej. `0.0.0.0`) | ✅ |
| `ESTRUCTURA_SERVICE_PORT` | Puerto HTTP (ej. `8780`) | ✅ |
| `URL_SSO_INTRANET` | URL base de Keycloak | ✅ |
| `CORS_ALLOWED_ORIGINS` | Orígenes permitidos por CORS | ✅ |
| `CATALOGOS_SERVICE_URL` | URL base del servicio de catálogos | ✅ |
| `HABILITACION_SERVICE_URL` | URL base del servicio de habilitación | ✅ |

## Comandos de ciclo de vida

### Desarrollo local con hot-reload

```bash
mvn quarkus:dev
```

### Compilar sin pruebas

```bash
mvn clean package -DskipTests
```

### Compilar con pruebas y cobertura

```bash
mvn clean verify
```

El reporte JaCoCo queda en `target/site/jacoco/index.html`.

### Análisis de calidad con SonarQube

```bash
mvn sonar:sonar \
  -Dsonar.host.url=https://sonar.ejemplo.gob.ec \
  -Dsonar.token=<TOKEN_SONAR>
```

### Compilar imagen nativa (GraalVM requerido)

```bash
mvn clean package -Pnative
```

> Requiere GraalVM con `native-image` instalado o Docker con `QUARKUS_NATIVE_CONTAINER_BUILD=true`.

## Contenerización Docker

### Construir la imagen JVM

```bash
mvn clean package -DskipTests
docker build -f src/main/docker/Dockerfile.jvm \
  -t quarkus/sri-anexos-estructura-service-jvm:1.0.0 .
```

### Ejecutar el contenedor localmente

```bash
docker run -i --rm \
  -p 8780:8780 \
  -e GESTION_ANEXOS_JDBC_USERNAME=usuario \
  -e GESTION_ANEXOS_JDBC_PASSWORD=password \
  -e REACTIVE_JDBC_URL_ORACLE_INTRASRI="oracle:thin:@//oracle-host:1521/XEPDB1" \
  -e ESTRUCTURA_SERVICE_HOST=0.0.0.0 \
  -e ESTRUCTURA_SERVICE_PORT=8780 \
  -e URL_SSO_INTRANET=https://keycloak.ejemplo.gob.ec \
  -e CORS_ALLOWED_ORIGINS=http://localhost:4200 \
  -e CATALOGOS_SERVICE_URL=http://catalogos-service:8781 \
  -e HABILITACION_SERVICE_URL=http://habilitacion-service:8782 \
  quarkus/sri-anexos-estructura-service-jvm:1.0.0
```

## Despliegue en Kubernetes

Los manifiestos se encuentran en `src/main/kubernetes/`:

| Archivo | Recurso K8s |
|---|---|
| `1-k8s-sri-anexos-estructura-service-deploy.yaml` | Deployment |
| `2-k8s-sri-anexos-estructura-service-service.yaml` | Service (ClusterIP) |
| `3-k8s-sri-anexos-estructura-service-ingress.yaml` | Ingress |
| `4-k8s-sri-anexos-estructura-service-hpa.yaml` | HorizontalPodAutoscaler |

Aplicar en orden:

```bash
kubectl apply -f src/main/kubernetes/1-k8s-sri-anexos-estructura-service-deploy.yaml
kubectl apply -f src/main/kubernetes/2-k8s-sri-anexos-estructura-service-service.yaml
kubectl apply -f src/main/kubernetes/3-k8s-sri-anexos-estructura-service-ingress.yaml
kubectl apply -f src/main/kubernetes/4-k8s-sri-anexos-estructura-service-hpa.yaml
```

> Las variables de entorno deben inyectarse mediante `ConfigMap` y `Secret` de Kubernetes.
> No deben hardcodearse en los manifiestos YAML.

## Perfiles de configuración

Quarkus usa prefijos en `application.properties` para diferenciar ambientes:

| Prefijo | Ambiente | Uso |
|---|---|---|
| `%dev.` | Desarrollo local | `mvn quarkus:dev` |
| `%test.` | QA / pruebas | `mvn test` o pipeline CI |
| `%prod.` | Producción | JAR / imagen Docker en producción |

## Observabilidad

- **Prometheus:** `GET /estructuras/api/v1/metrics/prometheus`
- **JSON Metrics:** `GET /estructuras/api/v1/metrics/json`
- **Logs:** Nivel `TRACE` en dev, `INFO` en test/prod. La capa REST se loguea siempre en `TRACE`.

---

*Copyright 2026 Servicio de Rentas Internas — Todos los derechos reservados.*
