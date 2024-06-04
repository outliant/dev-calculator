function getNumOfDevs(pgPerMonth, numPg, numMonths) {
  var totalPg;

  for (var numDev = 1; numDev < 150; numDev++) {
    totalPg = numDev * (numMonths * pgPerMonth);
    if (totalPg >= numPg) {
      break;
    }
  }
  $("#numDevsNeeded").text(numDev);
}

function techType(type, numPages, numMonths) {
  switch (type) {
    case "React":
    case "Webflow":
      getNumOfDevs(12, numPages, numMonths);
      break;
    case "Contentful":
    case "Drupal":
      getNumOfDevs(8, numPages, numMonths);
      break;
    case "Wordpress":
      getNumOfDevs(10, numPages, numMonths);
      break;
    default:
      console.log("type not selected");
  }
}

$(document).ready(function () {
  var numPg = 1;
  var numMos = 1;
  var selectedTech = "React";

  $("#numPages").on("keyup", function () {
    numPg = $(this).val() || 1;
    techType(selectedTech, numPg, numMos);
  });

  $("#numMonths").on("keyup", function () {
    numMos = $(this).val() || 1;
    techType(selectedTech, numPg, numMos);
  });

  $("#techstackSelect").on("change", function () {
    selectedTech = $(this).val();
    techType(selectedTech, numPg, numMos);
  });
});
