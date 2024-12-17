
function checkAnswers() {
    const correctAnswers = {
        q1: 'c',
        q2: 'b',
        q3: 'a',
        q4: 'a',
        q5: 'b',
        q6: 'a',
        q7: 'c',
        q8: 'a',
        q9: 'c',
        q10: 'd'
    };

    let score = 0; 
    const form = document.getElementById('quizForm');

    if (form.q1.value === correctAnswers.q1) {
        score++;
    }
    if (form.q2.value === correctAnswers.q2) {
        score++;
    }
    if (form.q3.value === correctAnswers.q3) {
        score++;
    }
    if (form.q4.value === correctAnswers.q4) {
        score++;
    }
    if (form.q5.value === correctAnswers.q5) {
        score++;
    }
    if (form.q6.value === correctAnswers.q6) {
        score++;
    }
    if (form.q7.value === correctAnswers.q7) {
        score++;
    }
    if (form.q8.value === correctAnswers.q8) {
        score++;
    }
    if (form.q9.value === correctAnswers.q9) {
        score++;
    }
    if (form.q10.value === correctAnswers.q10) {
        score++;
    }

    
    alert("Votre score : " + score + "/10");

    alert("Les bonnes réponses sont :\n" +
        "1. Document Object Model\n" +
        "2. alert(\"message\")\n" +
        "3. document.querySelector('.container')\n" +
        "4. text-align: center;\n" +
        "5. width: 100vw; height: 100vh;\n" +
        "6. var tab = [1, 2, 3];\n" +
        "7. parseInt()\n" +
        "8. parseFloat()\n" +
        "9. background-color: red;\n" +
        "10. a[title=\"Cliquez ici\"]");
}



  
    (function() {
        emailjs.init("dia-yoSHGiyFUgcyN"); 
    })();

  
    function sendMail(event) {
        event.preventDefault(); 

        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        
        const serviceID = "service_eq41h7k";
        const templateID = "template_9ystcfg";

        
        emailjs.send(serviceID, templateID, params)
            .then(response => {
                alert("Email envoyé avec succès !");
            })
        
    }


    document.getElementById("contactForm").addEventListener("submit", sendMail);

