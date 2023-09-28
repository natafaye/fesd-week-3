
// https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript

function getFirstPython(list) {
    const pythonDeveloper = list.find(developer => developer.language === "Python")

    if (pythonDeveloper !== undefined) {
        return pythonDeveloper.firstName + ", " + pythonDeveloper.country
    } else {
        return "There will be no Python developers"
    }
}