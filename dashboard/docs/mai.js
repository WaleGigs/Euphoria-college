(function() {
    var questions = [{
        question: "What is 7-3?",
        choices: [0, 2, 4, 6, 8],
        correctAnswer: 2
    }, {
        question: "A sector ofo a circle has a radius of 7cm and a segment of 36cm2, <br> find the height of the circle.",
        choices: [1, 14, 3, 31, 131],
        correctAnswer: 1
    }, {
        question: "What is sum of two odd number 19+89?",
        choices: [108, 189, 19, 89, 1989],
        correctAnswer: 0
    }, {
        question: "which of the following is not a polygon?",
        choices: ["rectangle", "square", "prism", "circle", "orange"],
        correctAnswer: 4
    }, {
        question: "which of the following is the square root of 81",
        choices: [4, 10, 8, 9, 2],
        correctAnswer: 3
    }, {
        question: "Simplify the following equation (5+6)*10?",
        choices: [0, 01, 11, 10, 110],
        correctAnswer: 4
    }, {
        question: "What is the sum of interior angle of a regular polygon",
        choices: [90, 45, 0, -270, 180],
        correctAnswer:0
    }, {
        question: "evaluate 4+2(12x34/17-45/12)*0",
        choices: [4, 10, 40, 20, 0],
        correctAnswer: 4
    }];
    
    
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    
    // Display initial question
    displayNext();
    
    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
        e.preventDefault();
      
        // Suspend click listener during fade animation
        if(quiz.is(':animated')) {        
            return false;
        }
        choose();
      
        // If no user selection, progress is stopped
        if (isNaN(selections[questionCounter])) {
            alert('Please pick an option!');
            } else {
            questionCounter++;
            displayNext();
        }
    });
    
    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
        e.preventDefault();
      
        if(quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });
    
    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
        e.preventDefault();
      
        if(quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });
    
    // Animates buttons on hover
    $('.button').on('mouseenter', function () {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
        $(this).removeClass('active');
    });
    
    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });
      
        var header = $('<h2>Question ' + (index + 1) + ':</h2>');
        qElement.append(header);
      
        var question = $('<p class=" red">').append(questions[index].question);
        qElement.append(question);
      
        var radioButtons = createRadios(index);
        qElement.append(radioButtons);
      
        return qElement;
    }
    
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        var radioList = $('<div class="rew p-3 w-100 des  bg-white text-dark gap-md-4 d-block rounded my-3">');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<div class="ew  ">');
            input = '<div class="f container form-check-box"><input type="checkbox" class="form-check-input p-2" name="answer" value=' + i + ' /></div>';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }
    
    // Reads the user selection and pushes the value to an array
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function() {
            $('#question').remove();
            
            if(questionCounter < questions.length){
                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value='+selections[questionCounter]+']').prop('checked', true);
                }
          
                // Controls display of 'prev' button
                if(questionCounter === 1){
                    $('#prev').show();
                } else if(questionCounter === 0){
            
                    $('#prev').hide();
                    $('#next').show();
                }
            }else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }
    
    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        var score = $('<p>',{id: 'question'});
      
        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === questions[i].correctAnswer) {
                numCorrect++;
            }
        }
      
        score.append('You got ' + numCorrect + ' questions out of ' + questions.length + ' right!');
        return score;
    }
})();


