// import PropTypes from 'prop-types';
import { Bill } from "@/app/lib/definitions";
import { PencilAltIcon, ViewIcon } from "@/assets/svg";
// import swal from 'sweetalert';

interface Props {
  data: Bill[];
}

export function Table({ data }: Props) {
  return (
    <table className='table table-lg bg-base-200 [&>thead>tr]:text-lg '>
      <thead>
        <tr>
          <th>Devuelto</th>
          <th>N` Factura</th>
          <th>Fecha</th>
          <th>Nombre</th>
          <th>Monto</th>
          <th>DNI</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              <div className='badge badge-primary badge-lg'></div>
            </td>
            <td> {item.id}</td>
            <td>{item.date}</td>
            <td>{item.idUser}</td>
            <td>{item.amount}</td>
            <td>{item.idUser}</td>
            <td>
              <button
                className='btn btn-circle'
                // onClick={() =>
                //   openModal(<ProductDetail product={product} />, {
                //     className: 'modal-product',
                //   })
                // }
              >
                <ViewIcon />
              </button>
              <button
                className='btn btn-circle'
                // onClick={() => {
                //   swal({
                //     text: "Agregar comentario, decir si se ha devulto",
                //   });
                // }
                // }
              >
                <PencilAltIcon />
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <div className='badge badge-success badge-lg'></div>
          </td>
          <td>0002</td>
          <td>13/11/2023</td>
          <td>Ximena Morales</td>
          <td>$8000</td>
          <td>3458764</td>
          <td>
            <button
              className='btn btn-circle'
              // onClick={() =>
              //   openModal(<ProductDetail product={product} />, {
              //     className: 'modal-product',
              //   })
              // }
            >
              <ViewIcon />
            </button>
            <button
              className='btn btn-circle'
              // onClick={() => {
              //   swal({
              //     text: "Agregar comentario, decir si se ha devulto",
              //   });
              // }
              // }
            >
              <PencilAltIcon />
            </button>
          </td>
        </tr>
        {/* {data.map(({ cantidad, descripcion, fecha_asiento, tipo }, index) => (
          <tr key={index}>
            <td>{descripcion}</td>
            <td>{cantidad}</td>
            <td>
              <p
                className={`w-24 py-3 text-xs text-center badge ${
                  tipo === 'ENTRADA' ? 'badge-success' : 'badge-error'
                }`}
              >
                {tipo}
              </p>
            </td>
            <td>{fecha_asiento.slice(0,10).split('-').reverse().join('-')}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
}
