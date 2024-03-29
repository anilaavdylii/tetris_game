export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0', name:''},
  I: {
    shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]],
    color: '0, 255, 255', name: 'I'
  },
  J: { shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]], color: '0, 0, 255', name: 'J' },
  L: {
    shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']],
    color: '	255, 165, 0',
    name: 'L'
  },
  O: { shape: [['O', 'O'], ['O', 'O']], color: '255,255,0', name: 'O' },
  S: { shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]], color: '42, 173, 42', name: 'S'},
  T: {
    shape: [[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]],
    color: '160, 32, 240',
    name: 'T'
  },
  Z: { shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]], color: '255,0,0', name: 'Z'},
};

export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};


// /cyan I, yellow O, purple T, green S, blue J, red Z and orange L.