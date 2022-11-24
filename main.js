var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [{
        backgroundColor: "#5625da",
        data: [45, 20, 35, 61, 10, 120, 15, 10, 20, 25, 50, 25, 12],
    }]
};

var ctx = document.getElementById("production_this_year_myChart");
var production_this_year_myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false,
                    beginAtZero: true
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }],
            xAxes: [{
                barPercentage: 0.1,
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false
                }
            }]
        }
    }
});
// plugins: {
//     legend: {
//         display: false
//     }
// }

// var buyerData = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//         {
//             fillColor: "rgba(172,194,132,0.4)",
//             strokeColor: "#ACC26D",
//             pointColor: "#fff",
//             pointStrokeColor: "#9DB86D",
//             data: [203, 156, 99, 251, 305, 247]
//         }
//     ]
// }

var market_Average = document.getElementById("buyers").getContext("2d");

var buyers = new Chart(market_Average, {
    // The type of chart we want to create
    type: "line", // also try bar or other graph types

    // The data for our dataset
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        // Information about the dataset
        datasets: [
            {
                label: "Rainfall",
                backgroundColor: "lightblue",
                borderColor: "royalblue",
                data: [
                    66.4,
                    62.8,
                    60.8,
                    70.4,
                    68.6,
                    55.2,
                    75.4,
                    70.8,
                    65.1,
                    70.8,
                    71.1,
                    80

                ]
            }
        ]
    },


    // Configuration options
    options: {
        legend: {
            display: false
        },
        layout: {
            padding: 10
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    beginAtZero: true,
                },
                ticks: {
                    maxTicksLimit: 5,
                    beginAtZero: true
                },

            }
            ],
            xAxes: [
                {
                    scaleLabel: {
                        display: true
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }
            ]
        }
    }
});


var data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [{
        backgroundColor: ["#377aff", "#377aff", "#04d1e4", "#fafbfd", "#fb3b90"],
        data: [25, 14, 11, 07, 43],
    }]
};

var ctx = document.getElementById("doughnut-chart");
var production_this_year_myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        legend: {
            display: false,
            label: 'My dataset',
        },
    }
});

