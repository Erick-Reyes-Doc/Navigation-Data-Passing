# 🔐📦 Expo App - SecureStore y SQLite

Este proyecto fue desarrollado como parte de una actividad práctica para demostrar el uso de **almacenamiento seguro con SecureStore** y **base de datos local con SQLite** en una app creada con **React Native + Expo**.

> 💡 El objetivo es implementar y probar almacenamiento de datos con ambas tecnologías, utilizando la estructura de una app con tabs (`expo-router` o navegación por pestañas).

---

## 🚀 Tecnologías utilizadas

- 📱 React Native + Expo
- 🔒 [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/)
- 🗄️ [expo-sqlite](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- 🧠 React Hooks (`useState`, `useEffect`)
- 🧭 Navegación por tabs (React Navigation o Expo Router)

---


---

## ✅ Funcionalidades implementadas

### 🔐 SecureStore

- ✅ Guardar datos seguros (clave-valor)
- 🔄 Recuperar datos almacenados
- 🗑️ Eliminar datos del almacenamiento seguro

### 🗄️ SQLite

- 🏗️ Crear base de datos local si no existe
- 📋 Crear tabla `items`
- ➕ Insertar registros desde un formulario
- 🔍 Consultar y mostrar los datos en pantalla

---


## 📦 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Erick-Reyes-Doc/SecureStore-SQLite-App.git
cd SecureStore-SQLite-App
