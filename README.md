# ☕ Simple Coffee Listing

Aplicación React que muestra un catálogo de cafés consumiendo datos desde una API externa. Construida con **Vite** como herramienta de desarrollo.

## Integrantes
- Yamith Ardila
- Fabian Coral

## Características
- Consumo de API con `fetch()` y `useEffect`
- Componentes reutilizables (`Card`, `List`, `FilterBar`)
- Filtrado por disponibilidad con **Lifting State Up**
- **Skeleton Loading** mientras se cargan los datos
- **Empty State** cuando no hay resultados
- **Diseño Responsive** con CSS puro y media queries

## Instrucciones de ejecución
```bash
npm install
npm run dev
```

## Tecnologías
- React 19
- Vite 6
- CSS3 (Grid, Flexbox, Media Queries)

## Estructura de Componentes

| Componente     | Responsabilidad                                                                 |
|----------------|---------------------------------------------------------------------------------|
| `<App />`      | Componente padre. Gestiona estado global, consumo de API y filtrado             |
| `<FilterBar />`| Botones de filtrado (Todos / Disponibles). Recibe estado y callback del padre   |
| `<List />`     | Mapea los datos filtrados y renderiza, skeletons o empty state       |
| `<Card />`     | Tarjeta individual de café. Recibe props: imagen, nombre, precio, rating, etc.  |
| `<SkeletonCard />`| Placeholder animado durante la carga                                        |
| `<EmptyState />`  | Mensaje amigable cuando no hay resultados                                    |
