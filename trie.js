import _ from 'lodash';

function trie() {
    let _contents = {};

    function add(word) {
        if (find(word)) return;

        const letters = word.split('');
        const firstLetter = letters[0];
        let current = _contents;

        letters.forEach((letter, index) => {
            if(index === word.length - 1){
                if(typeof current[letter] === 'object'){
                    return current[letter]['$'] = 1;
                }

                return current[letter] = 1;
            }

            // if it's a leaf, transform it into an object
            if (current[letter] === 1){
                current[letter] = {$: 1};
            } else if(!current[letter]){
                current[letter] = {};
            }

            current = current[letter];
        });
    }

    function remove(word) {}

    function find(word) {}

    function getContents() {
        return _contents;
    }

    return {
        add, remove, find, getContents
    };
};

const dictionary = trie();
dictionary.add('world');
dictionary.add('he');
dictionary.add('hell');
dictionary.add('hello');

console.log(JSON.stringify(dictionary.getContents()));
