document.getElementById('training-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const goal = document.getElementById('goal').value;
    const days = document.getElementById('days').value;
    const experience = document.getElementById('experience').value;
    const health = document.getElementById('health').value;

    let workoutPlan = `Seu objetivo: ${goal}\n\nDias de treino: ${days}\n\n`;

    if (experience === "sim") {
        workoutPlan += "Experiência: Já treinou antes\n\n";
    } else {
        workoutPlan += "Experiência: Nunca treinou antes\n\n";
    }

    if (health) {
        workoutPlan += `Problemas de saúde/articulações: ${health}\n\n`;
    }

    workoutPlan += "Aqui está o seu treino recomendado:\n";

    if (days === "abc") {
        workoutPlan += "- Treino ABC: Peito/Costas/Perna\nSéries: 4x12\nDescanso: 60s\n";
    } else if (days === "abcd") {
        workoutPlan += "- Treino ABCD: Peito/Costas/Perna/Ombro\nSéries: 4x10\nDescanso: 60s\n";
    } else {
        workoutPlan += "- Treino ABCDE: Peito/Costas/Perna/Ombro/Braços\nSéries: 3x12\nDescanso: 45s\n";
    }

    document.getElementById('plan-content').textContent = workoutPlan;
    document.getElementById('workout-plan').style.display = 'block';
});
