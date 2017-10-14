package fizzbuzz

/**
 * Created by carlo_000 on 23/08/2017.
 */
class FizzBuzz {

  public static final var TERM_FIZZ: String = "fizz"
  public static final var TERM_BUZZ: String = "buzz"
  public static final var TERM_FIZZBUZZ: String = "fizzbuzz"
  public static final var TERM_UNKNOWN: String = "Unknown"

  function getAndPrintFizzFuzzNumbers() : String {
    var fizzFuzzNumbers = getFizzFuzzNumbers()
    print(fizzFuzzNumbers)
    return fizzFuzzNumbers
  }

  function getNextTermToPrint(number : int) : String {

    if (isNumberUnknown(number)) {
      return TERM_UNKNOWN
    }

    if (isMultipleOfThree(number) and isMultipleOfFive(number)) {
      return TERM_FIZZBUZZ
    }

    if (isMultipleOfThree(number)) {
      return TERM_FIZZ
    }

    if (isMultipleOfFive(number)) {
      return TERM_BUZZ
    }

    return String.valueOf(number)
  }

  private function isNumberUnknown(number : int): boolean {
    return number < 1 or number > 100
  }

  private function isMultipleOfFive(number: int): boolean {
    return isMultipleOf(number, 5)
  }

  private function isMultipleOfThree(number : int): boolean {
    return isMultipleOf(number, 3)
  }

  private function isMultipleOf(number: int, divisor: int): boolean {
    return number % divisor == 0
  }


  function getFizzFuzzNumbers() : String {

    var fizzFuzzText = new StringBuffer()
    for (number in 1..100) {
      fizzFuzzText.append(getNextTermToPrint(number)).append("\n")
    }
    return fizzFuzzText.toString()
  }
}