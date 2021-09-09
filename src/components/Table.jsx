import React from "react";

export const Table = ({ tabla, eliminarRegistro }) => {
  return (
    <div className="col-md-4">
      <table className="table table-hover mt-5">
        <thead className="table-secondary">
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Nombre</th>
            <th scope="col">Unidad</th>
            <th scope="col">Fecha</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((t, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{t.data.nombre}</td>
              <td>{t.cantidad}</td>
              <td>{`${t.fecha.getFullYear()}-${t.fecha.getMonth()}-${t.fecha.getDate()}`}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={(e) => {
                    e.preventDefault();
                    eliminarRegistro(index)
                  }}
                >
                  <i className="bx bxs-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
