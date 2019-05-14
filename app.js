const cards = [
  {
    front: 'The "First Computer Programmer"',
    back: 'Ada Lovelace',
    flipped: false,
  },
  {
    front: 'Invented the "Clarke Calculator"',
    back: 'Edith Clarke',
    flipped: false,

  },
  {
    front: 'Famous World War II Enigma code breaker',
    back: 'Alan Turing',
    flipped: false,
  },
  {
    front: 'Created satellite orbit analyzation software for NASA',
    back: 'Dr. Evelyn Boyd Granville',
    flipped: false,
  },
];

let isNull = function(str) {
  return str === null || str.match(/^ *$/) !== null;
}

new Vue({
  el: '#flashcard-app',
  data: {
    cards: cards,
    newFront:'',
    newBack:'',
    error:false
  },
  methods: {
    toggleCard: function(card) {
      card.flipped = !card.flipped      
    },
    insertCard: function() {
      let front = this.newFront;
      let back = this.newBack;

      if(!isNull(front) && !isNull(back)) {
        cards.push({
          front,
          back,
          flipped: false
        });

        this.newFront = '';
        this.newBack = '';
        this.error = false;
      } else {
        this.error = true;
      }

    },
    deleteCard: function(index) {
      cards.splice(index,1);
    }
  }
});