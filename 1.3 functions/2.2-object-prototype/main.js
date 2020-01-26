function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    }
    
    var sound = animal.sound;
    return sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    if (marks === undefined || marks.length === undefined) {
        return 0;
    }
    
    var sum = 0;
    var avg = 0;
    var roundedAverage = 0;
    
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    avg = sum / marks.length;
    roundedAverage = Math.round(avg);
    return roundedAverage;

}