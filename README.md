# Curso de especialización en desarrollo mobile - Codo a Codo | IBM Skillsbuild

**Grupo75**

A. Ver [Consigna](Consigna.md)

B. Pasos necesarios para ejecutar el proyecto en otro equipo (librerías necesarias, comandos para ejecutar).

1) Abrir una terminal y clonar este repositorio.

	**git clone https://github.com/milaAR/Grupo75.git**

2) Luego ingresar con la terminal a la carpeta Grupo75 de la siguiente forma:
	**cd Grupo75**

3) Instalar los paquetes de npm que figuran en package.json
	para ello ejecute en la terminal lo siguiente:
	**npm i**

4) Conectar un dispositivo Android con cable de datos o bien un activar un dispositivo virtual AVD.
	Verificar conectividad con el mismo escribiendo en la terminal
	**adb shell ls**

	Deberia obtener un listado de archivos del dispositivo. En caso negativo instalar las [SDK Platform Tools](<https://developer.android.com/studio/releases/platform-tools>) y luego invoque
	la ruta completa dei binario  de adb (Android Debub Bridge), o bien registre la ruta del mismo en el PATH de su plataforma de desarrollo.

5) En la carpeta del proyecto ejecutar lo siguiente en la terminal para iniciar el servidor de Metro (Javascript Bundler para React Native)
	**npx react-native start**

6) Abrir otra terminal y situarse en la carpeta del proyecto
	ejemplo **cd 'rutaDelProyecto/Grupo75'**
	Luego ejectute la siguiente linea para iniciar la compilacion e instalacion de la App en su dispositivo Android.

	**npx react-native run-android**

7) Si realiza cambios en el codigo fuente,  inmediatamente se disparara la actualizacion de la App (rebundling).

	Si por alguna razon se perdio la conexion entre el dispositvo y la plataforma de desarrollo intente recuperar la conectividad
	ejecutando lo siguiente:

	**adb reverse tcp:8081 tcp:8081**

C. Paper prototyping y el Persona Canvas (imagen o video)


	Espacio para paper prototype
	**Prototipo en Figma:**https://www.figma.com/community/file/1046957896877614265/MELT-APP

	[Persona Canvas](PersonaCanvas.pdf)
