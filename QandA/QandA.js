function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function loadQuestions() {
    const predefinedQuestions = [
        { question: "สั่งยังไง ", answer: "สามารถสั่งผ่านเว็บไซต์ หรือไลน์ได้ค่ะ" },
        { question: "จ่ายทางไหนได้บ้าง ", answer: "รับชำระผ่านธนาคาร, พร้อมเพย์, และบัตรเครดิตค่ะ" },
        { question: "มีคอมมิสชั่นไหม ", answer: "คอมมิสชั่นสามารถต่อรองได้ตามความเหมาะสมค่ะ" },
        { question: "ใช้เชิงพานิชได้ป่าว", answer: "สามารถใช้ในเชิงพาณิชย์ได้หลังจากตกลงเงื่อนไขค่ะ" }
    ];

    const questionList = document.getElementById('question-list');
    questionList.innerHTML = '';

    predefinedQuestions.forEach((item, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `Q${index + 1}: ${item.question}`;
        questionCard.appendChild(questionTitle);

        const preAnswer = document.createElement('p');
        preAnswer.textContent = `A: ${item.answer}`;
        questionCard.appendChild(preAnswer);

        const commentSection = document.createElement('div');
        commentSection.className = 'comment-section';

        const commentsDiv = document.createElement('div');
        commentsDiv.className = 'comments';
        commentSection.appendChild(commentsDiv);

        const commentInput = document.createElement('textarea');
        commentInput.placeholder = 'Write an answer...';
        commentInput.rows = 2;
        commentInput.className = 'comment-input';
        commentSection.appendChild(commentInput);

        const submitBtn = document.createElement('button');
        submitBtn.className = 'submit-button';
        submitBtn.textContent = 'Submit';
        submitBtn.onclick = function() {
            const commentText = commentInput.value;
            if (!commentText.trim()) return;

            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';

            const username = document.createElement('span');
            username.className = 'username';
            username.textContent = 'User';
            commentDiv.appendChild(username);

            const text = document.createElement('p');
            text.className = 'comment-text';
            text.textContent = commentText;
            commentDiv.appendChild(text);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '&times;';
            deleteBtn.onclick = function() {
                commentDiv.remove();
            };
            commentDiv.appendChild(deleteBtn);
            commentsDiv.appendChild(commentDiv);
            commentInput.value = '';
        };

        commentSection.appendChild(submitBtn);
        questionCard.appendChild(commentSection);
        questionList.appendChild(questionCard);
    });
}

function addNewQuestion() {
    const newQuestionInput = document.getElementById('newQuestionInput');
    const newQuestion = newQuestionInput.value.trim();

    // Check if the input is not empty
    if (newQuestion) {
        // Create a new question card
        const questionList = document.getElementById('question-list');
        const questionIndex = questionList.children.length + 1;  // Increment question number
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';

        // Create the question title
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `Q${questionIndex}: ${newQuestion}`;
        questionCard.appendChild(questionTitle);

        // Create a comment section
        const commentSection = document.createElement('div');
        commentSection.className = 'comment-section';

        const commentsDiv = document.createElement('div');
        commentsDiv.className = 'comments';
        commentSection.appendChild(commentsDiv);

        const commentInput = document.createElement('textarea');
        commentInput.placeholder = 'Write an answer...';
        commentInput.rows = 2;
        commentInput.className = 'comment-input';
        commentSection.appendChild(commentInput);

        const submitBtn = document.createElement('button');
        submitBtn.className = 'submit-button';
        submitBtn.textContent = 'Submit';
        submitBtn.onclick = function() {
            const commentText = commentInput.value.trim();
            if (!commentText) return;

            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';

            const username = document.createElement('span');
            username.className = 'username';
            username.textContent = 'User';
            commentDiv.appendChild(username);

            const text = document.createElement('p');
            text.className = 'comment-text';
            text.textContent = commentText;
            commentDiv.appendChild(text);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '&times;';
            deleteBtn.onclick = function() {
                commentDiv.remove();
            };
            commentDiv.appendChild(deleteBtn);
            commentsDiv.appendChild(commentDiv);
            commentInput.value = '';  // Clear input field after submission
        };

        commentSection.appendChild(submitBtn);
        questionCard.appendChild(commentSection);

        // Add the new question card to the question list
        questionList.appendChild(questionCard);

        // Clear the input field after adding the question
        newQuestionInput.value = '';
    } else {
        alert('Please enter a valid question.');
    }
}

function addComment(section) {
    const reviewInput = document.getElementById('reviewInput');
    const commentText = reviewInput.value.trim();
    if (!commentText) return;

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';

    const username = document.createElement('span');
    username.className = 'username';
    username.textContent = document.getElementById('profileName').value || 'Anonymous';
    commentDiv.appendChild(username);

    const text = document.createElement('p');
    text.className = 'comment-text';
    text.textContent = commentText;
    commentDiv.appendChild(text);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;';
    deleteBtn.onclick = function() {
        commentDiv.remove();
    };
    commentDiv.appendChild(deleteBtn);

    // Append the new comment to the review comments section
    document.getElementById('comments-review').appendChild(commentDiv);

    // Clear the review input field after submission
    reviewInput.value = '';
}

// Initial load of Q&A section
loadQuestions();

// Set default section to Q&A
showSection('qna');