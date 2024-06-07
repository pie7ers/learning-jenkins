module.exports = {
    add: (nums) => {
        return nums.reduce((accumulator, currentPosition) => accumulator + currentPosition)
    },
    sub: (nums) => {
        return nums.reduce((accumulator, currentPosition) => accumulator - currentPosition)
    },
    mul: (nums) => {
        return nums.reduce((accumulator, currentPosition) => accumulator * currentPosition)
    },
    div: (nums) => {
        return nums.reduce((accumulator, currentPosition) => accumulator / currentPosition)
    }
}