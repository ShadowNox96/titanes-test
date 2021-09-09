import "./App.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Table } from "./components/Table";

function App() {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [tabla, setTabla] = useState([]);
  const recursos = [
    { nombre: "Agua", unidad: "l" },
    { nombre: "Polvora", unidad: "g" },
    { nombre: "Gas", unidad: "tubo" },
    { nombre: "Hojas (filo)", unidad: "unidades" },
    { nombre: "Equipo Maniobras", unidad: "unidades" },
  ];

  const eliminarRegistro = (id) => {
    tabla.splice(id,1)
    setTabla([...tabla]);
  }
  const agregarRecurso = (data) => {
    setTabla([
      ...tabla,
      {
        data: recursos[data.recurso],
        cantidad: data.unidad,
        fecha: new Date(),
      },
    ]);
    reset();
  };
  return (
    <div className="App d-flex flex-column align-items-center">
      <h1>Registro de titanes</h1>
      <div className="card col-md-2">
        <div className="card-body">
          <form className="form" onSubmit={handleSubmit(agregarRecurso)}>
            <select
              name="recurso"
              id="recurso"
              {...register("recurso")}
              className="form-select"
              aria-label="Seleccione una opcion"
            >
              <option key={10} defaultValue={"0"}>
                Seleccione una Opción
              </option>
              {recursos.map((recurso, index) => (
                <option key={index} value={index}>
                  {recurso.nombre}
                </option>
              ))}
            </select>

            {watch("recurso") >= 0 ? (
              <>
                <label className="form-label mt-4">
                  Ingrese la Unidad en:{" "}
                  {recursos[watch("recurso")]
                    ? recursos[watch("recurso")].unidad
                    : ""}
                </label>
                <input
                  type="number"
                  min="1"
                  {...register("unidad", { requierd: true })}
                  className="form-control"
                  autoFocus="on"
                />

                {errors.unidad && (
                  <small className="invalid-feedback">
                    Deben ser números enteros mayores a 0
                  </small>
                )}
              </>
            ) : (
              ""
            )}
            {watch("unidad") && (
              <button className="btn btn-success mt-2" type="submit">
                Agregar a la tabla
              </button>
            )}
          </form>
        </div>
      </div>
      {tabla.length > 0 && <Table eliminarRegistro={eliminarRegistro} tabla={tabla} />}
    </div>
  );
}

export default App;
