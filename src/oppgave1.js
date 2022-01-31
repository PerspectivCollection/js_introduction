const stringLong = "Katt er eit kjæledyr og rovdyr frå kattefamilien.Tamkatten (Felis silvestris catus) stammar frå villkatten, og er òg kjend som huskatt, pusekatt, kattepus og berre katt eller pus. Tamkatten har stundom gått under det latinske namnet Felis silvestris domesticus."
//sorce https://nn.wikipedia.org/wiki/Katt

const longWord = () => {

    let word = stringLong.split(" ");

    const longestWorld = word.sort((long1, long2) => {
        return long2.length - long1.length;
    });

    let countWord = 0;
    for (let i = 0; word.length > i; i++) {
        if (word[i].length > countWord) {
            countWord = word[i].length;
        }
        console.log(`The longest word is "${word[0]}"`);
    }
}
longWord();