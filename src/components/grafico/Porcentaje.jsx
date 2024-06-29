import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Porcentaje extends React.Component {
  constructor(props) {
    super(props);

    // Definimos total como una prop
    const total = props.total;
    const cantidad = props.cantidad;

    // Calculamos el porcentaje de la cantidad respecto al total
    const porcentajeCantidad = (cantidad / total) * 100;

    this.state = {
      series: [porcentajeCantidad], // Usamos el porcentaje calculado
      options: {
        chart: {
          height: 400,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '50%',
            },
            dataLabels: {
              name: {
                show: true,
                formatter: () => props.tipoLocal,
                style: {
                    fontSize: '7px', // Cambia el tamaño del texto
                    color: 'grey', // Cambia el color del texto
                }
              },
              value: {
                show: true,
                formatter: (val) => val.toFixed(2) + '%', // Mostramos el valor como porcentaje
              },
              total: {
                show: true,
                label: props.tipoLocal,
                formatter: () => `${cantidad}/${total}`, // Mostramos la cantidad y el total en el centro
              },
            },
          },
        },
        labels: [props.tipoLocal],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={150}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default Porcentaje;
