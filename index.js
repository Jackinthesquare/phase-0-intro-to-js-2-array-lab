// Write your solution here!
    let cats = ['Milo', 'Otis', 'Garfield'];

    const destructivelyAppendCat = () => {
        return cats.push('Ralph');
    }

    const destructivelyPrependCat = () => {
        cats.unshift('Bob');
    }

    const destructivelyRemoveLastCat = () => {
        cats.pop()
    }

    const destructivelyRemoveFirstCat = () => {
        cats.shift()
    }

    const appendCat = () => {
        const newCats = [...cats,'Broom']
        return newCats
    }

    const prependCat = () => {
        const newCats = ['Arnold',...cats]
        return newCats
    }
    const removeLastCat = () => {
        const appendCat = [...cats]
        appendCat.pop()
        return appendCat
    }

    const removeFirstCat = () => {
        const newCats = [...cats]
        newCats.shift()
        return newCats
    }