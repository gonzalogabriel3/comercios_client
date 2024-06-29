// src/components/MyChart.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useGlobalData } from '../../context';


const Torta = () => {

    const {
        appData,
        logo_alimentos,
        logo_carniceria,
        logo_farmacia,
        logo_fiambres,
        logo_panaderia,
        logo_verduleria
    }=useGlobalData();

    const countComerciosByRubro = (rubroId) => {
        return appData.comercios.filter(comercio => comercio.rubros.includes(rubroId)).length;
    };

    const options = {
        title: {
            text: ''
        },
        chart:{
            type:'pie'
        },
        colors: ['rgba(166,16,52,0.7)', 'rgba(16,108,252,0.7)', 'rgba(16,252,170,0.7)', 'rgba(16,252,52,0.7)', 'rgba(252,98,16,0.7)', 'rgba(252,16,66,0.7)'],
        plotOptions: {
            pie: {
                allowPointSelect: true,
                dataLabels: {
                    enabled: true,
                    useHTML: true,
                    format: '<span style="color:grey"><img src="{point.imageUrl}" style="width: 32px; height: 32px; vertical-align: middle;"/> {point.name}</span>'
                }
            }
        },
        series: [{
            name: 'Locales',
            colorByPoint: true,
            data: [
                {
                    name: 'Alimentos basicos',
                    y: countComerciosByRubro(1),
                    imageUrl: logo_alimentos
                }, 
                {
                    name: 'Carniceria',
                    y: countComerciosByRubro(2),
                    imageUrl: logo_carniceria
                },
                {
                    name: 'Verduleria',
                    y: countComerciosByRubro(3),
                    imageUrl: logo_verduleria
                },
                {
                    name: 'Farmacia',
                    y: countComerciosByRubro(4),
                    imageUrl: logo_farmacia
                },
                {
                    name: 'Panaderia',
                    y: countComerciosByRubro(5),
                    imageUrl: logo_panaderia
                },
                {
                    name: 'Fiambreria',
                    y: countComerciosByRubro(6),
                    imageUrl: logo_fiambres
                }    
            ]
        }],
        credits: {
            enabled: false
        }
    };

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    );
};

export default Torta;
