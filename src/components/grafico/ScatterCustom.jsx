import { Bar, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useGlobalData } from "../../context";

const ScatterCustom = () => {
    const { appData } = useGlobalData();

    const data = [
        { name: 'Alimentos', total: appData.comercios.filter(comercio => comercio.rubros.includes(1)).length },
        { name: 'Carniceria', total: appData.comercios.filter(comercio => comercio.rubros.includes(2)).length },
        { name: 'Verduleria', total: appData.comercios.filter(comercio => comercio.rubros.includes(3)).length },
        { name: 'Farmacia', total: appData.comercios.filter(comercio => comercio.rubros.includes(4)).length },
        { name: 'Panaderia', total: appData.comercios.filter(comercio => comercio.rubros.includes(5)).length },
        { name: 'Fiambreria', total: appData.comercios.filter(comercio => comercio.rubros.includes(6)).length },
    ];

    return (
        <>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                    layout="vertical"
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 50,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" barSize={17} fill="rgba(16,108,252,0.7)" />
                </ComposedChart>
            </ResponsiveContainer>
        </>
    );
};

export default ScatterCustom;
