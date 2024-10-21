document.getElementById('training-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const goal = document.getElementById('goal').value;
    const days = document.getElementById('days').value;
    const experience = document.getElementById('experience').value;
    const health = document.getElementById('health').value;

    const exercises = {
        hipertrofia: {
            abc: {
                peito: ['Supino Reto', 'Crucifixo Inclinado', 'Flexão de Braço'],
                costas: ['Remada Curvada', 'Puxada Frontal', 'Barra Fixa'],
                pernas: ['Agachamento Livre', 'Leg Press', 'Cadeira Extensora']
            },
            abcd: {
                peito: ['Supino Reto', 'Supino Inclinado', 'Crossover'],
                costas: ['Remada Unilateral', 'Puxada Aberta', 'Levantamento Terra'],
                pernas: ['Agachamento', 'Leg Press', 'Cadeira Flexora'],
                ombro: ['Desenvolvimento Militar', 'Elevação Lateral', 'Elevação Frontal']
            }
        },
        emagrecimento: {
            abc: {
                peito: ['Supino Reto', 'Flexão de Braço', 'Crucifixo'],
                costas: ['Remada Curvada', 'Puxada Frontal', 'Pullover'],
                pernas: ['Agachamento', 'Leg Press', 'Afundo']
            },
            abcd: {
                peito: ['Supino Reto', 'Supino Inclinado', 'Flexão de Braço'],
                costas: ['Puxada Fechada', 'Remada Curvada', 'Barra Fixa'],
                pernas: ['Agachamento Livre', 'Leg Press', 'Cadeira Flexora'],
                ombro: ['Elevação Lateral', 'Elevação Frontal', 'Desenvolvimento Arnold']
            }
        }
    };

    const selectedExercises = exercises[goal][days];

    let newPageContent = `
        <h2>Sua Ficha de Treino</h2>
        <h3>Treino de Peito</h3>
        <ul>
            ${selectedExercises.peito.map(exercise => `<li>${exercise}</li>`).join('')}
        </ul>
        <h3>Treino de Costas</h3>
        <ul>
            ${selectedExercises.costas.map(exercise => `<li>${exercise}</li>`).join('')}
        </ul>
        <h3>Treino de Pernas</h3>
        <ul>
            ${selectedExercises.pernas.map(exercise => `<li>${exercise}</li>`).join('')}
        </ul>
    `;

    if (selectedExercises.ombro) {
        newPageContent += `
        <h3>Treino de Ombro</h3>
        <ul>
            ${selectedExercises.ombro.map(exercise => `<li>${exercise}</li>`).join('')}
        </ul>`;
    }

    localStorage.setItem('workoutPlan', newPageContent);
    window.location.href = 'fichaTreino.html';
});
