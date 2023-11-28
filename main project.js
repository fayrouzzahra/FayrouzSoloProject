const form = document.getElementById('healthForm');
const x = document.getElementById('#sub')
function onsub () {

    const formData = new FormData(form);
    const waterIntake = formData.get('waterIntake');
    const mealsPerDay = formData.get('mealsPerDay');
    const exerciseFrequency = formData.get('exerciseFrequency');
    const sleepHours = formData.get('sleepHours');
    const stressLevels = formData.get('stressLevels');

    // Process the form data here
    console.log('Water intake:', waterIntake);
    console.log('Meals per day:', mealsPerDay);
    console.log('Exercise frequency:', exerciseFrequency);
    console.log('Sleep hours:', sleepHours);
    console.log('Stress levels:', stressLevels);
    let advice = '';

    if (waterIntake <8) {
        advice += 'You should aim to drink 8 glasses of water per day.\n';
    }

    if (mealsPerDay < 3) {
        advice += 'You should aim to eat 3 meals per day.\n';
    }

    if (exerciseFrequency < 3) {
        advice += 'You should aim to exercise at least 3 times per week.\n';
    }

    if (sleepHours < 7) {
        advice += 'You should aim to get 7-8 hours of sleep per night.\n';
    }

    if (stressLevels > 5) {
        advice += 'You should find ways to manage your stress levels, such as yoga or meditation.\n';
    }


    if (advice !== '') {
        const adviceContainer = document.createElement('p');
        adviceContainer.textContent = advice;
        form.append(adviceContainer);
    }
}


function subi () {
  onsub()  
}


   