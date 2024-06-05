document.addEventListener('DOMContentLoaded', function () {
    const bookList = [
        '자바스크립트 완벽 가이드',
        '클린 코드',
        '리팩토링',
        '코딩 인터뷰 완전 분석',
        '더글라스 애덤스의 은하수를 여행하는 히치하이커를 위한 안내서'
    ];

    const bookListElement = document.getElementById('book-list');
    bookList.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        bookListElement.appendChild(li);
    });

    const startGameButton = document.getElementById('start-game');
    const gameArea = document.getElementById('game-area');
    const gameMessage = document.getElementById('game-message');
    const userInput = document.getElementById('user-input');
    const submitAnswerButton = document.getElementById('submit-answer');

    startGameButton.addEventListener('click', function () {
        gameArea.style.display = 'block';
        gameMessage.textContent = '책 제목 맞추기 게임이 시작되었습니다!';
        userInput.value = '';
    });

    submitAnswerButton.addEventListener('click', function () {
        const userAnswer = userInput.value.trim();
        if (bookList.includes(userAnswer)) {
            gameMessage.textContent = '정답입니다!';
        } else {
            gameMessage.textContent = '틀렸습니다. 다시 시도해보세요.';
        }
        userInput.value = '';
    });
});
