var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [{
        backgroundColor: "#5625da",
        data: [45, 40, 65, 91, 50, 150, 55, 40, 30, 45, 50, 25, 12],
    }]
};

var ctx = document.getElementById("production_this_year_myChart");
var production_this_year_myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        maintainAspectRatio: true,
        responsive: true,
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
    type: "line",
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
                    26.4,
                    18.8,
                    20.8,
                    52.4,
                    50.6,
                    25.2,
                    30.4,
                    40.8,
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
        maintainAspectRatio: true,
        responsive: true,
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
                    beginAtZero: true,

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
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
            label: 'My dataset',
        },
    }
});

