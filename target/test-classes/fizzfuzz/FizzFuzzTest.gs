package fizzfuzz

uses org.junit.Assert
uses org.junit.Test

/**
 * Created by carlo_000 on 23/08/2017.
 */
class FizzFuzzTest {

  public static final var TERM_FIZZ: String = "fizz"
  public static final var TERM_FUZZ: String = "fuzz"
  public static final var TERM_FIZZFUZZ: String = "fizzfuzz"
  public static final var UNKNOWN: String = "Unknown"

  var _FizzFuzz = new FizzFuzz()

  @Test
  function getNextTermToPrint_WithIndexOne_ShouldReturn_One() {

    var nextTermToPrint = _FizzFuzz.getNextTermToPrint(1)

    Assert.assertEquals("1", nextTermToPrint)
  }

  @Test
  function getNextTermToPrint_WithIndexTwo_ShouldReturn_Two() {

    var nextTermToPrint = _FizzFuzz.getNextTermToPrint(2)

    Assert.assertEquals("2", nextTermToPrint)
  }

  @Test
  function getNextTermToPrint_WithIndexSix_ShouldReturn_Fizz() {

    var nextTermToPrint = _FizzFuzz.getNextTermToPrint(6)

    Assert.assertEquals(TERM_FIZZ, nextTermToPrint)
  }

  @Test
  function getNextTermToPrint_WithIndexTwenty_ShouldReturn_Fuzz() {

    var nextTermToPrint = _FizzFuzz.getNextTermToPrint(20)

    Assert.assertEquals(TERM_FUZZ, nextTermToPrint)
  }

  @Test
  function getNextTermToPrint_WithIndexThirty_ShouldReturn_Fuzz() {

    var nextTermToPrint = _FizzFuzz.getNextTermToPrint(30)

    Assert.assertEquals(TERM_FIZZFUZZ, nextTermToPrint)
  }

  @Test
  function getNextTermToPrint_WithIndexZero_ShouldReturn_Unknown() {

    var nextTermToPrint = _FizzFuzz.getNextTermToPrint(0)

    Assert.assertEquals(UNKNOWN, nextTermToPrint)
  }

  @Test
  function getNextTermToPrint_WithIndexAHundredAndOne_ShouldReturn_Unknown() {

    var nextTermToPrint = _FizzFuzz.getNextTermToPrint(101)

    Assert.assertEquals(UNKNOWN, nextTermToPrint)
  }

  @Test
  function printFizzFuzzNumbers_ShouldContain_FinalContent() {

    var fizzFuzzText = _FizzFuzz.getAndPrintFizzFuzzNumbers()

    Assert.assertTrue("FizzFuzzText should end with 98 fizz fuzz", fizzFuzzText.contains("98\nfizz\nfuzz\n"))
  }

}