// We need to Write JavaScript Better

// First Section
var firstSection = document.querySelector(".info");
var form = document.querySelector("#forms");
var nameInput = document.querySelector("#name");
var mailInput = document.querySelector("#email");
var telInput = document.querySelector("#telephone");
var errorOne = document.querySelector(".field1");
var errorTwo = document.querySelector(".field2");
var errorThree = document.querySelector(".field");
var firstNexter = document.querySelector(".next-first");
var monthlyBox = document.querySelector(".month");
var yearlyBox = document.querySelector(".year");
var personalInfo = {};
var selectedPlan = {};

var data = [];
data.push(personalInfo, selectedPlan);

firstNexter.addEventListener("click", (e) => {
  e.preventDefault();
  personalInfoArea();
});

var validMail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var validTel = /^\d{11}$/;
function personalInfoArea() {
  var displayOne, displayTwo, displayThree;
  displayOne = nameInput.value;
  displayTwo = mailInput.value.match(validMail);
  displayThree = telInput.value.match(validTel);

  console.log(personalInfo);
  console.log(data);

  if (!displayOne) {
    errorOne.style.display = "flex";
  } else {
    errorOne.style.display = "none";
  }
  if (!displayTwo) {
    errorTwo.style.display = "flex";
  } else {
    errorTwo.style.display = "none";
  }
  if (!displayThree) {
    errorThree.style.display = "flex";
  } else {
    errorThree.style.display = "none";
  }
  if (displayOne && displayTwo && displayThree) {
    console.log("First step done");
    secondSection.style.display = "block";
    firstSection.style.display = "none";
    personalInfo.name = displayOne;
    personalInfo.email = displayTwo;
    personalInfo.phoneNo = displayThree;
    loopingForwardOne();
    mobileCircleLoopingForwardOne();
  }
}

// Second Section
var secondSection = document.querySelector(".info-two");
var plans = document.querySelectorAll(".same");
var secondSectionNexter = document.querySelector(".nexts");
var secondSectionChecker = document.querySelector("#checker");
var extraOne = document.querySelector(".free");
var extraTwo = document.querySelector(".free2");
var extraThree = document.querySelector(".free3");
var arcadePrice = document.querySelector(".nine");
var advancePrice = document.querySelector(".twelve");
var proPrice = document.querySelector(".fifteen");

function secondSectionArea() {
  plans.forEach((div, index) => {
    div.addEventListener("click", (e) => {
      plans.forEach((box) => {
        box.classList.remove("the");
      });
      div.classList.add("the");
      let changeAble;
      if (div.classList.contains("arcade")) {
        if (secondSectionChecker.checked) {
          changeAble = amount.textContent = "+$90/yr";
          addingUp = priceData[0].arcadePrice.arcadeYearly;
        } else {
          changeAble = amount.textContent = "+$9/mo";
          addingUp = priceData[0].arcadePrice.arcadeMonthly;
        }
        WhatISelected.innerText = "Arcade";
      }
      if (div.classList.contains("advance")) {
        if (secondSectionChecker.checked) {
          amount.innerText = "+$120/yr";
          addingUp = priceData[0].advancePrice.advanceYearly;
        } else {
          amount.innerText = "+$12/mo";
          addingUp = priceData[0].advancePrice.advanceMonthly;
        }
        WhatISelected.innerText = "Advanced";
      }
      if (div.classList.contains("pro")) {
        if (secondSectionChecker.checked) {
          amount.innerText = "+$150/yr";
          addingUp = priceData[0].proPrice.proYearly;
        } else {
          amount.innerText = "+$15/mo";
          addingUp = priceData[0].proPrice.proMonthly;
        }
        WhatISelected.innerText = "Pro";
      }
    });
  });
  secondSectionChecker.addEventListener("click", () => {
    var confirmed = secondSectionChecker.checked;

    if (confirmed) {
      moneyOne = 10;
      moneyTwo = 20;
      moneyThree = 20;
      extraOne.innerText = "2 months free";
      extraTwo.innerText = "2 months free";
      extraThree.innerText = "2 months free";
      arcadePrice.innerText = "$90/yr";
      advancePrice.innerText = "$120/yr";
      proPrice.innerText = "$150/yr";
      onlineServicePrice.innerText = "+$" + moneyOne + "/yr";
      largerStorePrice.innerText = "+$" + moneyTwo + "/yr";
      actualValueOne.value = 10;
      actualValueTwo.value = 20;
      actualValueThree.value = 20;
      customizableProfilePrice.innerText = "+$" + moneyThree + "/yr";
      pluSign.innerText = "";
      yearlyBox.style.color = "hsl(213, 96%, 18%)";
      monthlyBox.style.color = "hsl(231, 11%, 63%)";
      monthlyOrYearly.innerText = "(Yearly)";
      packageTotal.textContent = "Total(per year)";
      types.textContent = "/yr";
      for (var i = 0; i < plans.length; i++) {
        plans[i].classList.remove("the");
      }
    } else {
      moneyOneII = 1;
      moneyTwoII = 2;
      moneyThreeII = 2;
      extraOne.innerText = "";
      extraTwo.innerText = "";
      extraThree.innerText = "";
      arcadePrice.innerText = "$9/mo";
      advancePrice.innerText = "$12/mo";
      proPrice.innerText = "$15/mo";
      onlineServicePrice.innerText = "+$" + moneyOneII + "/mo";
      largerStorePrice.innerText = "+$" + moneyTwoII + "/mo";
      customizableProfilePrice.innerText = "+$" + moneyThreeII + "/mo";
      monthlyOrYearly.innerText = "(Monthly)";
      packageTotal.innerText = "Total(per month)";
      actualValueOne.value = 1;
      actualValueTwo.value = 2;
      actualValueThree.value = 2;
      pluSign.innerText = "+";
      monthlyBox.style.color = "hsl(213, 96%, 18%)";
      yearlyBox.style.color = "hsl(231, 11%, 63%)";

      types.textContent = "/mo";
      for (var i = 0; i < plans.length; i++) {
        plans[i].classList.remove("the");
      }
    }
  });
}
// secondSectionNexter eventListener
secondSectionArea();
secondSectionNexter.addEventListener("click", (e) => {
  for (var i = 0; i < plans.length; i++) {
    if (plans[i].classList.contains("the")) {
      thirdSection.style.display = "block";
      secondSection.style.display = "none";
      loopingForwardTwo();
      mobileCircleLoopingForwardTwo();
    }
  }
  var confirmed2 = secondSectionChecker.unChecked;
});

// Third Section
var thirdSection = document.querySelector(".info-three");
var onlineServicePrice = document.querySelector(".dollar1");
var largerStorePrice = document.querySelector(".dollar2");
var customizableProfilePrice = document.querySelector(".dollar3");
var thirdSectionNexter = document.querySelector(".next3");
var actualValueOne = document.querySelector(".actualValueOne");
var actualValueTwo = document.querySelector(".actualValueTwo");
var actualValueThree = document.querySelector(".actualValueThree");
var inspector1 = document.querySelector(".inspectorOne");
var inspector2 = document.querySelector(".inspector");
var inspector3 = document.querySelector(".inspectorThree");
var cloneOne = document.querySelector(".cloneOne");
var cloneTwo = document.querySelector(".cloneTwo");
var cloneThree = document.querySelector(".cloneThree");

thirdSectionNexter.addEventListener("click", () => {
  var addOnChecker = document.querySelectorAll(".checks:checked");
  if (addOnChecker.length > 0) {
    thirdSection.style.display = "none";
    fourthSection.style.display = "block";
    loopingForwardThree();
  }

  for (var i = 0; i < addOnCheckerOriginal.length; i++) {
    if (addOnCheckerOriginal[i].length > 1) {
      console.log("osh");
    }
  }

  totalValue.innerText = "$" + aggregate;
  // loopingThrough();
  mobileCircleLoopingForwardThree();
});

// Fourth Section
var fourthSection = document.querySelector(".info-four");
var WhatISelected = document.querySelector(".changing");
var monthlyOrYearly = document.querySelector(".selection-new");
var amount = document.querySelector(".amount");
var addOnCheckerOriginal = document.querySelectorAll(".checks");
var mrAppender = document.querySelector(".service");
var mr2Appender = document.querySelector(".money2");
var packageTotal = document.querySelector(".total-package");
var firstDollar = document.querySelector(".price1");
var secondDollar = document.querySelector(".price2");
var thirdDollar = document.querySelector(".price3");
var firstP = document.querySelector(".no1");
var secondP = document.querySelector(".no2");
var thirdP = document.querySelector(".no3");
var invisible1 = document.querySelector(".invisibleOne");
var invisible2 = document.querySelector(".invisibleTwo");
var invisible3 = document.querySelector(".invisibleThree");
var FirstLane = document.querySelector(".first-lane");
var secondLane = document.querySelector(".second-lane");
var thirdLane = document.querySelector(".third-lane");
var numOne = document.querySelector(".numOne");
var numTwo = document.querySelector(".numTwo");
var numThree = document.querySelector(".numThree");
var totalize = document.querySelector(".finish");
var types = document.querySelector(".type");
var totalValue = document.querySelector(".dollarType");
var pluSign = document.querySelector(".plus");
var plentyBox = document.querySelector(".inner");
addOnCheckerOriginal.forEach((newest, number) => {
  newest.addEventListener("click", () => {
    if (number === 0) {
      if (newest.checked) {
        firstP.innerText = "Online service";
        firstDollar.innerText = onlineServicePrice.innerText;
        newlyNeeded = amount.innerText + firstDollar.innerText;
        changingToNumber = parseFloat(firstDollar);
        cloneOne.value = actualValueOne.value;
        allTotalOne = numOne.value = cloneOne.value;
        aggregate =
          parseInt(numOne.value) +
          parseInt(numTwo.value) +
          parseInt(numThree.value) +
          addingUp;
        FirstLane.style.display = "flex";
      } else if (newest.checked === false) {
        FirstLane.style.display = "none";
        cloneOne.value = 0;
        allTotalOne = numOne.value = cloneOne.value;
        aggregate =
          parseInt(numOne.value) +
          parseInt(numTwo.value) +
          parseInt(numThree.value) +
          addingUp;
      }
    }
    if (number === 1) {
      if (newest.checked == 1) {
        secondP.innerText = "Larger storage";
        secondDollar.innerText = largerStorePrice.innerText;
        newlyNeeded = amount.innerText + secondDollar.innerText;
        secondLane.style.display = "flex";
        cloneTwo.value = actualValueTwo.value;
        allTotalTwo = numTwo.value = cloneTwo.value;
        aggregate =
          parseInt(numOne.value) +
          parseInt(numTwo.value) +
          parseInt(numThree.value) +
          addingUp;
      } else if (newest.checked === false) {
        secondLane.style.display = "none";
        cloneTwo.value = 0;
        allTotalTwo = numTwo.value = cloneTwo.value;
        aggregate =
          parseInt(numOne.value) +
          parseInt(numTwo.value) +
          parseInt(numThree.value) +
          addingUp;
      }
    }
    if (number == 2) {
      if (newest.checked) {
        thirdP.innerText = "Customizable profit";
        thirdDollar.innerText = customizableProfilePrice.innerText;
        newlyNeeded = amount.innerText + thirdDollar.innerHTML;
        cloneThree.value = actualValueThree.value;
        allTotalThree = numThree.value = cloneThree.value;
        thirdLane.style.display = "flex";

        aggregate =
          parseInt(numOne.value) +
          parseInt(numTwo.value) +
          parseInt(numThree.value) +
          addingUp;
      } else if (newest.checked === false) {
        cloneThree.value = 0;
        thirdLane.style.display = "none";
        allTotalThree = numThree.value = cloneThree.value;
        aggregate =
          parseInt(numOne.value) +
          parseInt(numTwo.value) +
          parseInt(numThree.value) +
          addingUp;
      }
    }
  });
});

// Calculations

var priceData = [
  {
    arcadePrice: {
      arcadeMonthly: 9,
      arcadeYearly: 90,
    },
    advancePrice: {
      advanceMonthly: 12,
      advanceYearly: 120,
    },
    proPrice: {
      proMonthly: 15,
      proYearly: 150,
    },
  },
  {
    onlineServicePriceHere: {
      onlineServiceMonthly: 1,
      onlineServiceYearly: 10,
    },
    largerStorageHere: {
      largerStorageMonthly: 2,
      largerStorageYearly: 20,
    },
    customizableHere: {
      customizableMonthly: 2,
      customizableYearly: 20,
    },
  },
  {
    empty: {
      zero: 0,
    },
  },
];

// External Use 😂😂
var addingUp, addingEverything, onlineInner, addingOns;
var moneyOne, moneyOneII, moneyTwo, moneyTwoII, moneyThree, moneyThreeII;

var subOne, subTwo, subThree;

var solution,
  solutionOne,
  solutionTwo,
  solutionThree,
  mathematicsOne,
  mathematicsTwo,
  mathematicsThree,
  checkMate,
  amendAble,
  toNumbersOne,
  toNumbersTwo,
  toNumbersThree,
  toActualValueOne,
  toActualValueTwo,
  toActualValueTwo;

// Addition Section
var seeAble1, seeAble2, seeAble3, allTotalOne, allTotalTwo, allTotalThree;

// Fifth Section
var fifthSection = document.querySelector(".info-five");
totalize.addEventListener("click", () => {
  fourthSection.style.display = "none";
  fifthSection.style.display = "block";
});

// Looping through the Circles
var newCircles = document.querySelectorAll(".stepper .circle");

let steps = 0;
let stepsTwo;
let currentStep;
let currentClass;

var loopingThrough = () => {
  for (var i = 0; i < newCircles.length; i++) {
    newCircles[i].classList.remove("ready");
  }
  steps = steps + 1;
  currentClass = steps;
  newCircles[steps].classList.add("ready");
};
var loopingBackwardOne = () => {
  for (var i = newCircles.length - 1; i >= 0; i--) {
    newCircles[i].classList.remove("ready");
  }
  currentStep = 1 - 1;
  newCircles[currentStep].classList.add("ready");
};

var loopingBackwardTwo = () => {
  for (var i = newCircles.length - 1; i >= 0; i--) {
    newCircles[i].classList.remove("ready");
  }
  currentStep = 2 - 1;
  newCircles[currentStep].classList.add("ready");
};
var loopingBackwardThree = () => {
  for (var i = newCircles.length - 1; i >= 0; i--) {
    newCircles[i].classList.remove("ready");
  }
  currentStep = 3 - 1;
  newCircles[currentStep].classList.add("ready");
};

var loopingForwardOne = () => {
  for (var i = 0; i < newCircles.length; i++) {
    newCircles[i].classList.remove("ready");
  }
  steps = 0 + 1;
  currentClass = steps;
  newCircles[steps].classList.add("ready");
};

var loopingForwardTwo = () => {
  for (var i = 0; i < newCircles.length; i++) {
    newCircles[i].classList.remove("ready");
  }
  steps = 1 + 1;
  currentClass = steps;
  newCircles[steps].classList.add("ready");
};

var loopingForwardThree = () => {
  for (var i = 0; i < newCircles.length; i++) {
    newCircles[i].classList.remove("ready");
  }
  steps = 2 + 1;
  currentClass = steps;
  newCircles[steps].classList.add("ready");
};

var goBackOne = document.querySelector(".back");
var goBackTwo = document.querySelector(".back2");
var gobackThree = document.querySelector(".back3");

goBackOne.addEventListener("click", () => {
  firstSection.style.display = "flex";
  secondSection.style.display = "none";
  loopingBackwardOne();
  nameInput.value = "";
  mailInput.value = "";
  telInput.value = "";
  mobileCircleLoopingBackwardOne();
});
goBackTwo.addEventListener("click", () => {
  secondSection.style.display = "block";
  thirdSection.style.display = "none";
  loopingBackwardTwo();
  for (var i = 0; i < plans.length; i++) {
    plans[i].classList.remove("the");
  }
  removingCheckLoop();
  mobileCircleLoopingBackwardTwo();
});

var removingCheckLoop = () => {
  addOnCheckerOriginal.forEach((niggas, jew) => {
    if (niggas.checked === true) {
      niggas.checked = false;
      if (jew === 0) {
        if (niggas.checked) {
          firstP.innerText = "Online service";

          firstDollar.innerText = onlineServicePrice.innerText;
          newlyNeeded = amount.innerText + firstDollar.innerText;
          changingToNumber = parseFloat(firstDollar);
          cloneOne.value = actualValueOne.value;
          allTotalOne = numOne.value = cloneOne.value;
          aggregate =
            parseInt(numOne.value) +
            parseInt(numTwo.value) +
            parseInt(numThree.value) +
            addingUp;
          FirstLane.style.display = "flex";
        } else if (niggas.checked === false) {
          FirstLane.style.display = "none";
          cloneOne.value = 0;
          allTotalOne = numOne.value = cloneOne.value;
          aggregate =
            parseInt(numOne.value) +
            parseInt(numTwo.value) +
            parseInt(numThree.value) +
            addingUp;
        }
      }
      if (jew === 1) {
        if (niggas.checked == 1) {
          secondP.innerText = "Larger storage";

          secondDollar.innerText = largerStorePrice.innerText;
          newlyNeeded = amount.innerText + secondDollar.innerText;
          secondLane.style.display = "flex";
          cloneTwo.value = actualValueTwo.value;
          allTotalTwo = numTwo.value = cloneTwo.value;
          aggregate =
            parseInt(numOne.value) +
            parseInt(numTwo.value) +
            parseInt(numThree.value) +
            addingUp;
        } else if (niggas.checked === false) {
          secondLane.style.display = "none";
          cloneTwo.value = 0;
          allTotalTwo = numTwo.value = cloneTwo.value;
          aggregate =
            parseInt(numOne.value) +
            parseInt(numTwo.value) +
            parseInt(numThree.value) +
            addingUp;
        }
      }
      if (jew == 2) {
        if (niggas.checked) {
          thirdP.innerText = "Customizable profit";
          thirdDollar.innerText = customizableProfilePrice.innerText;
          newlyNeeded = amount.innerText + thirdDollar.innerHTML;
          cloneThree.value = actualValueThree.value;
          allTotalThree = numThree.value = cloneThree.value;
          thirdLane.style.display = "flex";

          aggregate =
            parseInt(numOne.value) +
            parseInt(numTwo.value) +
            parseInt(numThree.value) +
            addingUp;
        } else if (niggas.checked === false) {
          cloneThree.value = 0;
          thirdLane.style.display = "none";
          allTotalThree = numThree.value = cloneThree.value;
          aggregate =
            parseInt(numOne.value) +
            parseInt(numTwo.value) +
            parseInt(numThree.value) +
            addingUp;
        }
      }
    }
  });
};
gobackThree.addEventListener("click", () => {
  thirdSection.style.display = "block";
  fourthSection.style.display = "none";
  loopingBackwardThree();
  removingCheckLoop();
  mobileCircleLoopingBackwardThree();
});

let cocoData = [
  {
    name: "Kaiyewu Timileyin David",
    age: 21,
    hobbies: "coding",
  },
  {
    name: "Olasedidun Yusuf",
    age: 22,
    hobbies: "eating",
  },
  {
    name: "Anifowoshe Ridwan",
    age: 20,
    hobbies: "wanking",
  },
];

var goBackToPlanSection = document.querySelector(".return");

goBackToPlanSection.addEventListener("click", () => {
  fourthSection.style.display = "none";
  secondSection.style.display = "flex";
  removingCheckLoop();
  changeLoop();
  mobileCircleLoopingBackwardChange();
  for (var i = 0; i < plans.length; i++) {
    plans[i].classList.remove("the");
  }
});

var changeLoop = () => {
  for (var i = newCircles.length - 1; i >= 0; i--) {
    newCircles[i].classList.remove("ready");
  }
  currentStep = 3 - 2;
  newCircles[currentStep].classList.add("ready");
};

var mobileCircle = document.querySelectorAll(".mobile");
var firstMobileCircle = document.querySelector(".oneC");

firstMobileCircle.classList.add("ready");

var mobileCircleLoopingForwardOne = () => {
  for (var i = 0; i < mobileCircle.length; i++) {
    mobileCircle[i].classList.remove("ready");
  }
  steps = 0 + 1;
  currentClass = steps;

  mobileCircle[steps].classList.add("ready");
};

var mobileCircleLoopingForwardTwo = () => {
  for (var i = 0; i < mobileCircle.length; i++) {
    mobileCircle[i].classList.remove("ready");
  }
  stepsTwo = 1 + 1;
  mobileCircle[stepsTwo].classList.add("ready");
};

var mobileCircleLoopingForwardThree = () => {
  for (var i = 0; i < mobileCircle.length; i++) {
    mobileCircle[i].classList.remove("ready");
  }
  stepsTwo = 2 + 1;
  currentClass = steps;
  mobileCircle[stepsTwo].classList.add("ready");
};

var mobileCircleLoopingBackwardOne = () => {
  for (var i = newCircles.length - 1; i >= 0; i--) {
    mobileCircle[i].classList.remove("ready");
  }
  stepsTwo = 1 - 1;
  currentClass = steps;
  mobileCircle[stepsTwo].classList.add("ready");
};

var mobileCircleLoopingBackwardTwo = () => {
  for (var i = newCircles.length - 1; i >= 0; i--) {
    mobileCircle[i].classList.remove("ready");
  }
  stepsTwo = 2 - 1;
  currentClass = steps;
  mobileCircle[stepsTwo].classList.add("ready");
};

var mobileCircleLoopingBackwardThree = () => {
  for (var i = newCircles.length - 1; i >= 0; i--) {
    mobileCircle[i].classList.remove("ready");
  }
  stepsTwo = 3 - 1;
  currentClass = steps;
  mobileCircle[stepsTwo].classList.add("ready");
};

var mobileCircleLoopingBackwardChange = () => {
  for (var i = newCircles.length - 1; i >= 0; i--) {
    mobileCircle[i].classList.remove("ready");
  }
  stepsTwo = 3 - 2;
  currentClass = steps;

  mobileCircle[stepsTwo].classList.add("ready");
};

console.log("Welcome to my World!😍❤");
