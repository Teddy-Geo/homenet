var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "# of Votes",
        data: [12, 5, 5, 7],
        backgroundColor: ["#55D8FE", "#FF8373", "#FFDA83", "#A3A0FB"],
        borderColor: ["#55D8FE", "#FF8373", "#FFDA83", "#A3A0FB"],
        borderWidth: 1,
      },
    ],
  },
});
