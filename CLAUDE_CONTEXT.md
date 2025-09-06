# Claude Context - Chat NexusAI

## Descripción del Proyecto
Chat web minimalista con diseño oscuro/rojo inspirado en interfaces de IA modernas.

## Estructura del Proyecto
```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Barra superior con logo y botones
│   │   ├── MessagesBox.tsx     # Área de mensajes del chat
│   │   └── InputArea.tsx       # Input para escribir mensajes
│   ├── pages/
│   │   └── Home.tsx           # Página principal que conecta componentes
│   └── index.css              # Estilos globales y animaciones
```

## Stack Tecnológico
- **React 19** + TypeScript
- **Tailwind CSS** para estilos
- **Vite** como bundler
- **React Icons** (fa-icons)

## Estado Actual del Chat

### Funcionalidad Implementada:
1. **Envío de mensajes**: Usuario puede escribir y enviar
2. **Auto-resize**: Textarea se expande automáticamente
3. **Respuestas automáticas**: Bot responde con frases aleatorias
4. **Delay simulado**: 1-2.5 segundos antes de respuesta del bot
5. **UI diferenciada**: 
   - Usuario: derecha, fondo rojo/transparente
   - Bot: izquierda, fondo gris

### Flujo de datos actual:
```
InputArea → handleSendMessage → Home → MessageBox
  |              |                |        |
  |              |                |        └─ Renderiza todos los mensajes
  |              |                └─ Maneja estado de mensajes
  |              └─ Agrega mensaje usuario + respuesta bot
  └─ Captura input del usuario
```

### Estructura de mensajes:
```typescript
messages: {text: string, sender: 'user' | 'bot'}[]
```

## Tema Visual
- **Colores**: Negro (#000), Gris (#111, #374151), Rojo (#ef4444)
- **Tipografía**: Fuente sistema con espaciado limpio
- **Animaciones**: fade-in para mensajes, typing indicator, scrollbar custom
- **Layout**: Flex column, header fijo, main expandible

## Próximos pasos pendientes:
- [ ] Indicador visual de "escribiendo" durante delay
- [ ] Scroll automático al último mensaje
- [ ] Mejoras de UX/UI adicionales

## Comandos útiles:
```bash
cd frontend
npm run dev     # Servidor desarrollo
npm run build   # Build producción
npm run lint    # Verificar código
```

## Metodología de Trabajo

### **IMPORTANTE: Proceso obligatorio para cada tarea**

#### **1. 📋 Planificación (SIEMPRE PRIMERO)**
Antes de tocar cualquier código, DEBO explicar:
- **¿Qué vamos a implementar?** - Descripción clara de la funcionalidad
- **¿Por qué es necesario?** - Justificación y beneficios
- **¿Cómo se conecta?** - Integración con código existente
- **¿Qué archivos cambiarán?** - Lista específica de modificaciones

#### **2. ⏳ Esperar Aprobación**
- NO implementar hasta recibir confirmación del usuario
- El usuario debe decir "sí", "procede", "ok" o similar
- Si hay dudas, aclarar antes de continuar

#### **3. 🔧 Implementación (SOLO DESPUÉS DE APROBACIÓN)**
- Hacer los cambios específicos explicados
- Comentar cada modificación importante
- Usar TodoWrite para tracking si es tarea compleja

#### **4. ✅ Verificación**
- Explicar qué probar
- Mencionar posibles problemas
- Sugerir siguientes pasos

### **Ejemplo práctico:**
```
Usuario: "Quiero agregar indicador de typing"

❌ MAL: Directamente implementar el código

✅ BIEN:
1. "Te explico la lógica del typing indicator..."
2. Esperar "sí" del usuario
3. Entonces implementar paso a paso
```

### **Recordatorios:**
- **NUNCA saltar la explicación inicial**
- **NUNCA implementar sin aprobación**
- **SIEMPRE explicar antes de hacer**

---
**Última actualización**: Chat básico funcional con respuestas automáticas aleatorias