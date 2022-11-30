var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    datasets: [{
        backgroundColor: "#5625da",
        data: [45, 40, 65, 91, 50, 150, 55, 40, 30, 45, 50, 25, 12, 100, 80],
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


// Wave Graph Chart
var market_Average = document.getElementById("buyers").getContext("2d");

var buyers = new Chart(market_Average, {
    type: "line",
    data: {
        labels: [
            "",
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
            "Dec",
            ""
        ],
        // Information about the dataset
        datasets: [
            {
                label: "Rainfall",
                backgroundColor: "lightblue",
                borderColor: "royalblue",
                data: [
                    null,
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
                    80,
                    null
                ]
            }
        ]
    },
    plugins: [{
        afterUpdate: function (chart, options) {
            //..
            var dataset = chart.config.data.datasets[0];

            // Get the number of objects in the dataset array.
            var noDataPoints = datasetArray.length;

            //alert(noDataPoints); // testing only, you'll notice that this 
            // alert would fire each time the responsive chart is resized.
            var xOffset = (chart.width / noDataPoints) / 2;

            for (var i = 0; i < dataset.data.length; i++) {
                for (var key in dataset._meta) {
                    var model = dataset._meta[key].data[i]._model;
                    model.x += xOffset;
                    model.controlPointNextX += xOffset;
                    model.controlPointPreviousX += xOffset;
                }
            }
        }
    }],


    // Configuration options
    options: {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
            display: false
        },
        layout: {
            padding: 10,
        },
        scales: {
            padding: 100,
            yAxes: [{
                scaleLabel: {
                    display: true,
                    beginAtZero: true,
                },
                ticks: {
                    maxTicksLimit: 5,
                    beginAtZero: true,
                    callback: function (value, index, ticks) {
                        return value + 'k';
                    },

                },
                gridLines: {
                    drawBorder: false,
                },


            }
            ],
            xAxes: [{
                scaleLabel: {
                    display: false,
                    offset: true,
                    // labelOffset: 10,
                },
                gridLines: {
                    display: false,
                    drawBorder: true,
                    // offsetGridLines: true,
                },

            }]
        }
    }
});


// Doughnut Graph



// const counter = {
//     id: 'counter',
//     beforeDraw(chart, args, option) {
//         const { ctxy, chartArea: { top, right, bottom, left, width, height } } = chart;
//         ctxy.save();
//         ctxy.fillStyle = 'blue';
//         ctxy.fillRect(width / 2, top + (height / 2), 10, 10)
//         ctxy.font = '200px sans-serif';
//         ctxy.textAlign = 'center';
//         ctxy.textStyle = 'blue';
//         ctxy.fillText('97%', width / 2, top + (height / 2));
//     }
// };
// var thickness = {
//     id: "thickness",
//     beforeDraw: function (chart, options) {
//         let thickness = chart.options.plugins.thickness.thickness;
//         thickness.forEach((item, index) => {
//             chart.getDatasetMeta(0).data[index]._view.innerRadius = item[0];
//             chart.getDatasetMeta(0).data[index]._view.outerRadius = item[1];
//         });
//     }
// };


var data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [{
        backgroundColor: ["#377aff", "#04d1e4", "yellow", "#fafbfd", "#fb3b90"],
        borderWidth: 1,
        cutout: '50%',
        data: [25, 14, 11, 07, 43],
    }]
};


var ctxy = document.getElementById("doughnut-chart");
var production_this_year_myChart = new Chart(ctxy, {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        cutoutPercentage: 50,
        plugins: {
            datalabels: {
                display: true,
                align: 'bottom',
                backgroundColor: '#ccc',
                borderRadius: 3,
                font: {
                    size: 18,
                },
            },

        },
        legend: {
            display: false,
            label: 'My dataset',
        },
    },

});




// Double Bar Graph
new Chart(document.getElementById("commission-this-year"), {
    type: 'line',
    data: {
        labels: [10, 20, 30, 40, 45, 60, 70, 80, 90, 100],
        datasets: [{
            data: [30, 20, 60, 30, 20, 30, 40, 20, 45, 80],
            label: "Africa",
            borderColor: "#395ae6",
            fill: false
        }, {
            data: [50, 40, 55, 45, 60, 50, 60, 45, 55, 80],
            label: "Asia",
            borderColor: "#fdc53f",
            fill: false
        },
        ]
    },
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
        },
    }
});



// Monthly Visit Triple Bar Graph Chart
new Chart(document.getElementById("monthly-visit"), {
    type: 'bar',
    data: {
        labels: ["20", "40", "60", "80"],
        datasets: [
            {
                label: "Africa",
                backgroundColor: "#f16858",
                data: [40, 20, 80, 10, 30, 40, 50]
            }, {
                label: "Europe",
                backgroundColor: "#33c3ba",
                data: [30, 50, 10, 20, 25, 35,]
            }, {
                label: "Europe",
                backgroundColor: "#33c3ba",
                data: [10, 20, 40, 10, 35, 5,]
            }
        ]
    },
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






// new chart

