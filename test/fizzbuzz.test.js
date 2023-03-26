import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a specific error message if not number is provider as parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
  })

  it('should throw a specific error message if not a number is provider', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
  })

  it('should 1 if the number is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should 2 if the number is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return fizz if the number entered is multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
  })

  it('should return buzz if the number entered is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return fizzbuzz if the number entered is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
    expect(fizzbuzz(45)).toBe('fizzbuzz')
  })
})
