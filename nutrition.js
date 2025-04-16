function openQuiz()
{
    document.getElementsByClassName("bg")[0].style.display = "none";
    document.getElementsByClassName("article-nav")[0].style.display = "none";
    document.getElementsByClassName("nutrition-articles")[0].style.display = "none";
    document.getElementById("startquiz").style.display = "none";
    
    document.getElementsByClassName("quiz-container")[0].style.display = "block";
}

function closeQuiz()
{
    document.getElementsByClassName("bg")[0].style.display = "block";
    document.getElementsByClassName("article-nav")[0].style.display = "block";
    document.getElementsByClassName("nutrition-articles")[0].style.display = "block";
    document.getElementById("startquiz").style.display = "block";
    
    document.getElementsByClassName("quiz-container")[0].style.display = "none";
    const form = document.getElementById("quiz-form");
    const allLabels = form.querySelectorAll("label");
    allLabels.forEach(label => label.style.color = "white");
    form.reset();
}

function submit() 
{
    const answers = {
        q1: "c",
        q2: "b",
        q3: "c",
        q4: "a",
        q5: "d",
        q6: "c"
    };

    const form = document.getElementById("quiz-form");

    let allAnswered = true;
    for (let question in answers) {
        const options = form.elements[question];
        let oneChecked = false;

        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                oneChecked = true;
                break;
            }
        }

        if (!oneChecked) {
            allAnswered = false;
            break;
        }
    }

    // If any question is not answered, show alert and stop
    if (!allAnswered) {
        alert("Please answer all questions before submitting!");
        return;
    }

    let score = 0;

    const blurry = document.getElementsByClassName("quiz-container")[0];
    blurry.classList.add("blur");

    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");
    popup.style.display = "block";

    const allLabels = form.querySelectorAll("label");
    allLabels.forEach(label => label.style.color = "white");

    Object.keys(answers).forEach(question => {
        const options = form.elements[question];
        let selectedValue = "";

        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                selectedValue = options[i].value;

                if (options[i].value === answers[question]) {
                    options[i].parentElement.style.color = "green";
                } else {
                    options[i].parentElement.style.color = "red";
                }
            }
        }

        if (selectedValue === answers[question]) {
            score++;
        }
    });
    setTimeout(() => {
        popupText.textContent = "Your score: " + score + " / " + Object.keys(answers).length;
        setTimeout(() => {
            popup.style.display = "none";
            blurry.classList.remove("blur");
            popupText.textContent = "Submitting..";
        },3000);
    },4000);
}
