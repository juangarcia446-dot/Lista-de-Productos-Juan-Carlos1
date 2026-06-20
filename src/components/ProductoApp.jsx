import styles from "./productoApp.module.css";

import laptop from "../assets/laptop.jpg";
import celular from "../assets/celular.jpg";
import audifonos from "../assets/audifonos.jpg";
import teclado from "../assets/teclado.jpg";

function ProductoApp() {
  const productos = [
    {
      id: 1,
      imagen: laptop,
      nombre: "Laptop Lenovo",
      precio: 4500,
      categoria: "Computadoras",
      disponible: true,
    },
    {
      id: 2,
      imagen: celular,
      nombre: "Samsung Galaxy A56",
      precio: 2800,
      categoria: "Celulares",
      disponible: false,
    },
    {
      id: 3,
      imagen: audifonos,
      nombre: "Audífonos Bluetooth",
      precio: 350,
      categoria: "Accesorios",
      disponible: true,
    },
    {
      id: 4,
      imagen: teclado,
      nombre: "Teclado Mecánico RGB",
      precio: 450,
      categoria: "Periféricos",
      disponible: false,
    },
  ];

  return (
    <>
      <h1 className={styles.titulo}>Lista de Productos</h1>

      <div className={styles.listaProductos}>
        {productos.map((producto) => (
          <div className={styles.tarjeta} key={producto.id}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className={styles.imagen}
            />

            <h2>{producto.nombre}</h2>

            <p>
              <strong>Precio:</strong> Bs. {producto.precio}
            </p>

            <p>
              <strong>Categoría:</strong> {producto.categoria}
            </p>

            <p>
              <strong>Estado:</strong>{" "}
              {producto.disponible ? "✅ Disponible" : "❌ Agotado"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductoApp;