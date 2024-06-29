import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useGlobalData } from '../../context';

const SimpleRadarChart = () => {

  const {logo_alimentos,appData} = useGlobalData();

  
  const data = [
    { subject: 'Alimentos', A: appData.comercios.filter(comercio => comercio.rubros.includes(1)).length, fullMark: appData.comercios.length },
    { subject: 'Carniceria', A: appData.comercios.filter(comercio => comercio.rubros.includes(2)).length, fullMark: appData.comercios.length },
    { subject: 'Verduleria', A: appData.comercios.filter(comercio => comercio.rubros.includes(3)).length, fullMark: appData.comercios.length },
    { subject: 'Farmacia', A: appData.comercios.filter(comercio => comercio.rubros.includes(4)).length, fullMark: appData.comercios.length },
    { subject: 'Panaderia', A: appData.comercios.filter(comercio => comercio.rubros.includes(5)).length, fullMark: appData.comercios.length },
    { subject: 'Fiambreria', A: appData.comercios.filter(comercio => comercio.rubros.includes(6)).length, fullMark: appData.comercios.length },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="rgba(16,108,252,0.9)" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SimpleRadarChart;
