# Grupo75

**Curso de especialización en desarrollo mobile - Codo a Codo | IBM Skillsbuild**

Proyecto grupal: aplicación para celular sobre el clima

Descripción:

Paula es vendedora de helados. Inicialmente, comenzó a vender helados a nivel local en una playa ubicada a 1 hora de la ciudad.

¡Después de 10 años de ventas, su negocio prosperó y finalmente pudo expandirlo! Con un helado muy famoso, hoy vende helados en 10 playas de la costa.

Para cubrir la demanda y gestionar su producción correctamente Paula necesita estar al tanto de un elemento que hasta entonces no le había preocupado: **El clima.**

Con tantos sitios diferentes para venderlos ¿Puede considerar el mismo clima? Hay días que llueve en algunos sitios… ¡Hay otros en los que hace sol todo el tiempo! **¿Cómo ayudar a Paula?**

En ese proyecto, deberás generar una aplicación que consuma un servicio del clima y permita agregar ciudades a un listado. Esta información deberá ser visualizada en un mapa. Cuando el usuario seleccione una ciudad se deberá desplegar la temperatura del lugar.

Requerimientos del proyecto:

En tu proyecto deberás cubrir las siguientes funcionalidades:

**1. Home**

1.1. La sección de Home deberá mostrar información descriptiva sobre los propósitos de la aplicación tales como nombre de la app, descripción y uso.

**2. Listado de ciudades.**

2.1. Un listado que guarde las ciudades que Paula seleccione para producir los helados.
2.2. Deberá contar con un buscador que permita filtrar y buscar ciudades específicas.

**3. Modificar el listado de ciudades**

3.1. Deberás poder añadir ciudades al listado. Al terminar el proceso de guardar una ciudad ésta deberá mostrarse en un mapa y actualizarse en el listado.

3.2. Deberá contar con la posibilidad de eliminar ciudades del listado.

**4. Consultar la temperatura**

4.1. Cuando se seleccione una ciudad del listado, se deberá consultar un servicio de Clima (OpenWeatherMap, por ejemplo) para obtener la temperatura de esa ciudad. Deberás realizar una petición web a través de la API del servicio, trabajar con la respuesta del servicio del clima para obtener la temperatura de la ciudad y mostrarla en la pantalla.

**5. Persistencia de datos**

5.1. Es necesario que los datos se conserven a lo largo del ciclo de vida de la aplicación. Esto significa que cuando se reinicie la app se deberá conservar el listado de ciudades que previamente se había guardado.

**6.**  **Página &quot;Quiénes somos&quot;**

6.1. Debe haber una página que cuente un poco cómo fue desarrollada la solución, sobre quiénes son y enlaces que llevan a las documentaciones sobre las herramientas de UX usadas.

**7. Versionado y documentación del código**

7.1. Deberás realizar el _commit_ de tu código en los puntos de desarrollo clave proyecto: Desde su creación hasta cada nueva versión de este y su finalización.

7.2. Elabora un documento README en el repositorio que explique claramente los pasos necesarios para ejecutar el proyecto en otro equipo (librerías necesarias, comandos para ejecutar).

7.3. Añade al README tu Paper prototyping y el Persona Canvas (imágen o video) 

7.4. Tu proyecto deberá contar con al menos dos Branch (ramas) diferentes. El resultado final deberá encontrarse en la rama **master.**

7.5. Documenta el código fuente del proyecto, explicando el propósito de las clases y funciones más importantes.

Tecnologías/conceptos a ser usados:

**Lenguaje de programación y Toolkit:** React Native

**Fuentes de datos:** API Weather

**Persistencia de datos:** Firebase / MongoDB / Async Storage / SQL Lite / etc

**Versionamiento de código:** Git y Github
