# Tic-Tac-Toe Game Application

A modern, interactive Tic-Tac-Toe web application with AI opponent, multiple difficulty levels, and comprehensive game features, developed as part of an internship project at **SkillCraft Technology**.

## 🚀 Features

### Game Modes
- **Player vs Player**: Classic two-player mode on the same device
- **Player vs Computer**: Single-player mode with intelligent AI opponent
- **Multiple Difficulty Levels**: Easy, Medium, and Hard AI opponents

### Intelligent AI System
- **Easy Mode**: Random but valid moves for casual gameplay
- **Medium Mode**: Strategic AI that blocks winning moves and creates opportunities
- **Hard Mode**: Minimax algorithm implementation for optimal, unbeatable gameplay

### User Experience
- **Modern UI Design**: Clean, responsive interface with smooth animations
- **Real-time Game State**: Live updates of game status and current player
- **Score Tracking**: Persistent scoreboard across multiple games
- **Game Statistics**: Track wins, losses, and draws over time
- **Theme Support**: Light and dark mode toggle
- **Mobile Responsive**: Optimized for both desktop and mobile devices

### Interactive Features
- **Visual Feedback**: Hover effects and smooth transitions
- **Winning Animation**: Highlighted winning combinations
- **Sound Effects**: Audio feedback for moves and game events (toggleable)
- **Game History**: Track recent games and outcomes
- **Quick Reset**: Easy game restart and mode switching

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and modern web standards
- **CSS3**: Advanced styling with Grid, Flexbox, and CSS animations
- **Vanilla JavaScript**: ES6+ classes and modern JavaScript features
- **Local Storage API**: Persistent data storage for scores and preferences
- **Component Architecture**: Modular, React-like component structure
- **Minimax Algorithm**: Advanced AI game theory implementation

## 📁 Project Structure

```
tic-tac-toe-game/
├── index.html          # Main HTML structure
├── style.css           # CSS styles and animations
├── app.js             # Game logic and AI implementation
└── README.md          # Project documentation
```

## 🎯 Getting Started

### Prerequisites

- Modern web browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- No additional dependencies or build tools required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe-game.git
   ```

2. **Navigate to project directory**
   ```bash
   cd tic-tac-toe-game
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or serve using a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js live-server  
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Start Playing**
   - Choose your preferred game mode
   - Select difficulty level (for computer mode)
   - Click on any cell to make your move!

## 🎮 How to Play

### Basic Gameplay
1. **Select Game Mode**: Choose between Player vs Player or Player vs Computer
2. **Choose Difficulty**: For computer mode, select Easy, Medium, or Hard
3. **Make Moves**: Click on empty cells to place your symbol (X or O)
4. **Win Condition**: Get three of your symbols in a row (horizontal, vertical, or diagonal)
5. **Game End**: Game ends when someone wins or all cells are filled (draw)

### Game Controls
- **Click**: Make a move on the game board
- **New Game**: Start a fresh game with current settings  
- **Reset Score**: Clear all statistics and start over
- **Change Mode**: Return to menu to select different game mode
- **Theme Toggle**: Switch between light and dark themes

### AI Difficulty Levels

**Easy Mode** 🟢
- Makes random valid moves
- Perfect for beginners and casual play
- Provides opportunities to win consistently

**Medium Mode** 🟡  
- Uses basic game strategy
- Blocks obvious winning moves
- Creates winning opportunities when possible
- Good balance of challenge and winnable games

**Hard Mode** 🔴
- Implements minimax algorithm
- Plays optimally every turn
- Nearly impossible to beat (best case is a draw)
- Perfect for experienced players seeking maximum challenge

## 🧠 AI Implementation Details

The AI system uses different strategies based on difficulty:

### Easy AI
```javascript
// Random move selection from available cells
const randomMove = () => {
  const emptyCells = board.filter(cell => cell === '');
  return emptyCells[Math.floor(Math.random() * emptyCells.length)];
};
```

### Medium AI
```javascript  
// Strategic move selection with basic game theory
const mediumAI = () => {
  // 1. Try to win if possible
  // 2. Block opponent's winning moves
  // 3. Take center if available
  // 4. Take corners
  // 5. Take edges
};
```

### Hard AI (Minimax)
```javascript
// Minimax algorithm for optimal play
const minimax = (board, depth, isMaximizing) => {
  // Recursively evaluates all possible game states
  // Returns the optimal move with highest score
  // Guarantees best possible outcome for AI
};
```

## 🎨 Customization

### Themes
Toggle between light and dark themes using the theme button. Preferences are automatically saved to local storage.

### Colors  
Modify the CSS custom properties in `style.css`:
```css
:root {
  --color-primary: #3b82f6;      /* Player X color */
  --color-secondary: #ef4444;    /* Player O color */
  --color-success: #10b981;      /* Win highlight */
  --color-background: #f8fafc;   /* Background color */
}
```

### AI Behavior
Adjust AI difficulty parameters in `app.js`:
```javascript
const AI_CONFIG = {
  easyRandomness: 0.8,    // 80% random moves
  mediumLookahead: 2,     // Look 2 moves ahead
  hardDepth: 9            // Full game tree depth
};
```

## 📱 Browser Support

- ✅ Chrome 60+ (Recommended)
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Implementation

### Game State Management
- Centralized state using JavaScript classes
- Immutable game state updates
- Event-driven architecture for UI updates

### Performance Optimizations
- Efficient DOM manipulation with minimal reflows
- Cached DOM element references
- Optimized AI computation with alpha-beta pruning (hard mode)
- Smooth 60fps animations using CSS transitions

### Data Persistence
- Local storage for game statistics
- Theme preferences persistence
- Game history tracking
- Graceful fallback for storage-disabled browsers

### Code Architecture
```
GameState Class
├── Board management
├── Move validation
├── Win condition checking
└── Score tracking

AI Engine
├── Difficulty-based strategy selection
├── Minimax algorithm implementation
├── Game tree evaluation
└── Optimal move calculation

UI Controller
├── DOM event handling
├── Visual state updates
├── Animation management
└── Theme switching
```

## 🎪 Use Cases

This Tic-Tac-Toe game is perfect for:

- **Educational**: Learning game theory and AI algorithms
- **Entertainment**: Casual gaming and friendly competition  
- **Development**: Code example for game development patterns
- **Portfolio**: Demonstration of JavaScript and AI implementation skills
- **Practice**: Algorithm understanding and strategic thinking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with proper testing
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines

- Follow ES6+ JavaScript standards
- Maintain mobile-first responsive design
- Test across multiple browsers and devices
- Keep accessibility in mind (ARIA labels, keyboard navigation)
- Document any new AI algorithms or game logic

## 🐛 Known Issues & Roadmap

### Current Limitations
- Single device multiplayer only
- No online multiplayer support
- Limited sound effect options

### Planned Features
- [ ] Online multiplayer with WebSocket
- [ ] Tournament mode with bracket system
- [ ] Advanced AI personalities with different play styles
- [ ] Game replay system with move history
- [ ] Custom board sizes (4x4, 5x5)
- [ ] Achievement system and unlockables
- [ ] Enhanced visual effects and animations

## 📊 Game Statistics

The application tracks comprehensive statistics:

- **Win/Loss Ratio**: Track performance against AI and other players
- **Difficulty Performance**: Success rate against different AI levels
- **Game Duration**: Average time per game
- **Move Patterns**: Most common opening moves and strategies

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **SkillCraft Technology** - For providing the internship opportunity and project guidance
- **John von Neumann** - For the minimax algorithm and game theory foundations
- **Claude Shannon** - For early work on game-playing algorithms
- **MDN Web Docs** - For comprehensive web development documentation
- **Game Theory Literature** - For strategic gameplay implementations

## 📞 Contact & Support

**Internship Project at SkillCraft Technology**

- Project Type: Frontend Development & AI Implementation
- Company: SkillCraft Technology
- Focus Areas: JavaScript, Game Development, Artificial Intelligence, Algorithm Implementation
- Technologies: HTML5, CSS3, Vanilla JavaScript, Minimax Algorithm, Local Storage API

For questions about this project, AI implementation details, or internship opportunities at SkillCraft Technology, please reach out through appropriate channels.

## 🎯 Learning Outcomes

This project demonstrates proficiency in:

- **Game Development**: Complete game logic implementation
- **Artificial Intelligence**: Minimax algorithm and strategic AI
- **User Interface Design**: Modern, responsive web interfaces  
- **State Management**: Complex application state handling
- **Algorithm Implementation**: Advanced computer science algorithms
- **Performance Optimization**: Efficient code and smooth user experience

---

**Built with 🧠 and ❤️ during internship at SkillCraft Technology**

*Ready to challenge the unbeatable AI? Good luck! 🎮*