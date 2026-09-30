# Tareas del Proyecto (Enfoque Frontend/UI)

Implementar las siguientes tareas utilizando **datos mock** para simular la integración con el backend.


### Historia/Módulo: NOMBRE DE LA HISTORIA
- [ ] CRITERIOS DE ACEPTACIÓN

### Historia/Módulo: Nuevo sistema de Anexos Intranet
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] Requiero contar con un MÓDULO ADMINISTRATIVO que contenga la opción de Diseño / Configuraciones, para elaborar e implementar anexos, con sus respectivas parametrizaciones:
- [ ] Las opciones debe permitir entre otras, las siguientes funcionalidades:
- [ ] Diseño de Anexos
- [ ] Administrar la Plantillas de los anexos
- [ ] Creación de casilleros del anexo
- [ ] Creación de Catálogos de Anexos 
- [ ] Relacionar Catálogos con uno o más Anexos
- [ ] Creación de secciones
- [ ] Administración de Usuarios
- [ ] Creación de niveles y subniveles
- [ ] Canales de recepción
- [ ] Parametrizaciones y Validaciones
- [ ] Búsqueda del listado de Anexos (Permite filtros por estado) con acciones para creación, modificación y actualización por cada anexo

### Historia/Módulo: Compatibilidad de navegadores y sistemas
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] El sistema en internet debe funcionar en (diversos) navegadores como, por ejemplo: (Safari, Mozilla y Chrome)
- [ ] El sistema debe funcionar adecuadamente en diversos dispositivos como, por ejemplo: (laptops – tablets – celulares)
- [ ] El sistema debe ser responsive

### Historia/Módulo: Creación de roles
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] Requiero contar con un "Rol de Administrador" que permita al usuario administrador del sistema realizar la configuración y diseño de nuevos anexos o actualización de anexos elaborados con la nueva herramienta.
- [ ] Requiero contar con un "Rol de Supervisor" para la aprobación del diseño del anexo.
- [ ] Requiero contar con una funcionalidad que permita seleccionar los grupos de obligaciones (anexos) que serán asignados a una opción de una lista de los usuarios del proceso de Declaraciones y Anexos para la implementación y/o actualización de los anexos. 
- [ ] Entre otros

### Historia/Módulo: Funcionalidades genéricas 
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] Las pantallas en las cuales el usuario administrador deba configurar las distintas funcionalidades deben contar con opciones para ACEPTAR o CANCELAR lo registrado.
- [ ] En caso de CANCELAR los registros, el sistema borra la información.
- [ ] En caso de ACEPTAR, los registros quedan guardados en el sistema y bases que correspondan.
- [ ] Las pantallas en las cuales el usuario administrador parametrice elementos como: conceptos, casilleros, tablas específicas, secciones y otros elementos de configuración según corresponda.
- [ ] Debe contar con opciones para AGREGAR, ACTUALIZAR o EDITAR y ELIMINAR los registros de dicha pantalla.
- [ ] Las acciones que realice el usuario administrador para ACTUALIZAR o ELIMINAR registros, debe contar con la funcionalidad que permita generar un mensaje de advertencia en una ventana emergente con las opciones ACEPTAR o CANCELAR (El mensaje será proporcionado funcionalmente de acuerdo con el contexto de cada pantalla). De manera general, al ejecutar la acción "ELIMINAR" debe presentar el mensaje, en caso de usar el botón "ACEPTAR" se ejecuta la acción seleccionada. En caso de "CANCELAR" los registros se mantienen como fueron creados.
- [ ] En el flujo de aprobación de anexos, no se puede enviar al flujo de aprobación mientras el anexo contenga errores.
- [ ] El sistema debe contar con una funcionalidad que permita parametrizar los mensajes del sistema que se presenten en alertas u otro tipo de controles
- [ ] El sistema debe contar con una funcionalidad que permita parametrizar notificaciones, para usuarios internos y externos mediante el uso de sistemas actuales o nuevos.
- [ ] Se requiere una funcionalidad que permita realizar búsquedas de ciertos elementos del anexo como por ejemplo búsqueda de conceptos, catálogos entre otros. 
- [ ] Se requiere una funcionalidad que permita realizar búsquedas de ciertos elementos del anexo como por ejemplo búsqueda de conceptos, catálogos entre otros. 
- [ ] Se requiere mostrar la información mediante pantallas, el sistema debe permitir configurar el número de filas que deben mostrarse por página al ejecutar algún tipo de consulta. Debe visualizar de acuerdo con el parámetro "Registros presentados por búsqueda. (ejemplo: búsqueda que se presente 50 registros por página en la búsqueda de los Anexos)

### Historia/Módulo: Historia de usuario: El sistema debe contar con una funcionalidad que permita parametrizar los mensajes del sistema tanto en alertas como controles.
- [ ] Criterio de aceptación 1

### Historia/Módulo: General
- [ ] El sistema debe permitir asociar un mensaje de advertencia a cada parámetro configurable.
- [ ] Los mensajes deben incluir íconos y debe ser visible al momento que se despliegue
- [ ] Las alertas deben mostrarse al modificar el parámetro correspondiente.
- [ ] El administrador debe poder EDITAR o ELIMINAR los mensajes desde la pantalla de configuración.
- [ ] Los mensajes deben ser parametrizables en cuanto a su extensión.
- [ ] Los mensajes son de carácter informativo y deben presentarse en una ventana con la posibilidad de cerrar dicha ventana, sin interrumpir el flujo.

### Historia/Módulo: Historia de usuario: Búsqueda de Elementos en el Diseñador de Anexos
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] Requiero una opción que permita la búsqueda de tipos de elementos.
- [ ] Buscar por una de las siguientes opciones: nombre o tipo de concepto, etiqueta del elemento o nombre de sección según corresponda.
- [ ] Mostrar resultados de la búsqueda de la plantilla: versión de anexo y fecha de creación, estado.
- [ ] Resaltar el elemento encontrado 
- [ ] Criterio de aceptación 2:
- [ ] Debe realizar la búsqueda en el anexo.

### Historia/Módulo: NOMBRE DE LA HISTORIA
- [ ] CRITERIOS DE ACEPTACIÓN

### Historia/Módulo:  Estructura del diseñador del Nuevo Sistema de Gestión de Anexos
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] Estructura del anexo
- [ ] Cada producto (anexo tributario) que se genere mediante el diseñador deberá contener la siguiente estructura 
- [ ] Sección Cabecera
- [ ] En la cabecera debe contener al menos los siguientes casilleros:
- [ ] Número de fracción: Indicara el número de archivo del total de archivos fraccionados. 
- [ ] Tipo de Identificación que puede ser entre otros RUC/Cédula/Pasaporte
- [ ] Razón Social/Apellidos y nombres
- [ ] Periodo fiscal 
- [ ] Código operativo de acuerdo con el anexo seleccionado: eje: IVA, RTF, APS
- [ ] Versión del anexo
- [ ] Casillero para identificar si es primera carga o sustitutiva 
- [ ] Un parámetro que identifique si la carga la realiza por agregar, modificar o eliminar información 
- [ ] Un código que permita identificar el canal de recepción de información del anexo.
- [ ] Otros casilleros según la necesidad de cada anexo 
- [ ] Criterios de aceptación 2:
- [ ] Debe contener un cuerpo de detalle:
- [ ] En la sección de detalle deberá contener los casilleros que se parametricen según el anexo de acuerdo con el atributo que identifique que el casillero pertenece al detalle
- [ ] Concepto
- [ ] Valor
- [ ] Niveles / agrupaciones 
- [ ] Secciones

### Historia/Módulo:  Administrar las plantillas  de los Anexos
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] En el módulo Catalogo/Configuraciones en la opción Estructura de Anexos debe presentarse la pantalla que permita la búsqueda de Anexo y debe permitir visualizar las plantillas - estructuras creadas. 
- [ ] La búsqueda presentará los siguientes datos;
- [ ] Tipo de Anexo: Presenta el listado del Catálogo de tipos de Anexo y estado del Anexo y debe tener un botón para mostrar los detalles ej: lupa
- [ ] EL resultado presentará la siguiente información:
- [ ] Tipo de Anexo: el dato del Anexo al que corresponde la plantilla
- [ ] Descripción Anexo: Nombre del anexo
- [ ] Canal: Canal al que corresponde el anexo
- [ ] Versión
- [ ] Fecha Creación
- [ ] Estado del Anexo: EN CONSTRUCCIÓN, EN REVISIÓN, APROBADO, PUBLICADO
- [ ] Acción: Ingresar, Actualizar, Eliminar, Ver, Duplicar, solicitar revisión, publicar.
- [ ] Debe presentar el botón "INGRESAR": al presionarlo se debe mostrar la pantalla, para Definir la estructura del nuevo anexo en el formato que se defina. 
- [ ] El botón actualizar: Permite la actualización del diseño y/o los campos del registro.  Se pueden realizar cambios o actualizaciones mientras el estado del anexo sea "EN CONSTRUCCIÓN". 
- [ ] El botón "EN REVISIÓN": actualizará el estado del anexo que se esté construyendo. Se quiere un mensaje de correo interno hacia el supervisor para la revisión y aprobación del anexo.
- [ ] Se proporcionará un formato del correo a enviar 
- [ ] El botón publicar: actualiza el estado del anexo a publicado.
- [ ] Cuando cambie de aprobado a publicado se deberá enviar una notificación 
- [ ] Criterio de aceptación 2:
- [ ] Botón de eliminar: Esta acción eliminara(ANULADA) las plantillas - estructuras de los anexos y será solamente para anexos que no estén en estado "Aprobado". 
- [ ] Criterio de aceptación 3:
- [ ] Botón de Ver: Permitirá visualizar la estructura del anexo.
- [ ] Criterio de aceptación 4:
- [ ] Botón de Duplicar: Permitirá duplicar la plantilla - estructura del anexo.
- [ ] Criterio de aceptación 5:
- [ ] Botón de publicar: este botón estará habilitado solamente para los anexos con canal de tipo web. Se enviará a producción el anexo conforme el diseño definido para uso del contribuyente. 
- [ ] Criterio de aceptación 6:
- [ ] El sistema debe contar con una opción de mensajes de guía en los distintos elementos del anexo como conceptos, secciones u otros. 
- [ ] El sistema debe contar con una opción para configurar los mensajes de guía.
- [ ] Criterio de aceptación 7:
- [ ] Solamente se pueden hacer cambios en anexos cuyo estado sea "EN CONSTRUCCIÓN". 

### Historia/Módulo: Creación, actualización o inactivación de conceptos - casilleros de información
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] La interfaz debe permitir crear, actualizar, o inactivar conceptos de información de acuerdo con los siguientes atributos:
- [ ] Código de concepto 
- [ ] Nombre de concepto (etiquetas)
- [ ] Descripción 
- [ ] Uso del concepto
- [ ] Descripción familiar
- [ ] Estado Concepto
- [ ] Marca versión actual
- [ ] Tipo de cambio  OJO ACTUALIZACIÓN EL MENSAJE 
- [ ] Tipo de dato que se aceptará (texto, número, fecha, hora, sea seleccionable-lista desplegable)
- [ ] Admite valores negativos en formato numérico 
- [ ] Longitud mínima
- [ ] Longitud máxima
- [ ] Formato según el tipo de dato (ej.: numérico 6 enteros 2 decimales, fecha dd/mm/aaaa)
- [ ] El casillero debe registrar un dato único por cada concepto
- [ ] El casillero debe permitir el registro múltiples filas de información
- [ ] Debe existir una función que permita buscar casilleros y conceptos creados previamente para reutilizarlos en otros anexos (deseable)
- [ ] Se requiere una codificación por nivel y casillero
- [ ] Se requiere incorporar una función para que la Descripción de los campos se muestre al pasar el cursor sobre los campo como por ejemplo: (tool tip) 
- [ ] Debe permitir configurar el casillero sea de ingreso de información o sea casillero de entrega o muestra de información (Ej:Lea una regla)
- [ ] Debe Permitir descarga de información como por ejemplo la descarga de facturas electrónicas del anexo de Gastos personales.
- [ ] Debe permitir que uno de los atributos configurables sea obtener información a partir de catálogos específicos o genéricos (tablas ADM)
- [ ] Debe determinar si el campo es de cabecera o detalle.
- [ ] Debe permitir parametrizar una función para determinar formulas requiero presentar en diferentes partes del anexo, por ejemplo (sumar, contar, etc.)
- [ ] Criterios de aceptación 2:
- [ ] Requiero que permita colocar valores por default en los casilleros tanto numérico como de texto.

### Historia/Módulo:  Implementación de Fórmulas en el Diseñador de Anexos Tributarios
- [ ] Criterios de Aceptación 1:

### Historia/Módulo: General
- [ ] Catálogo de fórmulas disponibles
- [ ] El sistema debe permitir configurar y aplicar fórmulas como, por ejemplo:
- [ ] Total de suma por sección 
- [ ] Suma: =A + B (Donde A puede ser también campos de totales)
- [ ] Resta: =A - B
- [ ] Multiplicación: =A * B
- [ ] División: =A / B
- [ ] Porcentaje: = (A * B) / 100
- [ ] Condicionales: =SI (A > B, "Mayor", "Menor")
- [ ] Redondeo: =REDONDEAR (A, 2)
- [ ] Validación de rango: =SI (A >= 0 Y A <= 100, "Válido", "Inválido")
- [ ] Acumuladores: para totales por grupo o periodo
- [ ] Cálculo de impuestos: IVA, Renta, Retenciones, etc.
- [ ] Promedio: Promedio de varias sumas de campos, niveles, secciones etc. 
- [ ] Criterios de Aceptación 2:
- [ ] Editor de fórmulas
- [ ] El diseñador debe incluir un editor visual o sintáctico para construir fórmulas con ayuda contextual.
- [ ] Debe permitir seleccionar casilleros, operadores y funciones desde una interfaz amigable.
- [ ] Criterios de Aceptación 3:
- [ ] Las fórmulas deben poder asociarse a tipos específicos de anexos tributarios (ej. IVA, RTF, APS).

### Historia/Módulo:  Creación de niveles - subniveles 
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] El sistema debe permitir crear, editar y eliminar o inactivar niveles y asignarles niveles. (por ejemplo: activos - activos fijos - vehículos- detalle (placa, valor, avalúo).
- [ ] Debe contar con una regla de negocio que permita definir si un casillero es dependiente de otro.
- [ ] Debe contar con una funcionalidad que permita establecer niveles padre/hijo 
- [ ] Debe contar con una funcionalidad que permita que los niveles se asocien a secciones específicas.
- [ ] El sistema debe permitir definir reglas condicionales tipo “si el casillero A tiene valor X, mostrar casillero B”.
- [ ] |
- [ ] No se permite que un nivel jerárquico sea definido como padre de sí mismo directa o indirectamente.
- [ ] El sistema debe validar que no se formen ciclos en la estructura jerárquica.
- [ ] Un casillero no puede depender de otro que esté en un nivel inferior o no relacionado jerárquicamente.
- [ ] Debe contar con una funcionalidad para agregar subniveles de acuerdo con campos o secciones determinadas
- [ ] Criterios de aceptación 2:
- [ ] El sistema debe permitir definir varias secciones en donde el nivel que define la jerarquía estará dado por la profundidad en la que se encuentre, así los casilleros se pueden definir en el último nivel, y estarán agrupados de acuerdo con la jerarquía de las secciones a las que pertenece. En una sección se puede admitir totalizadores.
- [ ] Las unidades de información están conformadas por los registros con sus niveles y subniveles, agrupaciones, secciones entre otros.
- [ ] Los cambios en el grupo padre se reflejan en todas las instancias donde se utilice este grupo.
- [ ] Generar alertas al administrador funcional en inactivaciones o cambios que afecten a relaciones entre casilleros padre / hijo con sus agrupaciones, secciones. En el momento de guardar, el diseñador debe mostrar un mensaje: " Esta seguro de guardar los cambios realizados".
- [ ] Debe contar con una funcionalidad para crear agrupaciones dentro subniveles de acuerdo con casilleros o secciones determinadas.

### Historia/Módulo: Previsualizar el anexo con su estructura
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] Se debe contar con una opción que genere un mapa visual que permita navegar con los niveles y relaciones, en función de la estructura definida.
- [ ] Todo casillero debe estar vinculado a un nivel o agrupación. 

### Historia/Módulo:  Funcionalidad de expandir o extraer en secciones
- [ ] Criterio de aceptación 1

### Historia/Módulo: General
- [ ] Se debe contar con la funcionalidad en cada sección que permita expandir o contraer las secciones del anexo con todos sus casilleros incluidos.
- [ ] En dispositivos móviles, las secciones deben poder contraerse por defecto para facilitar el desplazamiento.
- [ ] Las secciones deben estar contraídas por defecto, salvo que se indique lo contrario en la configuración.

### Historia/Módulo: Crear secciones / Unidades de información
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] El diseñador debe permitir agregar una o más secciones, subsecciones / unidades de información dentro de una misma pantalla.
- [ ] El diseñador debe permitir agregar pantallas para crear nuevas secciones, subsecciones / unidades de negocio
- [ ] El diseñador debe permitir agregar botones para avanzar o retroceder entre nuevas pantallas de secciones / unidades de información.
- [ ] Cada sección / unidades de información debe tener un título y una descripción opcional.
- [ ] Las secciones / unidades de información deben poder reordenarse mediante una funcionalidad de arrastrar y soltar.
- [ ] Los casilleros deben poder asignarse a una sección específica.
- [ ] El sistema debe guardar la estructura del formulario con sus secciones / unidades de información.
- [ ] El sistema debe permitir definir condiciones tipo “si el casillero X tiene valor Y, mostrar la sección Z”.
- [ ] La plantilla del anexo se puede agregar, modificar, o eliminar en estado “EN CONSTRUCCIÓN”.
- [ ] Criterio de aceptación 2:
- [ ] El sistema debe mostrar los casilleros, niveles y/o secciones del anexo para seleccionar el o las unidades de información y determinar los registros por anexo.
- [ ] Las secciones / unidades de información están conformadas por los registros con sus niveles y subniveles, agrupaciones, secciones entre otros.
- [ ] Las unidades de información conformadas permitirán la explotación de información a nivel de detalle de registros.

### Historia/Módulo:  Personalizar secciones
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] Debe existir una funcionalidad que permita colocar títulos a las secciones.  
- [ ] Los cambios deben guardarse automáticamente o mediante un botón de "Guardar" en el diseñador. 
- [ ] Debe validarse que el título no esté vacío.
- [ ] La descripción puede ser opcional y permitir formato básico (negritas, cursiva, etc.) de acuerdo con guía de comunicación.

### Historia/Módulo:  Eliminar o inactivar secciones
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] Debe haber una funcionalidad que permita inactivar o eliminar secciones.
- [ ] Debe mostrar un mensaje de alerta antes de eliminar una sección que tenga elementos en su estructura, se mostrará un mensaje "Esta seguro de eliminar". Se puede eliminar secciones en el anexo siempre y cuando   el estado se encuentre “EN CONSTRUCCIÓN”. 

### Historia/Módulo:  Reordenar secciones
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] Requiero una funcionalidad para cambiar el orden de secciones mediante opción ej: drag and drop 
- [ ] El nuevo orden debe guardarse automáticamente o mediante un botón de "Guardar cambios".
- [ ] El orden debe reflejarse en la vista previa del anexo.

### Historia/Módulo:  Editar secciones
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] Se puede editar secciones
- [ ] Se pueden agregar casilleros relacionados al anexo a las distintas secciones 

### Historia/Módulo:  Creación del módulo de aprobación 
- [ ] Criterio de aceptación 1: 

### Historia/Módulo: General
- [ ] En Módulo de Aprobación se debe incluir la opción de menú gestión de aprobación de anexo. 
- [ ] Debe contener una opción para buscar, visualizar la estructura del anexo de acuerdo con el estado "EN REVISIÓN" por tipo de anexo. 
- [ ] Los campos que presentara la pantalla son:
- [ ] Tipo de Anexo
- [ ] Versión del Anexo 
- [ ] Usuario que realizo el Anexo 
- [ ] Criterio de aceptación 2: 
- [ ] Se requiere un botón de acción (ej: Lupa) para visualizar la estructura del Anexo. 
- [ ] Botón de acción para aprobar el anexo (Icono ej.: visto)
- [ ] Botón de acción para devolver (Icono ej.: x )
- [ ] Al presionar el Botón de acción para devolver (Icono ej.: x ), el sistema debe presentar un campo para registrar los motivos. Ingreso texto 500 caracteres.
- [ ] Debe haber un botón para aceptar el texto. 
- [ ] Aceptado el texto se debe actualizar el estado de la plantilla a "EN CONSTRUCCIÓN" y se debe enviar un correo al administrador para solicitar la revisión. (Se proporcionará el formato de correo).

### Historia/Módulo:  Estados de los anexos en su etapa de diseño.
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] Se debe contar con una funcionalidad para administrar los estados de los anexos.
- [ ] Los estados de las plantillas de los anexos son:
- [ ] "EN CONSTRUCCIÓN"
- [ ] "EN REVISIÓN"
- [ ] "APROBADO"
- [ ] "PUBLICADO"
- [ ] Criterio de aceptación 2:
- [ ] Se debe contar con una funcionalidad para cambiar de estados según su avance.
- [ ] La creación de un nuevo anexo inicia en estado “EN CONSTRUCCIÓN”.
- [ ] El sistema debe contar con una funcionalidad para que pueda enviar a un usuario supervisor la revisión del anexo, cambiando el estado a "EN REVISIÓN” 
- [ ] Solo los anexos “APROBADOS” pueden pasar a un estado “PUBLICADOS”.
- [ ] El sistema debe registrar quién realizó cada cambio de estado y cuándo.
- [ ] Criterio de aceptación 3:
- [ ] El anexo que se publique debe mantener la configuración visual implementada en ambientes no productivos, basada en la Guía de Imagen.
- [ ] El anexo desplegado debe respetar el principio de usabilidad adecuado.

### Historia/Módulo:  Flujo de aprobación
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] Mediante el botón "EN REVISIÓN" en la pantalla de administración plantilla - estructura de anexos, se quiere generar un mensaje de correo interno hacia el supervisor para la revisión del anexo antes de su aprobación. Se proporcionará un formato del correo a enviar. 
- [ ] Se debe contar con una opción para que un usuario supervisor pueda aprobar o devolver la solicitud de aprobación del anexo. 
- [ ] El sistema debe contar con una opción para que el usuario supervisor pueda registrar el motivo de aprobación o rechazo. 
- [ ] El menú debe contar con una opción para que el administrador pueda verificar si el anexo fue devuelto para iniciar nuevamente la revisión de los anexos. 
- [ ] Criterio de aceptación 2:
- [ ] El sistema debe contar con una opción para que el supervisor pueda mirar la estructura del anexo en formato que se defina (ej: json - XML) de forma visual con las secciones, agrupaciones, niveles, casilleros, catálogos vinculados y validaciones.
- [ ] Si el anexo es rechazado, el sistema debe notificar al usuario administrador para que realice los ajustes. 
- [ ] Si el estado del anexo es aprobado o publicado no se pueden hacer modificaciones en dicho anexo.
- [ ] Se debe habilitar una función para que el supervisor pueda devolver el anexo en estado aprobado o publicado sea devuelto al usuario administrador. 

### Historia/Módulo: Historia de usuario: Administración de catálogos específicos
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] Requiero una función de búsqueda de catálogos, que incluya diferentes filtros y realice búsquedas del contenido de los catálogos.
- [ ] El sistema debe verificar que no existan catálogos creados previamente para evitar duplicidad realizando una revisión en las bases con respecto al código y descripción de las opciones del catálogo y mostrando una alerta en caso de que el sistema identifique que ya encuentra creado dicho registro en otro catálogo
- [ ] El sistema debe permitir crear, actualizar, eliminar o inactivar catálogos.
- [ ] Para eliminar catálogos se debe verificar que no exista catálogos asociados a anexos activos
- [ ] Debe contener los iconos de actualizar, agregar, eliminar.
- [ ] Debe permitir el código, nombre, tipo, descripción, estado.
- [ ] Debe permitir importar y exportar desde archivo el listado que conforma el catálogo.
- [ ] Una vez que se ingresa los datos de los catálogos debe existir una opción de aceptar o cancelar la creación del catálogo.

### Historia/Módulo: Historia de usuario: Relacionar catálogos específicos por anexo
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] Cada anexo puede incluir uno o más catálogos.
- [ ] Permitir asociar el catálogo a uno o varios anexos
- [ ] Se puede asignar un catálogo como, por ejemplo: tipo lista desplegable, selección múltiple, radio button, etc.(pantalla emergente)

### Historia/Módulo: Historia de usuario: Obtener información de catálogos para relacionarlos con casilleros
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] Se requiere asociar uno o más casilleros a los catálogos, para que muestre la información de dicho catálogo. 
- [ ] Los catálogos deben ser visibles en el sistema para su revisión por parte del usuario administrador.
- [ ] Debe permitir eliminar la relación entre casilleros y catálogos. 

### Historia/Módulo: Historia de usuario: Parametrización de mecanismos de recepción de información 
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] Requiero una función para determinar los canales de recepción de los anexos.
- [ ] Los canales predeterminados son: anexos en web, anexos mediante archivo, anexos mediante web-service o ftp automático según definición.
- [ ] Requiero configurar para que los anexos puedan ser receptados en más de un canal. 
- [ ] Los diseños de los anexos deben generar la estructura para el canal de recepción correspondiente.
- [ ] Criterios de aceptación 2:
- [ ] Se requiere que los canales de recepción deben realizar las validaciones del diseño y de reglas de negocio.
- [ ] Se requiere que cada canal puede configurarse con parámetros específicos para la recepción adecuada de información como por ejemplo en canal web limitar el número de registros a ingresar desde la interfaz, o tamaño de archivo a enviar por ese canal o invocaciones en web services.
- [ ] Los canales de recepción deben generar las respectivas notificaciones al contribuyente cuando realice cargas o el sistema haya finalizado el proceso de revisión de información.
- [ ] El sistema debe permitir al administrador crear, modificar, actualizar y eliminar parametrizaciones.
- [ ] El sistema debe mostrar un listado completo de todas las parametrizaciones existentes.
- [ ] El sistema debe permitir filtrar y buscar parametrizaciones por nombre, tipo o estado.
- [ ] Criterio de aceptación 2:
- [ ] Herramienta que me permita registrar las parametrizaciones, relacionadas a una funcionalidad especifica. Ejemplo: Perfilamiento, correspondencia entre casillero y fuente de datos, entre otros.
- [ ] Parametrización de perfilamiento: Mostrar u ocultar campos o secciones de un anexo con base a condiciones establecidas
- [ ] Así: La sección "Activos" se muestra cuando exista un listado de preguntas parametrizables.  Tales como:
- [ ] - Es persona natural SI  NO
- [ ] - Requiere informar activos SI NO
- [ ] Parametrización de correspondencia entre casillero y fuente de datos, por ejemplo: El valor que debe mostrar el sistema en el casillero "Total Activos" debe provenir de la declaración del periodo anterior.

### Historia/Módulo: Historia de usuario: Dependencia de niveles - subniveles de casilleros.
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] Debe contar con una parametrización que permita definir si un casillero es dependiente de otro casillero, tipo “si el casillero A tiene valor X, mostrar casillero B”. Ejemplo: 
- [ ] Si el casillero " tiene activos" tiene el valor SI, muestre el campo valor del "Activo".
- [ ] Debe contar con una parametrización que permita definir si un casillero es dependiente de otro casillero, tipo filtrado ejemplo: 
- [ ] Si el campo "País" es Ecuador habilitar el campo provincia donde los valores a presentar dependen del campo "País".

### Historia/Módulo: Historia de usuario: Mecanismo de validaciones para el Sistema de Gestión de Anexos.
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] Herramienta que me permita registrar las validaciones, relacionadas a una funcionalidad especifica. Ejemplo: Perfilamiento, correspondencia entre casillero y fuente de datos, entre otros.
- [ ] Parametrización de correspondencia entre casillero y fuente de datos, por ejemplo: El valor que debe mostrar el sistema en el casillero "Total Activos" debe provenir de la declaración del periodo anterior.
- [ ] Para el registro se deben contar con datos que permitan su identificación como: número de validación, descripción del caso, anexo asociado, casillero asociado, estado de la validación, condición u operación lógica de la validación, entre otros.
- [ ] Criterio de aceptación 2:
- [ ] El sistema debe permitir definir condiciones (ej. “si campo A es mayor que 100”)
- [ ] El sistema debe permitir definir acciones (ej. “ocultar campo B”, “mostrar mensaje de error”)
- [ ] El sistema debe permitir guardar la regla como “borrador” hasta que esté lista
- [ ] Cada vez que se edita una regla, se guarda una nueva versión(deseable)
- [ ] Criterio de aceptación 3:

### Historia/Módulo: Historia de usuario: Identificadores únicos (Primary key )
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] Requiero una propiedad en el casillero para control de duplicados en momento de registro y/o procesamiento del archivo cargado. Los casilleros que tengan la marca deben tener asociada la regla de negocio que especifique la regla a validar. Esta marca es parte de la unidad de la unidad de información. 
- [ ] El sistema deberá validar los casilleros marcados como primary key en una sección / unidad de información que no se encuentre creado previamente.

### Historia/Módulo:  Implementación de Pistas de auditoría
- [ ] Criterios de aceptación 1:

### Historia/Módulo: General
- [ ] Se requiere capturar información del elaborador del anexo cuando sea aprobado por parte del supervisor y la información se presentará cuando se presione el botón "Aprobar"
- [ ] Criterios de aceptación 2:
- [ ] Se requiere implementar pistas de auditoria en el estado de aprobación de anexos conforme lo siguiente:
- [ ] Cuando se presione el botón Aprobar se deberá guardar la pista de auditoría sobre la funcionalidad crítica
- [ ] Las pistas de auditoría critica deben cumplir la definición institucional
- [ ] Usuario que elaboró el diseño, usuario que aprobó el diseño, fecha, hora, código de la aplicación, código del módulo, ambiente, ip, nombre del equipo, código de la aplicación origen, tipo de auditoría, acción, método, proceso.
- [ ] Para el registro de las creaciones y/o modificaciones, la pista de auditoria deberá comparar entre versiones y presentar las modificaciones con el valor anterior y valor actual.

### Historia/Módulo: NOMBRE DE LA HISTORIA
- [ ] CRITERIOS DE ACEPTACIÓN

### Historia/Módulo:  Catastro
- [ ] Criterio de aceptación 1: 

### Historia/Módulo: General
- [ ] El sistema deberá consumir la información del contribuyente como RUC, Razón social, medios de contacto u otros atributos relacionados a la información del contribuyente

### Historia/Módulo:  Alertas y Avisos
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] El sistema mediante ALERTAS Y AVISOS deberá comunicar al sujeto el procesamiento del anexo. 
- [ ] El sistema mediante ALERTAS Y AVISOS deberá comunicar al sujeto el registro de la confirmación de recepción del anexo para su constancia.
- [ ] El sistema mediante ALERTAS Y AVISOS deberá comunicar al sujeto el registro del rechazo del anexo para su constancia.
- [ ] Entre otros

### Historia/Módulo:  Notificar publicación anexo 
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] Requiero enviar un correo electrónico interno hacia los usuarios internos para notificar la publicación de nuevo anexo.
- [ ] Destinatario de la notificación ej: los usuarios internos
- [ ] Criterio de aceptación 2:
- [ ] La notificación enviará el texto definido
- [ ] Criterio de aceptación 4:
- [ ] Como emisor será el departamento DNRAC (Por definir)

### Historia/Módulo:  Notificar solicitud revisión: 
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] Requiero enviar un correo electrónico interno desde el nuevo sistema hacia la bandeja de entrada institucional del usuario supervisor. 
- [ ] Destinatario de la notificación ej: Rol supervisor
- [ ] Criterio de aceptación 2:
- [ ] La notificación enviará el texto definido
- [ ] Criterio de aceptación 4:
- [ ] Como emisor será el departamento DNRAC (Por definir)

### Historia/Módulo:   Gestor de Obligaciones
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] El sistema deberá proporcionar la información relacionada a la obligación tributaria a la que corresponda cada anexo: periodo fiscal con su periodicidad, fecha de vencimiento y marcación de cumplimiento.
- [ ] Criterio de aceptación 2:
- [ ] El sistema de anexos deberá informar a gestor de obligaciones el identificador de la obligación y la fecha de presentación para que se registre la obligación cumplida.

### Historia/Módulo:  Pistas de Auditoría
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] El sistema deberá registrar los accesos y acciones realizadas por parte de los usuarios a los módulos u opciones que se hayan definido de mayor sensibilidad para generar los reportes correspondientes.

### Historia/Módulo:  Pistas de Auditoría funcionalidades críticas / Consulta de Talón Resumen  
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] En módulo de consultas la opción talón resumen botón descargar debe generarse la pista de auditoria considerando los filtros establecidos, con el archivo que se generó, teniendo en cuenta la auditoria estándar para funcionalidades críticas. 

### Historia/Módulo:  Pistas de Auditoría funcionalidades críticas / Consulta de Archivo cargado  
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] En módulo de consultas la opción archivo cargado botón descargar debe generarse la pista de auditoria considerando los filtros establecidos, con el archivo que se generó, teniendo en cuenta la auditoria estándar para funcionalidades críticas. 

### Historia/Módulo:   Administración de Información 
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] El sistema deberá proporcionar la información de las tablas transversales para el adecuado funcionamiento de los anexos, como, por ejemplo:
- [ ] Catálogo ADM Año
- [ ] Catálogo ADM Mes
- [ ] Catálogo ADM Periodo
- [ ] Catálogo ADM Periodicidad
- [ ] Catálogo ADM Ubicación Geográfica
- [ ] Catálogo ADM Nivel Geográfico
- [ ] Catálogo ADM Nivel Territorio
- [ ] Catálogo ADM Países
- [ ] Catálogo ADM Provincia
- [ ] Catálogo ADM Cantón 
- [ ] Catálogo ADM Parroquia
- [ ] Catálogo ADM Cantón - Provincia
- [ ] Catálogo ADM Cantón - Parroquia
- [ ] Catálogo ADM Obligaciones
- [ ] Catálogo ADM Identificaciones
- [ ] Catálogo ADM Aplicaciones
- [ ] Catálogo ADM Instituciones financieras
- [ ] Catálogo ADM Feriados
- [ ] Catálogo ADM Estructura organizacional
- [ ] Catálogo ADM Formularios
- [ ] Catálogo ADM Grupo de Impuesto
- [ ] Catálogo ADM Grupo Obligación
- [ ] Catálogo ADM Tipo de moneda
- [ ] Entre otros
- [ ] La funcionalidad debe permitir identificar el nivel al que se requiere usar el catálogo. (eje. Ubicaciones geográficas), así utilizando por ejemplo el parámetro P debe traer el listado de Provincias, de ser C el parámetro y seleccionada la Provincia traer el listado de Cantones, de ser PR el parámetro y seleccionada el Cantón presentar el listado de Parroquias.

### Historia/Módulo:  Autorización y Autenticación (Internet)
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] Se requiere la integración con SSO para que los usuarios se autentiquen para acceder al sistema de internet. 

### Historia/Módulo:  Autorización y Autenticación (Intranet)
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] Se requiere la integración con SSO para que los usuarios se autentiquen para acceder al sistema de intranet.

### Historia/Módulo:  Generador de Documentos
- [ ] Criterio de aceptación 1:

### Historia/Módulo: General
- [ ] El sistema deberá generar el documento de resultado de carga exitosa de la obligación a través del GENERADOR DE DOCUMENTOS, para dar a conocer al sujeto el reporte de la declaración/ resumen del anexo. 

## Guía de Datos Mock
- Crear objetos JSON locales para simular respuestas de API.
- Asegurar que el flujo de la UI sea completo e independiente del servidor real.