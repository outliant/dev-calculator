function getNumOfQA(pgPerMonth, numPg, numMonths) {
  var totalPg;

  for (var numQA = 1; numQA < 150; numQA++) {
    totalPg = numQA * (numMonths * parseInt(pgPerMonth));
    if (totalPg >= numPg) {
      break;
    }
  }
  $("#numQAsNeeded").text(numQA);
}

function qaType(type, complexityLvl, numPages, numMonths) {
  var pgCount;
  switch (type) {
    case "Junior QA":
      pgCount = getPagesByComplexity(complexityLvl, 4, 12);
      getNumOfQA(pgCount, numPages, numMonths);
      break;
    case "Mid-Level QA":
      pgCount = getPagesByComplexity(complexityLvl, 10, 20);
      getNumOfQA(pgCount, numPages, numMonths);
      break;
    case "Senior QA":
      pgCount = getPagesByComplexity(complexityLvl, 20, 28);
      getNumOfQA(pgCount, numPages, numMonths);
      break;
    default:
      console.log("no qa level selected");
  }
}

function getPagesByComplexity(level, lowRange, highRange) {
  const avgPg = (parseInt(lowRange) + parseInt(highRange)) / 2;

  switch (level) {
    case "Mild Complexity":
      return highRange;
    case "Moderate Complexity":
      return avgPg;
    case "High Complexity":
      return lowRange;
    default:
      console.log("no complexity");
  }
}

$(document).ready(function () {
  var numPg = 1;
  var numMos = 1;
  var selectedQALvl = "Junior QA";
  var selectedComplexity = "Mild Complexity";

  $("#numPages").on("keyup", function () {
    numPg = $(this).val() || 1;
    qaType(selectedQALvl, selectedComplexity, numPg, numMos);
  });

  $("#numMonths").on("keyup", function () {
    numMos = $(this).val() || 1;
    qaType(selectedQALvl, selectedComplexity, numPg, numMos);
  });

  $("#qaLevelSelect").on("change", function () {
    selectedQALvl = $(this).val();
    qaType(selectedQALvl, selectedComplexity, numPg, numMos);
  });

  $("#complexityLevelSelect").on("change", function () {
    selectedComplexity = $(this).val();
    qaType(selectedQALvl, selectedComplexity, numPg, numMos);
  });
});
