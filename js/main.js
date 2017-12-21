var Quiz = {
 questions: [
{
    text: 'Pick a word that best describes you',
	image:'images/superman_04.jpg',
    answers: [
       {
        text: 'Funny',
        value: 1
       }, {
        text: 'Protective',
        value: 2
        }, {
        text: 'Tough',
        value: 3
        }, {
        text: 'Honest',
        value: 4
        }, {
        text: 'Awesome',
        value: 5
        }, {
        text: 'Emotional',
        value: 6
        }]
}, {
text: 'Pick your enemy',
image: 'images/evil.jpg',
answers: [
    {
        text: 'Funny',
        value: 1
       }, {
        text: 'Annoying Professor',
        value: 2
        }, {
        text: 'Atheist',
        value: 3
        }, {
        text: 'Dumb person',
        value: 4
        }, {
        text: 'You know it all boss',
        value: 5
        }]
}, {
text: 'Would you like a sidekick?',
image:'images/sidekick.jpg',
answers: [
     {
        text: 'No, I work alone',
        value: 1
       }, {
        text: 'Sure it will be nice',
        value: 2
        }, {
        text: 'Only a sexy one',
        value: 3
        }, {
        text: 'Dumb person',
        value: 4
        }]
    }, {
text: 'Choose a musician',
answers: [
    {
    text: 'Ed Sheeran',
    value: 1
    },{
    text: 'Snoop Dogg',
    value: 2
    }, {
    text: 'Beyonce',
    value: 3
    }, {
    text:'Beethoven',
    value: 4
    }, {
    text: 'Freddie Mercury',
    value: 5
    }, {
    text: 'Bob Dylan',
    value: 6
    }]
    }, {
text: 'Choose a TV character',
answers: [
    {
    text: 'Castle',
    value: 1
    }, {
    text: 'Daenerys Targaryen',
    value: 2
    }, {
    text: 'Iron Man',
    value: 3
    }, {
    text: 'Peter Pan',
        value: 4
    }, {
    text: 'Gamora',
    value: 5
    }, {
    text: 'Captain Jack Sparrow',
    value: 6
    }]
    }
],
    start: function () {
    $('.intro').fadeOut(500, function() {
        this.updateQuestion();
        $('.question').fadeIn(500);
    }.bind(this));
},
    question_index: 0,
    answer_total: 0,
    
    updateQuestion:function() {
     var current_question = this.questions[this.question_index];
        this.showQuestion(current_question);
        this.showAnswers(current_question);
		this.showImage(current_question);
        
    }, 
    
    showQuestion:function(current_question) {
    $('.question h1').text(current_question.text);    
    },
    
    showAnswers: function(current_question){
    $('#answers').empty();
    current_question.answers.forEach(this.createAnswer, this);
    },
	
	showImage: function(current_question) {
		var img_el = $('.question img');
		img_el.attr('src', null);
		if(current_question.image) {
			img_el.attr('src', current_question.image);
			img_el.css('display', 'block');
		} else {
			img_el.hide();
		}
	},
		
    createAnswer: function(answer, index) {
     var container = $('<div class="answer"></div>');
     var radio = $('<input type="radio" name="answer" id="'+ index + '" value="' + answer.value + '"/>'); 
	 var label = $('<label for="' + index + '">' + answer.text + '</label>');
		radio.appendTo(container);
		label.appendTo(container);
		container.appendTo('#answers');
    },
	
	nextQuestion: function(){
		this.answer_total += parseInt($("input[type='radio']:checked").val());
		$('.question').fadeOut(500, function(){
		this.question_index++;
			this.updateQuestion();
			$('.question').fadeIn(500);
		}.bind(this));
	}
};

   


$(document).ready(function(){
    $('#start').click(function(){
        Quiz.start()
   });
	$('#next').click(function() {
	 Quiz.nextQuestion();
	})
});