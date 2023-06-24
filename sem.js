function gradeCalc(grade, unit) {
    if (grade === "O") {
        return 10 * unit;
    } else if (grade === "A+") {
        return 9 * unit;
    } else if (grade === "A") {
        return 8 * unit;
    } else if (grade === "B+") {
        return 7 * unit;
    } else if (grade === "B") {
        return 6 * unit;
    }
    else if (grade === "C") {
        return 5 * unit;
    }
    else if (grade === "U") {
        return 0 * unit;
    }
}
function calcCgpa() {
    const CGPAPARAGRAPH = document.getElementById("cgpa-calc");
    const GRADESSELECT = document.querySelectorAll("select.grade");
    const UNIT = document.querySelectorAll("input.credit-units");

    const courseReport = {};

    const listOfGrades = [];
    const listOfUnits = [];
    let totalUnits = 0;

    GRADESSELECT.forEach((e) => {
        let GRADES = e.options;
        const selectedIndex = e.selectedIndex;
        const selectedGrade = GRADES[selectedIndex];
        const gradeValue = selectedGrade.text.toUpperCase();
        listOfGrades.push(gradeValue);
    });
    console.log(listOfGrades);

    UNIT.forEach((e) => {
        const unitValue = parseInt(e.value);
        totalUnits += unitValue;
        listOfUnits.push(unitValue);
    });
    console.log(listOfUnits);

    let totalEarnedUnits = 0;

    for (let i = 0; i < listOfUnits.length; i++) {
        totalEarnedUnits += gradeCalc(listOfGrades[i], listOfUnits[i]);
    }
    const gpa = totalEarnedUnits / totalUnits;

    if (gpa >= 0) {
        CGPAPARAGRAPH.textContent = "Your CGPA is " + gpa.toFixed(2);
    } else {
        CGPAPARAGRAPH.textContent = "Please enter your correct grade and credit units";
    }


}


