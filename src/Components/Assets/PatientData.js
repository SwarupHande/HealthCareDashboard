import { BiBorderRadius } from "react-icons/bi";

export const patientData = {
    labels : [
        "Oct 2023",
        "Nov 2023",
        "Dec 2023",
        "Jan 2023",
        "Feb 2023",
        "Mar 2023",
    ],
    datasets : [
        {
            label:"Heart Rate 1",
            data : [120,115,160,113,148,158],
            borderColor : "#C26EB4",
        },
        {
            label:"Heart Rate 2",
            data : [110,62,108,90,70,79],
            borderColor : "#7E6CAB",
        },
    ],
    options : {
        tension : 0.4,
        responsive: true,
        borderWidth : 2, 
        pointBorderWidth : 7,
        scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
                ticks: {
                    stepSize: 20
                }
            }
          } ,
        plugins: {
          legend: {
            display : false,
          },
        }
    }

};
