// Game Data from JSON
const gameData = {
  "gameSettings": {
    "boardSize": 3,
    "winConditions": [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6]
    ],
    "players": {
      "X": {"symbol": "X", "color": "#e74c3c"},
      "O": {"symbol": "O", "color": "#3498db"}
    }
  },
  "aiConfig": {
    "easy": {"delay": 800, "randomness": 1.0},
    "medium": {"delay": 1000, "randomness": 0.3},
    "hard": {"delay": 1200, "randomness": 0.0}
  },
  "uiMessages": {
    "playerXTurn": "Player X's Turn",
    "playerOTurn": "Player O's Turn", 
    "aiTurn": "AI is thinking...",
    "playerXWins": "Player X Wins!",
    "playerOWins": "Player O Wins!",
    "aiWins": "AI Wins!",
    "draw": "It's a Draw!"
  }
};

// Main Game Class
class TicTacToeGame {
  constructor() {
    console.log('Initializing Tic-Tac-Toe Game');
    
    // Game state
    this.gameMode = 'pvp'; // 'pvp' or 'pvc'
    this.difficulty = 'medium';
    this.currentPlayer = 'X';
    this.isGameActive = false;
    this.isAITurn = false;
    this.board = Array(9).fill(null);
    
    // Score tracking
    this.scores = {
      X: 0,
      O: 0
    };
    
    // Initialize after DOM is ready
    this.initializeElements();
    this.setupEventListeners();
    
    console.log('Game initialized successfully');
  }

  initializeElements() {
    console.log('Initializing DOM elements');
    
    // Screens
    this.welcomeScreen = document.getElementById('welcome-screen');
    this.difficultyScreen = document.getElementById('difficulty-screen');
    this.gameScreen = document.getElementById('game-screen');
    
    // Buttons
    this.pvpBtn = document.getElementById('pvp-btn');
    this.pvcBtn = document.getElementById('pvc-btn');
    this.easyBtn = document.getElementById('easy-btn');
    this.mediumBtn = document.getElementById('medium-btn');
    this.hardBtn = document.getElementById('hard-btn');
    this.backToWelcomeBtn = document.getElementById('back-to-welcome');
    this.backToMenuBtn = document.getElementById('back-to-menu');
    this.newGameBtn = document.getElementById('new-game-btn');
    this.resetScoreBtn = document.getElementById('reset-score-btn');
    
    // Game elements
    this.gameBoard = document.getElementById('game-board');
    this.boardCells = document.querySelectorAll('.board-cell');
    this.currentPlayerDisplay = document.getElementById('current-player');
    this.scoreX = document.getElementById('score-x');
    this.scoreO = document.getElementById('score-o');
    this.playerOLabel = document.getElementById('player-o-label');
    
    // Modal elements
    this.resultModal = document.getElementById('result-modal');
    this.resultIcon = document.getElementById('result-icon');
    this.resultTitle = document.getElementById('result-title');
    this.resultMessage = document.getElementById('result-message');
    this.playAgainBtn = document.getElementById('play-again-btn');
    this.mainMenuBtn = document.getElementById('main-menu-btn');
    
    // Debug log all elements
    console.log('PvP Button:', this.pvpBtn);
    console.log('PvC Button:', this.pvcBtn);
    console.log('Board cells:', this.boardCells.length);
    
    console.log('DOM elements initialized');
  }

  setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Mode selection buttons with proper event handling
    if (this.pvpBtn) {
      this.pvpBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('PvP button clicked');
        this.selectPvPMode();
      };
    }
    
    if (this.pvcBtn) {
      this.pvcBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('PvC button clicked');
        this.selectPvCMode();
      };
    }
    
    // Difficulty buttons
    if (this.easyBtn) {
      this.easyBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.selectDifficulty('easy');
      };
    }
    
    if (this.mediumBtn) {
      this.mediumBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.selectDifficulty('medium');
      };
    }
    
    if (this.hardBtn) {
      this.hardBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.selectDifficulty('hard');
      };
    }
    
    // Navigation buttons
    if (this.backToWelcomeBtn) {
      this.backToWelcomeBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.showWelcomeScreen();
      };
    }
    
    if (this.backToMenuBtn) {
      this.backToMenuBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.showWelcomeScreen();
      };
    }
    
    // Game control buttons
    if (this.newGameBtn) {
      this.newGameBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.startNewGame();
      };
    }
    
    if (this.resetScoreBtn) {
      this.resetScoreBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.resetScore();
      };
    }
    
    // Board cells with proper event handling
    this.boardCells.forEach((cell, index) => {
      if (cell) {
        cell.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log(`Cell ${index} clicked`);
          this.handleCellClick(index);
        };
      }
    });
    
    // Modal buttons
    if (this.playAgainBtn) {
      this.playAgainBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideModal();
        this.startNewGame();
      };
    }
    
    if (this.mainMenuBtn) {
      this.mainMenuBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideModal();
        this.showWelcomeScreen();
      };
    }
    
    console.log('Event listeners set up successfully');
  }

  // Mode Selection Methods
  selectPvPMode() {
    console.log('Player vs Player mode selected');
    this.gameMode = 'pvp';
    this.showGameScreen();
  }

  selectPvCMode() {
    console.log('Player vs Computer mode selected');
    this.gameMode = 'pvc';
    this.showDifficultyScreen();
  }

  // Screen Navigation
  showWelcomeScreen() {
    console.log('Showing welcome screen');
    this.hideAllScreens();
    if (this.welcomeScreen) {
      this.welcomeScreen.classList.add('active');
    }
  }

  showDifficultyScreen() {
    console.log('Showing difficulty screen');
    this.hideAllScreens();
    if (this.difficultyScreen) {
      this.difficultyScreen.classList.add('active');
    }
  }

  showGameScreen() {
    console.log('Showing game screen');
    this.hideAllScreens();
    if (this.gameScreen) {
      this.gameScreen.classList.add('active');
    }
    this.updatePlayerOLabel();
    this.startNewGame();
  }

  hideAllScreens() {
    if (this.welcomeScreen) this.welcomeScreen.classList.remove('active');
    if (this.difficultyScreen) this.difficultyScreen.classList.remove('active');
    if (this.gameScreen) this.gameScreen.classList.remove('active');
  }

  selectDifficulty(difficulty) {
    console.log(`Difficulty selected: ${difficulty}`);
    this.difficulty = difficulty;
    this.showGameScreen();
  }

  updatePlayerOLabel() {
    if (this.playerOLabel) {
      if (this.gameMode === 'pvc') {
        this.playerOLabel.textContent = 'AI';
      } else {
        this.playerOLabel.textContent = 'Player O';
      }
    }
  }

  // Game Logic
  startNewGame() {
    console.log('Starting new game');
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.isGameActive = true;
    this.isAITurn = false;
    
    // Clear board display
    this.boardCells.forEach(cell => {
      if (cell) {
        cell.textContent = '';
        cell.className = 'board-cell';
      }
    });
    
    // Update UI
    this.updateCurrentPlayerDisplay();
    if (this.gameBoard) {
      this.gameBoard.classList.remove('disabled');
    }
    
    console.log('New game started successfully');
  }

  handleCellClick(index) {
    console.log(`Cell ${index} clicked - Game active: ${this.isGameActive}, Cell empty: ${!this.board[index]}, AI turn: ${this.isAITurn}`);
    
    // Check if game is active and cell is empty
    if (!this.isGameActive || this.board[index] || this.isAITurn) {
      console.log('Invalid move - game inactive, cell occupied, or AI turn');
      return;
    }
    
    // Make the move
    this.makeMove(index, this.currentPlayer);
    
    // Check for game end
    if (this.checkGameEnd()) {
      return;
    }
    
    // Switch player and handle AI turn
    this.switchPlayer();
    
    if (this.gameMode === 'pvc' && this.currentPlayer === 'O') {
      this.handleAITurn();
    }
  }

  makeMove(index, player) {
    console.log(`Making move: ${player} at position ${index}`);
    
    this.board[index] = player;
    const cell = this.boardCells[index];
    if (cell) {
      cell.textContent = player;
      cell.classList.add(player.toLowerCase());
      cell.classList.add('occupied');
    }
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.updateCurrentPlayerDisplay();
    console.log(`Switched to player: ${this.currentPlayer}`);
  }

  updateCurrentPlayerDisplay() {
    if (!this.currentPlayerDisplay) return;
    
    if (this.gameMode === 'pvc' && this.currentPlayer === 'O') {
      this.currentPlayerDisplay.textContent = gameData.uiMessages.aiTurn;
      this.currentPlayerDisplay.className = 'status-display ai-thinking';
    } else if (this.currentPlayer === 'X') {
      this.currentPlayerDisplay.textContent = gameData.uiMessages.playerXTurn;
      this.currentPlayerDisplay.className = 'status-display x-turn';
    } else {
      this.currentPlayerDisplay.textContent = gameData.uiMessages.playerOTurn;
      this.currentPlayerDisplay.className = 'status-display o-turn';
    }
  }

  // AI Logic
  handleAITurn() {
    if (!this.isGameActive || this.currentPlayer !== 'O') return;
    
    console.log('AI turn starting');
    this.isAITurn = true;
    if (this.gameBoard) {
      this.gameBoard.classList.add('disabled');
    }
    
    const aiConfig = gameData.aiConfig[this.difficulty];
    
    setTimeout(() => {
      if (!this.isGameActive) return;
      
      const move = this.getAIMove();
      console.log(`AI selected move: ${move}`);
      
      if (move !== -1 && this.isGameActive) {
        this.makeMove(move, 'O');
        
        if (!this.checkGameEnd()) {
          this.switchPlayer();
        }
      }
      
      this.isAITurn = false;
      if (this.gameBoard) {
        this.gameBoard.classList.remove('disabled');
      }
      
      console.log('AI turn completed');
    }, aiConfig.delay);
  }

  getAIMove() {
    if (this.difficulty === 'easy') {
      return this.getRandomMove();
    } else if (this.difficulty === 'medium') {
      // 70% smart moves, 30% random
      return Math.random() < 0.7 ? this.getSmartMove() : this.getRandomMove();
    } else {
      // Hard - always smart moves
      return this.getSmartMove();
    }
  }

  getRandomMove() {
    const emptyCells = this.board
      .map((cell, index) => cell === null ? index : null)
      .filter(index => index !== null);
    
    if (emptyCells.length === 0) return -1;
    
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
  }

  getSmartMove() {
    // 1. Try to win
    let move = this.findWinningMove('O');
    if (move !== -1) return move;
    
    // 2. Block player from winning
    move = this.findWinningMove('X');
    if (move !== -1) return move;
    
    // 3. Take center if available
    if (this.board[4] === null) return 4;
    
    // 4. Take corners
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(i => this.board[i] === null);
    if (availableCorners.length > 0) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }
    
    // 5. Take any available side
    const sides = [1, 3, 5, 7];
    const availableSides = sides.filter(i => this.board[i] === null);
    if (availableSides.length > 0) {
      return availableSides[Math.floor(Math.random() * availableSides.length)];
    }
    
    // Fallback to random move
    return this.getRandomMove();
  }

  findWinningMove(player) {
    for (let condition of gameData.gameSettings.winConditions) {
      const [a, b, c] = condition;
      const positions = [this.board[a], this.board[b], this.board[c]];
      
      // Check if two positions have the player and one is empty
      if (positions.filter(p => p === player).length === 2 && 
          positions.filter(p => p === null).length === 1) {
        
        if (this.board[a] === null) return a;
        if (this.board[b] === null) return b;
        if (this.board[c] === null) return c;
      }
    }
    return -1;
  }

  // Game End Logic
  checkGameEnd() {
    const winner = this.checkWinner();
    
    if (winner) {
      console.log(`Game won by: ${winner}`);
      this.handleGameWin(winner);
      return true;
    }
    
    if (this.checkDraw()) {
      console.log('Game is a draw');
      this.handleGameDraw();
      return true;
    }
    
    return false;
  }

  checkWinner() {
    for (let condition of gameData.gameSettings.winConditions) {
      const [a, b, c] = condition;
      
      if (this.board[a] && 
          this.board[a] === this.board[b] && 
          this.board[a] === this.board[c]) {
        
        // Highlight winning cells
        if (this.boardCells[a]) this.boardCells[a].classList.add('winning');
        if (this.boardCells[b]) this.boardCells[b].classList.add('winning');
        if (this.boardCells[c]) this.boardCells[c].classList.add('winning');
        
        return this.board[a];
      }
    }
    return null;
  }

  checkDraw() {
    return this.board.every(cell => cell !== null);
  }

  handleGameWin(winner) {
    this.isGameActive = false;
    this.scores[winner]++;
    this.updateScoreDisplay();
    
    let title, message, iconClass;
    
    if (winner === 'X') {
      title = gameData.uiMessages.playerXWins;
      message = 'Congratulations! X wins this round.';
      iconClass = 'win';
    } else if (this.gameMode === 'pvc') {
      title = gameData.uiMessages.aiWins;
      message = 'AI wins this round. Better luck next time!';
      iconClass = 'lose';
    } else {
      title = gameData.uiMessages.playerOWins;
      message = 'Congratulations! O wins this round.';
      iconClass = 'win';
    }
    
    this.showModal(title, message, iconClass, winner);
  }

  handleGameDraw() {
    this.isGameActive = false;
    this.showModal(gameData.uiMessages.draw, 'No winner this time. Try again!', 'draw', '=');
  }

  updateScoreDisplay() {
    if (this.scoreX) this.scoreX.textContent = this.scores.X;
    if (this.scoreO) this.scoreO.textContent = this.scores.O;
  }

  resetScore() {
    console.log('Resetting scores');
    this.scores.X = 0;
    this.scores.O = 0;
    this.updateScoreDisplay();
  }

  // Modal Management
  showModal(title, message, iconClass, winner) {
    if (this.resultTitle) this.resultTitle.textContent = title;
    if (this.resultMessage) this.resultMessage.textContent = message;
    if (this.resultIcon) {
      this.resultIcon.className = `result-icon ${iconClass}`;
      this.resultIcon.textContent = winner === '=' ? '=' : winner;
    }
    
    if (this.resultModal) {
      this.resultModal.classList.remove('hidden');
    }
  }

  hideModal() {
    if (this.resultModal) {
      this.resultModal.classList.add('hidden');
    }
  }
}

// Global game instance
let game = null;

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing game');
  try {
    game = new TicTacToeGame();
    console.log('Game instance created successfully');
  } catch (error) {
    console.error('Error initializing game:', error);
  }
});

// Error handling
window.addEventListener('error', (event) => {
  console.error('Game error:', event.error);
});

console.log('Tic-Tac-Toe game script loaded');