import {Character} from './character';

describe('Character', () => {
    let char: Character;

    beforeEach(() => {
        char = new Character();
    })

    it('should have no titles', () => {
        expect(char.titles.length).toEqual(0);
    })

     describe('when a character is created', () => {
         let char: Character;

         beforeEach(() => {
             char = new Character('Inigo Montoya', 'Inigo', ['swordsman', 'pepetone'],  'You killed my father, prepare to die' );
         });

         it('should hail the reader', () => {
             expect(char.iAm()).toContain(char.name);
         })

         it('should say their name', () => {
             expect(char.myNameIs()).toContain(char.name);
         })

         it('should prefix with short', () =>{
             expect(char.prefix()).toContain(char.short);
         })

         it('should return titles',() => {
             expect(char.listTitles()).toContain(char.titles[char.titles.length-1])
         })
     })
})