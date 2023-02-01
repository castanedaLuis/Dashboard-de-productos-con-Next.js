import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

//Inicialiazamos para poderle pasar todos los elementos
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
 
export const Chart = ({ chartData }) => {
  return (
    <>
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Category",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          }
        }}
      />
    </>
  )
}
 