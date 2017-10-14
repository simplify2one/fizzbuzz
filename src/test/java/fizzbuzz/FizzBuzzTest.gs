package fizzbuzz

uses org.junit.Assert
uses org.junit.Test

/**
 * Created by carlo_000 on 23/08/2017.
 */
class FizzBuzzTest {

  public static final var TERM_FIZZ: String = "fizz"
  public static final var TERM_BUZZ: String = "buzz"
  public static final var TERM_FIZZBUZZ: String = TERM_FIZZ + TERM_BUZZ
  public static final var UNKNOWN: String = "Unknown"

  var _FizzBuzz = new FizzBuzz()

  @Test
  function getNextTermToPrint_WithIndexOne_ShouldReturn_One() {

    var nextTermToPrint = _FizzBuzz.getNextTermToPrint(1)

    Assert.assertEquals("1", nextTermToPrint)
  }

  @Test
  function getNextTermToPrint_WithIndexTwo_ShouldReturn_Two() {

    var nextTermToPrint = _FizzBuzz.getNextTermToPrint(2)

    Assert.assertEquals("2", nextTermToPrint)
  }

  @Test
  function getNextTermToPrint_WithIndexSix_ShouldReturn_Fizz() {

    var nextTermToPrint = _FizzBuzz.getNextTermToPrint(6)

    Assert.assertEquals(TERM_FIZZ, nextTermToPrint)
  }

  @Test
  function getNextTermToPrint_WithIndexTwenty_ShouldReturn_Fuzz() {

    var nextTermToPrint = _FizzBuzz.getNextTermToPrint(20)

    Assert.assertEquals(TERM_BUZZ, nextTermToPrint)
  }

  @Test
  function getNextTermToPrint_WithIndexThirty_ShouldReturn_Fuzz() {

    var nextTermToPrint = _FizzBuzz.getNextTermToPrint(30)

    Assert.assertEquals(TERM_FIZZBUZZ, nextTermToPrint)
  }

  @Test
  function getNextTermToPrint_WithIndexZero_ShouldReturn_Unknown() {

    var nextTermToPrint = _FizzBuzz.getNextTermToPrint(0)

    Assert.assertEquals(UNKNOWN, nextTermToPrint)
  }

  @Test
  function getNextTermToPrint_WithIndexAHundredAndOne_ShouldReturn_Unknown() {

    var nextTermToPrint = _FizzBuzz.getNextTermToPrint(101)

    Assert.assertEquals(UNKNOWN, nextTermToPrint)
  }

  @Test
  function printFizzFuzzNumbers_ShouldContain_FinalContent() {

    var fizzFuzzText = _FizzBuzz.getAndPrintFizzFuzzNumbers()

    Assert.assertTrue("Text should end with 98 ${TERM_FIZZ} ${TERM_BUZZ}", fizzFuzzText.contains("98\n${TERM_FIZZ}\n${TERM_BUZZ}\n"))
  }

}