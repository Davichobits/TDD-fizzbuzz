// function that returns 'fizz' if the number is divisible by 3, 'buzz' if the number is divisible by 5, 'fizzbuzz' if the number is divisible by 3 and 5, or the number if it is not divisible by 3 or 5
export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')
  // if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz'
  // if (number % 3 === 0) return 'fizz'
  // if (number % 5 === 0) return 'buzz'
  // return number

  const multiples = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object
    .entries(multiples)
    .forEach(([multiple, word]) => {
      if (number % multiple === 0) output += word
    })
  return output === '' ? number : output
}
