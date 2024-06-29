import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGlobalData } from '../context';

  
  const CustomShapeBarChart = () => {

    const {
      logo_alimentos,
      logo_carniceria,
      logo_farmacia,
      logo_fiambres,
      logo_panaderia,
      logo_verduleria,
      appData
    }=useGlobalData();

    const data = [
        { name: 'Alimentos', Cantidad: appData.comercios.filter(comercio => comercio.rubros.includes(1)).length, image: logo_alimentos },
        { name: 'Carniceria', Cantidad: appData.comercios.filter(comercio => comercio.rubros.includes(2)).length, image: logo_carniceria },
        { name: 'Verduleria', Cantidad: appData.comercios.filter(comercio => comercio.rubros.includes(3)).length, image: logo_verduleria },
        { name: 'Farmacia', Cantidad: appData.comercios.filter(comercio => comercio.rubros.includes(4)).length, image: logo_farmacia },
        { name: 'Panaderia', Cantidad: appData.comercios.filter(comercio => comercio.rubros.includes(5)).length, image: logo_panaderia },
        { name: 'Fiambreria', Cantidad: appData.comercios.filter(comercio => comercio.rubros.includes(6)).length, image: logo_fiambres },
        
      ];
      const CustomBar = (props) => {
        const { x, y, width, height, payload } = props;
      
        return (
          <g>
            <rect x={x} y={y} width={50} height={height} fill="rgba(16,108,252,0.7)" />
            <image x={x} y={y} width={40} height={40} xlinkHref={payload.image} />
          </g>
        );
      };
    return (
      <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Cantidad" fill="rgba(16,108,252,0.9)" shape={<CustomBar />} />
      </BarChart>
    </ResponsiveContainer>
    </div>
    );
  };
  
  export default CustomShapeBarChart;
  