// Animation for the score on the left and the summary items on the right

//declare
document.addEventListener("DOMContentLoaded", function() {
    let scoreElement = document.getElementById("big-score");
    let targetScore = 72; // Target score to animate
    let currentScore = 0; // Starting score
    
    // Animate the score
    function updateScore() {
        if (currentScore < targetScore) {
            currentScore++;
            scoreElement.textContent = currentScore;
            setTimeout(updateScore, 20); //Adjust animation speed
        }
    }

    updateScore(); // Start the score animation
});

// Summary items animation (script to trigger the animation)
document.addEventListener("DOMContentLoaded", function() {
    let summaryItems = document.querySelectorAll(".summary p");
     
    summaryItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation= 'fadeIn 0.8s ease-out forwards';
            }, index * 600); // Delay each item by 300ms- stagger effect
        });
    });

dovument.addEventListener("DOMContentLoaded",  async function() {
    let summaryItems = document.querySelectorAll(".summary p");
    
    for (let i = 0; i < summaryItems.length; i++) {
        await new Promise(resolve => {
            setTimeout(() => {
                summaryItems[i].style.animation = 'fadeIn 0.8s ease-out forwards';
                resolve();
            }, 1000); // Delay each item by 800ms for stagger effect
        });
    }
});    